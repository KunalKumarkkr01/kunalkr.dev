/*
 * Tests for the CRT frame / UI scale / Edge removal work (2026-11-14).
 *
 * Usage:  node build/test_crt.js
 * Exits non-zero if any check fails.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const { makeComponent, readIndex } = require('./dc_harness');

let failures = 0;
let checks = 0;

/**
 * ok - records one assertion.
 * Params: cond (truthy = pass), label (what was checked), detail (shown on failure).
 */
function ok(cond, label, detail) {
  checks++;
  if (cond) return;
  failures++;
  console.log('  FAIL  ' + label + (detail ? '\n        ' + detail : ''));
}

function section(name) { console.log('\n' + name); }

/** Markup part of the page (everything before the dc-script). */
const markup = html => html.split('<script type="text/x-dc"')[0];

/** The <sc-if value="{{ w.isMail }}"> block of the markup. */
function mailBlock(html) {
  const start = html.indexOf('{{ w.isMail }}');
  return start === -1 ? '' : html.slice(start, html.indexOf('</sc-if>', start));
}

function testEdgeRemoved() {
  section('edge removed');
  const c = makeComponent();
  const html = readIndex();
  ok(!c.APPS.some(a => a.id === 'browser'), 'no browser app');
  ok(!c.DESK.includes('browser'), 'no browser desktop icon');
  ok(c.EDGE_TABS === undefined, 'EDGE_TABS gone');
  ok(!/\bedge\b/i.test(markup(html)), 'no Edge in markup');
  c.BIT_INTENTS.forEach((intent, i) => {
    const said = intent.say.call(c);
    ok(!/\bedge\b|browser tab/i.test(said), 'BIT intent ' + i + ' has no Edge mention', said);
  });
  ok(mailBlock(html).includes('{{ contactLinks }}'), 'Contact window renders links');
  ok(!fs.existsSync(path.join(__dirname, '..', 'site', 'browser')), 'site/browser deleted');
}

