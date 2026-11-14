/*
 * scene.js - the 3D desk landing of the portfolio.
 *
 * Owns a full-viewport layer above the CRT-frame desktop: a three.js canvas,
 * a loading line, a hint, an accessible "Turn on" button and a credits link.
 * It talks to the desktop (index.html's dc Component) through window events:
 *   kunal:enter  - scene -> desktop: the visitor has zoomed into the monitor
 *   kunal:exit   - desktop -> scene: the monitor's power button was pressed
 *
 * three.js is imported lazily so the Enter button and #desktop links work before
 * (or without) WebGL. All files are same-origin (vendor/three, assets/models).
 */
import { entryMode, createViewState, easeInOutCubic, formatTime, clampToView, initialTheme, shouldRender, framesPerSecond, nextQuality, loadPercent, byteShare, blocksFor } from './scene-logic.js';
import { addMakerBits } from './desk-props.js';

/* Timings (ms) and camera framing. */
const FADE_MS = 320;
const FLY_MS = 1200;
const MAX_PIXEL_RATIO = 2;
/* On a 1x desktop screen the scene is drawn at 1.5x and scaled down, which keeps small print (the cards) sharp. */
const DESKTOP_MIN_PIXEL_RATIO = 1.5;
const CAMERA_FOV = 38;
/*
 * Render pacing: while nothing moves the desk is drawn at IDLE_FRAME_MS intervals (20 fps, enough for the
 * slow résumé glow) instead of every display frame; after a hover ends it stays at full rate for SETTLE_MS
 * so halos and the speaker ease back smoothly.
 */
const IDLE_FRAME_MS = 50;
const SETTLE_MS = 700;
/*
 * Quality probe: shortly after the desk appears, the frame rate over QUALITY_PROBE.frames frames decides
 * whether to step quality down (scene-logic nextQuality). A gap longer than gapMs (tab hidden, computer
 * view) restarts the count. LOW_QUALITY is level 1: native resolution and smaller shadow maps; level 2
 * also switches shadows off.
 */
const QUALITY_PROBE = { delayMs: 600, frames: 60, gapMs: 250 };
const LOW_QUALITY = { pixelRatio: 1, keyShadow: 1024, spotShadow: 512 };

/* Desk view, relative to the monitor's centre: distance, eye rise and where the eye aims. */
const DESK_DISTANCE = 2.1;
const DESK_EYE_RISE = 0.3;
const DESK_LOOK_DROP = -0.22;
/* Before the models load (no monitor yet) the camera waits here. */
const DEFAULT_FOCUS = [0, 1.1, 0];
/* Half the width (m) of monitor + speakers that must stay in frame on narrow screens. */
const DESK_HALF_WIDTH = 0.62;
/* On upright (portrait) screens the frame widens to take in the résumé files, the cards and the boards too. */
const DESK_HALF_WIDTH_PORTRAIT = 0.86;
/* The close-up frames the glass and the power knob below it, plus this margin (share of the view). */
const CLOSE_MARGIN = 0.05;
/*
 * Like a real CRT, the picture sits a little inside the curved glass: this share of the glass's
 * width/height is left as a dark margin on each side, so window corners and the taskbar never touch it.
 */
const SCREEN_OVERSCAN = 0.022;
/* Narrower screens keep the 2D frame instead of the 3D monitor's glass. */
const EMBED_MIN_WIDTH = 700;
/* ...and shorter ones too (a phone on its side): the glass would leave the desktop a few hundred pixels. */
const EMBED_MIN_HEIGHT = 480;
const KEY_LIGHT_OFFSET = [-1.4, 2.6, 2.2];
const ROOM = { wall: 0x4a4038, floor: 0x2b231c };
const IS_TOUCH = matchMedia('(hover: none) and (pointer: coarse)').matches;
/* Hover glow on clickable objects. */
const HOVER_GLOW = 0x2b2414;
/*
 * The speaker easter egg plays this song; the banner over the tape recorder shows it. Title, artist and album
 * come from Apple's iTunes Search API (the file has no tags); the cover was saved from there too (CREDITS.md).
 */
const NOW_PLAYING = {
  src: 'assets/audio/shoot-to-thrill.mp3', cover: 'assets/audio/iron-man-2-cover.jpg',
  title: 'Shoot to Thrill', artist: 'AC/DC', album: 'Iron Man 2', year: 2010,
};
const TAPE_RECORDER = 'TapeRecorder_33';
/*
 * The office chair in front of the desk and the clipboard lying on its seat: on upright (phone) screens the
 * chair would cover the keyboard and half the view, so both are hidden there.
 */
const CHAIR_PROPS = ['Chair_51', 'Clipboard_49'];
/*
 * Maker bits (desk-props.js) right of the mouse, set down a little askew: offsets (m) from the mouse's
 * right edge (dx) and centre (dz), and yaw in degrees.
 */
const MAKER_SPOTS = { pi: { dx: 0.1, dz: -0.15, yawDeg: -24 }, breadboard: { dx: 0.075, dz: 0.075, yawDeg: 13 } };
/* Banner half-width (px) and the gap kept from the window edges when it is clamped into view. */
const BANNER_HALF_WIDTH = 135;
const BANNER_EDGE_GAP = 12;
/* Below this width the banner docks at the top of the screen (the tape recorder may be off screen). */
const BANNER_DOCK_BELOW_PX = 700;
const BANNER_DOCK_TOP_PX = 56;
/*
 * Speaker hover animation: the speaker grows a little and, while no song is playing, thumps (period in ms)
 * to invite a click. ease is the per-frame blend towards the target size.
 */
const SPEAKER = { hoverGrow: 0.03, hoverPump: 0.035, hoverPeriodMs: 520, hoverEase: 0.2 };
/* The résumé: pages standing in the two magazine files left of the monitor; clicking them offers the PDF. */
const RESUME_URL = 'assets/Kunal_Kumar_Resume.pdf';
const RESUME_FILE_NAME = 'Kunal_Kumar_Resume.pdf';
const RESUME_HOLDERS = ['FileBox_Black_7', 'FileBox_Green_8'];
const PAGES_PER_HOLDER = 4;
/* A sheet standing in a holder (m): height, depth (front to back), thickness, and the gap kept from the holder's walls. */
const PAGE = { height: 0.3, depth: 0.2, thickness: 0.0025, wall: 0.014 };
const PAGE_TILT_DEG = 3;
/* The pages breathe with a warm glow while the visitor is on the desk, so they read as clickable. */
const PAGE_GLOW = 0xd9a441;
const PAGE_PULSE_MS = 2400;
/*
 * Business cards left of the keyboard: a small stack with a GitHub and a LinkedIn card fanned on top.
 * Clicking a card opens that profile in a new tab. (Same links as CONTACT in index.html.)
 */
const PROFILE_CARDS = [
  { label: 'GitHub', url: 'https://github.com/kunalkumarkkr01', host: 'github.com/', handle: 'kunalkumarkkr01', bg: '#1f2328', fg: '#ffffff', mark: 'github', glow: 0xdbe3ff, faceGlow: 0x2a2f38 },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/kunalkumar036', host: 'linkedin.com/in/', handle: 'kunalkumar036', bg: '#0a66c2', fg: '#ffffff', mark: 'linkedin', glow: 0x3d9bff, faceGlow: 0x0b3a70 },
];
/*
 * The cards stand upright in a small wooden stand left of the keyboard, leaning back so their faces point
 * at the camera. Sizes in metres; cards are ~1.7x real size so the brands read from the desk view.
 */
const CARD = { width: 0.15, height: 0.0866, thickness: 0.0015, leanDeg: 8, between: 0.012, keyboardGap: 0.04, seat: 0.009 };
const CARD_STAND = { height: 0.02, depth: 0.045, margin: 0.014, colour: 0x3a2a1e };
/* Card face texture (px): 2x what the card covers on a large screen, so it stays sharp on high-DPI displays. */
const CARD_TEXTURE = { width: 2048, height: 1182 };
const GITHUB_MARK = 'assets/brand/github.svg';
/* Hover glow: a soft halo behind the card in its brand colour, eased in and out (per-frame blend factor). */
const HALO = { scale: 1.6, ease: 0.18, faceLift: 0.18 };
/* Tags float this far (m) above the object they label. */
const TAG_LIFT = 0.035;
/*
 * Easter egg: clicking the desk lamp (no label) switches the room between day and night: at night the room lights dim and the
 * lamp's warm spotlight comes on. Each value is [day, night]; the switch eases over THEME_MS.
 */
const THEMES = {
  hemi: [0.35, 0.05], key: [1.8, 0.1], fill: [0.25, 0.03], env: [0.55, 0.1],
  lamp: [0, 14], bulb: [0, 1], background: [0x2a231c, 0x0c0a08], cardFace: [1, 0.62],
  headGlow: [0, 0.9], beam: [0, 0.14], innerLight: [0, 0.6],
};
const THEME_MS = 700;
/* The visitor's lamp choice is remembered; a first visit opens dark with the lamp on (initialTheme). */
const THEME_STORAGE_KEY = 'desk-theme';
/* Lamp head when on: a glow at the shade's mouth (size m), a faint beam (length m) and a warm light inside the shade. */
const LAMP_HEAD = { glowSize: 0.2, beamLength: 0.62, beamSpread: 0.2, mouthLift: 0.035, innerRange: 0.35 };
const LAMP = { colour: 0xffc68a, angleDeg: 38, penumbra: 0.65, distance: 3, decay: 1.4, reach: [0.28, -0.75, 0.18], bulbRadius: 0.016 };
/* Loading dialog's progress bar: each blue block's width and the gap between blocks (px), as in Win95. */
const LOADER_BLOCK = { width: 10, gap: 2, inset: 2 };
/* Picture of the desktop shown on the 3D monitor once it has been switched on. */
const SCREEN_IMAGE = 'assets/desk-screen.jpg';

const view = createViewState(entryMode(location.href) === 'computer' ? 'computer' : 'loading');
const ui = buildLayer();
let three = null;          // { THREE, renderer, scene, camera, screenMesh, pickables, raf, ... }
let flight = null;         // active camera animation
let music = null;          // active easter-egg playback
let screenOn = false;      // the 3D monitor shows the desktop once it has been powered on
let hideTimer = 0;         // pending end-of-fade for the desk layer
let loading = null;        // in-flight loadScene() promise, so two loads never overlap
let desktopInert = false;  // wanted inert state of #dc-root (applied once it exists)
let rootWatch = null;      // waits for support.js to create #dc-root
let embedded = false;      // the desktop is drawn on the 3D monitor's glass (canvas kept visible)

window.addEventListener('kunal:exit', onExitRequested);
document.addEventListener('visibilitychange', onVisibility);

if (view.state === 'computer') {
  hideLayer(true);
  requestEnter();
} else {
  setDesktopInert(true);
  loadScene();
}

/* ------------------------------------------------------------------ bridge */

/**
 * requestEnter - tells the desktop to wake up.
 * Sets a pending flag too, in case the dc Component has not mounted yet.
 * Usage: after the fly-in finishes, or straight away for #desktop / Enter button.
 */
function requestEnter() {
  switchScreenOn();
  setDesktopInert(false);
  window.__kunalEnterPending = true;
  window.dispatchEvent(new Event('kunal:enter'));
}

/**
 * onExitRequested - the desktop's power button was pressed: go back to the desk.
 * Loads the scene first if it was never built (deep link or Enter-before-load).
 */
function onExitRequested() {
  const next = view.request('exit');
  stopMusic();
  if (next === 'loading') { showLayer(); loadScene(); return; }
  if (next !== 'flyingOut') return;
  setEmbedded(false);
  showLayer();
  flyTo(closePose(), deskPose(), () => { view.request('arrived'); });
}

