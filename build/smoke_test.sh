#!/usr/bin/env bash
# smoke_test.sh - checks a running copy of the production image answers like production should.
#
# Summary: requests a few paths from the nginx container and checks status codes, caching
#          headers, security headers and .glb compression. CI runs it after `docker build`.
# Input:   BASE_URL (optional) - where the container listens; default http://127.0.0.1:8080
# Output:  one line per check; exit code 0 when every check passes, 1 otherwise.
# Usage:   docker build -t kunalos . && docker run -d --rm -p 8080:80 kunalos
#          bash build/smoke_test.sh
set -u

BASE_URL="${BASE_URL:-http://127.0.0.1:8080}"
HASHED_ICON="/components/icons/assets/03295f15c5366fad.png"
REVALIDATE="no-cache"
FOREVER="public, max-age=31536000, immutable"
failures=0

# header PATH NAME - prints one response header's value (blank when absent).
header() {
  curl -s -o /dev/null -D - -H 'Accept-Encoding: gzip' "$BASE_URL$1" \
    | tr -d '\r' | grep -i "^$2:" | head -1 | cut -d' ' -f2-
}

# check LABEL ACTUAL EXPECTED - records a pass or a failure.
check() {
  if [ "$2" = "$3" ]; then echo "ok   $1"; else echo "FAIL $1: got '$2', want '$3'"; failures=$((failures + 1)); fi
}

check "home page is served"            "$(curl -s -o /dev/null -w '%{http_code}' "$BASE_URL/")" "200"
check "credits keep the CC-BY attribution" "$(curl -s "$BASE_URL/credits.html" | grep -c 'by SeverDoes3D (https://sketchfab.com/SeverDoes3D) licensed under CC-BY-4.0')" "1"
check "missing path is a 404"         "$(curl -s -o /dev/null -w '%{http_code}' "$BASE_URL/no-such-page")" "404"
check "page revalidates"               "$(header / Cache-Control)" "$REVALIDATE"
check "scene.js revalidates"           "$(header /scene.js Cache-Control)" "$REVALIDATE"
check "résumé PDF revalidates"         "$(header /assets/Kunal_Kumar_Resume.pdf Cache-Control)" "$REVALIDATE"
check "models revalidate"              "$(header /assets/models/office-assets.glb Cache-Control)" "$REVALIDATE"
check "hashed icon is cached a year"   "$(header "$HASHED_ICON" Cache-Control)" "$FOREVER"
check "vendored library cached a week" "$(header /vendor/react.production.min.js Cache-Control)" "public, max-age=604800"
check "models are gzipped"             "$(header /assets/models/office-assets.glb Content-Encoding)" "gzip"
check "models have the glTF type"      "$(header /assets/models/office-assets.glb Content-Type)" "model/gltf-binary"
check "CSP header is sent"             "$(header / Content-Security-Policy | cut -d';' -f1)" "default-src 'self'"
# GLTFLoader fetches each texture embedded in a .glb from a blob: URL; without blob: here every
# texture is blocked and the 3D desk renders white.
check "CSP lets the 3D loader read its textures" \
  "$(header / Content-Security-Policy | tr ';' '\n' | grep -o "connect-src[^;]*" | grep -c "blob:")" "1"
# Self-hosted Umami: the page loads its script and posts events to it.
ANALYTICS_HOST="https://analytics.kunalkr.dev"
check "CSP allows the analytics script"   "$(header / Content-Security-Policy | tr ';' '
' | grep -o "script-src[^;]*" | grep -c "$ANALYTICS_HOST")" "1"
check "CSP allows sending analytics events"   "$(header / Content-Security-Policy | tr ';' '
' | grep -o "connect-src[^;]*" | grep -c "$ANALYTICS_HOST")" "1"
check "nosniff header is sent"         "$(header /scene.js X-Content-Type-Options)" "nosniff"

[ "$failures" -eq 0 ] && echo "all smoke checks passed" || echo "$failures smoke check(s) failed"
[ "$failures" -eq 0 ]
