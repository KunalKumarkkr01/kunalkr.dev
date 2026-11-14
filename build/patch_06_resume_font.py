"""
Patch 06 - render the resume document in Roboto instead of the pixel font.

The whole desktop uses MS Sans Serif with `-webkit-font-smoothing: none`, which
is right for window chrome and wrong for three pages of continuous prose. The
paper inside the Document Viewer is a document, so giving it a real text face
(and re-enabling antialiasing, which the global rule switches off) reads as
correct rather than inconsistent: a modern PDF rendered inside a Win95 viewer.

Roboto stands in for Google Sans, which is Google's proprietary brand font and
is not licensed for third-party use or published on Google Fonts. Roboto is
Google's own open text face and the closest legitimate equivalent. It is
vendored at site/fonts/roboto-latin.woff2 (v51 variable, latin subset) so the
page still makes zero third-party requests.

Only the scaled page stack is touched - the toolbar, status bar and title bar
stay pixel-perfect.

Run from the repo root:  python build/patch_06_resume_font.py
Idempotent: re-running after a successful patch is a no-op.
"""
import pathlib
import sys

TARGET = pathlib.Path(__file__).resolve().parent.parent / "site" / "index.html"

FONT_ANCHOR = ("@font-face{font-family:'MS Sans Serif';"
               "src:url('fonts/ms_sans_serif_bold.woff2') format('woff2'),"
               "url('fonts/ms_sans_serif_bold.woff') format('woff');"
               "font-weight:700;font-style:normal;font-display:swap}")

FONT_ADDED = (FONT_ANCHOR + "\n"
              "/* Roboto (variable, latin) - used only for the resume pages in the Document Viewer. */\n"
              "@font-face{font-family:'Roboto';src:url('fonts/roboto-latin.woff2') format('woff2');"
              "font-weight:100 900;font-style:normal;font-display:swap}")

PAGES_OLD = ('<div style="transform:scale({{ pdfZoom }});transform-origin:top center;'
             'display:flex;flex-direction:column;gap:16px;font-size:11.5px;line-height:1.5;color:#000">')

# font-smoothing is re-enabled here specifically: html/body set it to `none` so the
# pixel UI stays crisp, which would otherwise render Roboto unantialiased and ugly.
PAGES_NEW = ('<div style="transform:scale({{ pdfZoom }});transform-origin:top center;'
             'display:flex;flex-direction:column;gap:16px;'
             "font-family:'Roboto',system-ui,-apple-system,'Segoe UI',Arial,sans-serif;"
             'font-size:12.5px;line-height:1.6;color:#111;'
             '-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale">')

EDITS = [
    ("Roboto @font-face", FONT_ANCHOR, FONT_ADDED),
    ("resume page stack", PAGES_OLD, PAGES_NEW),
]


def main():
    font_file = TARGET.parent / "fonts" / "roboto-latin.woff2"
    if not font_file.exists():
        print("FAIL: %s is missing - vendor the font first" % font_file)
        return 1

    src = TARGET.read_text(encoding="utf-8")
    if "roboto-latin.woff2" in src:
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
