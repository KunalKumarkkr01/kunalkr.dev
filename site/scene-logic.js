/*
 * scene-logic.js - the pure, testable parts of the 3D desk scene.
 *
 * No DOM, no three.js: scene.js imports these, and build/test_scene_logic.mjs
 * tests them headless with Node.
 */

/* Views the landing can be in. "flying" states are camera animations between the other two. */
const VIEW = Object.freeze({
  LOADING: 'loading', DESK: 'desk', FLYING_IN: 'flyingIn', COMPUTER: 'computer', FLYING_OUT: 'flyingOut',
});

/* For each view, which request moves it where. Anything not listed is ignored. */
const TRANSITIONS = Object.freeze({
  [VIEW.LOADING]: { loaded: VIEW.DESK, fail: VIEW.COMPUTER, skip: VIEW.COMPUTER },
  [VIEW.DESK]: { enter: VIEW.FLYING_IN, skip: VIEW.COMPUTER },
  [VIEW.FLYING_IN]: { arrived: VIEW.COMPUTER },
  [VIEW.COMPUTER]: { exit: VIEW.FLYING_OUT },
  [VIEW.FLYING_OUT]: { arrived: VIEW.DESK },
});

const SECONDS_PER_MINUTE = 60;
/* Room themes: 0 = day (room lights on), 1 = night (dark room, desk lamp on). */
const THEME_DAY = 0;
const THEME_NIGHT = 1;

/**
 * entryMode - decides where a visit starts from the page URL.
 * Params: href - the full page URL (location.href).
 * Returns: 'computer' for a #desktop / ?desktop deep link, otherwise 'desk'.
 * Usage: a recruiter link https://kunalkr.dev/#desktop skips the 3D desk.
 */
export function entryMode(href) {
  const url = new URL(href);
  if (url.hash === '#desktop' || url.searchParams.has('desktop')) return 'computer';
  return 'desk';
}

/**
 * createViewState - a tiny state machine for the landing's views.
 * Params: initial - starting view, 'loading' (default) or 'computer' for a deep link.
 * Returns: { state, request(event) } where request() returns the new state and ignores
 *   events that make no sense right now (e.g. a second click during the fly-in).
 *   Events: loaded, fail, enter (3D click), skip (Enter button), arrived, exit.
 *   Leaving the computer before the desk was ever built goes to 'loading' instead of flying out.
 * Usage: const view = createViewState(); view.request('loaded'); view.request('enter');
 */
export function createViewState(initial = VIEW.LOADING) {
  let deskBuilt = false;
  const machine = {
    state: initial,
    request(event) {
      if (machine.state === VIEW.COMPUTER && event === 'exit' && !deskBuilt) {
        machine.state = VIEW.LOADING;
        return machine.state;
      }
      const next = (TRANSITIONS[machine.state] || {})[event];
      if (!next) return machine.state;
      if (event === 'loaded') deskBuilt = true;
      machine.state = next;
      return machine.state;
    },
  };
  return machine;
}

/**
 * easeInOutCubic - slow-fast-slow easing for camera moves.
 * Params: t - progress, clamped to [0, 1].
 * Returns: eased progress in [0, 1].
 * Usage: camera.position.lerpVectors(from, to, easeInOutCubic(elapsed / duration)).
 */
