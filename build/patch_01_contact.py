"""
Patch 01 - route every contact detail through a single CONTACT config block.

Fixes three defects in the exported artboard:
  * LINKS pointed at bare https://github.com / https://linkedin.com and an
    empty `mailto:` - none of them reached Kunal.
  * The Contact window's Send built `mailto:?subject=...` with no recipient,
    so it opened a blank compose window.
  * The To: field showed a name with no address behind it.

Run from the repo root:  python build/patch_01_contact.py
Idempotent: re-running after a successful patch is a no-op.
"""
import pathlib
import sys

TARGET = pathlib.Path(__file__).resolve().parent.parent / "site" / "index.html"

CONTACT_BLOCK = r"""/*
 * CONTACT - every outward-facing contact detail on the site, in one place.
 *
 * Consumed by: the Links window, the Contact window's To: field and its
 * mailto: hand-off, and BIT's scripted answer about reaching Kunal. Change a
 * value here and all of them update together.
 */
const CONTACT = {
  email:    'kunaljmit036@gmail.com',
  github:   'https://github.com/kunalkumarkkr01',
  linkedin: 'https://www.linkedin.com/in/kunalkumar036',
  resume:   'assets/Kunal_Kumar_Resume.pdf',
};

/*
 * Strips scheme and trailing slash so a URL reads as a hostname in the UI.
 * shortUrl('https://www.linkedin.com/in/kunal/') -> 'linkedin.com/in/kunal'
 */
const shortUrl = u => u.replace(/^https?:\/\/(www\.)?/, '').replace(/\/+$/, '');

const IC = 'components/icons/assets/';"""

LINKS_OLD = """  LINKS = [
    { name: 'GitHub', host: 'github.com/…', href: 'https://github.com' },
    { name: 'LinkedIn', host: 'linkedin.com/in/…', href: 'https://linkedin.com' },
    { name: 'Email', host: 'mailto: (add address)', href: 'mailto:' },
    { name: 'Resume PDF', host: 'Kunal_Kumar.pdf', href: 'assets/Kunal_Kumar_Resume.pdf' },
  ];"""

LINKS_NEW = """  LINKS = [
    { name: 'GitHub', host: shortUrl(CONTACT.github), href: CONTACT.github },
    { name: 'LinkedIn', host: shortUrl(CONTACT.linkedin), href: CONTACT.linkedin },
    { name: 'Email', host: CONTACT.email, href: 'mailto:' + CONTACT.email },
    { name: 'Resume PDF', host: 'Kunal_Kumar.pdf', href: CONTACT.resume },
  ];"""

EDITS = [
    ("icon map -> CONTACT block",
     "const IC = 'components/icons/assets/';",
     CONTACT_BLOCK),
    ("LINKS", LINKS_OLD, LINKS_NEW),
    ("mailto recipient",
     "'mailto:?subject='",
     "'mailto:' + CONTACT.email + '?subject='"),
    ("expose contactEmail to the template",
     "      mailStatus: s.mailStatus,",
     "      mailStatus: s.mailStatus,\n      contactEmail: CONTACT.email,"),
    ("To: field shows the address",
     ',inset -2px -2px 0 #dfdfdf">Kunal Kumar</div></div>',
     ',inset -2px -2px 0 #dfdfdf">Kunal Kumar &lt;{{ contactEmail }}&gt;</div></div>'),
]


def main():
    src = TARGET.read_text(encoding="utf-8")
    if "const CONTACT = {" in src:
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