/* ---------------------------------------------------------------- the layer */

/**
 * buildLayer - creates the overlay DOM (canvas host, loading line, hint, buttons).
 * Returns: { root, canvasHost, status, hint, enter, credits }.
 * Usage: called once at module start, before three.js is fetched.
 */
function buildLayer() {
  const style = document.createElement('style');
  style.textContent = `
    @font-face{font-family:'Plex';src:url('fonts/ibm-plex-sans.woff2') format('woff2');font-weight:100 900;font-display:swap}
    #desk-layer{position:fixed;inset:0;z-index:10000;background:#15130f;transition:opacity ${FADE_MS}ms ease;font-family:'MS Sans Serif',Tahoma,sans-serif}
    #desk-layer.is-hidden{opacity:0;pointer-events:none}
    #desk-layer.is-gone{visibility:hidden}
    html.embedded #desk-layer{z-index:0}
    html.embedded #desk-layer > :not(.desk-canvas){display:none}
    html.embedded #desk-layer canvas{pointer-events:none}
    #desk-layer canvas{display:block;width:100%;height:100%;touch-action:manipulation}
    #desk-layer .desk-status{position:absolute;left:16px;bottom:14px;color:#c9c1a8;font:18px/1 'VT323',monospace;letter-spacing:.5px}
    #desk-layer .desk-hint{position:absolute;left:50%;top:18px;transform:translateX(-50%);color:#efe8d4;font-size:13px;background:rgba(0,0,0,.45);padding:6px 12px;border-radius:3px;transition:opacity .6s;white-space:nowrap}
    #desk-layer .desk-hint.is-done{opacity:0}
    #desk-layer .desk-loader{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:min(360px,calc(100vw - 32px));box-sizing:border-box;
      background:#c0c0c0;padding:3px;color:#000;font:11px 'MS Sans Serif',Tahoma,sans-serif;box-shadow:inset -1px -1px 0 #0a0a0a,inset 1px 1px 0 #fff,inset -2px -2px 0 #808080,inset 2px 2px 0 #dfdfdf,3px 3px 0 rgba(0,0,0,.35);transition:opacity .3s}
    #desk-layer .desk-loader[hidden]{display:none}
    #desk-layer .dl-title{height:18px;display:flex;align-items:center;padding:0 4px;color:#fff;font-weight:700;background:linear-gradient(90deg,#000080,#1084d0);white-space:nowrap;overflow:hidden}
    #desk-layer .dl-body{padding:14px 14px 12px;display:flex;flex-direction:column;gap:10px}
    #desk-layer .dl-row{display:flex;align-items:center;gap:12px;min-width:0}
    #desk-layer .dl-files{position:relative;flex:none;width:120px;max-width:40%;height:34px}
    #desk-layer .dl-folder{position:absolute;top:8px;width:26px;height:20px;background:#f6d55c;box-shadow:inset -1px -1px 0 #a88a1f,inset 1px 1px 0 #fff3b0}
    #desk-layer .dl-folder::before{content:'';position:absolute;top:-4px;left:0;width:11px;height:4px;background:#f6d55c;box-shadow:inset 1px 1px 0 #fff3b0}
    #desk-layer .dl-folder.from{left:0}
    #desk-layer .dl-folder.to{right:0}
    #desk-layer .dl-paper{position:absolute;top:10px;left:14px;width:12px;height:15px;background:#fff;box-shadow:inset -1px -1px 0 #808080;animation:dl-fly 1.2s ease-in-out infinite}
    @keyframes dl-fly{0%{left:14px;top:10px}50%{top:-2px}100%{left:calc(100% - 28px);top:10px}}
    #desk-layer .dl-bar{height:18px;padding:2px;display:flex;gap:2px;overflow:hidden;box-sizing:border-box;box-shadow:inset 1px 1px 0 #808080,inset -1px -1px 0 #fff}
    #desk-layer .dl-bar i{flex:none;width:10px;background:#000080}
    #desk-layer .dl-meta{display:flex;justify-content:space-between;gap:8px;color:#222}
    #desk-layer .dl-meta span:first-child{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
    @media (prefers-reduced-motion:reduce){#desk-layer .dl-paper{animation:none}}
    #desk-layer .desk-enter{position:absolute;right:16px;bottom:14px;min-width:120px;height:28px;padding:0 12px;border:0;background:#c0c0c0;color:#000;font:12px 'MS Sans Serif',Tahoma,sans-serif;cursor:pointer;
      box-shadow:inset -1px -1px 0 #0a0a0a,inset 1px 1px 0 #fff,inset -2px -2px 0 #808080,inset 2px 2px 0 #dfdfdf}
    #desk-layer .desk-enter:active{box-shadow:inset 1px 1px 0 #0a0a0a,inset -1px -1px 0 #fff,inset 2px 2px 0 #808080}
    #desk-layer .desk-enter:focus-visible{outline:1px dotted #000;outline-offset:-5px}
    #desk-layer .desk-credits{position:absolute;left:16px;top:14px;color:#8f866d;font-size:11px;text-decoration:none}
    #desk-layer .desk-credits:hover{color:#efe8d4}
    #desk-layer .desk-tag{position:absolute;left:0;top:0;transform:translate(-50%,-100%);display:flex;align-items:center;gap:2px;padding:3px;border-radius:999px;
      border:1px solid rgba(255,232,190,.16);background:rgba(24,20,15,.62);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);
      font:12px/1 'Plex',system-ui,-apple-system,'Segoe UI',sans-serif;white-space:nowrap;box-shadow:0 6px 16px rgba(0,0,0,.3)}
    #desk-layer .desk-tag[hidden]{display:none}
    #desk-layer .desk-tag button,#desk-layer .desk-tag a{display:flex;align-items:center;gap:6px;height:22px;padding:0 9px;border:0;border-radius:999px;
      background:transparent;color:#f3ead8;font:inherit;text-decoration:none;cursor:pointer;transition:background .15s,color .15s}
    #desk-layer .desk-tag button:hover,#desk-layer .desk-tag a:hover{background:rgba(255,240,210,.1);color:#fff}
    #desk-layer .desk-tag :focus-visible{outline:2px solid #d9a441;outline-offset:1px}
    #desk-layer .desk-tag-actions{display:flex;gap:2px;max-width:0;overflow:hidden;opacity:0;transition:max-width .25s ease,opacity .2s ease}
    #desk-layer .desk-tag.is-open .desk-tag-actions{max-width:200px;opacity:1}
    #desk-layer .desk-tag-actions a{color:#e9c27a}
    #desk-layer .desk-tag .sep{width:1px;height:12px;background:rgba(255,232,190,.18)}
    #desk-layer .desk-np{position:absolute;left:0;top:0;transform:translate(-50%,-100%);display:flex;align-items:center;gap:10px;width:${BANNER_HALF_WIDTH * 2}px;box-sizing:border-box;
      padding:8px 10px 8px 8px;border-radius:12px;border:1px solid rgba(255,232,190,.16);background:rgba(24,20,15,.74);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);
      color:#f3ead8;font:12px/1.25 'Plex',system-ui,-apple-system,'Segoe UI',sans-serif;box-shadow:0 10px 24px rgba(0,0,0,.35)}
    #desk-layer .desk-np[hidden]{display:none}
    #desk-layer .desk-np img{width:54px;height:54px;border-radius:6px;flex:none;object-fit:cover}
    #desk-layer .np-body{flex:1;min-width:0}
    #desk-layer .np-kicker{display:flex;align-items:center;gap:6px;color:#e9c27a;font-size:10px;letter-spacing:.06em;text-transform:uppercase}
    #desk-layer .np-eq{display:inline-flex;align-items:flex-end;gap:1px;height:9px}
    #desk-layer .np-eq i{width:2px;height:100%;background:#e9c27a;transform-origin:bottom;animation:np-eq .9s ease-in-out infinite}
    #desk-layer .np-eq i:nth-child(2){animation-delay:-.3s}
    #desk-layer .np-eq i:nth-child(3){animation-delay:-.6s}
    #desk-layer .desk-np.is-paused .np-eq i{animation-play-state:paused}
    @keyframes np-eq{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}
    #desk-layer .np-title{font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    #desk-layer .np-sub{color:#b9ae94;font-size:11px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    #desk-layer .np-bar{height:4px;margin-top:6px;border-radius:2px;background:rgba(255,240,210,.15);overflow:hidden;cursor:pointer}
    #desk-layer .np-fill{height:100%;width:0;background:#e9c27a}
    #desk-layer .np-time{display:flex;justify-content:space-between;margin-top:3px;color:#9d927a;font-size:10px;font-variant-numeric:tabular-nums}
    #desk-layer .np-buttons{display:flex;flex-direction:column;gap:4px}
    #desk-layer .np-buttons button{width:26px;height:26px;border:0;border-radius:50%;background:rgba(255,240,210,.1);color:#f3ead8;font-size:11px;line-height:1;cursor:pointer}
    #desk-layer .np-buttons button:hover{background:rgba(255,240,210,.2)}
    #desk-layer .np-buttons button:focus-visible{outline:2px solid #d9a441;outline-offset:1px}
    @media (prefers-reduced-motion:reduce){#desk-layer .desk-tag-actions{transition:none}#desk-layer .np-eq i{animation:none}}
    @media (max-width:520px){#desk-layer .desk-hint{top:auto;bottom:56px;white-space:normal;width:max-content;max-width:86vw;text-align:center}}`;
  document.head.appendChild(style);

  const root = document.createElement('div');
  root.id = 'desk-layer';
  root.innerHTML = `
    <div class="desk-canvas" style="position:absolute;inset:0"></div>
    <div class="desk-hint" role="status">${IS_TOUCH ? 'Tap' : 'Click'} the monitor to turn it on</div>
    <div class="desk-status" aria-live="polite"></div>
    <div class="desk-loader" role="progressbar" aria-label="Loading the desk" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" hidden>
      <div class="dl-title">Setting up the desk</div>
      <div class="dl-body">
        <div class="dl-row">
          <div class="dl-files" aria-hidden="true"><span class="dl-folder from"></span><span class="dl-paper"></span><span class="dl-folder to"></span></div>
          <div>Copying files<br>to the room...</div>
        </div>
        <div class="dl-bar" aria-hidden="true"></div>
        <div class="dl-meta"><span class="dl-file"></span><span class="dl-pct">0%</span></div>
      </div>
    </div>
    <a class="desk-credits" href="credits.html" target="_blank" rel="noopener" hidden>3D model credits</a>
    <button class="desk-enter" type="button">Turn on the computer &#9656;</button>
    <div class="desk-tag desk-resume-tag" hidden>
      <button type="button" aria-expanded="false">Résumé</button>
      <span class="desk-tag-actions">
        <a href="${RESUME_URL}" download="${RESUME_FILE_NAME}" tabindex="-1">Download</a>
        <a href="${RESUME_URL}" target="_blank" rel="noopener" tabindex="-1">Open &#8599;</a>
      </span>
    </div>
    <div class="desk-np" role="group" aria-label="Now playing" hidden>
      <img src="${NOW_PLAYING.cover}" alt="${NOW_PLAYING.album} album cover" width="54" height="54">
      <div class="np-body">
        <div class="np-kicker"><span class="np-eq" aria-hidden="true"><i></i><i></i><i></i></span>Now playing</div>
        <div class="np-title">${NOW_PLAYING.title}</div>
        <div class="np-sub">${NOW_PLAYING.artist} &middot; ${NOW_PLAYING.album} (${NOW_PLAYING.year})</div>
        <div class="np-bar" role="progressbar" aria-label="Song progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><div class="np-fill"></div></div>
        <div class="np-time"><span class="np-now">0:00</span><span class="np-length">0:00</span></div>
      </div>
      <div class="np-buttons">
        <button type="button" class="np-play" aria-label="Pause">&#10074;&#10074;</button>
        <button type="button" class="np-stop" aria-label="Stop">&#10005;</button>
      </div>
    </div>`;
  document.body.appendChild(root);

  const parts = {
    root,
    canvasHost: root.querySelector('.desk-canvas'),
    status: root.querySelector('.desk-status'),
    loader: root.querySelector('.desk-loader'),
    hint: root.querySelector('.desk-hint'),
    enter: root.querySelector('.desk-enter'),
    credits: root.querySelector('.desk-credits'),
    tag: root.querySelector('.desk-resume-tag'),
    np: root.querySelector('.desk-np'),
  };
  parts.enter.addEventListener('click', onEnterButton);
  parts.tag.querySelector('button').addEventListener('click', () => setResumeOpen(!parts.tag.classList.contains('is-open')));
  // Clicking anywhere else, or Escape, folds the résumé tag back.
  document.addEventListener('pointerdown', e => { if (!parts.tag.contains(e.target)) setResumeOpen(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setResumeOpen(false); });
  parts.np.querySelector('.np-play').addEventListener('click', () => toggleMusic());
  parts.np.querySelector('.np-stop').addEventListener('click', () => stopMusic());
  parts.np.querySelector('.np-bar').addEventListener('click', e => seekMusic(e.currentTarget, e.clientX));
  return parts;
}

/**
 * setResumeOpen - unfolds the "Résumé" tag into its Download / Open actions, or folds it back.
 * Params: on - true to unfold.
 */
function setResumeOpen(on) {
  if (!ui) return;
  ui.tag.classList.toggle('is-open', on);
  ui.tag.querySelector('button').setAttribute('aria-expanded', String(on));
  for (const a of ui.tag.querySelectorAll('.desk-tag-actions a')) a.tabIndex = on ? 0 : -1;
}

/**
 * onEnterButton - keyboard/screen-reader friendly way in; works before the scene loads.
 * Flies in when the desk is ready, otherwise goes straight to the computer.
 */
function onEnterButton() {
  if (view.state === 'desk') return startFlyIn();
  if (view.request('skip') !== 'computer') return;
  hideLayer();
  requestEnter();
}

/** hideLayer - fades the desk layer out; `instant` skips the fade (deep links). */
function hideLayer(instant = false) {
  ui.root.classList.add('is-hidden');
  ui.hint.classList.add('is-done');
  clearTimeout(hideTimer);
  const gone = () => { hideTimer = 0; ui.root.classList.add('is-gone'); stopLoop(); };
  if (instant) gone(); else hideTimer = setTimeout(gone, FADE_MS);
}

/** showLayer - brings the desk layer back and restarts rendering. */
function showLayer() {
  // A power-off right after entering must cancel the pending end-of-fade, or it would
  // hide the layer and stop the loop mid-flight.
  clearTimeout(hideTimer);
  hideTimer = 0;
  setDesktopInert(true);
  ui.root.classList.remove('is-gone');
  // Force a style flush so the opacity transition runs from 0.
  void ui.root.offsetWidth;
  ui.root.classList.remove('is-hidden');
  ui.enter.focus({ preventScroll: true });
  startLoop();
}

/**
 * setDesktopInert - keeps keyboard focus and screen readers out of the desktop while the desk covers it.
 * Params: on - true while the visitor is on the desk.
 */
function setDesktopInert(on) {
  desktopInert = on;
  const root = document.getElementById('dc-root');
  if (!root) {
    // support.js creates #dc-root while hydrating, possibly after this module runs.
    if (!rootWatch) {
      rootWatch = new MutationObserver(() => {
        if (!document.getElementById('dc-root')) return;
        rootWatch.disconnect();
        rootWatch = null;
        setDesktopInert(desktopInert);
      });
      rootWatch.observe(document.body, { childList: true });
    }
    return;
  }
  root.inert = on;
  if (on) return;
  root.tabIndex = -1;
  root.focus({ preventScroll: true });
}

/* ------------------------------------------------------------------- scene */

/**
 * loadScene - fetches three.js, builds the desk and starts rendering.
 * On any failure (no WebGL, missing file) it falls back to the computer view.
 */
function loadScene() {
  if (three) { view.request('loaded'); ui.status.textContent = ''; startLoop(); return Promise.resolve(); }
  if (!loading) loading = buildScene().finally(() => { loading = null; });
  return loading;
}

/**
 * buildScene - one attempt at creating the renderer and loading the models.
 * The shared `three` context is only published once everything loaded, so a failed
 * attempt never leaves a half-built, empty desk behind; the next power-off retries.
 */
async function buildScene() {
  ui.status.textContent = '';
  setLoadProgress('script', 0, 'three.module.js');
  let ctx = null;
  try {
    if (!hasWebGL()) throw new Error('WebGL unavailable');
    const THREE = await import('three');
    setLoadProgress('script', 1, 'three.module.js');
    ctx = createRenderer(THREE);
    await buildDesk(ctx, (loaded, total) => setLoadProgress('models', byteShare(loaded, total, EXPECTED_MODEL_BYTES), 'office-assets.glb'));
    setLoadProgress('room', 1, 'Setting up the room');
    ui.loader.hidden = true;
    three = ctx;
    loadFullTextures(ctx);
    startQualityProbe(ctx);
    setPose(ctx.camera, deskPose());
    if (screenOn) switchScreenOn();
    ui.status.textContent = '';
    if (view.request('loaded') !== 'desk') return;
    startLoop();
  } catch (err) {
    if (ctx) disposeRenderer(ctx);
    ui.loader.hidden = true;
    console.warn('[desk] 3D desk unavailable, opening the desktop instead:', err);
    ui.status.textContent = '3D desk unavailable';
    if (view.request('fail') === 'computer') { hideLayer(); requestEnter(); }
  }
}

/** disposeRenderer - releases a renderer from a failed load (WebGL context, canvas, listeners). */
function disposeRenderer(ctx) {
  window.removeEventListener('resize', ctx.onResize);
  ctx.renderer.dispose();
  ctx.renderer.forceContextLoss();
  ctx.renderer.domElement.remove();
}

/** hasWebGL - true when the browser can create a WebGL context. */
function hasWebGL() {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch (e) {
    return false;
  }
}

/**
 * renderPixelRatio - how many canvas pixels to draw per CSS pixel.
 * Returns: the screen's ratio, at least DESKTOP_MIN_PIXEL_RATIO on mouse-driven screens, at most MAX_PIXEL_RATIO.
 * Phones and tablets keep their native ratio to spare the GPU.
 */
function renderPixelRatio() {
  const native = window.devicePixelRatio || 1;
  const wanted = IS_TOUCH ? native : Math.max(native, DESKTOP_MIN_PIXEL_RATIO);
  return Math.min(wanted, MAX_PIXEL_RATIO);
}

/**
 * createRenderer - renderer, camera, scene and lights, attached to the layer.
 * Params: THREE - the three.js module namespace.
 * Returns: the shared `three` context object.
 */
function createRenderer(THREE) {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(renderPixelRatio());
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  ui.canvasHost.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x2a231c);
  scene.fog = new THREE.Fog(0x2a231c, 5, 11);

  const camera = new THREE.PerspectiveCamera(CAMERA_FOV, window.innerWidth / window.innerHeight, 0.05, 30);
  setPose(camera, deskPose(camera.aspect));

  const hemi = new THREE.HemisphereLight(0xfff2dc, 0x3a2d22, 0.35);
  scene.add(hemi);
  const key = new THREE.DirectionalLight(0xffe2b8, 1.8);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  key.shadow.bias = -0.0004;
  key.shadow.normalBias = 0.02;
  key.shadow.camera.left = -1.6; key.shadow.camera.right = 1.6;
  key.shadow.camera.top = 1.6; key.shadow.camera.bottom = -1.6;
  scene.add(key);
  const fill = new THREE.DirectionalLight(0xbcd4ff, 0.25);
  fill.position.set(3, 2, 2);
  scene.add(fill);

  const ctx = { THREE, renderer, scene, camera, key, hemi, fill, raf: 0, pickables: [], screenMesh: null, hovered: null, speakers: [], focus: null, screen: null };
  ctx.onResize = () => onResize(ctx);
  window.addEventListener('resize', ctx.onResize);
  bindPointer(ctx);
  return ctx;
}

