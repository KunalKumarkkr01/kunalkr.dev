"""
Patch 14 - give Tic-Tac-Toe its own icon.

Same defect Snake had: the game was showing I.lights, an unrelated red-eyed
device from the bundled pack. With four games now sitting together on the
desktop, an icon that does not depict the game is just noise.

build/make_tictactoe_icon.py draws the replacement; this wires it into the
desktop icon, title bar, taskbar button and Start menu.

Run from the repo root:
    python build/make_tictactoe_icon.py && python build/patch_14_ttt_icon.py
Idempotent: re-running after a successful patch is a no-op.
"""
import pathlib
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
TARGET = ROOT / "site" / "index.html"
ICONS = ROOT / "site" / "components" / "icons" / "assets"

EDITS = [
    ("icon map entries",
     "  // Drawn by build/make_snake_icon.py - the bundled pack has no snake.\n"
     "  snake: IC + 'snake-32.png', snake16: IC + 'snake-16.png',",
     "  // Drawn by build/make_snake_icon.py - the bundled pack has no snake.\n"
     "  snake: IC + 'snake-32.png', snake16: IC + 'snake-16.png',\n"
     "  // Likewise build/make_tictactoe_icon.py - no noughts and crosses either.\n"
     "  ttt: IC + 'ttt-32.png', ttt16: IC + 'ttt-16.png',"),

    ("tic-tac-toe app icons",
     "{ id: 'tictactoe', label: 'Tic-Tac-Toe', title: 'Tic-Tac-Toe', icon32: I.lights, icon16: I.lights16,",
     "{ id: 'tictactoe', label: 'Tic-Tac-Toe', title: 'Tic-Tac-Toe', icon32: I.ttt, icon16: I.ttt16,"),
]


def main():
    for name in ("ttt-32.png", "ttt-16.png"):
        if not (ICONS / name).exists():
            print("FAIL: %s missing - run build/make_tictactoe_icon.py first" % name)
            return 1

    src = TARGET.read_text(encoding="utf-8")
    if "ttt-32.png" in src:
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
