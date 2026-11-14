/*
 * Headless test harness for the Solitaire logic in site/index.html.
 *
 * Rather than re-implementing the rules (which would let the test and the game
 * drift apart), this extracts the real <script type="text/x-dc"> body from the
 * page and evaluates it against stubs for the browser globals the class needs
 * at construction time. The Component under test is therefore byte-for-byte the
 * code that ships.
 *
 * Usage:  node build/test_solitaire.js
 * Exits non-zero on the first failing assertion.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const INDEX = path.join(__dirname, '..', 'site', 'index.html');

/* ---------------------------------------------------------------- harness */

/**
 * Pull the dc-script out of the page and instantiate its Component class.
 *
 * The class extends DCLogic and touches React.createRef in class fields, so
 * both are stubbed. setState is made synchronous so a test can assert straight
 * after calling a game method.
 *
 * makeComponent() -> an object exposing solNew/solDraw/solDrop/... over a
 * plain `state` property.
 */
function makeComponent() {
  const html = fs.readFileSync(INDEX, 'utf8');
  const open = html.indexOf('<script type="text/x-dc"');
  if (open === -1) throw new Error('dc-script not found');
  const bodyStart = html.indexOf('>', open) + 1;
  const bodyEnd = html.indexOf('</script>', bodyStart);
  const source = html.slice(bodyStart, bodyEnd);

  class DCLogic {
    constructor() { this.state = {}; this.props = {}; }
    setState(patch, cb) {
      const next = typeof patch === 'function' ? patch(this.state) : patch;
      if (next) this.state = Object.assign({}, this.state, next);
      if (cb) cb();
    }
  }
  const React = { createRef: () => ({ current: null }) };

  const factory = new Function('React', 'DCLogic', 'matchMedia', source + '\nreturn Component;');
  const Component = factory(React, DCLogic, undefined);
  const c = new Component();
  c.state = Object.assign({}, c.state);
  return c;
}

/* --------------------------------------------------------------- asserting */

let failures = 0;
let checks = 0;

function ok(cond, label, detail) {
  checks++;
  if (cond) return true;
  failures++;
  console.log('  FAIL  ' + label + (detail ? '\n        ' + detail : ''));
  return false;
}

function section(name) { console.log('\n' + name); }

/* ------------------------------------------------------------- game helpers */

const cardKey = c => c.s + ':' + c.r;

/** Every card currently anywhere in the game, for conservation checks. */
function allCards(g) {
  return [].concat(g.stock, g.waste, ...g.found, ...g.tab);
}

function conserved(g) {
  const cards = allCards(g);
  const keys = new Set(cards.map(cardKey));
  return cards.length === 52 && keys.size === 52;
}

/** Deep-ish clone so a test can compare state before/after a rejected move. */
const snapshot = g => JSON.stringify({ stock: g.stock, waste: g.waste, found: g.found, tab: g.tab });

/** Build a specific, fully deterministic game state for targeted assertions. */
function riggedGame(over) {
  return Object.assign({
    stock: [], waste: [], found: [[], [], [], []],
    tab: [[], [], [], [], [], [], []], sel: null, moves: 0, won: false,
  }, over);
}

const card = (r, s) => ({ r, s, id: s * 13 + r, up: true });
const down = (r, s) => ({ r, s, id: s * 13 + r, up: false });

/* ------------------------------------------------------------------- tests */

function testDeal(c) {
  section('Deal');
  for (let i = 0; i < 200; i++) {
    const g = c.solNew();
    if (!ok(conserved(g), 'deal has 52 unique cards', 'iteration ' + i)) return;
    if (!ok(g.tab.every((p, k) => p.length === k + 1), 'tableau piles are 1..7 deep')) return;
    if (!ok(g.tab.every(p => p.every((cd, k) => cd.up === (k === p.length - 1))),
      'only the last card of each tableau pile is face up')) return;
    if (!ok(g.stock.length === 24, 'stock holds the remaining 24 cards', 'got ' + g.stock.length)) return;
    if (!ok(g.stock.every(cd => !cd.up), 'stock is face down')) return;
  }
}

function testDrawCycle(c) {
  section('Stock and waste');
  c.state.sol = c.solNew();
  const order = c.state.sol.stock.map(cardKey).slice().reverse(); // pop() order

  for (let i = 0; i < 24; i++) c.solDraw();
  ok(c.state.sol.stock.length === 0, 'stock empties after 24 draws');
  ok(c.state.sol.waste.length === 24, 'waste holds all 24');
  ok(c.state.sol.waste.map(cardKey).join() === order.join(), 'waste order matches draw order');
  ok(conserved(c.state.sol), 'no cards lost while drawing');

  c.solDraw(); // recycle
  ok(c.state.sol.waste.length === 0, 'recycling empties the waste');
  ok(c.state.sol.stock.length === 24, 'recycling refills the stock');
  ok(c.state.sol.stock.every(cd => !cd.up), 'recycled stock is face down');

  const second = [];
  for (let i = 0; i < 24; i++) { c.solDraw(); second.push(cardKey(c.state.sol.waste[c.state.sol.waste.length - 1])); }
  ok(second.join() === order.join(), 'second pass deals the same order as the first');
  ok(conserved(c.state.sol), 'no cards lost across a full recycle');
}