export function easeInOutCubic(t) {
  const x = Math.min(1, Math.max(0, t));
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

/**
 * formatTime - seconds as m:ss for the now-playing banner.
 * Params: seconds - a playback position or duration (NaN / negative before the song has loaded).
 * Returns: e.g. '5:19'; '0:00' when the time is unknown.
 * Usage: formatTime(audio.currentTime) + ' / ' + formatTime(audio.duration).
 */
export function formatTime(seconds) {
  if (!(seconds > 0)) return '0:00';
  const whole = Math.floor(seconds);
  const secs = whole % SECONDS_PER_MINUTE;
  return Math.floor(whole / SECONDS_PER_MINUTE) + ':' + String(secs).padStart(2, '0');
}

/**
 * clampToView - keeps a centred overlay inside the window.
 * Params: x - wanted centre (px); half - half the overlay's width; margin - gap kept from each edge; width - window width.
 * Returns: the centre to use.
 * Usage: the banner over the tape recorder, which sits at the very left of the desk view.
 */
export function clampToView(x, half, margin, width) {
  return Math.min(Math.max(x, half + margin), width - half - margin);
}

/**
 * initialTheme - the room theme to open with.
 * Params: stored - the visitor's saved choice ('day' / 'night'), or null on a first visit.
 * Returns: THEME_DAY (0) or THEME_NIGHT (1). A first visit opens dark with the desk lamp on.
 * Usage: applyTheme(ctx, initialTheme(localStorage.getItem('desk-theme')), true).
 */
export function initialTheme(stored) {
  return stored === 'day' ? THEME_DAY : THEME_NIGHT;
}

/* A machine is "slow" below this frame rate; quality steps down at most LOWEST_QUALITY times. */
const QUALITY_MIN_FPS = 40;
const LOWEST_QUALITY = 2;
const MS_PER_SECOND = 1000;

/**
 * shouldRender - whether to draw this animation frame.
 * Params: busy - something is moving (camera, hover, lamp fade...); now, last - this and the last drawn
 *         frame's time (ms); idleMs - gap between frames while the scene is still.
 * Returns: true to draw. A still desk is drawn at a low rate (its only motion is the slow résumé glow).
 * Usage: if (!shouldRender(busy, now, lastDrawn, IDLE_FRAME_MS)) return;
 */
export function shouldRender(busy, now, last, idleMs) {
  return busy || now - last >= idleMs;
}

/**
 * framesPerSecond - average frame rate from consecutive frame timestamps.
 * Params: times - frame times in ms, oldest first.
 * Returns: frames per second; Infinity with fewer than two samples (nothing to judge yet).
 * Usage: framesPerSecond(probe.times) after the first second on the desk.
 */
export function framesPerSecond(times) {
  if (times.length < 2) return Infinity;
  return ((times.length - 1) * MS_PER_SECOND) / (times[times.length - 1] - times[0]);
}

/**
 * nextQuality - the render quality level to use after measuring the frame rate.
 * Params: level - current level (0 = full, 1 = native resolution + smaller shadows, 2 = no shadows); fps - measured.
 * Returns: the same level if the machine keeps up, otherwise one step lower (never past LOWEST_QUALITY).
 * Usage: quality = nextQuality(quality, framesPerSecond(times)).
 */
export function nextQuality(level, fps) {
  return fps < QUALITY_MIN_FPS && level < LOWEST_QUALITY ? level + 1 : level;
}

/*
 * Loading dialog: the share of the bar each phase covers, as [from, to] percent.
 * script = fetching three.js, models = downloading the .glb files, room = staging the desk.
 */
const LOAD_PHASES = Object.freeze({ script: [0, 15], models: [15, 90], room: [90, 100] });

/** clamp01 - limits a share to 0..1. */
function clamp01(x) {
  return Math.min(1, Math.max(0, x));
}

/**
 * loadPercent - overall loading progress for the "Setting up the desk" dialog.
 * Params: phase - 'script', 'models' or 'room'; share - how far through that phase (0..1, clamped).
 * Returns: percent, 0..100, never going backwards from one phase to the next.
 * Usage: loadPercent('models', byteShare(loaded, total, expected)).
 */
export function loadPercent(phase, share) {
  const [from, to] = LOAD_PHASES[phase];
  return from + (to - from) * clamp01(share);
}

/**
 * byteShare - how much of the downloads has arrived.
 * Params: loaded - bytes received; total - bytes announced by the server (0 when it does not say, e.g. gzip);
 *         expected - the files' known size, used when total is 0.
 * Returns: 0..1.
 */
export function byteShare(loaded, total, expected) {
  const size = total > 0 ? total : expected;
  return size > 0 ? clamp01(loaded / size) : 0;
}

/**
 * blocksFor - how many blue blocks the progress bar shows.
 * Params: share - progress 0..1 (clamped); capacity - blocks that fit in the bar's width.
 * Returns: a whole number from 0 to capacity, so the blocks never run past the bar.
 */
export function blocksFor(share, capacity) {
  return Math.max(0, Math.min(capacity, Math.round(clamp01(share) * capacity)));
}

/* ------------------------------------------------------------ screensaver */

/* Starfield on the desk's monitor, matching the desktop's own screensaver (index.html startSaver). */
export const STARFIELD = {
  count: 220,          // stars in the field
  respawnZ: 0.02,      // a star this close to the viewer starts again far away
  spread: 0.35,        // share of the screen a star at depth 1 spans from the centre
  maxSize: 3.4,        // pixel size of a star right at the viewer
  speedPerSecond: 0.36, // depth covered per second (the desktop's 0.006 per frame at 60 fps)
};

/**
 * createStars - a fresh starfield: each star at a random spot (x, y in -1..1) and depth (z in 0..1).
 * Params: count - number of stars; rand - () => number in [0, 1), e.g. Math.random.
 * Returns: [{ x, y, z }].
 * Usage: createStars(STARFIELD.count, Math.random)
 */
export function createStars(count, rand) {
  return Array.from({ length: count }, () => ({ x: rand() * 2 - 1, y: rand() * 2 - 1, z: rand() }));
}

/**
 * advanceStars - moves every star towards the viewer; one that arrives respawns far away at a new spot.
 * Params: stars - from createStars (changed in place); dz - depth to move; rand - as for createStars.
 * Usage: advanceStars(stars, STARFIELD.speedPerSecond * seconds, Math.random)
 */
export function advanceStars(stars, dz, rand) {
  for (const s of stars) {
    s.z -= dz;
    if (s.z <= STARFIELD.respawnZ) { s.x = rand() * 2 - 1; s.y = rand() * 2 - 1; s.z = 1; }
  }
}

/**
 * projectStar - where and how big a star is drawn on a w x h screen.
 * Params: star - { x, y, z }; w, h - screen size in pixels.
 * Returns: { x, y, size, shade } (shade 0..3, dim to white) or null when it falls off the screen.
 * Usage: projectStar({ x: 0, y: 0, z: 1 }, 320, 240) -> { x: 160, y: 120, size: 1, shade: 0 }
 */
export function projectStar(star, w, h) {
  const x = w / 2 + (star.x / star.z) * w * STARFIELD.spread;
  const y = h / 2 + (star.y / star.z) * h * STARFIELD.spread;
  if (x < 0 || x > w || y < 0 || y > h) return null;
  const size = Math.max(1, Math.round((1 - star.z) * STARFIELD.maxSize));
  return { x: Math.floor(x), y: Math.floor(y), size, shade: Math.min(3, size - 1) };
}
