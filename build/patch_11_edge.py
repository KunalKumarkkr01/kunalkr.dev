"""
Patch 11 - turn the Links window into a real browser with four tabs.

The desktop had a one-page "Links" window listing four hyperlinks. This replaces
it with an Edge-style browser whose tabs render actual pages inside the window,
scrollable in place:

  1. kunalkr.dev          -> browser/portfolio.html   (the modern portfolio)
  2. resume.pdf           -> assets/Kunal_Kumar_Resume.pdf (the real PDF)
  3. github.com/...       -> browser/github.html      (local stand-in)
  4. linkedin.com/in/...  -> browser/linkedin.html    (local stand-in)

Tabs 3 and 4 cannot show the live sites: github.com sends
`X-Frame-Options: deny` and linkedin.com sends `sameorigin`, so no configuration
on our side can embed them. Both stand-ins carry a button to the real site and
say plainly what they are.

Also fixes a bug this change would otherwise introduce: window dragging listens
on `window` for pointermove, and an iframe swallows those events as soon as the
cursor crosses it, so a drag would stick. Capturing the pointer on the title bar
keeps the events flowing to the parent document.

Run from the repo root:  python build/patch_11_edge.py
Idempotent: re-running after a successful patch is a no-op.
"""
import pathlib
import sys

TARGET = pathlib.Path(__file__).resolve().parent.parent / "site" / "index.html"

# ---------------------------------------------------------------- app entry --

APP_OLD = ("    { id: 'browser', label: 'Links', title: 'Internet — kunal://links', "
           "icon32: I.globe, icon16: I.globe16, w: 470, h: 330, menus: ['File', 'View', 'Help'], "
           "status: 'Opens in a new window', statusRight: '4 links' },")
APP_NEW = ("    { id: 'browser', label: 'Edge', title: 'Kunal Kumar — Microsoft Edge', "
           "icon32: I.globe, icon16: I.globe16, w: 940, h: 620, menus: ['File', 'Edit', 'View', 'Help'], "
           "status: 'kunalkr.dev', statusRight: '4 tabs' },")

DESK_OLD = ("  DESK = ['welcome', 'settings', 'gallery', 'pdf', 'terminal', 'mail', 'assistant',\n"
            "    'tictactoe', 'minesweeper', 'snake', 'solitaire'];")
DESK_NEW = ("  DESK = ['welcome', 'settings', 'gallery', 'pdf', 'browser', 'terminal', 'mail', 'assistant',\n"
            "    'tictactoe', 'minesweeper', 'snake', 'solitaire'];")

# ----------------------------------------------------------------- the tabs --

TABS_DEF = """  /*
   * EDGE_TABS - what the in-desktop browser can show.
   *
   * `src` is same-origin so the CSP (default-src 'self') allows the frame, and
   * `url` is the address shown in the bar - the real public address, which for
   * the two stand-ins is not where the frame is actually pointed.
   */
  EDGE_TABS = [
    { label: 'Kunal Kumar', src: 'browser/portfolio.html',
      url: 'https://kunalkr.dev/', open: 'https://kunalkr.dev/' },
    { label: 'Kunal_Kumar.pdf', src: 'assets/Kunal_Kumar_Resume.pdf',
      url: 'https://kunalkr.dev/resume.pdf', open: 'assets/Kunal_Kumar_Resume.pdf' },
    { label: 'KunalKumarkkr01', src: 'browser/github.html',
      url: 'https://github.com/kunalkumarkkr01', open: 'https://github.com/kunalkumarkkr01' },
    { label: 'Kunal Kumar | LinkedIn', src: 'browser/linkedin.html',
      url: 'https://www.linkedin.com/in/kunalkumar036', open: 'https://www.linkedin.com/in/kunalkumar036' },
  ];

"""

# ------------------------------------------------------------- the template --

BTN = ("width:21px;height:19px;border:0;padding:0;background:#c0c0c0;"
       "box-shadow:inset -1px -1px 0 #0a0a0a,inset 1px 1px 0 #fff,inset -2px -2px 0 #808080,inset 2px 2px 0 #dfdfdf;"
       "cursor:default;font-size:11px")

TPL_NEW = """<sc-if value="{{ w.isBrowser }}">
          <div style="flex:1;display:flex;flex-direction:column;min-height:0">

            <div style="flex:none;display:flex;gap:2px;padding:3px 3px 0;overflow:hidden">
              <sc-for list="{{ edgeTabs }}" as="t" hint-placeholder-count="4">
                <div style="{{ t.style }}" onClick="{{ t.select }}" title="{{ t.url }}">
                  <img src="components/icons/assets/981cd5d2029e6b96.png" width="16" height="16" alt="">
                  <span style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis">{{ t.label }}</span>
                </div>
              </sc-for>
            </div>

            <div style="flex:none;display:flex;align-items:center;gap:5px;padding:4px 5px 5px;box-shadow:inset 0 1px 0 #dfdfdf">
              <button style=\"""" + BTN + """" style-active="box-shadow:inset 1px 1px 0 #0a0a0a,inset -1px -1px 0 #fff,inset 2px 2px 0 #808080" onClick="{{ edgeReload }}" title="Reload">&#8635;</button>
              <div style="flex:1;min-width:0;height:20px;display:flex;align-items:center;gap:6px;padding:0 6px;background:#fff;box-shadow:inset 1px 1px 0 #808080,inset -1px -1px 0 #fff,inset 2px 2px 0 #0a0a0a,inset -2px -2px 0 #dfdfdf;font-family:Consolas,'Courier New',monospace;font-size:11px">
                <span style="color:#0a7a2f;flex:none">&#128274;</span>
                <span style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis">{{ edgeUrl }}</span>
              </div>
              <a href="{{ edgeOpen }}" target="_blank" rel="noreferrer" style="flex:none;height:20px;padding:0 9px;display:flex;align-items:center;background:#c0c0c0;box-shadow:inset -1px -1px 0 #0a0a0a,inset 1px 1px 0 #fff,inset -2px -2px 0 #808080,inset 2px 2px 0 #dfdfdf;color:#000;text-decoration:none;font-size:11px">Open for real</a>
            </div>

            <div style="flex:1;min-height:0;margin:0 3px 3px;background:#fff;box-shadow:inset 1px 1px 0 #808080,inset -1px -1px 0 #fff,inset 2px 2px 0 #0a0a0a,inset -2px -2px 0 #dfdfdf">
              <iframe src="{{ edgeSrc }}" title="{{ edgeLabel }}" style="width:100%;height:100%;border:0;display:block"></iframe>
            </div>

          </div>
        </sc-if>"""