/*
 * Two CC-BY 4.0 Sketchfab models (credits: assets/models/CREDITS.md):
 *   office-assets.glb  "Office - Assets" by SeverDoes3D  - the beige CRT, computer case, keyboard, mouse
 *   computer-desk.glb  "Computer Desk" by CR!STALLL       - the speakers
 * The Office scene is staged with its computer moved to the middle of the desk and the speakers beside it.
 */
const MODEL_OFFICE = 'assets/models/office-assets.glb';
/*
 * Uncompressed size (bytes) of office-assets.glb + computer-desk.glb. The loading dialog uses it when the
 * server compresses the files and so does not announce their size. Update it when the models change.
 */
const EXPECTED_MODEL_BYTES = 1374656 + 65584;
/*
 * office-assets.glb carries tiny placeholder textures so the desk can appear early on slow connections;
 * the real ones (materials only, no meshes) follow in this file and are swapped in by loadFullTextures().
 */
const MODEL_OFFICE_TEXTURES = 'assets/models/office-assets-textures.glb';
const TEXTURE_SLOTS = ['map', 'normalMap', 'roughnessMap', 'metalnessMap', 'aoMap', 'emissiveMap'];
const MODEL_DESK = 'assets/models/computer-desk.glb';
/* The Office file faces +X; this turns it to face +Z (towards the camera). */
const OFFICE_YAW = -Math.PI / 2;
/* How far each Office part is turned in the file (deg), found by minimising its bounding box. */
const STRAIGHTEN_DEG = { Monitor_6: 15, Computer_5: 22, Keyboard_3: -10, Computer_Mouse_4: 0 };
/* The Computer Desk speakers are angled in their file (yaw -12.9 and -41.2 deg); these turn both to face forward. */
const SPEAKER_STRAIGHTEN_DEG = { Loudspeaker01: 12.9, Loudspeaker02: 41.2 };
const ENV_INTENSITY = 0.55;

/* World layout in metres after staging; x across the desk, z towards the camera. */
const LAYOUT = {
  deskTop: 0.74, wallZ: -0.25, back: -0.2,
  computerX: -0.66, keyboardGap: 0.05, mouseGap: 0.09,
  speakerScale: 1.25, speakerGap: 0.05, speakerBack: -0.18,
  hidden: ['Cigarette', 'Ashtray', 'Cactus', 'PhotoFrame_10x15', 'Notebook'],
  // Pictures for the wall frames, all turned upright (sources and licences: assets/models/CREDITS.md).
  // leftOf / rightOf hang a frame beside an earlier one, at the same height; copyOf makes a new frame
  // from an earlier one (the model has only two wall frames).
  photos: [
    { frame: 'PhotoFrame2_46', image: 'assets/frames/forrest-gump-poster.jpg' },
    { frame: 'PhotoFrame1_47', image: 'assets/frames/friends-poster.jpg', leftOf: 'PhotoFrame2_46' },
    { frame: 'BikeFrame', copyOf: 'PhotoFrame2_46', image: 'assets/frames/bike.jpg', rightOf: 'PhotoFrame2_46' },
  ],
};
/*
 * Share of a frame's width / height taken by its border, and how far a new picture sits in front (m).
 * Upright, the frame's original photo reaches closer to the top and bottom edges than to the sides,
 * so the vertical inset is smaller or the old photo shows as lines above and below the poster.
 */
