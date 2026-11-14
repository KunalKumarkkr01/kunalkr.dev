"""
Patch 10 - finish the Solitaire game.

build/test_solitaire.js runs the shipped logic headless. Against the unpatched
code the rules themselves held up (1027 invariant checks across 60 random
games) but three things were wrong or missing:

  1. Clicking the waste while holding a card called solDrop('tab', 0) - it
     silently played the held card onto tableau pile 0. Proven by the harness:
     "tab[0] went from 1 to 2 card(s), tab[1] from 1 to 0".
  2. A card sent to a foundation could never come back. sel.from === 'found'
     was handled all through solTake/solDrop but nothing could ever set it, so
     that path was dead code and a legal Klondike move was unavailable.
  3. A decided game still had to be finished by hand - roughly thirty
     double-clicks after the outcome was certain.

Also factors the foundation-target search out of solToFound into solFoundIndex,
which auto-finish reuses.

Run from the repo root:  python build/patch_10_solitaire.py
Then verify:             node build/test_solitaire.js
Idempotent: re-running after a successful patch is a no-op.
"""
import pathlib
import sys

TARGET = pathlib.Path(__file__).resolve().parent.parent / "site" / "index.html"

# --- 1. shared foundation lookup, used by solToFound and solAutoFinish -------

FOUND_OLD = "    const fi = g.found.findIndex(f => (f.length ? f[f.length - 1].s === card.s && f[f.length - 1].r === card.r - 1 : card.r === 1));"
FOUND_NEW = "    const fi = this.solFoundIndex(g, card);"

FOUND_HELPER_OLD = "  solRed(c) { return c.s === 1 || c.s === 2; }"
FOUND_HELPER_NEW = """  solRed(c) { return c.s === 1 || c.s === 2; }

  /*
   * solFoundIndex - which foundation, if any, will accept this card right now.
   *
   * A foundation takes an Ace when empty, otherwise the next rank up in the
   * same suit. Returns -1 when no pile will take it.
   *
   * solFoundIndex(game, {r: 1, s: 0})  // -> index of the first empty foundation
   */
  solFoundIndex(g, c) {
    return g.found.findIndex(f => f.length
      ? (f[f.length - 1].s === c.s && f[f.length - 1].r === c.r - 1)
      : c.r === 1);
  }"""

# --- 2. clicking a non-tableau source swaps the selection --------------------

CLICK_OLD = """  solClickCard(from, pile, index) {
    const g = this.state.sol;
    const sel = g.sel;
    if (!sel) {
      if (from === 'tab' && !g.tab[pile][index].up) return;
      return this.setState({ sol: { ...g, sel: { from, pile, index } } });
    }
    if (sel.from === from && sel.pile === pile && sel.index === index) return this.setState({ sol: { ...g, sel: null } });
    this.solDrop('tab', pile);
  }"""

CLICK_NEW = """  solClickCard(from, pile, index) {
    const g = this.state.sol;
    const sel = g.sel;
    const select = () => this.setState({ sol: { ...g, sel: { from, pile, index } } });
    if (!sel) {
      if (from === 'tab' && !g.tab[pile][index].up) return;
      return select();
    }
    if (sel.from === from && sel.pile === pile && sel.index === index) return this.setState({ sol: { ...g, sel: null } });
    // The waste is a source, never a destination. Treating a click on it as a
    // drop target played the held card onto tableau pile 0 instead.
    if (from !== 'tab') return select();
    this.solDrop('tab', pile);
  }

  /*
   * solSelectFound - take the top card back off a foundation.
   *
   * Klondike lets you retrieve a card you have already sent home when you need
   * it to unblock the tableau. With a card already in hand the click still
   * means "play it here", so this only picks up when nothing is held.
   *
   * solSelectFound(0)  // holds the top card of the first foundation
   */
  solSelectFound(i) {
    const g = this.state.sol;
    if (g.sel && g.sel.from === 'found' && g.sel.pile === i) {
      return this.setState({ sol: { ...g, sel: null } });
    }
    if (g.sel) return this.solDrop('found', i);
    if (!g.found[i].length) return;
    this.setState({ sol: { ...g, sel: { from: 'found', pile: i, index: g.found[i].length - 1 } } });
  }

  /*
   * solCanAutoFinish - true once the outcome is certain but cards remain.
   *
   * With nothing face down in the tableau every card is reachable, so the game
   * is already won and the rest is only clicking. Stock and waste may still
   * hold cards; solAutoFinish cycles them.
   */
  solCanAutoFinish(g) {
    return !!g && !g.won
      && g.tab.every(p => p.every(c => c.up))
      && g.found.reduce((n, f) => n + f.length, 0) < 52;
  }

  /*
   * solAutoFinish - play out a decided game.
   *
   * Repeatedly sends every available tableau top and waste card home, drawing
   * and recycling when nothing else will move. The dry counter stops it if a
   * full pass through stock and waste yields nothing, so it can never spin.
   */
  solAutoFinish() {
    const start = this.state.sol;
    if (!this.solCanAutoFinish(start)) return;

    const g = { ...start, stock: start.stock.slice(), waste: start.waste.slice(),
      found: start.found.map(f => f.slice()), tab: start.tab.map(t => t.slice()) };

    let dry = 0;
    while (!g.found.every(f => f.length === 13)) {
      let moved = false;

      for (let p = 0; p < 7; p++) {
        const c = g.tab[p][g.tab[p].length - 1];
        const fi = c ? this.solFoundIndex(g, c) : -1;
        if (fi >= 0) { g.found[fi].push(g.tab[p].pop()); g.moves++; moved = true; }
      }
      const w = g.waste[g.waste.length - 1];
      const wf = w ? this.solFoundIndex(g, w) : -1;
      if (wf >= 0) { g.found[wf].push(g.waste.pop()); g.moves++; moved = true; }

      if (moved) { dry = 0; continue; }

      if (g.stock.length) g.waste.push({ ...g.stock.pop(), up: true });
      else if (g.waste.length) { g.stock = g.waste.reverse().map(c => ({ ...c, up: false })); g.waste = []; }
      else break;

      if (++dry > g.stock.length + g.waste.length + 2) break;
    }

    g.sel = null;
    g.won = g.found.every(f => f.length === 13);
    this.setState({ sol: g });
  }"""

