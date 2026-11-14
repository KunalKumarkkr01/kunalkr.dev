"""
Patch 05 - replace the Writing app's filler with real sample posts.

The export shipped two entries whose bodies literally read "Draft. Placeholder
for a post about... Replace with your writing." dated 1996, which reads as an
unfinished site rather than a retro joke.

These four are short technical notes drawn from the same Azure IoT work already
described in ROLES and PROJECTS: IoT Hub replay handling, telemetry table
shape, SignalR fan-out, and Functions vs Container Apps. The Notepad window
stamps every entry "· draft", so they present as drafts rather than as
published posts.

The body is rendered into a <p> with no pre-wrap, so each body must be a single
paragraph with no newlines.

Run from the repo root:  python build/patch_05_notes.py
Idempotent: re-running after a successful patch is a no-op.
"""
import pathlib
import sys

TARGET = pathlib.Path(__file__).resolve().parent.parent / "site" / "index.html"

OLD_NOTES_HEAD = "  NOTES = [\n    { title: 'Idempotent event processing on Azure Functions', date: '1996-08-14',"

NEW_NOTES = """  NOTES = [
    { title: 'Idempotent event processing on Azure Functions', date: '2026-08-18', body: 'IoT Hub and Event Hubs both guarantee at-least-once delivery, which means a checkpoint that fails to commit hands you the same batch again. The failure mode is quiet: alert counts drift upward and nobody notices until a customer asks why one machine tripped four times. The fix is a deterministic key per event — device id plus the enqueued timestamp, never a generated GUID — and a unique constraint in SQL, so a replay becomes a swallowed duplicate-key violation instead of a second row. Keep that constraint in the database rather than in a cache: a cache miss during a restart is exactly when replays arrive. Process a partition in one transaction so a partial failure re-delivers cleanly, and log the duplicate count instead of suppressing it — a rising number means something upstream is retrying harder than it should.' },
    { title: 'Keep telemetry snapshots away from raw payloads', date: '2026-07-30', body: 'A dashboard query and an audit query want opposite things from the same event. The dashboard wants the latest value per device: small, indexed, hot. The audit wants the exact bytes that arrived, kept for years. Putting both in one wide table means every current-state query drags full payloads across the wire, and the table is too busy to archive. Splitting it three ways — a snapshot row per device updated in place, an event summary row per state change, and raw payloads keyed by the same event id — keeps the dashboard on a table roughly the size of the fleet rather than the size of its history. Raw storage can then sit on blob or a partitioned table with a real retention policy, and nobody has to argue about deleting data to make a chart faster.' },
    { title: 'Sub-second fan-out with Azure SignalR', date: '2026-07-12', body: 'Polling a telemetry API every few seconds is the default answer and the wrong one: it costs the most when nothing is happening. Azure SignalR in serverless mode lets an isolated Azure Function negotiate the connection and then push, so cost tracks change rather than time. The part worth getting right is groups. Subscribing every client to everything and filtering in the browser works until one site has a few hundred devices; joining each connection to a group per site, and to a per-device group only while a detail view is open, keeps fan-out proportional to what someone is actually looking at. Negotiate through your own function so the socket gets the same Azure AD role check as the REST API — otherwise it quietly becomes a way around your authorization.' },
    { title: 'When Container Apps beats Functions', date: '2026-06-21', body: 'Functions are the right default for event processing: they scale on queue depth, cost nothing idle, and the isolated worker model keeps dependencies sane. They stop being the default the moment a workload wants to hold something open — a long-lived connection, a warm in-process cache, a background loop that no trigger fires. Cold starts and the execution time limit turn into daily friction, and the workarounds get elaborate. Container Apps keeps scale-to-zero and KEDA-driven scaling but gives you an ordinary long-running process, which is a far shorter conversation than reshaping the design to fit a trigger. The trade is that you now own a container image and its patching. Rule of thumb: if the work starts when a message arrives and ends when it is handled, leave it in Functions.' },
  ];"""


def main():
    src = TARGET.read_text(encoding="utf-8")
    if "'2026-08-18'" in src:
        print("already patched - nothing to do")
        return 0

    start = src.find(OLD_NOTES_HEAD)
    if start == -1:
        print("FAIL: NOTES block not found")
        return 1
    end = src.find("\n  ];", start)
    if end == -1:
        print("FAIL: end of NOTES block not found")
        return 1
    src = src[:start] + NEW_NOTES + src[end + len("\n  ];"):]

    old_status = "status: '2 drafts', statusRight: 'Read-only' }"
    new_status = "status: '4 drafts', statusRight: 'Read-only' }"
    if src.count(old_status) != 1:
        print("FAIL: Writing app status bar matched %d times" % src.count(old_status))
        return 1
    src = src.replace(old_status, new_status)

    if "Placeholder for a post" in src:
        print("FAIL: placeholder text survived the patch")
        return 1

    TARGET.write_text(src, encoding="utf-8")
    print("ok   4 sample posts written, status bar now reads '4 drafts'")
    print("wrote %s (%d bytes)" % (TARGET, len(src)))
    return 0


if __name__ == "__main__":
    sys.exit(main())