function testMonitor() {
  section('monitor');
  const m = markup(readIndex());
  ok(m.includes('ref="{{ screenRefFn }}"'), 'screen element has a ref');
  ok(m.includes('zoom:{{ uiScale }}'), 'root is zoomed by uiScale');
  ok(/<svg[\s>]/.test(m), 'bezel is inline SVG');
  ok(!m.includes('<div style="position:fixed;inset:0;overflow:hidden;background:#000'), 'root no longer pinned to the viewport');
  // The only off-site load allowed is the self-hosted Umami analytics script.
  const ANALYTICS_SCRIPT = 'https://analytics.kunalkr.dev/script.js';
  const external = (m.match(/<(img|script|image|use)[^>]+(src|href)="https?:[^"]*"/gi) || []).filter(t => !t.includes('src="' + ANALYTICS_SCRIPT + '"'));
  ok(external.length === 0, 'no external images/scripts in markup (except the self-hosted analytics script)', external.join(' '));
  const c = makeComponent();
  ok(c.state.uiScale === 1, 'uiScale defaults to 1');
  const el = { id: 'screen' };
  c.screenRefFn(el);
  ok(c.screenEl === el, 'screenRefFn stores the element');
}

/** A fake screen element: client size in device-independent px, placed at (left, top). */
const fakeScreen = (w, h, left, top) => ({ clientWidth: w, clientHeight: h, getBoundingClientRect: () => ({ left, top, width: w, height: h }) });

/** Stub document whose <html> carries the 'embedded' class or not (scene.js sets it in the browser). */
function stubDocument(embedded) {
  global.document = { documentElement: { classList: { contains: name => embedded && name === 'embedded' } } };
}

/** Stub window with listener capture so drag() can be driven headless. */
function stubWindow(w, h) {
  const listeners = {};
  stubDocument(false);
  global.window = {
    innerWidth: w, innerHeight: h,
    addEventListener: (t, fn) => { listeners[t] = fn; },
    removeEventListener: t => { delete listeners[t]; },
  };
  return listeners;
}

function testScale() {
  section('scale');
  const c = makeComponent();
  [[390, 1], [699, 1], [700, 1.25], [1366, 1.25], [1699, 1.25], [1700, 1.5], [2560, 1.5]]
    .forEach(([vw, want]) => ok(c.uiScaleFor(vw) === want, 'uiScaleFor(' + vw + ') = ' + want, 'got ' + c.uiScaleFor(vw)));

  c.screenEl = fakeScreen(1250, 750, 40, 30);
  c.state.uiScale = 1.25;
  const sz = c.screenSize();
  ok(sz.w === 1000 && sz.h === 600, 'screenSize divides by scale', JSON.stringify(sz));
  const p = c.toScreen(140, 155);
  ok(p.x === 80 && p.y === 100, 'toScreen maps client px to screen units', JSON.stringify(p));

  stubWindow(800, 600);
  c.screenEl = null;
  let threw = false;
  try { c.screenSize(); } catch (e) { threw = true; }
  ok(!threw, 'screenSize survives a missing screen element');

  stubWindow(1366, 768);
  ok(c.currentUiScale() === 1.25, 'currentUiScale follows the viewport in the 2D frame', 'got ' + c.currentUiScale());
  stubDocument(true);
  ok(c.currentUiScale() === 1, 'currentUiScale is 1:1 on the 3D monitor glass', 'got ' + c.currentUiScale());
  c.state.booted = true;
  c.enterComputer();
  ok(c.state.uiScale === 1, 'entering the embedded computer applies the 1:1 scale', 'got ' + c.state.uiScale);
  delete global.window;
  delete global.document;
}

function testGeometry() {
  section('geometry');
  const listeners = stubWindow(1366, 768);
  const c = makeComponent();
  c.screenEl = fakeScreen(1250, 750, 40, 30);
  c.state.uiScale = 1.25;

  c.open('welcome');
  const w = c.state.wins[0];
  ok(w.x === 240, 'welcome is centred in the screen, not the viewport', 'x=' + w.x);
  ok(!w.max, 'wide screen opens floating');
  ok(w.y + w.h <= 600 - 29, 'window fits above the taskbar', 'y+h=' + (w.y + w.h));

  const grip = { setPointerCapture() {}, releasePointerCapture() {} };
  c.drag(w.id, { button: 0, currentTarget: grip, pointerId: 1, clientX: 100, clientY: 100, preventDefault() {}, stopPropagation() {} }, 'move');
  listeners.pointermove({ clientX: 225, clientY: 150 });
  const moved = c.state.wins[0];
  ok(moved.x === w.x + 100 && moved.y === w.y + 40, 'drag follows cursor at scale 1.25', 'x=' + moved.x + ' y=' + moved.y);
  listeners.pointerup();

  c.drag(w.id, { button: 0, currentTarget: grip, pointerId: 1, clientX: 100, clientY: 100, preventDefault() {}, stopPropagation() {} }, 'resize');
  listeners.pointermove({ clientX: 150, clientY: 125 });
  const sized = c.state.wins[0];
  ok(sized.w === w.w + 40 && sized.h === w.h + 20, 'resize follows cursor at scale 1.25', 'w=' + sized.w + ' h=' + sized.h);
  listeners.pointerup();

  c.screenEl = fakeScreen(500, 700, 5, 5);
  c.state.uiScale = 1;
  c.open('gallery');
  ok(c.state.wins[c.state.wins.length - 1].max, 'narrow screen opens maximised');

  c.upd(w.id, { x: 900, y: 650 });
  c.onResize();
  const back = c.state.wins.find(x => x.id === w.id);
  ok(back.x <= 500 - 40 && back.y <= 700 - 29 - 20, 'resize pulls stranded windows back on screen', 'x=' + back.x + ' y=' + back.y);

  // The 3D monitor's glass is ~665 units wide on a laptop, but it is never a phone: windows float there.
  stubDocument(true);
  c.screenEl = fakeScreen(665, 500, 340, 50);
  c.open('notes');
  const onGlass = c.state.wins[c.state.wins.length - 1];
  ok(!onGlass.max, 'a window on the 3D glass opens floating, not maximised');
  ok(onGlass.x + onGlass.w <= 665, 'and fits inside the glass', 'x+w=' + (onGlass.x + onGlass.w));
  stubDocument(false);
  delete global.window;
}

function testProfileContent() {
  section('profile content (LinkedIn, Nov 2026)');
  const c = makeComponent();
  const html = readIndex();
  // The client's name is stored base64-encoded so the public repo never spells it out.
  const CLIENT_NAME = Buffer.from('YnJpbGxpYW50', 'base64').toString();
  ok(!new RegExp(CLIENT_NAME, 'i').test(html), 'client is not named (LinkedIn keeps it anonymous)');
  ok(!/technical lead/i.test(html), 'old title gone');
  ok(c.ROLES[0].title === 'Lead Software Engineer' && c.ROLES[0].employer === 'Dynamisch', 'current role');
  ok(c.ROLES.map(r => r.dates).join('|') === '02/2026 – Present|10/2025 – 01/2026|Apr 2024 – Oct 2025|Jan 2023 – Mar 2024|Aug 2021 – Dec 2022', 'role dates match LinkedIn');
  ok(c.PROJECTS.length === 7, 'seven projects');
  c.BIT_INTENTS.forEach((intent, i) => {
    const said = intent.say.call(c);
    ok(typeof said === 'string' && !/undefined/.test(said), 'BIT intent ' + i + ' renders', said);
  });
}

/**
 * fakeTimers - replaces the global timer functions with captured queues.
 * Returns: { timeouts, intervals, restore() } where each queued item is { fn, ms, id, cleared }.
 */
function fakeTimers() {
  const saved = { st: global.setTimeout, ct: global.clearTimeout, si: global.setInterval, ci: global.clearInterval };
  const timeouts = [], intervals = [];
  let next = 1;
  const add = (list, fn, ms) => { const t = { fn, ms, id: next++, cleared: false }; list.push(t); return t.id; };
  const clear = list => id => list.forEach(t => { if (t.id === id) t.cleared = true; });
  global.setTimeout = (fn, ms) => add(timeouts, fn, ms);
  global.clearTimeout = clear(timeouts);
  global.setInterval = (fn, ms) => add(intervals, fn, ms);
  global.clearInterval = clear(intervals);
  return { timeouts, intervals, restore() { Object.assign(global, { setTimeout: saved.st, clearTimeout: saved.ct, setInterval: saved.si, clearInterval: saved.ci }); } };
}

/** Runs every live (uncleared, not yet fired) timeout once. */
function flushTimeouts(timers) {
  timers.timeouts.filter(t => !t.cleared && !t.fired).forEach(t => { t.fired = true; t.fn(); });
}

function testBridge() {
  section('desk / computer bridge');
  const events = [];
  stubWindow(1366, 768);
  global.window.dispatchEvent = e => events.push(e.type);
  global.Event = class { constructor(type) { this.type = type; } };
  const timers = fakeTimers();
  try {
    const c = makeComponent();
    ok(c.state.onDesk === true && c.state.phase === 'off' && c.state.booted === false, 'starts on the desk, powered off');

    c.keyFn = null;
    c.enterComputer();
    ok(c.state.onDesk === false && c.state.booted === true, 'enter leaves the desk and marks booted');
    ok(c.state.phase === 'poweron', 'first entry starts the power-on effect');
    flushTimeouts(timers);
    ok(c.state.phase === 'post', 'power-on hands over to the BIOS screen');
    ok(timers.intervals.filter(t => !t.cleared).length === 1, 'exactly one POST interval running');

    c.skip();
    ok(c.state.phase === 'desktop', 'skip lands on the desktop');
    c.open('gallery');
    const winsBefore = c.state.wins.length;

    c.exitComputer();
    ok(c.state.onDesk === true, 'exit returns to the desk');
    ok(events.includes('kunal:exit'), 'exit announces kunal:exit');

    c.enterComputer();
    ok(c.state.phase === 'desktop' && c.state.wins.length === winsBefore, 're-entry resumes without rebooting');

    const firstNew = timers.intervals.length;
    const c2 = makeComponent();
    c2.boot(); c2.boot();
    flushTimeouts(timers);
    const live = timers.intervals.slice(firstNew).filter(t => !t.cleared);
    ok(c2.state.phase === 'post', 'double boot still reaches POST');
    ok(live.length === 1, 'double boot leaves exactly one POST interval', 'live=' + live.length);

    const c3 = makeComponent();
    c3.boot();
    c3.skip();
    flushTimeouts(timers);
    ok(c3.state.phase === 'desktop', 'skip during power-on is not undone by the late timer');

    const c5 = makeComponent();
    global.window.__kunalEnterPending = true;
    c5.consumePendingEnter();
    ok(c5.state.onDesk === false && global.window.__kunalEnterPending === false, 'an enter requested before mount is honoured once');
    const c6 = makeComponent();
    c6.consumePendingEnter();
    ok(c6.state.onDesk === true, 'no pending enter: stays on the desk');

    const c4 = makeComponent();
    c4.state.phase = 'post';
    c4.state.onDesk = true;
    let skipped = false;
    c4.skip = () => { skipped = true; };
    const handler = c4.makeKeyHandler();
    handler({ key: 'a', preventDefault() {} });
    ok(!skipped, 'keys are ignored while on the desk');
  } finally {
    timers.restore();
    delete global.window;
    delete global.Event;
  }
}

/**
 * testDeskQuiet - while the visitor is on the 3D desk the hidden desktop must not re-render:
 * its clock, tip and fact timers and its mouse-move handler (BIT's eyes) do nothing there.
 */
function testDeskQuiet() {
  section('desktop stays quiet on the desk');
  const listeners = stubWindow(1366, 768);
  global.window.dispatchEvent = () => {};
  global.Event = class { constructor(type) { this.type = type; } };
  const timers = fakeTimers();
  try {
    const c = makeComponent();
    c.componentDidMount();
    const onDesk = c.state;
    timers.intervals.forEach(t => t.fn());
    listeners.mousemove({ type: 'mousemove', clientX: 10, clientY: 10 });
    ok(c.state === onDesk, 'timers and mouse moves leave the desktop untouched on the desk');
    c.enterComputer();
    c.skip();
    const inside = c.state;
    timers.intervals.find(t => t.ms === 1000 && !t.cleared).fn();
    ok(c.state !== inside, 'inside the computer the clock ticks again');
  } finally {
    timers.restore();
    delete global.window;
    delete global.Event;
  }
}

/**
 * testFirstDesktop - the first desktop opens uncluttered: welcome window and BIT, the "Did you know?" card
 * folded into its top-right icon. Clicking BIT opens its chat; the card stacks like a window.
 */
function testFirstDesktop() {
  section('first desktop, BIT and the trivia card');
  stubWindow(1366, 768);
  const timers = fakeTimers();
  try {
    const c = makeComponent();
    c.state.phase = 'desktop';
    const bit = c.assistantVals(c.state);
    ok(bit.tipOpen === undefined && c.state.tipOpen === undefined, 'no tip bubble any more');
    ok(c.state.factsOpen === false, 'trivia card starts folded into its icon');

    bit.botClick();
    ok(c.state.wins.some(w => w.app === 'assistant'), 'a click on BIT opens the chat window');

    c.toggleFacts();
    const topWindow = Math.max(...c.state.wins.map(w => w.z));
    ok(c.state.factsOpen === true && c.state.factsZ > topWindow, 'the icon unfolds the card above the open windows');
    c.open('gallery');
    const gallery = c.state.wins.find(w => w.app === 'gallery');
    ok(gallery.z > c.state.factsZ, 'a window opened later goes on top of the card');
    c.raiseFacts();
    ok(c.state.factsZ > gallery.z, 'clicking the card brings it back to the front');
    c.toggleFacts();
    ok(c.state.factsOpen === false, 'the icon folds the card again');

    const topNow = Math.max(...c.state.wins.map(w => w.z));
    ok(c.assistantVals(c.state).botZ < topNow, 'windows opened after BIT cover it');
    c.toggleBot();
    ok(c.state.botHidden === false && c.assistantVals(c.state).botZ > topNow, 'a covered BIT: one tray tap brings it to the front');
    c.toggleBot();
    ok(c.state.botHidden === true, 'BIT in front: the tray button hides it');
    c.toggleBot();
    ok(c.state.botHidden === false && c.assistantVals(c.state).botZ > topNow, 'hidden: the tray button shows it on top');
  } finally {
    timers.restore();
    delete global.window;
  }
}

/**
 * testPhoneDesktop - on a phone-width screen windows open maximised, so BIT stays above them, the taskbar
 * buttons can shrink to share the strip, and Solitaire's seven columns fit the window.
 */
function testPhoneDesktop() {
  section('phone-width desktop');
  stubWindow(360, 740);
  const timers = fakeTimers();
  try {
    const c = makeComponent();
    c.state.phase = 'desktop';
    c.open('welcome');
    c.open('assistant');
    const bitZ = c.assistantVals(c.state).botZ;
    ok(bitZ > Math.max(...c.state.wins.map(w => w.z)), 'BIT stays above the maximised windows');
    c.toggleBot();
    ok(c.state.botHidden === true, 'one tray tap hides it');

    const tasks = c.renderVals().taskButtons;
    ok(tasks.length === 2 && tasks.every(t => /^0 1 /.test(t.style.flex) && t.style.minWidth === 0), 'task buttons can shrink to fit the strip');

    c.open('solitaire');
    const vals = c.renderVals();
    const columns = vals.solTab.length, card = vals.solTab[0].style.width, gap = vals.solTabRowStyle.gap;
    const needed = columns * card + (columns - 1) * gap;
    ok(needed <= 280, 'Solitaire columns fit a phone window', needed + 'px');
  } finally {
    timers.restore();
    delete global.window;
  }
}

/**
 * testMonitorButtons - the monitor's own buttons sound like the desk's: the power button plays the
 * power-off chirp, and the four small chin buttons (real buttons over the drawn keys) give the retro
 * click. Sounds come from the desk scene (window.kunalSound); without it nothing breaks.
 */
function testMonitorButtons() {
  section('monitor buttons: sounds');
  const m = markup(readIndex());
  const keys = m.match(/<button class="crt-key"[^>]*onClick="\{\{ chinKey \}\}"/g) || [];
  ok(keys.length === 4, 'four clickable chin buttons over the drawn keys', String(keys.length));
  stubWindow(1366, 768);
  const played = [];
  window.dispatchEvent = () => true;
  global.Event = class { constructor(type) { this.type = type; } };
  window.kunalSound = { play: name => played.push(name) };
  try {
    const c = makeComponent();
    c.renderVals().chinKey();
    ok(played.includes('click'), 'a chin button plays the click', played.join(','));
    c.renderVals().powerOff();
    ok(played.includes('powerOff'), 'the power button plays the power-off chirp', played.join(','));
    delete window.kunalSound;
    let threw = false;
    try { c.renderVals().chinKey(); c.renderVals().powerOff(); } catch (e) { threw = true; }
    ok(!threw, 'without the desk scene loaded nothing throws');
  } finally {
    delete global.window;
    delete global.Event;
  }
}

/**
 * testResumePageCount - every place the desktop states the résumé's page count (the BIOS POST line
 * and the document viewer's toolbar) matches the real PDF in site/assets.
 */
function testResumePageCount() {
  section('résumé page count');
  const pdf = fs.readFileSync(path.join(__dirname, '..', 'site', 'assets', 'Kunal_Kumar_Resume.pdf'), 'latin1');
  const pages = (pdf.match(/\/Type\s*\/Page[^s]/g) || []).length;
  const stated = [...readIndex().matchAll(/(\d+) pages?\)?</g)].map(m => Number(m[1]));
  const bios = readIndex().match(/RESUME\.PDF loaded \((\d+) pages?\)/);
  ok(pages > 0, 'the résumé PDF has pages', String(pages));
  ok(bios && Number(bios[1]) === pages, 'BIOS line states the real page count', (bios && bios[1]) + ' vs ' + pages);
  ok(stated.length >= 1 && stated.every(n => n === pages), 'document viewer states the real page count', stated.join(',') + ' vs ' + pages);
}

