/*
 * desk-props.js - maker bits scattered on the desk, purely for looks: a Raspberry Pi 4 and an ESP32 dev board
 * on a half-size breadboard, with a few jumper wires between them.
 *
 * Built from boxes and drawn canvas textures (no model files). Sizes are the real boards' in millimetres,
 * scaled by PROP_SCALE like the business cards so they read from the desk view.
 */

const MM = 0.001;
const PROP_SCALE = 1.5;
const S = MM * PROP_SCALE;
/* Silkscreen / hole-grid textures are drawn at this many pixels per millimetre. */
const PX_PER_MM = 10;
const PIN_PITCH = 2.54;

const COLOURS = {
  piBoard: '#1d6b3c', piTrace: '#2b8a52', silk: '#f2f2ea', metal: 0xc9ccd1, chip: 0x1b1b1d, header: 0x141414, gold: 0xd4af37,
  espBoard: '#16181b', breadboard: '#efebe1', hole: '#3a3a3a', railRed: '#d8372f', railBlue: '#2f62c9',
  ledRed: 0xff3b2f, ledBlue: 0x3d8bff, audio: 0x111111,
};
const WIRE_COLOURS = [0xd8372f, 0x1c1c1c, 0xe8b923];
const WIRE_RADIUS_MM = 0.7;
/* How high a wire arcs, as a share of the distance it spans. */
const WIRE_SAG = 0.18;
/* Board sizes (mm): width along x, depth along z. */
const PI = { w: 85, d: 56, t: 1.4 };
const ESP = { w: 51, d: 28, t: 1.6, lift: 8.5 };
const BOARD = { w: 82, d: 55, t: 8.5 };
/*
 * Rubber feet (mm) under the Pi: they lift its thin board clear of the desk top, which is slightly uneven,
 * so it never sinks into it. inset = distance of each foot from the board's corner.
 */
const FEET = { height: 4, radius: 2.5, inset: 5 };

/**
 * addMakerBits - lays the Raspberry Pi and the breadboard (with the ESP32 on it) on the desk and wires them.
 * Params: THREE; scene; spots - { pi, breadboard }, each { x, z, yawDeg } in world metres on the desk;
 *         deskTop - the desk's top surface height (m).
 * Returns: { pi, breadboard } groups (not clickable).
 * Usage: addMakerBits(THREE, scene, { pi: { x: 0.2, z: 0.1, yawDeg: 20 }, breadboard: {...} }, LAYOUT.deskTop).
 */
export function addMakerBits(THREE, scene, spots, deskTop) {
  const pi = raspberryPi(THREE);
  const breadboard = breadboardWithEsp(THREE);
  // Only the thin Pi stands on feet; the breadboard is thick enough to rest on the desk itself.
  addFeet(THREE, pi, PI);
  for (const [group, spot, lift] of [[pi, spots.pi, FEET.height], [breadboard, spots.breadboard, 0]]) {
    group.position.set(spot.x, deskTop + lift * S, spot.z);
    group.rotation.y = THREE.MathUtils.degToRad(spot.yawDeg);
    scene.add(group);
    group.updateMatrixWorld(true);
  }
  // Jumper wires from three breadboard holes to three GPIO pins on the Pi.
  WIRE_COLOURS.forEach((colour, i) => {
    const from = breadboard.localToWorld(breadboard.userData.wireHoles[i].clone());
    const to = pi.localToWorld(pi.userData.gpioPins[i].clone());
    scene.add(jumperWire(THREE, from, to, colour));
  });
  return { pi, breadboard };
}

/* ------------------------------------------------------------- building blocks */

/** addFeet - four black rubber feet under a board's corners, reaching FEET.height below its base. */
function addFeet(THREE, group, { w, d }) {
  const material = new THREE.MeshStandardMaterial({ color: 0x151515, roughness: 0.9 });
  const geometry = new THREE.CylinderGeometry(FEET.radius * S, FEET.radius * S, FEET.height * S, 16);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const foot = new THREE.Mesh(geometry, material);
    foot.position.set(sx * (w / 2 - FEET.inset) * S, -FEET.height / 2 * S, sz * (d / 2 - FEET.inset) * S);
    group.add(foot);
  }
}

/**
 * block - a box (sizes in mm, scaled) sitting with its bottom at y (mm) and centred on x, z (mm).
 * Returns: the mesh, shadow-casting.
 */
function block(THREE, [w, h, d], [x, y, z], material) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w * S, h * S, d * S), material);
  mesh.position.set(x * S, (y + h / 2) * S, z * S);
  mesh.castShadow = mesh.receiveShadow = true;
  return mesh;
}

