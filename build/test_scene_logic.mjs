/*
 * Tests for site/scene-logic.js - the pure parts of the 3D desk scene.
 *
 * Usage:  node build/test_scene_logic.mjs
 * Exits non-zero if any check fails.
 */
import { entryMode, createViewState, easeInOutCubic, formatTime, clampToView, initialTheme, shouldRender, framesPerSecond, nextQuality, loadPercent, byteShare, blocksFor } from '../site/scene-logic.js';

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
  console.log('  FAIL  ' + label + (detail !== undefined ? '\n        ' + detail : ''));
}

console.log('\nentry mode');
ok(entryMode('https://kunalkr.dev/') === 'desk', 'plain URL starts at the desk');
ok(entryMode('https://kunalkr.dev/#desktop') === 'computer', '#desktop goes straight to the computer');
ok(entryMode('https://kunalkr.dev/?desktop') === 'computer', '?desktop goes straight to the computer');
ok(entryMode('https://kunalkr.dev/?desktop=1') === 'computer', '?desktop=1 goes straight to the computer');
ok(entryMode('https://kunalkr.dev/#other') === 'desk', 'other hashes start at the desk');

console.log('\nview state');
const v = createViewState();
ok(v.state === 'loading', 'starts loading');
ok(v.request('enter') === 'loading', 'enter while loading is ignored');
ok(v.request('loaded') === 'desk', 'loaded -> desk');
ok(v.request('exit') === 'desk', 'exit on the desk is ignored');
ok(v.request('enter') === 'flyingIn', 'enter -> flyingIn');
ok(v.request('enter') === 'flyingIn', 'second enter during the flight is ignored');
ok(v.request('exit') === 'flyingIn', 'exit during the fly-in is ignored');
ok(v.request('arrived') === 'computer', 'arrived -> computer');
ok(v.request('enter') === 'computer', 'enter inside the computer is ignored');
ok(v.request('exit') === 'flyingOut', 'exit -> flyingOut');
ok(v.request('enter') === 'flyingOut', 'enter during the fly-out is ignored');
ok(v.request('arrived') === 'desk', 'arrived -> desk');
const f = createViewState();
ok(f.request('fail') === 'computer', 'failure while loading falls back to the computer');
ok(f.request('exit') === 'loading', 'leaving after a failed load tries the desk again');
const d = createViewState('computer');
ok(d.state === 'computer', 'can start in the computer (deep link)');
ok(d.request('exit') === 'loading', 'exit from a deep link loads the desk first');
ok(d.request('loaded') === 'desk', 'then shows the desk');
const s = createViewState();
ok(s.request('skip') === 'computer', 'Enter button while loading goes straight in');
ok(s.request('exit') === 'loading', 'leaving before the desk ever loaded waits for it');
ok(s.request('loaded') === 'desk', 'desk appears once loaded');
ok(s.request('skip') === 'computer', 'Enter button on the desk goes straight in');
ok(s.request('exit') === 'flyingOut', 'desk already built: fly out normally');

console.log('\neasing');
ok(easeInOutCubic(0) === 0, 'ease(0) = 0');
ok(easeInOutCubic(1) === 1, 'ease(1) = 1');
ok(easeInOutCubic(0.5) === 0.5, 'ease(0.5) = 0.5');
ok(easeInOutCubic(0.25) < 0.25 && easeInOutCubic(0.75) > 0.75, 'slow at both ends');
ok(easeInOutCubic(-1) === 0 && easeInOutCubic(2) === 1, 'clamped to [0, 1]');

console.log('\nnow playing');
ok(formatTime(0) === '0:00', '0 s -> 0:00');
ok(formatTime(5.9) === '0:05', 'drops fractions of a second');
ok(formatTime(65) === '1:05', 'pads seconds to two digits');
ok(formatTime(319.9) === '5:19', 'song length 5:19');
ok(formatTime(NaN) === '0:00' && formatTime(-3) === '0:00', 'unknown or negative time shows 0:00');
ok(clampToView(500, 100, 12, 1366) === 500, 'banner centre left alone when it fits');
ok(clampToView(20, 100, 12, 1366) === 112, 'banner pushed in from the left edge');
ok(clampToView(1360, 100, 12, 1366) === 1254, 'banner pushed in from the right edge');

console.log('\nlamp theme');
ok(initialTheme(null) === 1, 'first visit: dark room, lamp on');
ok(initialTheme('night') === 1, 'remembered night stays night');
ok(initialTheme('day') === 0, 'remembered day stays day');
ok(initialTheme('junk') === 1, 'unknown value falls back to the first-visit look');

console.log('\nrender pacing and quality');
ok(shouldRender(true, 1000, 995, 50) === true, 'something moving: draw every frame');
ok(shouldRender(false, 1000, 970, 50) === false, 'still scene: skip frames inside the idle interval');
ok(shouldRender(false, 1000, 950, 50) === true, 'still scene: draw once the idle interval has passed');
ok(framesPerSecond([0, 16, 32, 48, 64]) === 62.5, '16 ms frames -> 62.5 fps');
ok(framesPerSecond([0, 50, 100]) === 20, '50 ms frames -> 20 fps');
ok(framesPerSecond([5]) === Infinity && framesPerSecond([]) === Infinity, 'too few samples: treated as fast enough');
ok(nextQuality(0, 25) === 1, 'slow machine: step quality down');
ok(nextQuality(1, 25) === 2, 'still slow: step down again');
ok(nextQuality(2, 10) === 2, 'never below the lowest level');
ok(nextQuality(0, 60) === 0 && nextQuality(1, 45) === 1, 'fast enough: keep the level');

console.log('\nloading dialog');
ok(loadPercent('script', 0) === 0, 'starts at 0%');
ok(loadPercent('models', 0) === 15 && loadPercent('models', 1) === 90, 'models fill 15% to 90%');
ok(loadPercent('room', 1) === 100, 'setting up the room ends at 100%');
ok(loadPercent('models', 2) === 90 && loadPercent('models', -1) === 15, 'shares outside 0..1 are clamped');
ok(loadPercent('script', 1) <= loadPercent('models', 0) && loadPercent('models', 1) <= loadPercent('room', 0), 'phases never go backwards');
ok(byteShare(50, 100, 999) === 0.5, 'known size: loaded / total');
ok(byteShare(50, 0, 200) === 0.25, 'size unknown (gzip): loaded / expected size');
ok(byteShare(500, 0, 200) === 1 && byteShare(150, 100, 0) === 1, 'never more than 100%');
ok(byteShare(0, 0, 0) === 0, 'nothing known yet: 0');
ok(blocksFor(0.5, 20) === 10, 'half way: half the blocks');
ok(blocksFor(1.7, 20) === 20 && blocksFor(-0.2, 20) === 0, 'block count stays within the bar');
ok(blocksFor(1, 0) === 0, 'a bar with no room shows no blocks');

console.log('\n' + (failures ? failures + ' of ' + checks + ' checks FAILED' : 'all ' + checks + ' checks passed'));
process.exit(failures ? 1 : 0);