# --- 3. wiring ---------------------------------------------------------------

FOUND_CLICK_OLD = "          click: () => this.solDrop('found', i) };"
FOUND_CLICK_NEW = """          outline: isSel('found', i, 0) ? '2px solid #ffd400' : 'none',
          click: () => this.solSelectFound(i) };"""

VALS_OLD = "      solMoves: 'Moves ' + g.moves, solMsg: g.won ? 'You cleared the table.' : (sel ? 'Now click where it goes' : 'Click a card, then its destination'),"
VALS_NEW = """      solMoves: 'Moves ' + g.moves,
      solCanFinish: this.solCanAutoFinish(g),
      solFinishClick: () => this.solAutoFinish(),
      solMsg: g.won ? 'You cleared the table.'
        : this.solCanAutoFinish(g) ? 'Every card is face up \\u2014 finish it.'
        : (sel ? 'Now click where it goes' : 'Click a card, then its destination'),"""

BTN = ("height:23px;border:0;background:#c0c0c0;"
       "box-shadow:inset -1px -1px 0 #0a0a0a,inset 1px 1px 0 #fff,inset -2px -2px 0 #808080,inset 2px 2px 0 #dfdfdf;"
       "font-size:11px;cursor:default")
BTN_ACTIVE = "box-shadow:inset 1px 1px 0 #0a0a0a,inset -1px -1px 0 #fff,inset 2px 2px 0 #808080"

TPL_OLD = ('              <button style="min-width:78px;' + BTN + '" style-active="' + BTN_ACTIVE
           + '" onClick="{{ solReset }}">Deal Again</button>\n')
TPL_NEW = (TPL_OLD
           + '              <sc-if value="{{ solCanFinish }}">\n'
           + '                <button style="min-width:84px;' + BTN + '" style-active="' + BTN_ACTIVE
           + '" onClick="{{ solFinishClick }}">Auto-finish</button>\n'
           + '              </sc-if>\n')

EDITS = [
    ("solFoundIndex helper", FOUND_HELPER_OLD, FOUND_HELPER_NEW),
    ("solToFound uses the helper", FOUND_OLD, FOUND_NEW),
    ("solClickCard + foundation pickup + auto-finish", CLICK_OLD, CLICK_NEW),
    ("foundation click handler", FOUND_CLICK_OLD, FOUND_CLICK_NEW),
    ("view-model values", VALS_OLD, VALS_NEW),
    ("Auto-finish button", TPL_OLD, TPL_NEW),
]


def main():
    src = TARGET.read_text(encoding="utf-8")
    if "solAutoFinish" in src:
        print("already patched - nothing to do")
        return 0
    for label, old, new in EDITS:
        n = src.count(old)
        if n != 1:
            print("FAIL %s: expected 1 match, found %d" % (label, n))
            return 1
        src = src.replace(old, new)
        print("ok   %s" % label)
    TARGET.write_text(src, encoding="utf-8")
    print("wrote %s (%d bytes)" % (TARGET, len(src)))
    return 0


if __name__ == "__main__":
    sys.exit(main())
