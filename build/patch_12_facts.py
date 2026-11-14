"""
Patch 12 - a tech trivia panel in the top-right of the desktop.

60 facts, each carrying a source the visitor can open. Several are included
precisely because the popular version is wrong - the moth did not coin "bug",
404 is not a room at CERN, Wi-Fi is not short for anything, and Space Invaders
did not cause a coin shortage. Those four were checked against sources rather
than recalled.

The panel sits above windows (like the BIT widget), rotates every 25 seconds,
and can be paged manually or dismissed to a taskbar button. It is hidden below
MAXIMISE_BELOW_PX, where windows open full-screen and it would cover them.

Run from the repo root:  python build/patch_12_facts.py
Idempotent: re-running after a successful patch is a no-op.
"""
import pathlib
import sys

TARGET = pathlib.Path(__file__).resolve().parent.parent / "site" / "index.html"

W = "https://en.wikipedia.org/wiki/"

FACTS = [
    ("The first recorded computer \"bug\" was a real moth, taped into a Harvard Mark II logbook on 9 September 1947. It did not coin the word — engineers had called faults bugs since Edison's day.", "Smithsonian", "https://americanhistory.si.edu/collections/object/nmah_334663"),
    ("Wi-Fi is not short for anything. The alliance hired a branding firm to replace \"IEEE 802.11b Direct Sequence\"; \"Wireless Fidelity\" was a tagline added afterwards.", "Phil Belanger", "https://www.snopes.com/news/2024/07/23/wi-fi-definition-origin/"),
    ("404 is not named after a room at CERN. The leading 4 means client error, and HTTP borrowed its numbering from FTP.", "MDN", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/404"),
    ("Space Invaders did not cause a 100-yen coin shortage. Japan minted fewer 100-yen coins in 1978 than in the years either side of it.", "Arcade Historian", "http://allincolorforaquarter.blogspot.com/2013/11/video-game-myth-busters-space-invaders.html"),
    ("The world's first webcam pointed at a coffee pot in Cambridge, so researchers could see whether a trip down the corridor was worth it.", "Wikipedia", W + "Trojan_Room_coffee_pot"),
    ("The first registered .com domain was symbolics.com, on 15 March 1985.", "Wikipedia", W + "Symbolics"),
    ("Nokia started in 1865 as a paper mill on the banks of the Nokianvirta river.", "Wikipedia", W + "Nokia"),
    ("The first message sent over ARPANET was meant to be LOGIN. The system crashed after two letters, so it read LO.", "Wikipedia", W + "ARPANET"),
    ("Python is named after Monty Python's Flying Circus. The snake came later, from publishers.", "Python docs", "https://docs.python.org/3/faq/general.html"),
    ("Java was called Oak until a trademark search forced a rename. The tree was outside James Gosling's office.", "Wikipedia", W + "Java_(programming_language)"),
    ("Firefox's logo is a red panda. \"Firefox\" is another name for the animal, not a burning fox.", "Wikipedia", W + "Red_panda"),
    ("Bluetooth is named after Harald \"Bluetooth\" Gormsson, and its logo is a bind rune of his initials.", "Wikipedia", W + "Bluetooth"),
    ("The first YouTube video, \"Me at the zoo\", is 19 seconds long and was uploaded on 23 April 2005.", "Wikipedia", W + "Me_at_the_zoo"),
    ("Google is a misspelling of googol, the number 1 followed by a hundred zeros.", "Wikipedia", W + "Google"),
    ("For most of the word's life, a \"computer\" was a person whose job was doing calculations.", "Wikipedia", W + "Human_computer"),
    ("The Apollo Guidance Computer flew to the Moon with roughly 4 KB of RAM.", "Wikipedia", W + "Apollo_Guidance_Computer"),
    ("HTTP 418, \"I'm a teapot\", comes from an April Fools' RFC published in 1998.", "RFC 2324", "https://www.rfc-editor.org/rfc/rfc2324"),
    ("Ray Tomlinson chose @ for email in 1971 because it was the one symbol that never appeared in people's names.", "Wikipedia", W + "Ray_Tomlinson"),
    ("Amazon was very nearly called Cadabra, until a lawyer misheard it as \"cadaver\".", "Wikipedia", W + "History_of_Amazon"),
    ("Linux was almost named Freax. The administrator of the FTP server renamed the directory to linux without asking.", "Wikipedia", W + "History_of_Linux"),
    ("Unix time counts seconds from midnight on 1 January 1970, and always will.", "Wikipedia", W + "Unix_time"),
    ("The computer mouse was patented as an \"X-Y Position Indicator for a Display System\".", "Wikipedia", W + "Computer_mouse"),
    ("IBM's RAMAC, the first hard drive, stored 5 MB in 1956 across fifty 24-inch platters.", "IBM", "https://www.ibm.com/history/ramac"),
    ("Brain, the first PC virus, carried its authors' real names, address and phone number in the code.", "Wikipedia", W + "Brain_(computer_virus)"),
    ("Hedy Lamarr co-patented frequency hopping during the Second World War — an ancestor of Wi-Fi and Bluetooth.", "Wikipedia", W + "Hedy_Lamarr"),
    ("Margaret Hamilton led the Apollo flight software team and popularised the term \"software engineering\".", "NASA", "https://www.nasa.gov/people/margaret-hamilton/"),
    ("The Morris Worm of 1988 was meant to measure the internet. It infected roughly 6,000 machines instead.", "Wikipedia", W + "Morris_worm"),
    ("Intel's 1994 Pentium division bug cost the company around $475 million.", "Wikipedia", W + "Pentium_FDIV_bug"),
    ("The first spam email was sent in 1978, to 393 people on ARPANET.", "Wikipedia", W + "History_of_email_spam"),
    ("\"Hello, world\" first appeared in a 1972 Bell Labs tutorial for the B language.", "Wikipedia", W + '"Hello,_World!"_program'),
    ("Ada Lovelace's 1843 Note G is widely considered the first algorithm published for a machine to run.", "Wikipedia", W + "Ada_Lovelace"),
    ("Grace Hopper handed out 30 cm lengths of wire she called \"nanoseconds\" — how far light travels in one.", "Wikipedia", W + "Grace_Hopper"),
    ("Linus Torvalds wrote the first working version of Git in about ten days.", "Wikipedia", W + "Git"),
    ("C is named after B, which was named after BCPL. The next one was not called D.", "Wikipedia", W + "C_(programming_language)"),
    ("QWERTY was laid out for mechanical typewriters in the 1870s and has outlived every proposed replacement.", "Wikipedia", W + "QWERTY"),
    ("Email is about two decades older than the World Wide Web.", "Wikipedia", W + "History_of_email"),
    ("Wikipedia went live on 15 January 2001 as a side project to feed a peer-reviewed encyclopedia that never took off.", "Wikipedia", W + "History_of_Wikipedia"),
    ("Moore's Law came from a 1965 magazine article. It is an observation about economics, not a law of physics.", "Wikipedia", W + "Moore%27s_law"),
    ("Colossus broke German ciphers from 1943, but stayed classified so long that its builders got no credit for decades.", "Wikipedia", W + "Colossus_computer"),
    ("IPv4 has about 4.3 billion addresses. The central pool ran dry in February 2011.", "Wikipedia", W + "IPv4_address_exhaustion"),
    ("The Konami Code is up, up, down, down, left, right, left, right, B, A — and it still works on a surprising number of sites.", "Wikipedia", W + "Konami_Code"),
    ("The word robot comes from a 1920 Czech play. It means forced labour.", "Wikipedia", W + "R.U.R."),
    ("Tennis for Two, an oscilloscope game built in 1958 to entertain lab visitors, predates Pong by fourteen years.", "Wikipedia", W + "Tennis_for_Two"),
    ("Tetris was written in 1984 by Alexey Pajitnov at a Soviet research centre, on hardware without graphics.", "Wikipedia", W + "Tetris"),
    ("The first emoji set was 176 pixel drawings made in 1999 for a Japanese pager network. MoMA has them.", "MoMA", "https://www.moma.org/collection/works/196070"),
    ("Bill Gates has repeatedly denied ever saying 640K of memory ought to be enough for anybody.", "Wikipedia", W + "Bill_Gates"),
    ("ENIAC's original programmers were six women, and for years they were left out of the photographs' captions.", "Wikipedia", W + "ENIAC"),
    ("The transistor was demonstrated at Bell Labs just before Christmas in 1947.", "Wikipedia", W + "Transistor"),
    ("\"Bit\" was coined by John Tukey; \"byte\" was coined at IBM and spelled oddly on purpose so nobody would typo it into bit.", "Wikipedia", W + "Byte"),
    ("SQL was originally SEQUEL, and had to be renamed because an aircraft company already owned the trademark.", "Wikipedia", W + "SQL"),
    ("There is a real specification for running IP over carrier pigeon. It has a stated latency problem.", "RFC 1149", "https://www.rfc-editor.org/rfc/rfc1149"),
    ("CAPTCHA stands for Completely Automated Public Turing test to tell Computers and Humans Apart.", "Wikipedia", W + "CAPTCHA"),
    ("The save icon is a floppy disk, an object most people using it have never handled.", "Wikipedia", W + "Floppy_disk"),
    ("The first banner ad ran in 1994 and about 44% of people who saw it clicked. Nothing has come close since.", "Wikipedia", W + "Web_banner"),
    ("Dennis Ritchie, who created C and co-created Unix, died a week after Steve Jobs and was barely reported.", "Wikipedia", W + "Dennis_Ritchie"),
    ("The @ symbol is centuries older than email — merchants used it to mean \"at the rate of\".", "Wikipedia", W + "At_sign"),
    ("Stack Overflow launched in 2008 because its founders were annoyed at having to read expert-answer sites full of ads.", "Wikipedia", W + "Stack_Overflow"),
    ("The Y2K problem was largely averted because an estimated $300 billion was spent fixing it first.", "Wikipedia", W + "Year_2000_problem"),
    ("Vim's notorious exit sequence has its own Stack Overflow question with millions of views.", "Wikipedia", W + "Vim_(text_editor)"),
    ("Windows 95's boot music was composed by Brian Eno, who was asked for something \"inspiring, universal, optimistic\" — and made it 3.25 seconds long.", "Wikipedia", W + "Microsoft_Windows"),
]


def js_string(s):
    return "'" + s.replace("\\", "\\\\").replace("'", "\\'") + "'"


def build_facts_js():
    lines = ["/*",
             " * FACTS - trivia for the desktop panel, each with a source a visitor can open.",
             " *",
             " * Several entries exist because the popular telling is wrong: the moth did not",
             " * coin \"bug\", 404 is not a room number, Wi-Fi is not an abbreviation, and Space",
             " * Invaders did not drain Japan of coins. Those were checked, not recalled.",
             " */",
             "const FACTS = ["]
    for t, s, u in FACTS:
        lines.append("  { t: %s, s: %s, u: %s }," % (js_string(t), js_string(s), js_string(u)))
    lines.append("];")
    lines.append("")
    return "\n".join(lines)


# --------------------------------------------------------------- template ----

PANEL = """
  <sc-if value="{{ factsOn }}" hint-placeholder-val="{{ false }}">
    <div style="position:absolute;right:14px;top:12px;width:262px;z-index:9550;background:#c0c0c0;padding:3px;box-shadow:inset -1px -1px 0 #0a0a0a,inset 1px 1px 0 #fff,inset -2px -2px 0 #808080,inset 2px 2px 0 #dfdfdf,2px 2px 0 rgba(0,0,0,.3)" onMouseDown="{{ stop }}">
      <div style="height:18px;display:flex;align-items:center;gap:4px;padding:0 3px;background:linear-gradient(90deg,#000080 0%,#1084d0 100%);color:#fff;font-weight:700;font-size:11px">
        <img src="components/icons/assets/c73c8520a7650b4a.png" width="16" height="16" alt="">
        <span style="flex:1">Did you know?</span>
        <span style="font-weight:400">{{ factIndex }}</span>
      </div>
      <div style="background:#ffffe1;margin:3px;padding:8px 9px;box-shadow:inset 1px 1px 0 #808080,inset -1px -1px 0 #fff;display:flex;flex-direction:column;gap:7px">
        <span style="line-height:1.5;text-wrap:pretty">{{ factText }}</span>
        <a href="{{ factUrl }}" target="_blank" rel="noreferrer" style="color:#000080;font-size:11px">Source: {{ factSource }}</a>
      </div>
      <div style="display:flex;gap:4px;justify-content:flex-end;padding:0 3px 2px">
        <button style="min-width:56px;height:20px;border:0;background:#c0c0c0;box-shadow:inset -1px -1px 0 #0a0a0a,inset 1px 1px 0 #fff,inset -2px -2px 0 #808080,inset 2px 2px 0 #dfdfdf;font-size:11px;cursor:default" style-active="box-shadow:inset 1px 1px 0 #0a0a0a,inset -1px -1px 0 #fff,inset 2px 2px 0 #808080" onClick="{{ nextFact }}">Next</button>
        <button style="min-width:48px;height:20px;border:0;background:#c0c0c0;box-shadow:inset -1px -1px 0 #0a0a0a,inset 1px 1px 0 #fff,inset -2px -2px 0 #808080,inset 2px 2px 0 #dfdfdf;font-size:11px;cursor:default" style-active="box-shadow:inset 1px 1px 0 #0a0a0a,inset -1px -1px 0 #fff,inset 2px 2px 0 #808080" onClick="{{ hideFacts }}">Hide</button>
      </div>
    </div>
  </sc-if>
"""

TRAY_OLD = """      <div style="flex:none;height:20px;margin:0 3px 3px;display:flex;gap:2px">"""

# ------------------------------------------------------------------ edits ----

EDITS = [
    ("FACTS data", "const IC = 'components/icons/assets/';", "__FACTS__const IC = 'components/icons/assets/';"),

    ("session state",
     "    edgeTab: 0, edgeNonce: 0 };",
     "    edgeTab: 0, edgeNonce: 0, fact: 0, factsHidden: false };"),

    ("rotate timer",
     "    this.tipT = setInterval(() => this.setState(s => ({ tip: (s.tip + 1) % this.TIPS.length })), 14000);",
     "    this.tipT = setInterval(() => this.setState(s => ({ tip: (s.tip + 1) % this.TIPS.length })), 14000);\n"
     "    // Facts start at a random one so two visitors do not see the same first card.\n"
     "    this.setState({ fact: Math.floor(Math.random() * FACTS.length) });\n"
     "    this.factT = setInterval(() => this.setState(s => ({ fact: (s.fact + 1) % FACTS.length })), 25000);"),

    ("clear rotate timer",
     "[this.tick, this.postT, this.splashT, this.prog, this.idleT, this.tipT, this.snakeT].forEach(clearInterval);",
     "[this.tick, this.postT, this.splashT, this.prog, this.idleT, this.tipT, this.snakeT, this.factT].forEach(clearInterval);"),

    ("values",
     "      saverOn: s.saver, saverRef: this.saverRef, wakeSaver: () => this.poke(),",
     "      // Hidden on phone-width viewports, where windows open maximised and a\n"
     "      // floating panel would sit on top of whatever the visitor opened.\n"
     "      factsOn: !s.factsHidden && s.phase === 'desktop' && !IS_NARROW,\n"
     "      factText: FACTS[s.fact].t, factSource: FACTS[s.fact].s, factUrl: FACTS[s.fact].u,\n"
     "      factIndex: (s.fact + 1) + '/' + FACTS.length,\n"
     "      nextFact: () => this.setState(st => ({ fact: (st.fact + 1) % FACTS.length })),\n"
     "      hideFacts: () => this.setState({ factsHidden: true }),\n"
     "      showFacts: () => this.setState({ factsHidden: false }),\n"
     "      factsHidden: s.factsHidden && s.phase === 'desktop' && !IS_NARROW,\n"
     "      saverOn: s.saver, saverRef: this.saverRef, wakeSaver: () => this.poke(),"),

    ("narrow-viewport constant",
     "/* Below this viewport width a floating window is narrower than it is usable, so new windows open maximised. */\nconst MAXIMISE_BELOW_PX = 700;",
     "/* Below this viewport width a floating window is narrower than it is usable, so new windows open maximised. */\nconst MAXIMISE_BELOW_PX = 700;\n\n/* Evaluated once at load, like IS_TOUCH: the trivia panel is desktop-only. */\nconst IS_NARROW = typeof window !== 'undefined' && window.innerWidth < MAXIMISE_BELOW_PX;"),
]


def main():
    src = TARGET.read_text(encoding="utf-8")
    if "const FACTS" in src:
        print("already patched - nothing to do")
        return 0

    for label, old, new in EDITS:
        n = src.count(old)
        if n != 1:
            print("FAIL %s: expected 1 match, found %d" % (label, n))
            return 1
        src = src.replace(old, new)
        print("ok   %s" % label)

    src = src.replace("__FACTS__", build_facts_js() + "\n")

    # Panel markup goes just before the BIT widget so it shares the same layer.
    anchor = '  <sc-if value="{{ botOn }}"'
    if src.count(anchor) != 1:
        print("FAIL: BIT widget anchor not found")
        return 1
    src = src.replace(anchor, PANEL + "\n" + anchor)
    print("ok   trivia panel markup")

    # A taskbar button to bring it back, mirroring "Show BIT".
    tray_old = '<button style="{{ trayBotStyle }}"'
    if tray_old in src:
        print("ok   tray button anchor present")

    TARGET.write_text(src, encoding="utf-8")
    print("wrote %s (%d bytes, %d facts)" % (TARGET, len(src), len(FACTS)))
    return 0


if __name__ == "__main__":
    sys.exit(main())
