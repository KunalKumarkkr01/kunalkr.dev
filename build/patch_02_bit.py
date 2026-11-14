"""
Patch 02 - give BIT an offline brain.

The exported artboard answered chat through `window.claude.complete()`, an API
that only exists inside the Claude Artifacts sandbox. On any normal host that
call throws and every question got the same apology, so the assistant was dead
weight on a deployed site.

This replaces it with a scored intent table built over the SKILLS / ROLES /
PROJECTS / CONTACT data the rest of the desktop already renders - no network
call, no API key, no backend, and answers that cannot drift from the windows.

Run from the repo root:  python build/patch_02_bit.py
Idempotent: re-running after a successful patch is a no-op.
"""
import pathlib
import re
import sys

TARGET = pathlib.Path(__file__).resolve().parent.parent / "site" / "index.html"

# Everything from botFacts() up to (not including) boot() is replaced.
BLOCK_RE = re.compile(r"  botFacts\(\) \{.*?\n(?=  boot\(\) \{)", re.DOTALL)

NEW_BLOCK = r"""  /*
   * BIT_INTENTS - the offline brain behind the "Ask BIT" assistant.
   *
   * Each entry pairs `on` (trigger phrases to look for in the visitor's
   * question) with `say` (a builder that renders the answer from the same
   * SKILLS / ROLES / PROJECTS / CONTACT data every other window reads, so an
   * answer can never drift from what the desktop shows).
   *
   * Ordered most specific first - bitReply breaks score ties by this order.
   * Deliberately has no model call: the assistant has to keep working on a
   * plain static host with no backend and no API key.
   */
  BIT_INTENTS = [
    { on: ['salary', 'ctc', 'compensation', 'how much do you', 'age', 'married', 'girlfriend', 'religion', 'caste', 'personal life', 'phone number', 'home address'],
      say: () => 'That one is off my map - I only carry what is on this desktop. For anything personal or commercial, open the Contact app and ask Kunal directly.' },

    { on: ['who made this', 'who built this', 'made this site', 'built this site', 'this website', 'this desktop', 'windows 95', 'retro', 'how is this built', 'what is this site'],
      say: () => 'Kunal built this. It is a Windows 95 desktop rendered in the browser - every icon opens a real window, and the games actually play. The whole thing is one static page, no backend.' },

    { on: ['minesweeper', 'solitaire', 'snake', 'tic tac toe', 'tictactoe', 'play a game', 'games on'],
      say: () => 'Start then Games has Minesweeper, Snake, Solitaire and Tic-Tac-Toe, and they all really work. Minesweeper is Beginner, Solitaire is Klondike draw-1, and Tic-Tac-Toe will not let you win.' },

    { on: ['telemetry', 'iot hub', 'signalr', 'event hub', 'iot', 'ingestion', 'sensor'],
      say: function () { const p = this.PROJECTS[0]; return p.name + ' (' + p.meta + ') is the one he owns today. ' + p.desc + ' Stack: ' + p.stack + '. Sub-second fan-out to dashboards goes over SignalR, and the event processors are idempotent so replayed IoT Hub events never double-count an alert.'; } },

    { on: ['loctite', 'henkel', 'dashboard'],
      say: function () { const p = this.PROJECTS[1]; return p.name + ' (' + p.meta + '): ' + p.desc + ' Stack: ' + p.stack + '. Payloads were RSA-256 encrypted and access was Azure AD role-based, fronted by API Management.'; } },

    { on: ['hatch', 'ignite', 'lambda', 'cognito', 'redis', 'schools'],
      say: function () { const p = this.PROJECTS[2]; return p.name + ' (' + p.meta + '): ' + p.desc + ' Stack: ' + p.stack + '. There is also Ignite Table Games from the year before - a factory-based architecture that powered 36+ interactive experiences on an educational table.'; } },

    { on: ['axe', 'throwing', 'lan', 'websocket', 'offline first', 'licensing'],
      say: function () { const p = this.PROJECTS[4]; return p.name + ' (' + p.meta + '): ' + p.desc + ' Stack: ' + p.stack + '. It was his first role - real-time sync across lanes on a venue LAN, with signed offline licence tokens so a dropped internet connection never stopped a session.'; } },

    { on: ['open to', 'hiring', 'hire', 'available', 'opportunit', 'looking for work', 'contact', 'reach him', 'reach kunal', 'get in touch', 'email', 'linkedin', 'github'],
      say: () => 'Yes - he reads everything. Email is ' + CONTACT.email + ', and the Contact app on this desktop will open your mail client pre-addressed. GitHub and LinkedIn are both in the Links window.' },

    { on: ['resume', 'cv', 'pdf', 'download'],
      say: () => 'Resume.pdf is on the desktop - it opens in a viewer with a Save As... button, or you can grab the file straight from the Links window.' },

    { on: ['education', 'degree', 'college', 'university', 'graduat', 'studied', 'b.e', 'engineering degree'],
      say: () => 'B.E. in Computer Science from SJMIT, Visvesvaraya Technological University, graduated August 2021. He has been working professionally ever since.' },

    { on: ['where is he', 'where does he live', 'location', 'based', 'city', 'pune', 'relocat', 'remote'],
      say: () => 'Pune, India. Most of his work has been with distributed teams, so remote and hybrid are both familiar territory.' },

    { on: ['speak', 'spoken language', 'english', 'hindi', 'fluent'],
      say: () => 'English at full professional proficiency and Hindi at professional working proficiency.' },

    { on: ['right now', 'currently', 'current role', 'present', 'these days', 'where does he work', 'who does he work for'],
      say: function () { const r = this.ROLES[0]; return 'Right now he is ' + r.title + ' at ' + r.employer + ' (' + r.dates + '). ' + r.summary + ' Stack: ' + r.stack + '.'; } },

    { on: ['experience', 'career', 'years', 'seniority', 'history', 'background', 'previous', 'past role', 'jobs', 'employer', 'ciklum', 'shwaira', 'dynamisch'],
      say: function () { return '5+ years, five roles since August 2021: ' + this.ROLES.map(r => r.title + ' at ' + r.employer + ' (' + r.dates + ')').join('; ') + '. Open the Experience app for the full agenda view.'; } },

    { on: ['cloud', 'azure', 'aws', 'serverless', 'function app', 'key vault', 'apim', 'api management'],
      say: function () { const g = this.SKILLS.find(x => x.name === 'Cloud Platforms'); return g.name + ': ' + g.items.join(', ') + '. Azure is the deeper side - isolated Azure Functions, IoT Hub, Event Hubs, SignalR and Azure SQL in production - with AWS Lambda, Cognito and Redis from the Hatch Ignite work.'; } },

    { on: ['backend', 'api', 'microservice', 'rest', 'auth', 'jwt', 'rbac', 'event driven', 'distributed'],
      say: function () { const g = this.SKILLS[0]; return g.name + ': ' + g.items.join(', ') + '. That is the core of what he does - production distributed systems, not side projects.'; } },

    { on: ['database', 'sql', 'postgres', 'mysql', 'data store'],
      say: function () { const g = this.SKILLS.find(x => x.name === 'Databases'); return g.name + ': ' + g.items.join(', ') + '.'; } },

    { on: ['devops', 'ci cd', 'cicd', 'pipeline', 'docker', 'sonar', 'swagger', 'openapi', 'postman', 'tooling'],
      say: function () { const g = this.SKILLS.find(x => x.name === 'DevOps & Tooling'); return g.name + ': ' + g.items.join(', ') + '.'; } },

    { on: ['unity', 'godot', 'phaser', 'spine', 'game dev', 'gamedev', 'real time', 'realtime'],
      say: function () { const g = this.SKILLS.find(x => x.name === 'Game & Real-time'); return g.name + ': ' + g.items.join(', ') + '. Two of his five roles were games and real-time systems, which is where the low-latency instinct comes from.'; } },

    { on: ['c#', '.net', 'node', 'typescript', 'javascript', 'java', 'programming language', 'what language'],
      say: function () { const g = this.SKILLS.find(x => x.name === 'Languages'); return g.name + ': ' + g.items.join(', ') + '. C# and .NET are the primary stack; Node.js and TypeScript cover the serverless and real-time work.'; } },

    { on: ['skill', 'stack', 'tech', 'technolog', 'expertise', 'good at', 'know how', 'tools'],
      say: function () { return 'Six areas: ' + this.SKILLS.map(g => g.name).join(', ') + '. Ask about any one of them and I will list it out, or open About Me for the full Control Panel view.'; } },

    { on: ['project', 'portfolio', 'built', 'shipped', 'what has he made'],
      say: function () { return 'Five in C:\\KUNAL\\PROJECTS: ' + this.PROJECTS.map(p => p.name + ' (' + p.meta + ')').join('; ') + '. Name one and I will go deeper.'; } },

    { on: ['what does kunal do', 'what does he do', 'who is kunal', 'who is he', 'about kunal', 'about him', 'tell me about kunal', 'for a living', 'profile', 'summary', 'introduce'],
      say: () => 'Kunal Kumar is a Technical Lead at Dynamisch in Pune, India - a backend engineer with 5+ years building and running production distributed systems. REST APIs, cloud-native and serverless architectures on Azure and AWS, secure auth, and a lot of real-time and IoT work. Ask me about his stack, a project, or his experience.' },

    { on: ['what can you', 'who are you', 'help', 'what do you do', 'options', 'commands'],
      say: () => 'I answer questions about Kunal from what is on this desktop: his stack, his five roles since 2021, the projects in C:\\KUNAL\\PROJECTS, his education, and how to reach him. Try "which cloud stack?" or "tell me about the IoT work".' },

    { on: ['hi', 'hello', 'hey', 'yo', 'howdy', 'good morning', 'good evening', 'sup'],
      say: () => 'Hi. I am BIT, and Kunal is the only thing I know about. Ask me about his stack, his experience, a project, or how to reach him.' },
  ];

  /*
   * bitReply - picks the best-matching intent for a visitor's question.
   *
   * Normalises the question, then scores every intent by which of its trigger
   * phrases appear in it. Longer phrases score higher so "cloud stack" beats a
   * bare "stack"; triggers of three characters or fewer must match as whole
   * words so "hi" does not fire on "hire". Ties go to the earlier (more
   * specific) intent. Returns the fallback line when nothing scores.
   *
   * bitReply('which cloud stack?') -> 'Cloud Platforms: Azure Functions, ...'
   */
  bitReply(question) {
    const q = ' ' + String(question).toLowerCase().replace(/[^a-z0-9+#.]+/g, ' ').trim() + ' ';
    let best = null, bestScore = 0;
    for (const intent of this.BIT_INTENTS) {
      let score = 0;
      for (const phrase of intent.on) {
        const hit = phrase.length <= 3 ? q.includes(' ' + phrase + ' ') : q.includes(' ' + phrase);
        if (hit) score += phrase.split(' ').length * 2 + phrase.length / 10;
      }
      if (score > bestScore) { bestScore = score; best = intent; }
    }
    if (!best) return 'I only know what is on this desktop, and that one is outside it. Try asking about Kunal\'s stack, his cloud or backend work, a project like the industrial IoT platform or Hatch Ignite, his education, or how to reach him.';
    return best.say.call(this);
  }

  /*
   * askBot - appends the visitor's line to the transcript and answers it.
   *
   * The answer comes from bitReply and is available immediately; the short
   * delay is cosmetic, so "BIT is thinking..." has time to show and the reply
   * does not snap in instantly (which reads as canned rather than fast).
   */
  askBot(q) {
    const text = (q || '').trim();
    if (!text || this.state.chatBusy) return;
    this.setState(s => ({ chat: [...s.chat, { who: 'you', text }], chatInput: '', chatBusy: true }));
    const reply = this.bitReply(text);
    clearTimeout(this.botT);
    this.botT = setTimeout(
      () => this.setState(s => ({ chat: [...s.chat, { who: 'bot', text: reply }], chatBusy: false })),
      Math.min(850, 240 + reply.length * 2));
  }

"""


def main():
    src = TARGET.read_text(encoding="utf-8")
    if "BIT_INTENTS" in src:
        print("already patched - nothing to do")
        return 0

    n = len(BLOCK_RE.findall(src))
    if n != 1:
        print("FAIL: botFacts..boot block matched %d times" % n)
        return 1
    src = BLOCK_RE.sub(lambda m: NEW_BLOCK, src, count=1)

    # Clear the reply timer on unmount alongside the other timers.
    old = "[this.tick, this.postT, this.splashT, this.prog, this.idleT, this.tipT, this.snakeT].forEach(clearInterval);"
    new = ("[this.tick, this.postT, this.splashT, this.prog, this.idleT, this.tipT, this.snakeT].forEach(clearInterval);\n"
           "    clearTimeout(this.botT);")
    if src.count(old) != 1:
        print("FAIL: unmount timer list not found")
        return 1
    src = src.replace(old, new)

    if "window.claude" in src:
        print("FAIL: a window.claude reference survived the patch")
        return 1

    TARGET.write_text(src, encoding="utf-8")
    print("wrote %s (%d bytes)" % (TARGET, len(src)))
    return 0


if __name__ == "__main__":
    sys.exit(main())