function testTableauRules(c) {
  section('Tableau move rules');

  // 7 of hearts (red) onto 8 of spades (black) is legal; onto 8 of diamonds is not.
  c.state.sol = riggedGame({ tab: [[card(8, 0)], [card(7, 1)], [card(8, 2)], [], [], [], []] });
  c.state.sol.sel = { from: 'tab', pile: 1, index: 0 };
  c.solDrop('tab', 0);
  ok(c.state.sol.tab[0].length === 2 && c.state.sol.tab[1].length === 0,
    'red 7 stacks on black 8');

  c.state.sol = riggedGame({ tab: [[card(8, 0)], [card(7, 1)], [card(8, 2)], [], [], [], []] });
  c.state.sol.sel = { from: 'tab', pile: 1, index: 0 };
  const beforeColour = snapshot(c.state.sol);
  c.solDrop('tab', 2);
  ok(snapshot(c.state.sol) === beforeColour, 'red 7 is refused on red 8 (same colour)');

  // Rank must descend by exactly one.
  c.state.sol = riggedGame({ tab: [[card(9, 0)], [card(7, 1)], [], [], [], [], []] });
  c.state.sol.sel = { from: 'tab', pile: 1, index: 0 };
  const beforeRank = snapshot(c.state.sol);
  c.solDrop('tab', 0);
  ok(snapshot(c.state.sol) === beforeRank, 'red 7 is refused on black 9 (rank gap)');

  // Only a King may occupy an empty pile.
  c.state.sol = riggedGame({ tab: [[], [card(13, 0)], [card(12, 1)], [], [], [], []] });
  c.state.sol.sel = { from: 'tab', pile: 2, index: 0 };
  const beforeQueen = snapshot(c.state.sol);
  c.solDrop('tab', 0);
  ok(snapshot(c.state.sol) === beforeQueen, 'a Queen is refused on an empty pile');

  c.state.sol.sel = { from: 'tab', pile: 1, index: 0 };
  c.solDrop('tab', 0);
  ok(c.state.sol.tab[0].length === 1 && c.state.sol.tab[0][0].r === 13, 'a King may take an empty pile');

  // Moving a run carries every card below the grabbed one.
  c.state.sol = riggedGame({ tab: [[card(9, 0)], [card(8, 1), card(7, 0), card(6, 1)], [], [], [], [], []] });
  c.state.sol.sel = { from: 'tab', pile: 1, index: 0 };
  c.solDrop('tab', 0);
  ok(c.state.sol.tab[0].length === 4 && c.state.sol.tab[1].length === 0,
    'a three-card run moves as a unit');
}

function testFoundationRules(c) {
  section('Foundation rules');

  c.state.sol = riggedGame({ tab: [[card(1, 0)], [card(2, 0)], [card(2, 1)], [], [], [], []] });
  c.state.sol.sel = { from: 'tab', pile: 1, index: 0 };
  const beforeTwo = snapshot(c.state.sol);
  c.solDrop('found', 0);
  ok(snapshot(c.state.sol) === beforeTwo, 'a 2 is refused on an empty foundation');

  c.state.sol.sel = { from: 'tab', pile: 0, index: 0 };
  c.solDrop('found', 0);
  ok(c.state.sol.found[0].length === 1 && c.state.sol.found[0][0].r === 1, 'an Ace opens a foundation');

  c.state.sol.sel = { from: 'tab', pile: 2, index: 0 };
  const beforeSuit = snapshot(c.state.sol);
  c.solDrop('found', 0);
  ok(snapshot(c.state.sol) === beforeSuit, 'a 2 of the wrong suit is refused');

  c.state.sol.sel = { from: 'tab', pile: 1, index: 0 };
  c.solDrop('found', 0);
  ok(c.state.sol.found[0].length === 2, 'a 2 of the right suit follows the Ace');

  // A run may never go to a foundation.
  c.state.sol = riggedGame({ found: [[card(1, 0), card(2, 0)], [], [], []],
    tab: [[card(3, 0), card(4, 0)], [], [], [], [], [], []] });
  c.state.sol.sel = { from: 'tab', pile: 0, index: 0 };
  const beforeRun = snapshot(c.state.sol);
  c.solDrop('found', 0);
  ok(snapshot(c.state.sol) === beforeRun, 'a multi-card run is refused by a foundation');
}