# ------------------------------------------------------------------ values --

VALS_OLD = "      solReset: () => this.setState({ sol: this.solNew() }),"
VALS_NEW = """      solReset: () => this.setState({ sol: this.solNew() }),

      edgeTabs: this.EDGE_TABS.map((t, i) => ({
        label: t.label, url: t.url,
        style: { display: 'flex', alignItems: 'center', gap: 5, minWidth: 0, flex: '1 1 0',
          maxWidth: 210, height: 21, padding: '0 8px', cursor: 'default', fontSize: 11,
          background: '#c0c0c0',
          boxShadow: s.edgeTab === i
            ? 'inset -1px 0 0 #0a0a0a,inset 1px 1px 0 #fff,inset -2px 0 0 #808080'
            : 'inset -1px -1px 0 #0a0a0a,inset 1px 1px 0 #fff,inset -2px -2px 0 #808080,inset 2px 2px 0 #dfdfdf',
          fontWeight: s.edgeTab === i ? 700 : 400 },
        select: () => this.setState({ edgeTab: i }),
      })),
      // A changing query string is how the frame is made to reload; remounting
      // it by key is not something the template layer exposes.
      edgeSrc: this.EDGE_TABS[s.edgeTab].src + (s.edgeNonce ? '?r=' + s.edgeNonce : ''),
      edgeUrl: this.EDGE_TABS[s.edgeTab].url,
      edgeOpen: this.EDGE_TABS[s.edgeTab].open,
      edgeLabel: this.EDGE_TABS[s.edgeTab].label,
      edgeReload: () => this.setState(st => ({ edgeNonce: (st.edgeNonce || 0) + 1 })),"""

STATE_OLD = "botHidden: false, tip: 0, tipOpen: true, tipsOff: false, chipsOpen: true, pupil: { x: 0, y: 0 }, saver: false };"
STATE_NEW = "botHidden: false, tip: 0, tipOpen: true, tipsOff: false, chipsOpen: true, pupil: { x: 0, y: 0 }, saver: false,\n    edgeTab: 0, edgeNonce: 0 };"

# --------------------------------------------------------- drag over iframe --

DRAG_OLD = """  drag(id, e, mode) {
    if (e.button !== 0) return;"""
DRAG_NEW = """  drag(id, e, mode) {
    if (e.button !== 0) return;
    // Window content can contain an iframe (the Edge app). Without capturing the
    // pointer, the iframe swallows pointermove the moment the cursor crosses it
    // and the drag sticks mid-air. Capture keeps the events in this document.
    const grip = e.currentTarget;
    try { grip.setPointerCapture(e.pointerId); } catch (err) { /* older browsers */ }"""

DRAG_UP_OLD = "    const up = () => { window.removeEventListener('pointermove', move); window.removeEventListener('pointerup', up); };"
DRAG_UP_NEW = ("    const up = () => { window.removeEventListener('pointermove', move); window.removeEventListener('pointerup', up);\n"
               "      try { grip.releasePointerCapture(e.pointerId); } catch (err) { /* already released */ } };")

EDITS = [
    ("Edge app entry", APP_OLD, APP_NEW),
    ("Edge on the desktop", DESK_OLD, DESK_NEW),
    ("EDGE_TABS", "  DESK = ['welcome'", TABS_DEF + "  DESK = ['welcome'"),
    ("session state", STATE_OLD, STATE_NEW),
    ("drag pointer capture", DRAG_OLD, DRAG_NEW),
    ("drag pointer release", DRAG_UP_OLD, DRAG_UP_NEW),
    ("view-model values", VALS_OLD, VALS_NEW),
]


def replace_browser_block(src):
    """Swap the whole isBrowser template block for the tabbed browser."""
    start = src.find('<sc-if value="{{ w.isBrowser }}">')
    if start == -1:
        return None
    end = src.find("</sc-if>", start)
    if end == -1:
        return None
    return src[:start] + TPL_NEW + src[end + len("</sc-if>"):]


def main():
    src = TARGET.read_text(encoding="utf-8")
    if "EDGE_TABS" in src:
        print("already patched - nothing to do")
        return 0

    for label, old, new in EDITS:
        n = src.count(old)
        if n != 1:
            print("FAIL %s: expected 1 match, found %d" % (label, n))
            return 1
        src = src.replace(old, new)
        print("ok   %s" % label)

    out = replace_browser_block(src)
    if out is None:
        print("FAIL: isBrowser template block not found")
        return 1
    src = out
    print("ok   browser template -> tabbed Edge chrome")

    TARGET.write_text(src, encoding="utf-8")
    print("wrote %s (%d bytes)" % (TARGET, len(src)))
    return 0


if __name__ == "__main__":
    sys.exit(main())
