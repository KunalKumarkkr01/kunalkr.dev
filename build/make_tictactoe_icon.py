"""
Draw a Tic-Tac-Toe icon in the Windows 95 idiom.

The game was borrowing I.lights - a red-eyed device from the bundled pack that
says nothing about noughts and crosses. This draws a board mid-game, matching
the sunken-panel treatment used for the Snake icon so the two read as a set.

Emits site/components/icons/assets/ttt-32.png and ttt-16.png.
The 16px version is drawn separately; pixel art does not survive resampling.

Run from the repo root:  python build/make_tictactoe_icon.py
"""
import pathlib

from PIL import Image, ImageDraw

OUT = pathlib.Path(__file__).resolve().parent.parent / "site" / "components" / "icons" / "assets"

FACE = (255, 255, 255)
GRID = (128, 128, 128)
X_COL = (0, 0, 160)      # classic Win95 blue
O_COL = (200, 0, 0)      # classic Win95 red
SHADOW = (128, 128, 128)
LIGHT = (223, 223, 223)
BLACK = (10, 10, 10)


def sunken(draw, x0, y0, x1, y1):
    draw.rectangle([x0, y0, x1, y1], fill=FACE)
    draw.line([(x0, y0), (x1, y0)], fill=SHADOW)
    draw.line([(x0, y0), (x0, y1)], fill=SHADOW)
    draw.line([(x0, y1), (x1, y1)], fill=LIGHT)
    draw.line([(x1, y0), (x1, y1)], fill=LIGHT)


def draw_x(d, cx, cy, size, w):
    """Two diagonals inside a size x size cell at (cx, cy)."""
    pad = 1
    a, b = cx + pad, cy + pad
    c, e = cx + size - 1 - pad, cy + size - 1 - pad
    d.line([(a, b), (c, e)], fill=X_COL, width=w)
    d.line([(a, e), (c, b)], fill=X_COL, width=w)


def draw_o(d, cx, cy, size, w):
    pad = 1
    d.ellipse([cx + pad, cy + pad, cx + size - 1 - pad, cy + size - 1 - pad],
              outline=O_COL, width=w)


def build_32():
    im = Image.new("RGBA", (32, 32), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    d.rectangle([1, 1, 30, 30], fill=BLACK)
    sunken(d, 2, 2, 29, 29)

    # 3x3 of 8px cells, board origin (4,4).
    o, s = 4, 8
    for k in (1, 2):
        d.line([(o + k * s, o), (o + k * s, o + 3 * s - 1)], fill=GRID)
        d.line([(o, o + k * s), (o + 3 * s - 1, o + k * s)], fill=GRID)

    draw_x(d, o, o, s, 2)                      # top-left
    draw_o(d, o + s, o + s, s, 2)              # centre
    draw_x(d, o + 2 * s, o + 2 * s, s, 2)      # bottom-right
    draw_o(d, o + 2 * s, o, s, 2)              # top-right
    return im


def build_16():
    """
    At 16px the frame and padding are dropped: 4px cells leave a 2x2 drawable
    area, where an X and an O both collapse to a single block. Going frameless
    buys 5px cells, which is the smallest an X and a ring stay distinguishable.
    """
    im = Image.new("RGBA", (16, 16), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    d.rectangle([0, 0, 15, 15], fill=FACE)
    d.rectangle([0, 0, 15, 15], outline=BLACK)

    s = 5
    for k in (1, 2):
        d.line([(k * s, 1), (k * s, 14)], fill=GRID)
        d.line([(1, k * s), (14, k * s)], fill=GRID)

    # Corner-to-corner marks, no inset, so each is a full 4x4.
    def x_at(cx, cy):
        d.line([(cx + 1, cy + 1), (cx + 4, cy + 4)], fill=X_COL)
        d.line([(cx + 1, cy + 4), (cx + 4, cy + 1)], fill=X_COL)

    def o_at(cx, cy):
        d.rectangle([cx + 1, cy + 1, cx + 4, cy + 4], outline=O_COL)

    x_at(0, 0)
    o_at(s, s)
    x_at(2 * s, 2 * s)
    return im


def main():
    for name, im in (("ttt-32.png", build_32()), ("ttt-16.png", build_16())):
        path = OUT / name
        im.save(path)
        print("wrote %s %s" % (path, im.size))


if __name__ == "__main__":
    main()
