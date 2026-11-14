"""
Draw a Snake icon in the Windows 95 icon idiom.

Nothing in the bundled icon pack depicts a snake - the game was borrowing a
generic joystick - so this draws one: a sunken LCD panel (the same bevel the
rest of the UI uses) with the snake and its food rendered exactly as the game
itself draws them, as flat cells in the game's own palette.

Emits site/components/icons/assets/snake-32.png and snake-16.png.
The 16px version is drawn separately rather than downscaled; pixel art does not
survive resampling.

Run from the repo root:  python build/make_snake_icon.py
"""
import pathlib

from PIL import Image, ImageDraw

OUT = pathlib.Path(__file__).resolve().parent.parent / "site" / "components" / "icons" / "assets"

# The game's own colours, so the icon and the running game agree.
BOARD = (11, 28, 20)      # #0b1c14 board background
SNAKE = (22, 196, 127)    # body
HEAD = (0, 224, 138)      # #00e08a brighter head
FOOD = (255, 90, 90)      # #ff5a5a
# Standard Win95 bevel.
SHADOW = (128, 128, 128)
LIGHT = (223, 223, 223)
BLACK = (10, 10, 10)


def sunken_panel(draw, x0, y0, x1, y1):
    """Draw the two-tone sunken border Win95 uses for inset content areas."""
    draw.rectangle([x0, y0, x1, y1], fill=BOARD)
    draw.line([(x0, y0), (x1, y0)], fill=SHADOW)      # top
    draw.line([(x0, y0), (x0, y1)], fill=SHADOW)      # left
    draw.line([(x0, y1), (x1, y1)], fill=LIGHT)       # bottom
    draw.line([(x1, y0), (x1, y1)], fill=LIGHT)       # right


def cell(draw, cx, cy, size, colour):
    draw.rectangle([cx, cy, cx + size - 1, cy + size - 1], fill=colour)


def build_32():
    im = Image.new("RGBA", (32, 32), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)

    # Outer black frame, then the sunken screen inside it.
    d.rectangle([1, 3, 30, 28], fill=BLACK)
    sunken_panel(d, 2, 4, 29, 27)

    # Snake: a 4px-celled body turning a corner, head at the top left.
    s = 4
    body = [(7, 8), (11, 8), (15, 8), (15, 12), (15, 16), (19, 16)]
    for cx, cy in body:
        cell(d, cx, cy, s, SNAKE)
    cell(d, 7, 8, s, HEAD)
    # Eye: one dark pixel on the head reads as a face even at this size.
    d.point((9, 10), fill=BOARD)

    # Food, kept a knight's move away so the shapes stay distinct.
    cell(d, 23, 21, s, FOOD)

    return im


def build_16():
    im = Image.new("RGBA", (16, 16), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)

    d.rectangle([0, 1, 15, 14], fill=BLACK)
    sunken_panel(d, 1, 2, 14, 13)

    # 2px cells: the same L-shaped body, minus one segment so it stays legible.
    s = 2
    for cx, cy in [(3, 4), (5, 4), (7, 4), (7, 6), (7, 8)]:
        cell(d, cx, cy, s, SNAKE)
    cell(d, 3, 4, s, HEAD)

    cell(d, 11, 9, s, FOOD)

    return im


def main():
    for name, im in (("snake-32.png", build_32()), ("snake-16.png", build_16())):
        path = OUT / name
        im.save(path)
        print("wrote %s %s" % (path, im.size))


if __name__ == "__main__":
    main()
