"""
Patch 08 - put the four games on the desktop.

They were reachable only through Start > Games, which most visitors never open,
so the best part of the site was effectively hidden. The icon grid flows into a
second column automatically once a viewport cannot fit eleven rows, so nothing
needs to move.

GAMES is declared after DESK, so the ids are repeated literally rather than
spread from it - a class field cannot read a sibling declared below it.

Run from the repo root:  python build/patch_08_desk_games.py
Idempotent: re-running after a successful patch is a no-op.
"""
import pathlib
import sys

TARGET = pathlib.Path(__file__).resolve().parent.parent / "site" / "index.html"

OLD = "  DESK = ['welcome', 'settings', 'gallery', 'pdf', 'terminal', 'mail', 'assistant'];"
NEW = ("  DESK = ['welcome', 'settings', 'gallery', 'pdf', 'terminal', 'mail', 'assistant',\n"
       "    'tictactoe', 'minesweeper', 'snake', 'solitaire'];")


def main():
    src = TARGET.read_text(encoding="utf-8")
    if "'assistant',\n    'tictactoe'" in src:
        print("already patched - nothing to do")
        return 0
    if src.count(OLD) != 1:
        print("FAIL: DESK matched %d times" % src.count(OLD))
        return 1
    TARGET.write_text(src.replace(OLD, NEW), encoding="utf-8")
    print("ok   four games added to the desktop icon grid")
    return 0


if __name__ == "__main__":
    sys.exit(main())