/** metal / plastic - shared-looking materials for small parts. Returns: a MeshStandardMaterial. */
function metal(THREE) { return new THREE.MeshStandardMaterial({ color: COLOURS.metal, metalness: 0.8, roughness: 0.35 }); }
function plastic(THREE, color) { return new THREE.MeshStandardMaterial({ color, roughness: 0.6 }); }

/**
 * canvasFace - draws a board's top face on a canvas and returns it as a texture.
 * Params: wMm, dMm - face size in mm; draw(g, px) - paints it (px converts mm to canvas pixels).
 * Returns: a CanvasTexture in sRGB.
 */
function canvasFace(THREE, wMm, dMm, draw) {
  const canvas = document.createElement('canvas');
  canvas.width = wMm * PX_PER_MM;
  canvas.height = dMm * PX_PER_MM;
  draw(canvas.getContext('2d'), mm => mm * PX_PER_MM);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

/**
 * pcb - a board whose top face carries a texture and whose edges use the base colour.
 * Returns: the mesh, bottom at y = 0 (box face order: +x, -x, +y, -y, +z, -z).
 */
function pcb(THREE, { w, d, t }, colour, texture) {
  const side = new THREE.MeshStandardMaterial({ color: colour, roughness: 0.7 });
  const top = new THREE.MeshStandardMaterial({ map: texture, roughness: 0.55 });
  return block(THREE, [w, t, d], [0, 0, 0], [side, side, top, side, side, side]);
}

/**
 * pinRow - a row of gold header pins (InstancedMesh) along x.
 * Params: count; x0, z - first pin position (mm); y - pin base (mm); height (mm).
 * Returns: { mesh, tops } where tops are the pin tips in the group's local metres.
 */
function pinRow(THREE, count, x0, z, y, height) {
  const mesh = new THREE.InstancedMesh(
    new THREE.BoxGeometry(0.64 * S, height * S, 0.64 * S),
    new THREE.MeshStandardMaterial({ color: COLOURS.gold, metalness: 0.9, roughness: 0.3 }), count);
  const m = new THREE.Matrix4();
  const tops = [];
  for (let i = 0; i < count; i++) {
    const x = x0 + i * PIN_PITCH;
    m.makeTranslation(x * S, (y + height / 2) * S, z * S);
    mesh.setMatrixAt(i, m);
    tops.push(new THREE.Vector3(x * S, (y + height) * S, z * S));
  }
  return { mesh, tops };
}

/* ------------------------------------------------------------- Raspberry Pi 4 */

/** raspberryPi - a Raspberry Pi 4 Model B: green board, SoC, RAM, USB / Ethernet stack, GPIO header. Returns: a Group. */
function raspberryPi(THREE) {
  const g = new THREE.Group();
  const face = canvasFace(THREE, PI.w, PI.d, (c, px) => {
    c.fillStyle = COLOURS.piBoard;
    c.fillRect(0, 0, px(PI.w), px(PI.d));
    c.strokeStyle = COLOURS.piTrace;
    c.lineWidth = px(0.35);
    for (let i = 0; i < 14; i++) {
      c.beginPath();
      c.moveTo(px(8 + i * 3.5), px(12));
      c.lineTo(px(12 + i * 3.5), px(22));
      c.lineTo(px(12 + i * 3.5), px(46));
      c.stroke();
    }
    c.fillStyle = COLOURS.silk;
    c.font = `bold ${px(3.2)}px sans-serif`;
    c.fillText('Raspberry Pi 4 Model B', px(6), px(PI.d - 13));
    c.font = `${px(2)}px sans-serif`;
    c.fillText('4GB  ·  BCM2711', px(6), px(PI.d - 9.5));
    for (const [x, z] of [[3.5, 3.5], [61.5, 3.5], [3.5, 52.5], [61.5, 52.5]]) {
      c.fillStyle = '#d9c27a';
      c.beginPath(); c.arc(px(x), px(z), px(3), 0, Math.PI * 2); c.fill();
      c.fillStyle = '#0b0b0b';
      c.beginPath(); c.arc(px(x), px(z), px(1.35), 0, Math.PI * 2); c.fill();
    }
  });
  g.add(pcb(THREE, PI, COLOURS.piBoard, face));
  const top = PI.t;
  const x = mm => mm - PI.w / 2, z = mm => mm - PI.d / 2;
  g.add(block(THREE, [15, 1.4, 15], [x(29), top, z(32)], metal(THREE)));               // SoC heat spreader
  g.add(block(THREE, [10, 1.1, 15], [x(44), top, z(32)], plastic(THREE, COLOURS.chip))); // RAM
  g.add(block(THREE, [21.5, 13.5, 16], [x(PI.w - 8.5), top, z(10.25)], metal(THREE)));  // Ethernet
  g.add(block(THREE, [17.5, 16, 14], [x(PI.w - 6.5), top, z(29)], metal(THREE)));       // USB 2 / 3 stacks
  g.add(block(THREE, [17.5, 16, 14], [x(PI.w - 6.5), top, z(47)], metal(THREE)));
  g.add(block(THREE, [9, 3.2, 7.5], [x(11.2), top, z(PI.d - 3)], metal(THREE)));         // USB-C power
  g.add(block(THREE, [7.5, 3.5, 7], [x(26), top, z(PI.d - 3)], metal(THREE)));            // micro-HDMI x2
  g.add(block(THREE, [7.5, 3.5, 7], [x(39.5), top, z(PI.d - 3)], metal(THREE)));
  g.add(block(THREE, [7, 6, 12], [x(53.5), top, z(PI.d - 5)], plastic(THREE, COLOURS.audio))); // audio jack
  // 40-pin GPIO header along the back edge: black plastic base and two rows of pins.
  const gpioX = x(7.1 + 1.27);
  g.add(block(THREE, [PIN_PITCH * 20, 2.5, PIN_PITCH * 2], [gpioX + PIN_PITCH * 9.5, top, z(3.5)], plastic(THREE, COLOURS.header)));
  const rowA = pinRow(THREE, 20, gpioX, z(3.5) - PIN_PITCH / 2, top, 8.5);
  const rowB = pinRow(THREE, 20, gpioX, z(3.5) + PIN_PITCH / 2, top, 8.5);
  g.add(rowA.mesh, rowB.mesh);
  // Wires go to 5V (pin 2), GND (pin 6) and GPIO17 (pin 11): rows A/B alternate odd/even pin numbers.
  g.userData.gpioPins = [rowB.tops[0], rowB.tops[2], rowA.tops[5]];
  return g;
}

/* ------------------------------------------------------------- breadboard + ESP32 */

/** breadboardWithEsp - a half-size breadboard with an ESP32 DevKit across its middle channel and a red LED. Returns: a Group. */
function breadboardWithEsp(THREE) {
  const g = new THREE.Group();
  const rows = 30, cols = 10;
  const gridX0 = (BOARD.w - (rows - 1) * PIN_PITCH) / 2;
  const holeZ = c => 9 + c * PIN_PITCH + (c >= 5 ? 4 : 0);   // two banks of 5 holes, split by the channel
  const face = canvasFace(THREE, BOARD.w, BOARD.d, (c, px) => {
    c.fillStyle = COLOURS.breadboard;
    c.fillRect(0, 0, px(BOARD.w), px(BOARD.d));
    c.fillStyle = '#d8d3c6';
    c.fillRect(0, px(holeZ(4) + 1.6), px(BOARD.w), px(4 - 0.6));
    c.fillStyle = COLOURS.hole;
    const hole = (hx, hz) => c.fillRect(px(hx - 0.5), px(hz - 0.5), px(1), px(1));
    for (let r = 0; r < rows; r++) for (let col = 0; col < cols; col++) hole(gridX0 + r * PIN_PITCH, holeZ(col));
    for (const railZ of [2.2, 4.74, BOARD.d - 4.74, BOARD.d - 2.2]) {
      for (let r = 0; r < rows; r++) if (r % 6 !== 5) hole(gridX0 + r * PIN_PITCH, railZ);
    }
    c.lineWidth = px(0.4);
    for (const [lineZ, colour] of [[0.9, COLOURS.railRed], [6.1, COLOURS.railBlue], [BOARD.d - 6.1, COLOURS.railRed], [BOARD.d - 0.9, COLOURS.railBlue]]) {
      c.strokeStyle = colour;
      c.beginPath(); c.moveTo(px(2), px(lineZ)); c.lineTo(px(BOARD.w - 2), px(lineZ)); c.stroke();
    }
  });
  g.add(pcb(THREE, BOARD, COLOURS.breadboard, face));
  const top = BOARD.t;
  const x = mm => mm - BOARD.w / 2, z = mm => mm - BOARD.d / 2;

  // ESP32 DevKit raised on its two pin headers, straddling the channel.
  const espX = x(gridX0 + 9.5 * PIN_PITCH);
  const espZ = z((holeZ(4) + holeZ(5)) / 2);
  const espFace = canvasFace(THREE, ESP.w, ESP.d, (c, px) => {
    c.fillStyle = COLOURS.espBoard;
    c.fillRect(0, 0, px(ESP.w), px(ESP.d));
    c.fillStyle = COLOURS.silk;
    c.font = `${px(1.8)}px sans-serif`;
    c.fillText('ESP32 DEVKIT V1', px(30), px(4));
    c.fillText('EN', px(46), px(25)); c.fillText('BOOT', px(42), px(4));
  });
  const esp = pcb(THREE, ESP, COLOURS.espBoard, espFace);
  esp.position.add(new THREE.Vector3(espX * S, (top + ESP.lift) * S, espZ * S));
  g.add(esp);
  const espTop = top + ESP.lift + ESP.t;
  const espLeft = espX - ESP.w / 2;
  for (const side of [-1, 1]) {
    g.add(block(THREE, [38, ESP.lift, 2.5], [espX + 4, top, espZ + side * (ESP.d / 2 - 1.6)], plastic(THREE, COLOURS.header)));
  }
  g.add(block(THREE, [18, 3.2, 25.5], [espLeft + 9 + 6, espTop, espZ], metal(THREE)));       // WROOM shield can
  g.add(block(THREE, [6, 0.2, 25.5], [espLeft + 3, espTop, espZ], plastic(THREE, 0x0f0f0f)));  // antenna area
  g.add(block(THREE, [5.5, 3, 7.5], [espLeft + ESP.w - 2.5, espTop, espZ], metal(THREE)));     // micro-USB
  for (const side of [-1, 1]) g.add(block(THREE, [3.5, 1.6, 3.5], [espLeft + ESP.w - 9, espTop, espZ + side * 9], plastic(THREE, 0x2a2a2a)));
  g.add(block(THREE, [1.6, 0.6, 0.8], [espLeft + ESP.w - 14, espTop, espZ + 6], glowing(THREE, COLOURS.ledBlue)));

  // A red LED near the free end of the board.
  const ledX = x(gridX0 + 25 * PIN_PITCH), ledZ = z(holeZ(1) + PIN_PITCH / 2);
  const ledMat = glowing(THREE, COLOURS.ledRed);
  const led = new THREE.Mesh(new THREE.CylinderGeometry(2.5 * S, 2.6 * S, 5 * S, 20), ledMat);
  led.position.set(ledX * S, (top + 3 + 2.5) * S, ledZ * S);
  const dome = new THREE.Mesh(new THREE.SphereGeometry(2.5 * S, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), ledMat);
  dome.position.set(ledX * S, (top + 3 + 5) * S, ledZ * S);
  for (const leg of [-1, 1]) g.add(block(THREE, [0.5, 3, 0.5], [ledX + leg * 1.27, top, ledZ], metal(THREE)));
  g.add(led, dome);

  // Holes the jumper wires start from (local metres, just above the board).
  const hole = (row, col) => new THREE.Vector3(x(gridX0 + row * PIN_PITCH) * S, top * S, z(holeZ(col)) * S);
  g.userData.wireHoles = [hole(27, 8), hole(28, 8), hole(26, 9)];
  return g;
}

/** glowing - a small light-up part (LED) that stays visible in the dark room. Returns: a MeshStandardMaterial. */
function glowing(THREE, color) {
  return new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 1.6, roughness: 0.3, transparent: true, opacity: 0.92 });
}

/**
 * jumperWire - a flexible jumper wire arcing from one point to another, with black plastic ends.
 * Params: from, to - world points (wire ends); colour - insulation colour.
 * Returns: a Group.
 */
function jumperWire(THREE, from, to, colour) {
  const g = new THREE.Group();
  const span = from.distanceTo(to);
  const rise = new THREE.Vector3(0, span * WIRE_SAG, 0);
  const lift = new THREE.Vector3(0, 12 * S, 0);
  const curve = new THREE.CatmullRomCurve3([
    from.clone(), from.clone().add(lift),
    from.clone().lerp(to, 0.5).add(rise),
    to.clone().add(lift), to.clone(),
  ]);
  const wire = new THREE.Mesh(new THREE.TubeGeometry(curve, 48, WIRE_RADIUS_MM * S, 8), plastic(THREE, colour));
  wire.castShadow = true;
  g.add(wire);
  for (const end of [from, to]) {
    const housing = new THREE.Mesh(new THREE.BoxGeometry(2.5 * S, 12 * S, 2.5 * S), plastic(THREE, 0x111111));
    housing.position.copy(end).add(new THREE.Vector3(0, 6 * S, 0));
    g.add(housing);
  }
  return g;
}