/**
 * testAnalytics -the desktop reports interactions to Umami (window.umami.track): which app was
 * opened and which topic a BIT question matched. The visitor's own words are never sent, and with
 * no Umami script (local dev, an ad blocker) nothing breaks.
 */
function testAnalytics() {
  section('analytics events (Umami)');
  stubWindow(1366, 768);
  const timers = fakeTimers();
  const flush = () => timers.timeouts.forEach(t => { if (!t.cleared) { t.cleared = true; t.fn(); } });
  const sent = [];
  window.umami = { track: (name, data) => sent.push({ name, data }) };
  try {
    const c = makeComponent();
    c.state.phase = 'desktop';
    c.open('settings');
    ok(sent.some(e => e.name === 'open-app' && e.data.app === 'settings'), 'opening a window records open-app with its id', JSON.stringify(sent));
    const before = sent.length;
    c.open('settings');
    ok(sent.length === before, 'bringing an already open window forward is not counted again');
    c.open('welcome');
    ok(!sent.some(e => e.data && e.data.app === 'welcome'), 'the welcome window (opened automatically at boot) is not counted');

    c.askBot('which cloud stack?');
    flush();
    const asked = sent.filter(e => e.name === 'bit-question');
    ok(asked.length === 1 && typeof asked[0].data.topic === 'string' && asked[0].data.topic !== 'no-match',
      'a BIT question records the topic it matched', JSON.stringify(asked));
    ok(!JSON.stringify(sent).includes('which cloud stack'), "the visitor's own words are never sent");
    c.askBot('zzzz qqqq');
    flush();
    ok((sent.filter(e => e.name === 'bit-question').pop() || { data: {} }).data.topic === 'no-match', 'an unmatched question records no-match');

    delete window.umami;
    let threw = false;
    try { c.open('mail'); c.askBot('hello'); flush(); } catch (e) { threw = true; }
    ok(!threw, 'without the Umami script (local dev, ad blocker) nothing throws');
  } finally {
    timers.restore();
    delete global.window;
  }
}

function main() {
  testEdgeRemoved();
  testProfileContent();
  testMonitor();
  testScale();
  testGeometry();
  testBridge();
  testDeskQuiet();
  testFirstDesktop();
  testPhoneDesktop();
  testAnalytics();
  testResumePageCount();
  testMonitorButtons();
  console.log('\n' + (failures ? failures + ' of ' + checks + ' checks FAILED' : 'all ' + checks + ' checks passed'));
  process.exit(failures ? 1 : 0);
}

main();
