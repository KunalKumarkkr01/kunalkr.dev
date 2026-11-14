"""
Patch 03 - make the desktop metaphor usable with a finger.

The layout already survives a narrow viewport, but the interactions did not:
opening an icon needed a double-click, flagging a mine needed a right-click,
steering Snake needed arrow keys, and a 620px-wide window on a 390px screen is
unusable. Dragging already worked (the title bar uses pointer events).

Everything here is gated on IS_TOUCH or viewport width, so the mouse experience
is unchanged.

Run from the repo root:  python build/patch_03_touch.py
Idempotent: re-running after a successful patch is a no-op.
"""
import pathlib
import sys

TARGET = pathlib.Path(__file__).resolve().parent.parent / "site" / "index.html"

TOUCH_CONSTS = r"""/*
 * IS_TOUCH - true when the primary input is a finger rather than a pointer.
 *
 * The Windows 95 metaphor assumes a mouse: double-click to open, right-click to
 * flag, arrow keys to steer. Where this is true the UI swaps in touch
 * equivalents (single tap, press-and-hold, an on-screen D-pad) and the on-screen
 * copy changes to match. Checked via `hover: none` + `pointer: coarse` rather
 * than the presence of touch events, so hybrid laptops keep the mouse UI.
 */
const IS_TOUCH = typeof matchMedia === 'function'
  && matchMedia('(hover: none) and (pointer: coarse)').matches;

/* Verb used wherever the UI tells the visitor how to open something. */
const OPEN_VERB = IS_TOUCH ? 'Tap' : 'Double-click';

/* Below this viewport width a floating window is narrower than it is usable, so new windows open maximised. */
const MAXIMISE_BELOW_PX = 700;

/* How long a finger must rest on a Minesweeper cell before it plants a flag. */
const MINE_HOLD_MS = 400;

const IC = 'components/icons/assets/';"""