function testFlip(c) {
  section('Turning cards face up');
  c.state.sol = riggedGame({ tab: [[down(5, 0), card(6, 1)], [card(7, 0)], [], [], [], [], []] });
  c.state.sol.sel = { from: 'tab', pile: 0, index: 1 };
  c.solDrop('tab', 1);
  ok(c.state.sol.tab[1].length === 2, 'red 6 moved onto black 7');
  ok(c.state.sol.tab[0].length === 1 && c.state.sol.tab[0][0].up === true,
    'the card it uncovered turned face up');
}

function testWasteClickBug(c) {
  section('Clicking the waste while holding a card');
  // The trap: the held card is a *legal* play onto tableau pile 0, so a stray
  // solDrop('tab', 0) would silently succeed rather than being rejected.
  c.state.sol = riggedGame({
    waste: [card(9, 1)],
    tab: [[card(8, 0)], [card(7, 1)], [], [], [], [], []],
  });
  c.state.sol.sel = { from: 'tab', pile: 1, index: 0 };
  const before = snapshot(c.state.sol);
  c.solClickCard('waste', 0, 0);
  ok(snapshot(c.state.sol) === before,
    'clicking the waste does not fire a move at tableau pile 0',
    'tab[0] went from ' + JSON.parse(before).tab[0].length + ' to ' + c.state.sol.tab[0].length
    + ' card(s), tab[1] from 1 to ' + c.state.sol.tab[1].length);

  // Clicking the waste with nothing held should pick the waste card up.
  c.state.sol = riggedGame({ waste: [card(9, 1)], tab: [[card(8, 0)], [], [], [], [], [], []] });
  c.solClickCard('waste', 0, 0);
  ok(c.state.sol.sel && c.state.sol.sel.from === 'waste', 'clicking the waste selects it');

  // Clicking it again should put it down.
  c.solClickCard('waste', 0, 0);
  ok(c.state.sol.sel === null, 'clicking the selected waste card deselects it');
}

function testFoundationToTableau(c) {
  section('Pulling a card back off a foundation');
  c.state.sol = riggedGame({
    found: [[card(1, 0), card(2, 0)], [], [], []],
    tab: [[card(3, 1)], [], [], [], [], [], []],
  });
  const moved = c.solSelectFound ? true : false;
  ok(moved, 'a foundation card can be selected (solSelectFound exists)');
  if (!moved) return;
  c.solSelectFound(0);
  ok(c.state.sol.sel && c.state.sol.sel.from === 'found', 'selecting a foundation sets sel.from = found');
  c.solDrop('tab', 0);
  ok(c.state.sol.tab[0].length === 2 && c.state.sol.found[0].length === 1,
    'black 2 came back down onto red 3');
}

function testWinAndAutoFinish(c) {
  section('Winning');
  // Everything face up and in order; one move from a complete game.
  const found = [0, 1, 2, 3].map(s => {
    const pile = [];
    for (let r = 1; r <= 12; r++) pile.push(card(r, s));
    return pile;
  });
  c.state.sol = riggedGame({
    found,
    tab: [[card(13, 0)], [card(13, 1)], [card(13, 2)], [card(13, 3)], [], [], []],
  });

  ok(typeof c.solCanAutoFinish === 'function', 'solCanAutoFinish exists');
  ok(typeof c.solAutoFinish === 'function', 'solAutoFinish exists');
  if (typeof c.solAutoFinish !== 'function') return;

  ok(c.solCanAutoFinish(c.state.sol) === true, 'auto-finish is offered when nothing is face down');
  c.solAutoFinish();
  ok(c.state.sol.found.every(f => f.length === 13), 'auto-finish sends every card home');
  ok(c.state.sol.won === true, 'the game reports itself won');
  ok(conserved(c.state.sol), 'no cards lost during auto-finish');

  // It must not be offered while cards are still buried.
  const buried = riggedGame({ tab: [[down(5, 0), card(6, 1)], [], [], [], [], [], []] });
  ok(c.solCanAutoFinish(buried) === false, 'auto-finish is withheld while a card is still face down');
}