const PHOTO_INSET_X = 0.06;
const PHOTO_INSET_Y = 0.035;
const PHOTO_LIFT = 0.003;
/* Gap between two posters hung side by side (m). */
const POSTER_GAP = 0.06;
const SIDE_LEFT = 'left';
const SIDE_RIGHT = 'right';
const UP_AXIS = [0, 1, 0];
/* Wall frames face the camera along +Z; a quarter turn about it swaps landscape and portrait. */
const FACING_AXIS = [0, 0, 1];
const QUARTER_TURN_DEG = 90;

/*
 * The CRT's dark glass in Monitor_6's own coordinates (front = +X, right = -Z), measured from
 * square-on renders of the model: 0.332 x 0.251 m. The desktop is laid over this rectangle.
 */
const SCREEN_LOCAL = {
  tl: [0.1653, 0.3938, 0.1647], tr: [0.1633, 0.3938, -0.1669],
  br: [0.1633, 0.1433, -0.1669], bl: [0.1653, 0.1433, 0.1647],
};
/*
 * The model's knob is a 12-sided polygon whose edges show in the close-up, so a smooth knob is laid over it:
 * a recess ring and a slightly domed cap, both with this many segments, sized to cover the polygon.
 */
const KNOB = { segments: 64, capDepth: 0.0035, colour: 0xc4baa1, recess: 0x8f8873, icon: '#9c937c' };
/*
 * The chin's controls in Monitor_6's coordinates (y up, z: right is negative): four small menu buttons and the
 * power knob. Centres are the low-poly buttons' own centres, read from the model's vertices, so the smooth ones
 * sit exactly on top. ring = recess radius, a little larger than the old button (0.0055/0.0092/0.0092/0.0067/0.011)
 * so no polygon edge shows past it; cap = button radius.
 */
const CHIN_BUTTONS = [
  { y: 0.08388, z: 0.0371, ring: 0.0072, cap: 0.0058, icon: null },
  { y: 0.08388, z: 0.0137, ring: 0.0098, cap: 0.0081, icon: 'minus' },
  { y: 0.08388, z: -0.0137, ring: 0.0098, cap: 0.0081, icon: 'plus' },
  { y: 0.08388, z: -0.0371, ring: 0.0072, cap: 0.0058, icon: null },
  { y: 0.08388, z: -0.14121, ring: 0.0134, cap: 0.0103, icon: 'power' },
];
const POWER_LOCAL = [0.1633, 0.08388, -0.14121];
const POWER_SIZE = 0.022;

/**
 * setLoadProgress - updates the "Setting up the desk" dialog (shows it if hidden).
 * Params: phase - 'script', 'models' or 'room' (scene-logic loadPercent); share - 0..1 through it;
 *         file - what is being fetched, shown under the bar.
 * The bar holds as many blocks as fit its current width, so it never runs past the dialog.
 */
function setLoadProgress(phase, share, file) {
  const pct = Math.round(loadPercent(phase, share));
  const bar = ui.loader.querySelector('.dl-bar');
  ui.loader.hidden = false;
  const room = bar.clientWidth - 2 * LOADER_BLOCK.inset + LOADER_BLOCK.gap;
  const capacity = Math.max(0, Math.floor(room / (LOADER_BLOCK.width + LOADER_BLOCK.gap)));
  while (bar.children.length < capacity) bar.appendChild(document.createElement('i'));
  while (bar.children.length > capacity) bar.lastChild.remove();
  const lit = blocksFor(pct / 100, capacity);
  [...bar.children].forEach((block, i) => { block.style.visibility = i < lit ? 'visible' : 'hidden'; });
  ui.loader.querySelector('.dl-file').textContent = file;
  ui.loader.querySelector('.dl-pct').textContent = pct + '%';
  ui.loader.setAttribute('aria-valuenow', String(pct));
}

/**
 * buildDesk - loads both models, stages the desk and lights it.
 * Params: ctx - the shared three context; gains monitor, screen, speakers and focus.
 *         onBytes(loaded, total) - download progress of both models together (total 0 when unknown).
 */
async function buildDesk(ctx, onBytes) {
  const { THREE, scene, renderer } = ctx;
  const [{ GLTFLoader }, { RoomEnvironment }] = await Promise.all([
    import('three/addons/loaders/GLTFLoader.js'),
    import('three/addons/environments/RoomEnvironment.js'),
  ]);
  const loader = new GLTFLoader();
  ctx.loader = loader;
  const progress = {};
  const report = url => e => {
    progress[url] = e;
    const all = Object.values(progress);
    const known = all.every(p => p.lengthComputable) && all.length === 2;
    onBytes(all.reduce((sum, p) => sum + p.loaded, 0), known ? all.reduce((sum, p) => sum + p.total, 0) : 0);
  };
  const [office, deskSet] = await Promise.all([MODEL_OFFICE, MODEL_DESK].map(url => loader.loadAsync(url, report(url)).then(g => g.scene)));
  setLoadProgress('room', 0, 'Setting up the room');

  // Image-based light so the PBR materials read as plastic, wood and metal rather than flat colour.
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = ENV_INTENSITY;
  pmrem.dispose();

  const staged = stageOffice(THREE, scene, office, deskSet, LAYOUT);
  buildRoom(ctx, LAYOUT);

  const pc = new THREE.Group();
  scene.add(pc);
  pc.attach(staged.computer);
  pc.attach(staged.monitor);
  pc.userData.kind = 'monitor';
  ownMaterials(pc);
  for (const spk of staged.speakers) {
    spk.userData.kind = 'speaker';
    ownMaterials(spk);
  }
  scene.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });

  ctx.monitor = staged.monitor;
  ctx.focus = new THREE.Box3().setFromObject(staged.monitor).getCenter(new THREE.Vector3());
  ctx.speakers = staged.speakers;
  ctx.pickables.push(pc, ...staged.speakers);
  ctx.resume = addResumePages(THREE, scene, office);
  ctx.pickables.push(ctx.resume);
  // The power highlight is placed over the smooth knob as drawn, so the knob is built first.
  ctx.screen = screenGeometry(THREE, staged.monitor, addSmoothButtons(THREE, staged.monitor));
  ctx.lamp = addLampLight(THREE, scene, office);
  ctx.pickables.push(ctx.lamp.node);
  applyTheme(ctx, loadTheme(), true);
  ctx.cards = addBusinessCards(THREE, scene, staged.keyboard, renderer);
  ctx.tape = office.getObjectByName(TAPE_RECORDER);
  ctx.chairProps = CHAIR_PROPS.map(name => office.getObjectByName(name)).filter(Boolean);
  fitPortrait(ctx);
  addMakerBits(THREE, scene, makerSpots(THREE, staged.mouse), LAYOUT.deskTop);
  ctx.pickables.push(...ctx.cards);
  aimKeyLight(ctx);
  ui.credits.hidden = false;
}

/**
 * stageOffice - the Office scene as authored, with the computer moved to the
 * middle of the desk and the Computer Desk's speakers either side of it.
 * Returns: { monitor, computer, speakers }.
 */
function stageOffice(THREE, scene, office, deskSet, L) {
  const root = new THREE.Group();
  root.rotation.y = OFFICE_YAW;
  root.add(office);
  scene.add(root);
  hideByPrefix(office, L.hidden);
  scene.updateMatrixWorld(true);
  for (const { frame, image, leftOf, rightOf, copyOf } of L.photos) {
    const node = copyOf ? copyFrame(scene, copyOf, frame) : uprightFrame(THREE, scene, office.getObjectByName(frame));
    if (leftOf) hangBeside(THREE, node, scene.getObjectByName(leftOf), SIDE_LEFT);
    if (rightOf) hangBeside(THREE, node, scene.getObjectByName(rightOf), SIDE_RIGHT);
    hangPhoto(THREE, scene, node, image);
  }
  return arrangeComputer(THREE, scene, office, deskSet, L);
}

/**
 * uprightFrame - takes a wall frame out of the office model into the scene and stands it upright.
 * Params: node - the frame in the office model. Returns: the same node, now a direct child of the scene.
 */
function uprightFrame(THREE, scene, node) {
  scene.attach(node);
  turnAbout(THREE, node, FACING_AXIS, QUARTER_TURN_DEG);
  return node;
}

/**
 * copyFrame - makes another wall frame from one already hung (same mesh and look, its own position).
 * Params: source - name of the hung frame; name - name for the copy. Returns: the copy, in the scene.
 * Usage: copyFrame(scene, 'PhotoFrame2_46', 'BikeFrame'), then hangBeside to move it into place.
 */
function copyFrame(scene, source, name) {
  const copy = scene.getObjectByName(source).clone();
  copy.name = name;
  scene.add(copy);
  copy.updateMatrixWorld(true);
  return copy;
}

/**
 * hangBeside - moves a wall frame to sit left or right of another, centred at the same height, flush to the wall.
 * Params: frame - the frame to move (a direct child of the scene); other - the frame it goes beside;
 *         side - SIDE_LEFT or SIDE_RIGHT.
 */
function hangBeside(THREE, frame, other, side) {
  const box = boxOf(THREE, frame), target = boxOf(THREE, other);
  const centre = box.getCenter(new THREE.Vector3()), targetCentre = target.getCenter(new THREE.Vector3());
  frame.position.x += side === SIDE_LEFT
    ? target.min.x - POSTER_GAP - box.max.x
    : target.max.x + POSTER_GAP - box.min.x;
  frame.position.y += targetCentre.y - centre.y;
  frame.position.z += target.max.z - box.max.z;
  frame.updateMatrixWorld(true);
}

/**
 * hangPhoto - covers a wall frame's picture with another image.
 * The frames share one texture atlas, so a picture quad is laid just in front instead of swapping maps.
 * Params: frame - the frame node (facing +Z after staging); url - the image, already cropped to the frame.
 */
function hangPhoto(THREE, scene, frame, url) {
  const box = boxOf(THREE, frame);
  const size = box.getSize(new THREE.Vector3());
  const quad = new THREE.Mesh(
    new THREE.PlaneGeometry(size.x * (1 - 2 * PHOTO_INSET_X), size.y * (1 - 2 * PHOTO_INSET_Y)),
    new THREE.MeshStandardMaterial({ color: 0x000000, roughness: 0.6 }),
  );
  const centre = box.getCenter(new THREE.Vector3());
  quad.position.set(centre.x, centre.y, box.max.z + PHOTO_LIFT);
  scene.add(quad);
  new THREE.TextureLoader().load(url, tex => {
    tex.colorSpace = THREE.SRGBColorSpace;
    quad.material.map = tex;
    quad.material.color.set(0xffffff);
    quad.material.needsUpdate = true;
  });
}

/**
 * arrangeComputer - takes the Office computer parts out of their file, straightens them and
 * lays them out: case at the back, CRT on the case, keyboard and mouse in front, speakers either side.
 * Returns: { monitor, computer, keyboard, mouse, speakers }.
 */
