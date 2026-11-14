"""
Patch 07 - let a visitor switch off BIT's suggestions without losing BIT.

Two surfaces offered no way to quiet them:

  * The desktop tip balloon rotates a new tip every 14s and its only dismissal,
    "Hide", removed the whole BIT widget. Wanting fewer tips and wanting no
    assistant are different intentions.
  * The chat window's four suggestion chips were always on screen, eating room
    above the input.

Adds a "Hide tips" button beside "Hide BIT" in the balloon (clicking BIT's face
brings tips back), and a toggle on the chip row that collapses it to a single
"Suggestions" button.

Both are session state - a reload restores the defaults, which is right for a
page most people see once.

Run from the repo root:  python build/patch_07_bit_suggestions.py
Idempotent: re-running after a successful patch is a no-op.
"""
import pathlib
import sys

TARGET = pathlib.Path(__file__).resolve().parent.parent / "site" / "index.html"

BTN = ("height:21px;border:0;background:#c0c0c0;"
       "box-shadow:inset -1px -1px 0 #0a0a0a,inset 1px 1px 0 #fff,inset -2px -2px 0 #808080,inset 2px 2px 0 #dfdfdf;"
       "font-size:11px;cursor:default")
BTN_ACTIVE = "box-shadow:inset 1px 1px 0 #0a0a0a,inset -1px -1px 0 #fff,inset 2px 2px 0 #808080"

BALLOON_OLD = (
    '            <button style="min-width:64px;' + BTN + '" style-active="' + BTN_ACTIVE + '" onClick="{{ botAsk }}">Ask me</button>\n'
    '            <button style="min-width:52px;' + BTN + '" style-active="' + BTN_ACTIVE + '" onClick="{{ hideBot }}">Hide</button>'
)

BALLOON_NEW = (
    '            <button style="min-width:50px;' + BTN + '" style-active="' + BTN_ACTIVE + '" onClick="{{ botAsk }}">Ask me</button>\n'
    '            <button style="min-width:60px;' + BTN + '" style-active="' + BTN_ACTIVE + '" onClick="{{ hideTips }}">Hide tips</button>\n'
    '            <button style="min-width:58px;' + BTN + '" style-active="' + BTN_ACTIVE + '" onClick="{{ hideBot }}">Hide BIT</button>'
)

CHIPS_OLD = """            <div style="display:flex;flex-wrap:wrap;gap:4px;flex:none">
              <sc-for list="{{ chatChips }}" as="c" hint-placeholder-count="4">"""

CHIPS_NEW = """            <div style="display:flex;flex-wrap:wrap;gap:4px;flex:none">
              <button style="height:20px;padding:0 8px;""" + BTN.replace("height:21px;", "") + """" style-active=\"""" + BTN_ACTIVE + """" onClick="{{ toggleChips }}">{{ chipsToggleLabel }}</button>
              <sc-if value="{{ chipsOpen }}">
              <sc-for list="{{ chatChips }}" as="c" hint-placeholder-count="4">"""

CHIPS_CLOSE_OLD = """              </sc-for>
            </div>
            <form style="display:flex;gap:4px;flex:none" onSubmit="{{ chatSend }}">"""

CHIPS_CLOSE_NEW = """              </sc-for>
              </sc-if>
            </div>
            <form style="display:flex;gap:4px;flex:none" onSubmit="{{ chatSend }}">"""

EDITS = [
    ("session state flags",
     "botHidden: false, tip: 0, tipOpen: true, pupil: { x: 0, y: 0 }, saver: false };",
     "botHidden: false, tip: 0, tipOpen: true, tipsOff: false, chipsOpen: true, pupil: { x: 0, y: 0 }, saver: false };"),

    ("balloon buttons", BALLOON_OLD, BALLOON_NEW),

    ("tip balloon respects tipsOff",
     "      tipText: this.TIPS[s.tip], tipOpen: s.tipOpen,\n"
     "      toggleTip: () => this.setState(st => ({ tipOpen: !st.tipOpen })),",
     "      tipText: this.TIPS[s.tip], tipOpen: s.tipOpen && !s.tipsOff,\n"
     "      // Clicking BIT's face is also the way back once tips have been switched off.\n"
     "      toggleTip: () => this.setState(st => st.tipsOff ? { tipsOff: false, tipOpen: true } : { tipOpen: !st.tipOpen }),\n"
     "      hideTips: () => this.setState({ tipsOff: true, tipOpen: false }),"),

    ("chip row toggle - open", CHIPS_OLD, CHIPS_NEW),
    ("chip row toggle - close", CHIPS_CLOSE_OLD, CHIPS_CLOSE_NEW),

    ("chip toggle values",
     "      chatChips: ['What does Kunal do?', 'Tell me about the IoT work', 'Which cloud stack?', 'Is he open to roles?']",
     "      chipsOpen: s.chipsOpen,\n"
     "      chipsToggleLabel: s.chipsOpen ? 'Hide suggestions' : 'Suggestions',\n"
     "      toggleChips: () => this.setState(st => ({ chipsOpen: !st.chipsOpen })),\n"
     "      chatChips: ['What does Kunal do?', 'Tell me about the IoT work', 'Which cloud stack?', 'Is he open to roles?']"),
]


def main():
    src = TARGET.read_text(encoding="utf-8")
    if "hideTips" in src:
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
