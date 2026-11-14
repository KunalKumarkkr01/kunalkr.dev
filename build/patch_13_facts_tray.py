"""
Patch 13 - give the trivia panel a way back after it is hidden.

Patch 12 shipped a Hide button and a showFacts handler, but never wired
anything to call it: once hidden, the panel was gone until reload. This adds a
bulb button to the system tray next to "Show BIT", following the same pattern -
dimmed while the panel is on screen, full strength once it has been dismissed.

Run from the repo root:  python build/patch_13_facts_tray.py
Idempotent: re-running after a successful patch is a no-op.
"""
import pathlib
import sys

TARGET = pathlib.Path(__file__).resolve().parent.parent / "site" / "index.html"

OLD = ('      <button style="width:16px;height:16px;padding:0;border:0;background:transparent;'
       'cursor:default;opacity:{{ botTrayOpacity }}" title="Show BIT" onClick="{{ showBot }}">'
       '<img src="components/icons/assets/d0ecdb07aa53909a.png" width="16" height="16" alt=""></button>')

NEW = (OLD + '\n'
       '      <button style="width:16px;height:16px;padding:0;border:0;background:transparent;'
       'cursor:default;opacity:{{ factsTrayOpacity }}" title="Tech trivia" onClick="{{ showFacts }}">'
       '<img src="components/icons/assets/c73c8520a7650b4a.png" width="16" height="16" alt=""></button>')

# factsHidden was exposed but unused; replace it with the opacity the tray needs.
VAL_OLD = "      factsHidden: s.factsHidden && s.phase === 'desktop' && !IS_NARROW,"
VAL_NEW = "      factsTrayOpacity: s.factsHidden ? 1 : 0.45,"


def main():
    src = TARGET.read_text(encoding="utf-8")
    if "factsTrayOpacity" in src:
        print("already patched - nothing to do")
        return 0
    for label, old, new in (("tray button", OLD, NEW), ("tray opacity value", VAL_OLD, VAL_NEW)):
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