function arrangeComputer(THREE, scene, office, deskSet, L) {
  scene.updateMatrixWorld(true);
  office.parent.updateMatrixWorld(true);
  deskSet.updateMatrixWorld(true);
  const take = name => {
    const obj = office.getObjectByName(name);
    scene.attach(obj);
    straighten(THREE, obj, STRAIGHTEN_DEG[name]);
    return obj;
  };
  const computer = take('Computer_5'), monitor = take('Monitor_6');
  const keyboard = take('Keyboard_3'), mouse = take('Computer_Mouse_4');

  // The CRT keeps its place on top of the case.
  const caseShift = placeOn(THREE, computer, { x: L.computerX, top: L.deskTop, minZ: L.back });
  monitor.position.add(caseShift);
  monitor.updateMatrixWorld(true);
  const caseBox = boxOf(THREE, computer);
  placeOn(THREE, keyboard, { x: L.computerX, top: L.deskTop, minZ: caseBox.max.z + L.keyboardGap });
  const keyBox = boxOf(THREE, keyboard);
  placeOn(THREE, mouse, { x: keyBox.max.x + L.mouseGap, top: L.deskTop, z: keyBox.getCenter(new THREE.Vector3()).z });

  const speakers = ['Loudspeaker01', 'Loudspeaker02'].map((name, i) => {
    const spk = deskSet.getObjectByName(name);
    scene.attach(spk);
    straighten(THREE, spk, SPEAKER_STRAIGHTEN_DEG[name]);
    spk.scale.multiplyScalar(L.speakerScale);
    spk.updateMatrixWorld(true);
    const half = (boxOf(THREE, spk).max.x - boxOf(THREE, spk).min.x) / 2;
    const x = i === 0 ? caseBox.min.x - L.speakerGap - half : caseBox.max.x + L.speakerGap + half;
    placeOn(THREE, spk, { x, top: L.deskTop, minZ: L.speakerBack });
    return spk;
  });
  return { monitor, computer, keyboard, mouse, speakers };
}

/**
 * addResumePages - stands a few sheets of paper in each empty magazine file and groups them with the files,
 * so the whole thing is one clickable "résumé" object.
 * Returns: the group (userData.kind 'resume', userData.pageMaterial for the glow).
 */
function addResumePages(THREE, scene, office) {
  const group = new THREE.Group();
  scene.add(group);
  const pageMaterial = new THREE.MeshStandardMaterial({ color: 0xf3efe4, roughness: 0.92 });
  const pages = [];
  for (const name of RESUME_HOLDERS) {
    const holder = office.getObjectByName(name);
    const box = boxOf(THREE, holder);
    const centre = box.getCenter(new THREE.Vector3());
    const span = box.max.x - box.min.x - 2 * PAGE.wall;
    for (let i = 0; i < PAGES_PER_HOLDER; i++) {
      const page = new THREE.Mesh(new THREE.BoxGeometry(PAGE.thickness, PAGE.height, PAGE.depth), pageMaterial);
      // Spread across the holder's width, each leaning a little differently, like a real stack of sheets.
      const lean = THREE.MathUtils.degToRad(PAGE_TILT_DEG) * (i % 2 ? 1 : -1) * (0.4 + i / PAGES_PER_HOLDER);
      page.position.set(box.min.x + PAGE.wall + span * (i + 0.5) / PAGES_PER_HOLDER, box.min.y + PAGE.wall + PAGE.height / 2, centre.z);
      page.rotation.z = lean;
      group.add(page);
      pages.push(page);
    }
    group.attach(holder);
  }
  ownMaterials(group);
  // ownMaterials gave every page its own copy; share one again so the glow pulses all pages together.
  const glow = pages[0].material;
  for (const page of pages) page.material = glow;
  group.userData.kind = 'resume';
  group.userData.pageMaterial = glow;
  return group;
}

/**
 * addSmoothButtons - lays smooth round controls over the CRT chin's low-poly ones (the power knob and the
 * four menu buttons). Each gets a recess ring and a slightly domed cap; ray-casting the CRT finds the bezel
 * and the old button's front so the new one covers it exactly.
 * Params: monitor - the Monitor_6 node (buttons are added as its children and move with it).
 * Returns: the power knob as drawn, { centre (its front face, monitor-local [x, y, z]), radius (of its ring) },
 *          for the zoomed-in view's clickable highlight.
 */
function addSmoothButtons(THREE, monitor) {
  monitor.updateMatrixWorld(true);
  const x = POWER_LOCAL[0];
  // Local +X is the CRT's front: cast along -X to find the surface depth at a point of the chin.
  const frontAt = (y, z) => {
    const origin = monitor.localToWorld(new THREE.Vector3(x + 0.2, y, z));
    const target = monitor.localToWorld(new THREE.Vector3(x - 0.2, y, z));
    const hit = new THREE.Raycaster(origin, target.sub(origin).normalize()).intersectObject(monitor, true)[0];
    return hit ? monitor.worldToLocal(hit.point.clone()).x : x;
  };
  const recess = new THREE.MeshStandardMaterial({ color: KNOB.recess, roughness: 0.7 });
  const plain = new THREE.MeshStandardMaterial({ color: KNOB.colour, roughness: 0.5 });
  let power = null;
  for (const b of CHIN_BUTTONS) {
    const bezel = frontAt(b.y, b.z + b.ring * 1.6);
    const oldFront = frontAt(b.y, b.z);
    const ring = new THREE.Mesh(new THREE.CylinderGeometry(b.ring, b.ring, Math.max(oldFront - bezel, 0) + 0.0012, KNOB.segments), recess);
    const face = b.icon ? new THREE.MeshStandardMaterial({ color: KNOB.colour, roughness: 0.5, map: buttonIconTexture(THREE, b.icon) }) : plain;
    // CylinderGeometry groups: side, top (+Y, the front once turned), bottom.
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(b.cap * 0.93, b.cap, KNOB.capDepth, KNOB.segments), [plain, face, plain]);
    // Cylinders stand along +Y; a quarter turn about Z points them out of the CRT's front (+X).
    for (const part of [ring, cap]) {
      part.rotation.z = -Math.PI / 2;
      part.castShadow = part.receiveShadow = true;
      monitor.add(part);
    }
    ring.position.set((bezel + oldFront) / 2 + 0.0006, b.y, b.z);
    cap.position.set(oldFront + KNOB.capDepth / 2 - 0.0005, b.y, b.z);
    if (b.icon === 'power') power = { centre: [oldFront + KNOB.capDepth - 0.0005, b.y, b.z], radius: b.ring };
  }
  return power;
}

/**
 * buttonIconTexture - a light texture with a faint symbol ('power', 'minus' or 'plus'), multiplied over the cap.
 * Returns: a CanvasTexture, turned so the symbol is upright on the cap's face.
 */
function buttonIconTexture(THREE, icon) {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const g = canvas.getContext('2d');
  g.fillStyle = '#ffffff';
  g.fillRect(0, 0, size, size);
  g.strokeStyle = KNOB.icon;
  g.lineWidth = size * 0.05;
  g.lineCap = 'round';
  const c = size / 2, r = size * 0.2;
  g.beginPath();
  if (icon === 'power') {
    g.arc(c, c, r, -Math.PI / 2 + 0.75, -Math.PI / 2 - 0.75 + Math.PI * 2);
    g.moveTo(c, c - r * 1.25);
    g.lineTo(c, c - r * 0.15);
  } else {
    g.moveTo(c - r, c);
    g.lineTo(c + r, c);
    if (icon === 'plus') { g.moveTo(c, c - r); g.lineTo(c, c + r); }
  }
  g.stroke();
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  // The cylinder's cap maps the canvas upside down once the button is turned to face forward.
  tex.center.set(0.5, 0.5);
  tex.rotation = Math.PI;
  return tex;
}

/**
 * addLampLight - turns the desk lamp into the day/night switch: a warm spotlight from its shade onto the
 * desk and a small glowing bulb, both off by day.
 * Returns: { node (the clickable lamp, kind 'lamp'), spot, bulb, night (0 = day, 1 = night), target }.
 */
function addLampLight(THREE, scene, office) {
  const node = office.getObjectByName('Lamp01_57');
  const shade = office.getObjectByName('Lamp_Shade001_52');
  const centre = boxOf(THREE, shade).getCenter(new THREE.Vector3());
  const spot = new THREE.SpotLight(LAMP.colour, 0, LAMP.distance, THREE.MathUtils.degToRad(LAMP.angleDeg), LAMP.penumbra, LAMP.decay);
  spot.position.copy(centre);
  spot.target.position.copy(centre).add(new THREE.Vector3(...LAMP.reach));
  spot.castShadow = true;
  spot.shadow.mapSize.set(1024, 1024);
  spot.shadow.bias = -0.0005;
  scene.add(spot, spot.target);
  const bulb = new THREE.Mesh(
    new THREE.SphereGeometry(LAMP.bulbRadius, 24, 16),
    new THREE.MeshBasicMaterial({ color: LAMP.colour, transparent: true, opacity: 0, toneMapped: false }),
  );
  bulb.position.copy(centre).add(new THREE.Vector3(0, -LAMP.bulbRadius * 2, 0));
  scene.add(bulb);
  const head = addLampHead(THREE, scene, centre, new THREE.Vector3(...LAMP.reach).normalize());
  scene.attach(node);
  ownMaterials(node);
  node.userData.kind = 'lamp';
  return { node, spot, bulb, night: 0, target: 0, shade, ...head };
}

/**
 * makerSpots - where the Raspberry Pi and the breadboard lie, measured from the mouse.
 * Returns: { pi, breadboard }, each { x, z, yawDeg } in world metres.
 */
function makerSpots(THREE, mouse) {
  const box = boxOf(THREE, mouse);
  const centreZ = box.getCenter(new THREE.Vector3()).z;
  const spot = ({ dx, dz, yawDeg }) => ({ x: box.max.x + dx, z: centreZ + dz, yawDeg });
  return { pi: spot(MAKER_SPOTS.pi), breadboard: spot(MAKER_SPOTS.breadboard) };
}

/**
 * addLampHead - what makes the lamp read as "on" from the desk view: a soft glow at the shade's mouth,
 * a faint cone of light towards the desk and a warm light inside the shade. All start invisible.
 * Params: centre - the shade's centre (world); dir - unit vector the lamp points along.
 * Returns: { glow (Sprite), beam (Mesh), inner (PointLight) } for stepTheme to fade.
 */
function addLampHead(THREE, scene, centre, dir) {
  const mouth = centre.clone().addScaledVector(dir, LAMP_HEAD.mouthLift);
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: radialGlowTexture(THREE), color: LAMP.colour, transparent: true, opacity: 0,
    blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false,
  }));
  glow.position.copy(mouth);
  glow.scale.setScalar(LAMP_HEAD.glowSize);
  const beam = new THREE.Mesh(
    new THREE.CylinderGeometry(LAMP.bulbRadius * 2, LAMP_HEAD.beamSpread, LAMP_HEAD.beamLength, 48, 1, true),
    new THREE.MeshBasicMaterial({
      map: beamFadeTexture(THREE), color: LAMP.colour, transparent: true, opacity: 0, side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false,
    }),
  );
  // The cylinder's narrow top (+Y) sits at the mouth and its wide end points along dir.
  beam.quaternion.setFromUnitVectors(new THREE.Vector3(0, -1, 0), dir);
  beam.position.copy(mouth).addScaledVector(dir, LAMP_HEAD.beamLength / 2);
  const inner = new THREE.PointLight(LAMP.colour, 0, LAMP_HEAD.innerRange, LAMP.decay);
  inner.position.copy(centre);
  scene.add(glow, beam, inner);
  return { glow, beam, inner };
}

/** radialGlowTexture - a white dot fading to transparent, tinted by the material colour. Returns: a CanvasTexture. */
function radialGlowTexture(THREE) {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const g = canvas.getContext('2d');
  const grad = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.25, 'rgba(255,255,255,0.45)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}

/** beamFadeTexture - bright at the top (v = 1, the lamp) fading to nothing at the bottom. Returns: a CanvasTexture. */
function beamFadeTexture(THREE) {
  const canvas = document.createElement('canvas');
  canvas.width = 4;
  canvas.height = 128;
  const g = canvas.getContext('2d');
  const grad = g.createLinearGradient(0, 0, 0, canvas.height);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, canvas.width, canvas.height);
  return new THREE.CanvasTexture(canvas);
}

/** loadTheme - the visitor's saved room theme, or the first-visit look (dark, lamp on). */
function loadTheme() {
  try { return initialTheme(localStorage.getItem(THEME_STORAGE_KEY)); } catch (e) { return initialTheme(null); }
}

