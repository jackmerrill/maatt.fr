+++
title = "稲荷 (Inari)"
slug = "inari"
description = "A zero-config web server with sensible defaults."
date = "2021-08-11"
+++

Over the past couple weeks, I've been working on moving things like this site and others that I've worked on into VPSs and solution like Uberspace. Although solutions like Apache exist, they take time to setup, especially for every site you make. And, although tools like dhttpd and Caddy exist, they offer not enough customisability or not enough functionality, respectively.

Inari is one of two projects (the other being [Fushimi](@/projects/fushimi.md)) that I made to help remedy my issues. Inari is a zero-config web server that gives you sensible defaults and compression out-of-the-box. This makes it a production ready, pop-up web server that's intended to be run behind a reverse proxy (like Nginx, Caddy, et al.; this is meant so that you can still use certificates).

Inari isn't out yet, as I'm still putting on the final touches.

---

## Useful links
- [GitHub repository](https://github.com/doamatto/inari)