EDITS = [
    # ---------- constants ----------
    ("touch constants",
     "const IC = 'components/icons/assets/';",
     TOUCH_CONSTS),

    # ---------- copy that names a mouse gesture ----------
    ("welcome status bar",
     "status: 'Double-click a desktop icon to open it', statusRight: 'kunalOS 95' }",
     "status: OPEN_VERB + ' a desktop icon to open it', statusRight: 'kunalOS 95' }"),

    ("minesweeper status bar",
     "status: 'Left click opens · right click flags', statusRight: 'Beginner' }",
     "status: IS_TOUCH ? 'Tap opens · press and hold flags' : 'Left click opens · right click flags', statusRight: 'Beginner' }"),

    ("snake status bar",
     "status: 'Arrow keys or WASD to steer', statusRight: 'Speed 1' }",
     "status: IS_TOUCH ? 'Use the arrows below to steer' : 'Arrow keys or WASD to steer', statusRight: 'Speed 1' }"),

    ("first desktop tip",
     "    'Double-click any desktop icon to open it.',",
     "    OPEN_VERB + ' any desktop icon to open it.',"),

    ("welcome paragraph",
     "Every icon on this desktop is a part of my profile — double-click one to open it.</p>",
     "Every icon on this desktop is a part of my profile — {{ openHint }}.</p>"),

    ("screen saver hint",
     "font-family:Consolas,'Courier New',monospace\">move the mouse to resume</div>",
     "font-family:Consolas,'Courier New',monospace\">{{ saverHint }}</div>"),

    ("snake in-game message",
     "snakeMsg: sn.dead ? 'Game over — press New Game' : sn.running ? 'Arrow keys or WASD' : 'Press Start (or an arrow key)',",
     "snakeMsg: sn.dead ? 'Game over — press New Game'\n        : sn.running ? (IS_TOUCH ? 'Steer with the arrows below' : 'Arrow keys or WASD')\n        : (IS_TOUCH ? 'Press Start, then steer below' : 'Press Start (or an arrow key)'),"),

    # ---------- single tap opens a desktop icon ----------
    ("desktop icon tap-to-open",
     "          select: () => this.setState({ deskSel: id }), open: () => this.open(id) };",
     "          // A tap has no hover state to preview a selection, so on touch it opens straight away.\n"
     "          select: () => IS_TOUCH ? this.open(id) : this.setState({ deskSel: id }), open: () => this.open(id) };"),

    ("desktop icon touch-action",
     'style="width:78px;height:74px;display:flex;flex-direction:column;align-items:center;gap:5px;padding-top:5px;cursor:default"',
     'style="width:78px;height:74px;display:flex;flex-direction:column;align-items:center;gap:5px;padding-top:5px;cursor:default;touch-action:manipulation"'),

    # ---------- narrow viewports open windows maximised ----------
    ("open() maximises on narrow screens",
     "    this.setState(s => ({ z: s.z + 1, startOpen: false, startSub: null, ctx: null, wins: [...s.wins, { id: Date.now() + Math.random(), app: id, x, y, w, h, z: s.z + 1, min: false, max: false }] }));",
     "    // On a phone-width viewport a floating window is unusable, so it opens filling the desktop.\n"
     "    const max = vw < MAXIMISE_BELOW_PX;\n"
     "    this.setState(s => ({ z: s.z + 1, startOpen: false, startSub: null, ctx: null, wins: [...s.wins, { id: Date.now() + Math.random(), app: id, x, y, w, h, z: s.z + 1, min: false, max }] }));"),

    # ---------- window chrome should not fight the browser's touch gestures ----------
    ("title bar touch-action",
     'padding:3px 2px 3px 3px;background:{{ w.barBg }};margin:3px 3px 0" onPointerDown="{{ w.dragStart }}"',
     'padding:3px 2px 3px 3px;background:{{ w.barBg }};margin:3px 3px 0;touch-action:none" onPointerDown="{{ w.dragStart }}"'),

    ("resize handle touch-action",
     'style="position:absolute;right:2px;bottom:2px;width:16px;height:16px;cursor:nwse-resize"',
     'style="position:absolute;right:2px;bottom:2px;width:16px;height:16px;cursor:nwse-resize;touch-action:none"'),

    # ---------- Minesweeper: press and hold to flag ----------
    ("minesweeper cell handlers",
     '<div style="width:16px;height:16px;cursor:default" onClick="{{ c.open }}" onContextMenu="{{ c.flag }}">',
     '<div style="width:16px;height:16px;cursor:default;touch-action:manipulation" onClick="{{ c.open }}" onContextMenu="{{ c.flag }}"'
     ' onPointerDown="{{ c.press }}" onPointerUp="{{ c.release }}" onPointerLeave="{{ c.release }}" onPointerCancel="{{ c.release }}">'),

    ("minesweeper cell values",
     "        open: () => this.mineOpen(i), flag: e => { e.preventDefault(); e.stopPropagation(); this.mineFlag(i); },\n      })),",
     "        // A hold that already planted a flag must not also open the cell on the click that follows.\n"
     "        open: () => { if (this.mineHeld) { this.mineHeld = false; return; } this.mineOpen(i); },\n"
     "        flag: e => { e.preventDefault(); e.stopPropagation(); this.mineFlag(i); },\n"
     "        press: () => { if (!IS_TOUCH) return; clearTimeout(this.mineHold);\n"
     "          this.mineHold = setTimeout(() => { this.mineHeld = true; this.mineFlag(i); }, MINE_HOLD_MS); },\n"
     "        release: () => clearTimeout(this.mineHold),\n      })),"),

    # ---------- Snake: on-screen D-pad ----------
    ("snake d-pad markup",
     '            <div style="font-size:11px;color:#404040">{{ snakeMsg }}</div>',
     '            <sc-if value="{{ snakeTouch }}">\n'
     '              <div style="display:grid;grid-template-columns:repeat(3,36px);grid-template-rows:repeat(2,30px);gap:4px;touch-action:manipulation">\n'
     '                <span></span>\n'
     '                <button style="{{ padStyle }}" onClick="{{ padUp }}">▲</button>\n'
     '                <span></span>\n'
     '                <button style="{{ padStyle }}" onClick="{{ padLeft }}">◀</button>\n'
     '                <button style="{{ padStyle }}" onClick="{{ padDown }}">▼</button>\n'
     '                <button style="{{ padStyle }}" onClick="{{ padRight }}">▶</button>\n'
     '              </div>\n'
     '            </sc-if>\n'
     '            <div style="font-size:11px;color:#404040">{{ snakeMsg }}</div>'),

    # ---------- new template values ----------
    ("touch values",
     "      saverOn: s.saver, saverRef: this.saverRef, wakeSaver: () => this.poke(),",
     "      openHint: IS_TOUCH ? 'tap one to open it' : 'double-click one to open it',\n"
     "      saverHint: IS_TOUCH ? 'tap to resume' : 'move the mouse to resume',\n"
     "      snakeTouch: IS_TOUCH,\n"
     "      padStyle: { border: 0, background: '#c0c0c0', boxShadow: RAISED, fontFamily: 'inherit', fontSize: 13, cursor: 'default' },\n"
     "      padUp: () => this.padTurn([0, -1]), padDown: () => this.padTurn([0, 1]),\n"
     "      padLeft: () => this.padTurn([-1, 0]), padRight: () => this.padTurn([1, 0]),\n"
     "      saverOn: s.saver, saverRef: this.saverRef, wakeSaver: () => this.poke(),"),

    # ---------- D-pad handler ----------
    ("padTurn method",
     "  poke() { this.lastAct = Date.now(); if (this.state.saver) this.stopSaver(); }",
     "  /*\n"
     "   * padTurn - steers Snake from the on-screen D-pad shown on touch devices.\n"
     "   *\n"
     "   * Mirrors what the arrow keys do, and starts a fresh game on the first press\n"
     "   * so a visitor never has to find the Start button before they can play.\n"
     "   *\n"
     "   * padTurn([0, -1])  // head north\n"
     "   */\n"
     "  padTurn(d) {\n"
     "    const sn = this.state.snake;\n"
     "    if (sn && !sn.running && !sn.dead) this.snakeStart();\n"
     "    this.snakeTurn(d);\n"
     "  }\n\n"
     "  poke() { this.lastAct = Date.now(); if (this.state.saver) this.stopSaver(); }"),

    # ---------- cleanup ----------
    ("clear the hold timer on unmount",
     ".forEach(clearInterval);\n    clearTimeout(this.botT);",
     ".forEach(clearInterval);\n    clearTimeout(this.botT); clearTimeout(this.mineHold);"),
]


def main():
    src = TARGET.read_text(encoding="utf-8")
    if "IS_TOUCH" in src:
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