/**
 * applyTheme - starts easing the room towards day (0) or night (1).
 * Params: ctx - the three context; night - 0 or 1; instant - jump straight there (first load, not saved).
 * A click on the lamp (not instant) is remembered for the next visit.
 */
function applyTheme(ctx, night, instant = false) {
  ctx.lamp.target = night;
  if (instant) { ctx.lamp.night = night; stepTheme(ctx, 0); return; }
  try { localStorage.setItem(THEME_STORAGE_KEY, night ? 'night' : 'day'); } catch (e) { /* storage blocked: choice lasts this visit only */ }
}

/**
 * stepTheme - moves the room's lighting a frame closer to the wanted theme and applies it.
 * Params: ctx - the three context; dt - ms since the last frame (0 just applies the current mix).
 */
function stepTheme(ctx, dt) {
  const L = ctx.lamp;
  const step = dt / THEME_MS;
  L.night += Math.max(-step, Math.min(step, L.target - L.night));
  const k = L.night;
  const mix = ([day, night]) => day + (night - day) * k;
  ctx.hemi.intensity = mix(THEMES.hemi);
  ctx.key.intensity = mix(THEMES.key);
  ctx.fill.intensity = mix(THEMES.fill);
  ctx.scene.environmentIntensity = mix(THEMES.env);
  L.spot.intensity = mix(THEMES.lamp);
  L.bulb.material.opacity = mix(THEMES.bulb);
  L.glow.material.opacity = mix(THEMES.headGlow);
  L.beam.material.opacity = mix(THEMES.beam);
  L.inner.intensity = mix(THEMES.innerLight);
  ctx.scene.background.setHex(THEMES.background[0]).lerp(new ctx.THREE.Color(THEMES.background[1]), k);
  ctx.scene.fog.color.copy(ctx.scene.background);
  // The cards are unlit (printed like signs), so they are dimmed with the room by hand.
  ctx.cardFace = mix(THEMES.cardFace);
}

/**
 * addBusinessCards - a small wooden stand left of the keyboard holding a GitHub and a LinkedIn card upright,
 * leaning back towards the camera. Each card is clickable (userData.kind 'link', userData.url) and has a
 * brand-coloured halo behind it that fades in on hover.
 * Params: keyboard - the keyboard node, to place the stand beside it; renderer - for texture filtering.
 * Returns: the two clickable cards.
 */
function addBusinessCards(THREE, scene, keyboard, renderer) {
  const keyBox = boxOf(THREE, keyboard);
  const standWidth = PROFILE_CARDS.length * CARD.width + (PROFILE_CARDS.length - 1) * CARD.between + 2 * CARD_STAND.margin;
  const x = keyBox.min.x - CARD.keyboardGap - standWidth / 2;
  const z = keyBox.getCenter(new THREE.Vector3()).z;
  const stand = new THREE.Mesh(
    new THREE.BoxGeometry(standWidth, CARD_STAND.height, CARD_STAND.depth),
    new THREE.MeshStandardMaterial({ color: CARD_STAND.colour, roughness: 0.55 }),
  );
  stand.position.set(x, LAYOUT.deskTop + CARD_STAND.height / 2, z);
  stand.castShadow = stand.receiveShadow = true;
  scene.add(stand);

  const lean = THREE.MathUtils.degToRad(CARD.leanDeg);
  const seat = LAYOUT.deskTop + CARD_STAND.height - CARD.seat;
  const geometry = new THREE.BoxGeometry(CARD.width, CARD.height, CARD.thickness);
  const haloTexture = haloTextureOnce(THREE);
  return PROFILE_CARDS.map((spec, i) => {
    // The printed face is unlit, like a sign: lighting and tone mapping would wash the brand colours out.
    const face = new THREE.MeshBasicMaterial({ map: cardTexture(THREE, spec, renderer), toneMapped: false });
    const edge = new THREE.MeshStandardMaterial({ color: spec.bg, roughness: 0.6 });
    // BoxGeometry faces: +x, -x, +y, -y, +z (the printed face, towards the camera), -z.
    const card = new THREE.Mesh(geometry, [edge, edge, edge, edge, face, edge]);
    const offset = (i - (PROFILE_CARDS.length - 1) / 2) * (CARD.width + CARD.between);
    card.position.set(x + offset, seat + (CARD.height / 2) * Math.cos(lean), z - (CARD.height / 2) * Math.sin(lean));
    card.rotation.x = -lean;
    card.castShadow = card.receiveShadow = true;
    card.userData = { kind: 'link', url: spec.url, label: spec.label, glow: spec.faceGlow, face };

    const halo = new THREE.Mesh(
      new THREE.PlaneGeometry(CARD.width * HALO.scale, CARD.height * HALO.scale * 1.25),
      new THREE.MeshBasicMaterial({ map: haloTexture, color: spec.glow, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false }),
    );
    halo.position.z = -CARD.thickness;
    halo.raycast = () => {};
    card.add(halo);
    card.userData.halo = halo;
    scene.add(card);
    return card;
  });
}

/**
 * haloTextureOnce - a soft radial falloff, white in the middle to transparent at the edge, tinted per card.
 * Returns: a CanvasTexture (made once and shared).
 */
function haloTextureOnce(THREE) {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const g = canvas.getContext('2d');
  const grad = g.createRadialGradient(size / 2, size / 2, size * 0.12, size / 2, size / 2, size / 2);
  grad.addColorStop(0, 'rgba(255,255,255,0.9)');
  grad.addColorStop(0.45, 'rgba(255,255,255,0.35)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}

/**
 * cardTexture - draws a business card face: brand colour, the brand mark, and the profile handle.
 * Params: spec - one PROFILE_CARDS entry. Returns: a CanvasTexture (the GitHub mark is drawn once its SVG loads).
 */
function cardTexture(THREE, spec, renderer) {
  const { width: W, height: H } = CARD_TEXTURE;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const g = canvas.getContext('2d');
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
  // Seen from the desk a card is only ~100 px wide, so the face is just a big centred mark and the
  // handle in large bold type - small print would only turn to mush.
  const markSize = H * 0.46, markX = (W - markSize) / 2, markY = H * 0.13;
  const paint = () => {
    g.fillStyle = spec.bg;
    g.fillRect(0, 0, W, H);
    g.fillStyle = spec.fg;
    g.textAlign = 'center';
    g.font = `700 ${Math.round(H * 0.17)}px 'Segoe UI', Arial, sans-serif`;
    g.fillText(spec.handle, W / 2, H * 0.84, W * 0.9);
    g.textAlign = 'left';
    if (spec.mark === 'linkedin') drawLinkedInMark(g, markX, markY, markSize, spec);
    tex.needsUpdate = true;
  };
  paint();
  if (spec.mark === 'github') {
    // Recolour the black SVG mark white by drawing it as a mask.
    const img = new Image();
    img.onload = () => {
      const tmp = document.createElement('canvas');
      tmp.width = tmp.height = markSize;
      const t = tmp.getContext('2d');
      t.drawImage(img, 0, 0, markSize, markSize);
      t.globalCompositeOperation = 'source-in';
      t.fillStyle = spec.fg;
      t.fillRect(0, 0, markSize, markSize);
      g.drawImage(tmp, markX, markY);
      tex.needsUpdate = true;
    };
    img.src = GITHUB_MARK;
  }
  return tex;
}

/** drawLinkedInMark - the LinkedIn "in" mark: a white rounded square with "in" in the card colour. */
function drawLinkedInMark(g, x, y, size, spec) {
  const r = size * 0.16;
  g.fillStyle = spec.fg;
  g.beginPath();
  g.roundRect(x, y, size, size, r);
  g.fill();
  g.fillStyle = spec.bg;
  g.font = `700 ${Math.round(size * 0.72)}px 'Segoe UI', Arial, sans-serif`;
  g.textBaseline = 'alphabetic';
  g.fillText('in', x + size * 0.14, y + size * 0.8);
}

/** boxOf - world bounding box of an object. */
function boxOf(THREE, obj) {
  return new THREE.Box3().setFromObject(obj);
}

/**
 * straighten - turns an object about the vertical axis through its centre.
 * Params: obj - a direct child of the scene; deg - degrees to turn.
 */
function straighten(THREE, obj, deg) {
  if (!deg) return;
  turnAbout(THREE, obj, UP_AXIS, deg);
}

/**
 * turnAbout - turns an object about a world axis through its centre.
 * Params: obj - a direct child of the scene; axis - [x, y, z] unit axis; deg - degrees to turn.
 * Usage: turnAbout(THREE, frame, FACING_AXIS, 90) stands a landscape wall frame upright.
 */
function turnAbout(THREE, obj, axis, deg) {
  const c = boxOf(THREE, obj).getCenter(new THREE.Vector3());
  const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(...axis), THREE.MathUtils.degToRad(deg));
  obj.position.sub(c).applyQuaternion(q).add(c);
  obj.quaternion.premultiply(q);
  obj.updateMatrixWorld(true);
}

/**
 * placeOn - moves a scene-level object so it stands on a surface.
 * Params: opts - { x: centre x, top: surface height, and z (centre) or minZ (back edge) }.
 * Returns: the Vector3 it was moved by, so attached parts can follow.
 */
function placeOn(THREE, obj, { x, top, z, minZ }) {
  const b = boxOf(THREE, obj);
  const c = b.getCenter(new THREE.Vector3());
  const shift = new THREE.Vector3(x - c.x, top - b.min.y, minZ !== undefined ? minZ - b.min.z : z - c.z);
  obj.position.add(shift);
  obj.updateMatrixWorld(true);
  return shift;
}

/** hideByPrefix - hides every node whose name starts with one of the prefixes. */
function hideByPrefix(root, prefixes) {
  root.traverse(o => { if (prefixes.some(p => o.name.startsWith(p))) o.visible = false; });
}

/**
 * screenGeometry - the CRT glass and power knob in world space.
 * Params: monitor - the CRT; knob - the drawn power knob from addSmoothButtons ({ centre, radius }, monitor-local).
 * Returns: { corners: { tl, tr, br, bl }, power (knob face centre), powerRim (top of its ring) } as Vector3s.
 */
function screenGeometry(THREE, monitor, knob) {
  monitor.updateMatrixWorld(true);
  const world = p => monitor.localToWorld(new THREE.Vector3(...p));
  const corners = {};
  for (const k of Object.keys(SCREEN_LOCAL)) corners[k] = world(SCREEN_LOCAL[k]);
  const [x, y, z] = knob.centre;
  return { corners, power: world(knob.centre), powerRim: world([x, y + knob.radius, z]) };
}

/** aimKeyLight - centres the shadow-casting light on the computer. */
function aimKeyLight(ctx) {
  const { key, focus } = ctx;
  key.target.position.copy(focus);
  key.position.copy(focus).add(new ctx.THREE.Vector3(...KEY_LIGHT_OFFSET));
  ctx.scene.add(key.target);
}

/**
 * buildRoom - a floor and a back wall around the staged desk (the models have none).
 * Params: ctx - the shared three context; layout - gives wallZ.
 */
function buildRoom(ctx, { wallZ }) {
  const { THREE, scene } = ctx;
  const wall = new THREE.Mesh(new THREE.PlaneGeometry(10, 5), new THREE.MeshStandardMaterial({ color: ROOM.wall, roughness: 0.95 }));
  wall.position.set(0, 2.5, wallZ);
  scene.add(wall);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), new THREE.MeshStandardMaterial({ color: ROOM.floor, roughness: 0.8 }));
  floor.rotation.x = -Math.PI / 2;
  scene.add(floor);
}

/* ----------------------------------------------------------- interaction */

/**
 * bindPointer - hover highlight and click/tap picking on the canvas.
 * A press that moves more than a few px is treated as a drag, not a click.
 */
