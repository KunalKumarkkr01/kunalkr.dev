# kunalOS 95 - Kunal Kumar's portfolio, served as static files by nginx.
#
# There is no build step: site/ is already the deployable root (React, the
# webfonts and every icon are vendored in), so this is a single stage.
#
# Build context is the repo root:
#   docker build -t kunalos .
#   docker run --rm -p 8080:80 kunalos   # then open http://localhost:8080
FROM nginx:1.29-alpine

# Replace the stock server block: caching policy, gzip and security headers.
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY site/ /usr/share/nginx/html/

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null 2>&1 || exit 1