function testRandomPlaythroughs(c) {
  section('Randomised play (invariants)');
  let wins = 0;
  const GAMES = 60;

  // A move only lands if solDrop accepted it, and every accepted move bumps
  // g.moves - so the counter is an O(1) "did that work?" signal. Diffing whole
  // game snapshots here is what made an earlier version of this test hang.
  const tryDrop = (sel, target, pile) => {
    const before = c.state.sol.moves;
    c.state.sol = Object.assign({}, c.state.sol, { sel });
    c.solDrop(target, pile);
    return c.state.sol.moves !== before;
  };

  for (let game = 0; game < GAMES; game++) {
    c.state.sol = c.solNew();
    let guard = 0;
    let sinceProgress = 0;

    while (guard++ < 1200 && !c.state.sol.won) {
      const g = c.state.sol;
      let acted = false;

      // 1. Send anything home that will go.
      for (let p = 0; p < 7 && !acted; p++) {
        const pile = g.tab[p];
        if (pile.length && pile[pile.length - 1].up
          && c.solToFound({ from: 'tab', pile: p, index: pile.length - 1 })) acted = true;
      }
      if (!acted && g.waste.length && c.solToFound({ from: 'waste', pile: 0, index: 0 })) acted = true;

      // 2. Move a face-up run only when doing so achieves something: it either
      //    uncovers a face-down card or frees a column. Without this guard the
      //    strategy ping-pongs the same run between two piles forever and the
      //    game never progresses (measured: 2.1/52 cards home).
      if (!acted) {
        outer:
        for (let from = 0; from < 7; from++) {
          const pile = c.state.sol.tab[from];
          const firstUp = pile.findIndex(cd => cd.up);
          if (firstUp === -1) continue;
          const uncovers = firstUp > 0;                 // a face-down card waits beneath
          const frees = firstUp === 0 && pile.length > 0; // the whole column empties
          if (!uncovers && !frees) continue;
          for (let to = 0; to < 7; to++) {
            if (to === from) continue;
            // Emptying a column only to fill it from another column is a no-op.
            if (frees && c.state.sol.tab[to].length === 0) continue;
            if (tryDrop({ from: 'tab', pile: from, index: firstUp }, 'tab', to)) { acted = true; break outer; }
          }
        }
      }

      // 3. Otherwise place the waste card, or draw.
      if (!acted && c.state.sol.waste.length) {
        for (let to = 0; to < 7 && !acted; to++) {
          if (tryDrop({ from: 'waste', pile: 0, index: 0 }, 'tab', to)) acted = true;
        }
      }
      // 4. Once nothing is face down the game is decided - let the real
      //    auto-finish play it out, which is what a player would click.
      if (!acted && c.solCanAutoFinish(c.state.sol)) {
        c.solAutoFinish();
        acted = true;
      }

      if (!acted) {
        if (!c.state.sol.stock.length && !c.state.sol.waste.length) break;
        c.solDraw();
        sinceProgress++;
        if (sinceProgress > 60) break; // cycling the stock with nothing to do
      } else {
        sinceProgress = 0;
      }

      if (!conserved(c.state.sol)) {
        ok(false, 'card conservation held through play', 'game ' + game + ', move ' + guard);
        return;
      }
      const foundOk = c.state.sol.found.every(f => f.every((cd, k) => cd.r === k + 1 && cd.s === f[0].s));
      if (!foundOk) {
        ok(false, 'foundations stay in ascending same-suit order', 'game ' + game);
        return;
      }
      const tabOk = c.state.sol.tab.every(p => {
        const up = p.filter(cd => cd.up);
        return up.every((cd, k) => k === 0
          || (up[k - 1].r === cd.r + 1 && c.solRed(up[k - 1]) !== c.solRed(cd)));
      });
      if (!tabOk) {
        ok(false, 'face-up tableau runs stay descending and alternating', 'game ' + game);
        return;
      }
    }
    if (c.state.sol.won) wins++;
  }

  ok(true, GAMES + ' games played with every invariant intact');
  // Winnability is the point: invariants can all hold in a game nobody can
  // finish. A naive strategy on draw-1 Klondike should clear a decent share.
  ok(wins >= GAMES / 10, 'games are genuinely completable',
    'only ' + wins + '/' + GAMES + ' reached a win');
  console.log('        (' + wins + '/' + GAMES + ' solved, including auto-finish)');
}

/* -------------------------------------------------------------------- main */

/**
 * Replace Math.random with a seeded PRNG (mulberry32) so a failing game can be
 * reproduced exactly. solNew() shuffles with Math.random, so seeding it makes
 * the whole suite deterministic.
 */
function seedRandom(seed) {
  let a = seed >>> 0;
  Math.random = function () {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function main() {
  const seed = Number(process.argv[2] || 20260904);
  seedRandom(seed);
  const c = makeComponent();
  console.log('Solitaire logic - site/index.html   (seed ' + seed + ')');

  testDeal(c);
  testDrawCycle(c);
  testTableauRules(c);
  testFoundationRules(c);
  testFlip(c);
  testWasteClickBug(c);
  testFoundationToTableau(c);
  testWinAndAutoFinish(c);
  testRandomPlaythroughs(c);

  console.log('\n' + (failures ? failures + ' of ' + checks + ' checks FAILED' : 'all ' + checks + ' checks passed'));
  process.exit(failures ? 1 : 0);
}

main();