function bindPointer(ctx) {
  const el = ctx.renderer.domElement;
  const ray = new ctx.THREE.Raycaster();
  const ndc = new ctx.THREE.Vector2();
  let down = null;

  const pick = e => {
    const r = el.getBoundingClientRect();
    ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, ctx.camera);
    const hit = ray.intersectObjects(ctx.pickables, true)[0];
    if (!hit) return null;
    let o = hit.object;
    while (o && !o.userData.kind) o = o.parent;
    return o;
  };

  el.addEventListener('pointermove', e => {
    if (view.state !== 'desk') return;
    const o = pick(e);
    el.style.cursor = o ? 'pointer' : 'default';
    if (o !== ctx.hovered) { setGlow(ctx.hovered, 0); setGlow(o, o && o.userData.glow !== undefined ? o.userData.glow : HOVER_GLOW); wake(); }
    ctx.hovered = o;
  });
  el.addEventListener('pointerdown', e => { down = { x: e.clientX, y: e.clientY }; });
  el.addEventListener('pointerup', e => {
    if (!down || Math.hypot(e.clientX - down.x, e.clientY - down.y) > 8) return;
    down = null;
    if (view.state !== 'desk') return;
    const o = pick(e);
    if (!o) return;
    if (o.userData.kind === 'monitor') startFlyIn();
    if (o.userData.kind === 'speaker') toggleMusic();
    if (o.userData.kind === 'resume') setResumeOpen(true);
    if (o.userData.kind === 'link') window.open(o.userData.url, '_blank', 'noopener');
    if (o.userData.kind === 'lamp') applyTheme(three, three.lamp.target ? 0 : 1);
  });
}

/** startFlyIn - camera dives into the monitor, then the desktop takes over. */
function startFlyIn() {
  if (view.request('enter') !== 'flyingIn') return;
  if (three) { setGlow(three.hovered, 0); three.hovered = null; three.renderer.domElement.style.cursor = 'default'; }
  pauseMusic();
  ui.hint.classList.add('is-done');
  setResumeOpen(false);
  flyTo(deskPose(), closePose(), () => {
    view.request('arrived');
    if (canEmbed()) { setEmbedded(true); stopLoop(); renderOnce(); } else hideLayer();
    requestEnter();
  });
}

/** canEmbed - true when the desktop can sit on the 3D glass (scene built, screen wide enough). */
function canEmbed() {
  return !!(three && three.screen) && window.innerWidth >= EMBED_MIN_WIDTH && window.innerHeight >= EMBED_MIN_HEIGHT;
}

/**
 * setEmbedded - switches the desktop between the 2D CSS monitor frame and the 3D monitor's glass.
 * Params: on - true to lay the desktop over the 3D screen (index.html styles html.embedded).
 */
function setEmbedded(on) {
  embedded = on;
  document.documentElement.classList.toggle('embedded', on);
  // The live desktop replaces the 3D screen picture; leaving it visible would show in the margin.
  if (three && three.screenMesh) three.screenMesh.visible = !on;
  if (on) placeEmbeddedScreen();
}

/**
 * placeEmbeddedScreen - projects the 3D glass and power button to the page and hands their
 * pixel boxes to index.html as CSS variables (--es-* screen, --ep-* power button).
 */
function placeEmbeddedScreen() {
  // The camera may have just been moved (end of the fly-in, resize); its matrices only refresh on
  // render, so update them here or the projection uses the previous frame's pose.
  three.camera.updateMatrixWorld();
  const { corners, power, powerRim } = three.screen;
  const pts = Object.values(corners).map(toPixels);
  const xs = pts.map(p => p.x), ys = pts.map(p => p.y);
  const glassW = Math.max(...xs) - Math.min(...xs), glassH = Math.max(...ys) - Math.min(...ys);
  const marginX = glassW * SCREEN_OVERSCAN, marginY = glassH * SCREEN_OVERSCAN;
  // The highlight circle covers the knob's ring: its diameter is twice the projected ring radius.
  const p = toPixels(power), size = 2 * Math.abs(p.y - toPixels(powerRim).y);
  const css = document.documentElement.style;
  css.setProperty('--es-l', Math.min(...xs) + marginX + 'px');
  css.setProperty('--es-t', Math.min(...ys) + marginY + 'px');
  css.setProperty('--es-w', glassW - 2 * marginX + 'px');
  css.setProperty('--es-h', glassH - 2 * marginY + 'px');
  css.setProperty('--ep-l', p.x - size / 2 + 'px');
  css.setProperty('--ep-t', p.y - size / 2 + 'px');
  css.setProperty('--ep-s', size + 'px');
}

/** toPixels - a world point projected to page pixels for the current camera. */
function toPixels(v) {
  const n = v.clone().project(three.camera);
  return { x: (n.x + 1) / 2 * window.innerWidth, y: (1 - n.y) / 2 * window.innerHeight };
}

/** renderOnce - draws a single frame (the embedded view is still, so no loop is needed). */
function renderOnce() {
  three.renderer.render(three.scene, three.camera);
}

/**
 * closePose - camera pose square-on to the CRT, framing the glass and the power knob below it.
 * Returns: { pos, look } arrays in world units.
 */
function closePose() {
  if (!three || !three.screen) return deskPose();
  const { THREE, camera } = three;
  const { corners: { tl, tr, bl, br }, power } = three.screen;
  const centre = tl.clone().add(tr).add(bl).add(br).multiplyScalar(0.25);
  const right = tr.clone().sub(tl), up = tl.clone().sub(bl);
  const upDir = up.clone().normalize();
  const normal = right.clone().cross(up).normalize();
  // Vertical span to show, measured along the screen's up axis from the glass centre.
  const top = up.length() / 2;
  const bottom = power.clone().sub(centre).dot(upDir) - POWER_SIZE;
  const aim = centre.clone().addScaledVector(upDir, (top + bottom) / 2);
  const tanHalf = Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2);
  const fill = 1 - 2 * CLOSE_MARGIN;
  const fitH = (top - bottom) / (2 * fill * tanHalf);
  const fitW = right.length() / (2 * fill * tanHalf * camera.aspect);
  const pos = aim.clone().addScaledVector(normal, Math.max(fitH, fitW));
  return { pos: pos.toArray(), look: aim.toArray() };
}

/**
 * flyTo - animates the camera between two poses.
 * Params: from, to - { pos, look }; done - called when the move ends.
 */
function flyTo(from, to, done) {
  if (!three) { done(); return; }
  const { THREE } = three;
  flight = {
    start: performance.now(), done,
    p0: new THREE.Vector3(...from.pos), p1: new THREE.Vector3(...to.pos),
    l0: new THREE.Vector3(...from.look), l1: new THREE.Vector3(...to.look),
  };
  startLoop();
}

/**
 * deskPose - the desk view, pulled back on tall/narrow screens so the speakers stay in frame.
 * Params: aspect - viewport width / height (defaults to the live camera's).
 * Returns: { pos, look }.
 */
function deskPose(aspect = three ? three.camera.aspect : window.innerWidth / window.innerHeight) {
  const vHalf = Math.tan((CAMERA_FOV * Math.PI) / 360);
  const halfWidth = aspect < 1 ? DESK_HALF_WIDTH_PORTRAIT : DESK_HALF_WIDTH;
  const dist = Math.max(DESK_DISTANCE, halfWidth / (vHalf * aspect));
  const [x, y, z] = three && three.focus ? three.focus.toArray() : DEFAULT_FOCUS;
  const rise = DESK_EYE_RISE + (dist - DESK_DISTANCE) * 0.18;
  return { pos: [x, y + rise, z + dist], look: [x, y + DESK_LOOK_DROP, z] };
}

/** setPose - places a camera at a { pos, look } pose. */
function setPose(camera, pose) {
  camera.position.set(...pose.pos);
  camera.lookAt(...pose.look);
}

/* ---------------------------------------------------------------- loop */

/** startLoop - (re)starts the render loop if it is not already running. */
function startLoop() {
  if (!three || three.raf || document.hidden) return;
  const tick = now => {
    three.raf = requestAnimationFrame(tick);
    if (!shouldRender(isBusy(now), now, three.lastFrame || 0, IDLE_FRAME_MS)) return;
    probeQuality(now);
    stepFlight(now);
    stepSpeakers(now);
    pulseResume(now);
    placeTags();
    easeCardHalos();
    stepTheme(three, now - (three.lastFrame || now));
    three.lastFrame = now;
    three.renderer.render(three.scene, three.camera);
  };
  three.raf = requestAnimationFrame(tick);
}

/**
 * isBusy - true while something on the desk moves and needs every display frame:
 * a camera flight, a hover, the lamp fading, the quality probe, or the settle time after one of these.
 */
function isBusy(now) {
  return !!flight || !!three.hovered || three.lamp.night !== three.lamp.target || !!three.probe || now < (three.busyUntil || 0);
}

/** wake - keeps the desk at full frame rate for a while (default SETTLE_MS), e.g. while a hover glow fades. */
function wake(ms = SETTLE_MS) {
  if (three) three.busyUntil = performance.now() + ms;
}

/* ---------------------------------------------------------------- quality */

/** startQualityProbe - starts (or restarts) measuring the desk's frame rate. */
function startQualityProbe(ctx) {
  ctx.probe = { start: performance.now() + QUALITY_PROBE.delayMs, times: [] };
}

/**
 * probeQuality - records drawn frames during the probe; once enough are in, steps quality down on a slow
 * machine (and probes again at the new level) or ends the probe.
 * Params: now - the frame time in ms.
 */
function probeQuality(now) {
  const probe = three.probe;
  if (!probe || now < probe.start) return;
  const last = probe.times[probe.times.length - 1];
  if (last !== undefined && now - last > QUALITY_PROBE.gapMs) probe.times = [];
  probe.times.push(now);
  if (probe.times.length < QUALITY_PROBE.frames) return;
  const level = nextQuality(three.quality || 0, framesPerSecond(probe.times));
  three.probe = null;
  if (level === (three.quality || 0)) return;
  applyQuality(three, level);
  startQualityProbe(three);
}

/**
 * applyQuality - lowers render quality for slower machines.
 * Params: ctx - the three context; level - 1: native resolution (no 1.5x supersampling) and smaller shadow
 *         maps; 2: also no shadows.
 */
function applyQuality(ctx, level) {
  ctx.quality = level;
  if (level >= 1) {
    ctx.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, LOW_QUALITY.pixelRatio));
    ctx.renderer.setSize(window.innerWidth, window.innerHeight);
    resizeShadow(ctx.key, LOW_QUALITY.keyShadow);
    resizeShadow(ctx.lamp.spot, LOW_QUALITY.spotShadow);
  }
  if (level >= 2) {
    ctx.key.castShadow = false;
    ctx.lamp.spot.castShadow = false;
  }
}

/** resizeShadow - gives a light a smaller shadow map (the old one is freed and rebuilt at the new size). */
function resizeShadow(light, size) {
  light.shadow.mapSize.set(size, size);
  if (!light.shadow.map) return;
  light.shadow.map.dispose();
  light.shadow.map = null;
}

/**
 * loadFullTextures - swaps the office model's placeholder textures for the real ones once they arrive.
 * Materials are matched by name; on failure the desk simply keeps its light textures.
 */
async function loadFullTextures(ctx) {
  try {
    const { parser } = await ctx.loader.loadAsync(MODEL_OFFICE_TEXTURES);
    const full = new Map((await parser.getDependencies('material')).map(m => [m.name, m]));
    ctx.scene.traverse(o => {
      if (!o.isMesh) return;
      for (const m of [].concat(o.material)) {
        const source = full.get(m.name);
        if (!source) continue;
        for (const slot of TEXTURE_SLOTS) {
          if (!source[slot] || m[slot] === source[slot]) continue;
          if (m[slot]) m[slot].dispose();
          m[slot] = source[slot];
        }
        m.needsUpdate = true;
      }
    });
    wake();
  } catch (err) {
    console.warn('[desk] full textures unavailable, keeping the light ones:', err);
  }
}

