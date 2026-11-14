"""
Patch 09 - give Snake its own icon.

The bundled pack has no snake, so the game was showing a generic joystick -
indistinguishable from "some game" and, on the desktop alongside three other
games, meaningless. build/make_snake_icon.py draws a proper one; this wires it
in for the desktop icon, the title bar, the taskbar button and the Start menu.

I.joy is left alone: it is still the right icon for the Start > Games folder.

Run from the repo root:
    python build/make_snake_icon.py && python build/patch_09_snake_icon.py
Idempotent: re-running after a successful patch is a no-op.
"""
import pathlib
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
TARGET = ROOT / "site" / "index.html"
ICONS = ROOT / "site" / "components" / "icons" / "assets"

EDITS = [
    ("icon map entries",
     "  joy: IC + '2981d5f1dd21417b.png', bulb: IC + 'c73c8520a7650b4a.png',",
     "  joy: IC + '2981d5f1dd21417b.png', bulb: IC + 'c73c8520a7650b4a.png',\n"
     "  // Drawn by build/make_snake_icon.py - the bundled pack has no snake.\n"
     "  snake: IC + 'snake-32.png', snake16: IC + 'snake-16.png',"),

    ("snake app icons",
     "{ id: 'snake', label: 'Snake', title: 'Snake', icon32: I.joy, icon16: I.joy16,",
     "{ id: 'snake', label: 'Snake', title: 'Snake', icon32: I.snake, icon16: I.snake16,"),
]


def main():
    for name in ("snake-32.png", "snake-16.png"):
        if not (ICONS / name).exists():
            print("FAIL: %s missing - run build/make_snake_icon.py first" % name)
            return 1

    src = TARGET.read_text(encoding="utf-8")
    if "snake-32.png" in src:
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
