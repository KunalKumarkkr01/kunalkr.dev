"""
Patch 04 - make Start menu submenus reachable on touch.

Start menu parents (Programs, Games, Documents, Settings, Find) opened their
submenu on mouseenter and toggled it on click. A browser fires a synthetic
mouseenter immediately before the click on a tap, so on a touch device the two
handlers cancelled each other out and the submenu never appeared - putting all
four games and half the apps out of reach on a phone.

Ignoring hover on touch leaves the tap's toggle to do the work.

Run from the repo root:  python build/patch_04_startmenu_touch.py
Idempotent: re-running after a successful patch is a no-op.
"""
import pathlib
import sys

TARGET = pathlib.Path(__file__).resolve().parent.parent / "site" / "index.html"

OLD = "      hover: () => this.setState({ startSub: it.sub ? it.key : null }),"

NEW = ("      // On touch, the synthetic mouseenter that precedes a tap would open the\n"
       "      // submenu and let the tap's toggle immediately close it again.\n"
       "      hover: () => { if (IS_TOUCH) return; this.setState({ startSub: it.sub ? it.key : null }); },")


def main():
    src = TARGET.read_text(encoding="utf-8")
    if "the synthetic mouseenter that precedes a tap" in src:
        print("already patched - nothing to do")
        return 0
    if src.count(OLD) != 1:
        print("FAIL: hover handler matched %d times" % src.count(OLD))
        return 1
    TARGET.write_text(src.replace(OLD, NEW), encoding="utf-8")
    print("ok   start submenu hover gated on IS_TOUCH")
    return 0


if __name__ == "__main__":
    sys.exit(main())