/** stopLoop - pauses rendering (in the computer view or a hidden tab). */
function stopLoop() {
  if (!three || !three.raf) return;
  cancelAnimationFrame(three.raf);
  three.raf = 0;
}

/** stepFlight - advances the active camera animation, if any. */
function stepFlight(now) {
  if (!flight) return;
  const k = easeInOutCubic((now - flight.start) / FLY_MS);
  const look = flight.l0.clone().lerp(flight.l1, k);
  three.camera.position.lerpVectors(flight.p0, flight.p1, k);
  three.camera.lookAt(look);
  if (k < 1) return;
  const done = flight.done;
  flight = null;
  done();
}

/** fitPortrait - hides the chair (and its clipboard) on upright screens, so the desk reads clearly on a phone. */
function fitPortrait(ctx) {
  for (const prop of ctx.chairProps || []) prop.visible = ctx.camera.aspect >= 1;
}

/** onResize - keeps the canvas and camera matched to the viewport. */
function onResize(ctx) {
  ctx.renderer.setSize(window.innerWidth, window.innerHeight);
  ctx.camera.aspect = window.innerWidth / window.innerHeight;
  ctx.camera.updateProjectionMatrix();
  fitPortrait(ctx);
  wake();
  if (view.state === 'desk' && !flight) setPose(ctx.camera, deskPose(ctx.camera.aspect));
  if (!embedded || view.state !== 'computer') return;
  if (!canEmbed()) { setEmbedded(false); hideLayer(true); return; }
  setPose(ctx.camera, closePose());
  renderOnce();
  placeEmbeddedScreen();
}

/** onVisibility - pause rendering and music in a background tab. */
function onVisibility() {
  if (document.hidden) { stopLoop(); pauseMusic(); return; }
  if (view.state === 'desk' || view.state === 'flyingIn' || view.state === 'flyingOut') startLoop();
}

/* --------------------------------------------------------------- looks */

/**
 * ownMaterials - gives an object its own copies of its materials (except the screen),
 * so hovering one speaker does not light up the other, or the keyboard.
 */
function ownMaterials(obj) {
  obj.traverse(o => {
    if (!o.isMesh) return;
    const copy = o.material.clone();
    copy.userData = { ...o.material.userData };
    o.material = copy;
  });
}

/** setGlow - tints an object's materials with an emissive colour (0 = off). */
function setGlow(obj, hex) {
  if (!obj) return;
  obj.traverse(o => {
    if (!o.isMesh || o === (three && three.screenMesh)) return;
    for (const m of [].concat(o.material)) if (m.emissive) m.emissive.setHex(hex);
  });
}

/**
 * pulseResume - a slow warm glow on the résumé pages while on the desk (hover takes over with a steady glow).
 * Params: now - the frame time in ms.
 */
function pulseResume(now) {
  const resume = three && three.resume;
  if (!resume || three.hovered === resume) return;
  const k = view.state === 'desk' ? (1 - Math.cos((now / PAGE_PULSE_MS) * Math.PI * 2)) / 2 : 0;
  resume.userData.pageMaterial.emissive.setHex(PAGE_GLOW).multiplyScalar(k);
}

/**
 * placeTags - keeps the "Résumé" tag over the magazine files and, while the song is on, the now-playing
 * banner over the tape recorder (pulled inside the window, as the recorder sits at its left edge).
 * Both are shown only on the still desk view.
 */
function placeTags() {
  const show = !!three && view.state === 'desk' && !flight;
  ui.tag.hidden = !show;
  ui.np.hidden = !(show && music && !music.dismissed && three.tape);
  if (!show) return;
  three.camera.updateMatrixWorld();
  if (three.resume) placeTagOver(ui.tag, [three.resume]);
  if (ui.np.hidden) return;
  if (window.innerWidth < BANNER_DOCK_BELOW_PX) {
    // Anchored at its bottom centre (CSS), so its top lands at BANNER_DOCK_TOP_PX.
    ui.np.style.left = window.innerWidth / 2 + 'px';
    ui.np.style.top = BANNER_DOCK_TOP_PX + ui.np.offsetHeight + 'px';
    return;
  }
  placeTagOver(ui.np, [three.tape]);
}

/**
 * placeTagOver - positions a tag (CSS-anchored at its bottom centre) just above a set of objects.
 * Measures the meshes' own geometry, so the cards' larger (invisible when idle) halos do not lift the tag.
 */
function placeTagOver(el, objects) {
  const { THREE } = three;
  const box = new THREE.Box3();
  for (const o of objects) {
    o.traverse(m => {
      if (!m.isMesh || m === (o.userData && o.userData.halo)) return;
      if (!m.geometry.boundingBox) m.geometry.computeBoundingBox();
      box.union(m.geometry.boundingBox.clone().applyMatrix4(m.matrixWorld));
    });
  }
  const p = toPixels(box.getCenter(new THREE.Vector3()).setY(box.max.y + TAG_LIFT));
  // Kept inside the window: on narrow screens an object near the edge would push its tag half off screen.
  el.style.left = clampToView(p.x, el.offsetWidth / 2, BANNER_EDGE_GAP, window.innerWidth) + 'px';
  el.style.top = p.y + 'px';
}

/** easeCardHalos - fades each card's halo towards on (card hovered) or off. */
function easeCardHalos() {
  if (!three || !three.cards) return;
  three.cards.forEach(card => {
    const lit = view.state === 'desk' && three.hovered === card;
    const m = card.userData.halo.material;
    m.opacity += ((lit ? 1 : 0) - m.opacity) * HALO.ease;
    card.userData.face.color.setScalar((three.cardFace || 1) * (1 + HALO.faceLift * m.opacity));
  });
}

/**
 * stepSpeakers - per-frame speaker hover animation: a hovered speaker grows a little and, unless the song is
 * already playing, thumps to invite a click. Scaling keeps each speaker's base on the desk.
 * Params: now - the frame time in ms.
 */
function stepSpeakers(now) {
  if (!three) return;
  const playing = !!music && !music.audio.paused;
  const thump = playing ? 0 : Math.pow(Math.abs(Math.sin((now / SPEAKER.hoverPeriodMs) * Math.PI)), 4);
  for (const spk of three.speakers) {
    const d = spk.userData;
    if (!d.rest) d.rest = { scale: spk.scale.clone(), y: spk.position.y, lift: spk.position.y - boxOf(three.THREE, spk).min.y };
    const hovered = three.hovered === spk && view.state === 'desk';
    d.hover = (d.hover || 0) + ((hovered ? 1 : 0) - (d.hover || 0)) * SPEAKER.hoverEase;
    const grow = 1 + d.hover * (SPEAKER.hoverGrow + SPEAKER.hoverPump * thump);
    spk.scale.copy(d.rest.scale).multiplyScalar(grow);
    spk.position.y = d.rest.y + (grow - 1) * d.rest.lift;
  }
}

/**
 * switchScreenOn - after the first power-on, the 3D monitor shows a picture of the desktop:
 * a textured quad laid over the CRT glass (a child of the monitor, so it moves with it), inset by
 * the same margin as the live desktop so flying in and out lines up.
 */
function switchScreenOn() {
  screenOn = true;
  if (!three || !three.screen || three.screenMesh) return;
  const { THREE, monitor, renderer } = three;
  const { tl, tr, br, bl } = insetQuad(THREE, SCREEN_LOCAL, SCREEN_OVERSCAN);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array([...tl, ...tr, ...br, ...bl]), 3));
  g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array([0, 1, 1, 1, 1, 0, 0, 0]), 2));
  g.setIndex([0, 3, 2, 0, 2, 1]);
  const mesh = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: 0x000000 }));
  monitor.add(mesh);
  three.screenMesh = mesh;
  new THREE.TextureLoader().load(SCREEN_IMAGE, tex => {
    tex.colorSpace = THREE.SRGBColorSpace;
    // The screen is seen at an angle from the desk; without anisotropic filtering the text smears.
    tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
    mesh.material = new THREE.MeshBasicMaterial({ map: tex, toneMapped: false, color: 0xcfd8d6 });
  });
}

/**
 * insetQuad - shrinks a rectangle given by four corners towards its centre.
 * Params: quad - { tl, tr, br, bl } as [x, y, z]; share - fraction of the width/height removed per side.
 * Returns: { tl, tr, br, bl } as arrays.
 */
function insetQuad(THREE, { tl, tr, br, bl }, share) {
  const v = p => new THREE.Vector3(...p);
  const across = v(tr).sub(v(tl)).multiplyScalar(share);
  const down = v(bl).sub(v(tl)).multiplyScalar(share);
  return {
    tl: v(tl).add(across).add(down).toArray(),
    tr: v(tr).sub(across).add(down).toArray(),
    br: v(br).sub(across).sub(down).toArray(),
    bl: v(bl).add(across).sub(down).toArray(),
  };
}

/* ---------------------------------------------------------------- music */

/**
 * toggleMusic - the speaker easter egg: starts the song, or pauses / resumes it.
 * Usage: called from a click on a speaker or the banner's play button, so browsers allow the audio.
 */
function toggleMusic() {
  if (!music) startMusic();
  else if (music.audio.paused) resumeMusic();
  else pauseMusic();
}

/** startMusic - creates the song's <audio> element (kept for later pauses / resumes) and plays it. */
function startMusic() {
  const audio = new Audio(NOW_PLAYING.src);
  music = { audio, dismissed: false };
  for (const type of ['timeupdate', 'loadedmetadata', 'play', 'pause']) audio.addEventListener(type, updateBanner);
  audio.addEventListener('ended', stopMusic);
  resumeMusic();
}

/** resumeMusic - plays from where the song was paused and brings the banner back. */
function resumeMusic() {
  if (!music) return;
  music.dismissed = false;
  music.audio.play().catch(() => { /* blocked or failed to load: the banner shows it paused */ });
  updateBanner();
}

/** pauseMusic - pauses the song (entering the computer, hidden tab, banner / speaker click). */
function pauseMusic() {
  if (music) music.audio.pause();
}

/** stopMusic - stops and rewinds the song and hides the banner (banner's close button, end of the song). */
function stopMusic() {
  if (!music) return;
  music.audio.pause();
  music.audio.currentTime = 0;
  music.dismissed = true;
  updateBanner();
}

/**
 * seekMusic - jumps to the point clicked on the banner's progress bar.
 * Params: bar - the progress bar element; x - the click's page x.
 */
function seekMusic(bar, x) {
  if (!music || !(music.audio.duration > 0)) return;
  const r = bar.getBoundingClientRect();
  music.audio.currentTime = Math.min(Math.max((x - r.left) / r.width, 0), 1) * music.audio.duration;
}

/** updateBanner - refreshes the now-playing banner's progress, times and play / pause button. */
function updateBanner() {
  if (!music) return;
  const { currentTime, duration, paused } = music.audio;
  const share = duration > 0 ? currentTime / duration : 0;
  ui.np.querySelector('.np-fill').style.width = share * 100 + '%';
  ui.np.querySelector('.np-bar').setAttribute('aria-valuenow', String(Math.round(share * 100)));
  ui.np.querySelector('.np-now').textContent = formatTime(currentTime);
  ui.np.querySelector('.np-length').textContent = formatTime(duration);
  const play = ui.np.querySelector('.np-play');
  play.innerHTML = paused ? '&#9654;' : '&#10074;&#10074;';
  play.setAttribute('aria-label', paused ? 'Play' : 'Pause');
  ui.np.classList.toggle('is-paused', paused);
}
