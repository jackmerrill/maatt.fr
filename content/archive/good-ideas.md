+++
title="Good Ideas"
template="page.html"
description="I've come up with a lot of random ideas over time. These are the ideas I've acted on or passed on to others."
+++

## Table of contents
- [Ideas I have](/ideas)
- [Ideas I've done](/archive/good-ideas)
- [Ideas I won't do](/archive/bad-ideas)

---

- ~~Directory watcher~~ Deploy with GitHub hooks
    - Needed something that worked on all platforms, was lightweight, and would just work; Golang fit that bill for the most part.
    - A watch tool wouldn't satisfy the needs exactly. This is a more practical solution for deployments to things such as public websites (try this one :P)
    - [Released under the codename Fushimi.](https://github.com/doamatto/fushimi) Will not be `go get`-table.
- Web server that just hosts files / Pop-up web server
    - ~~Hackable enough to do more advanced things like Nginx, but zero-config capable~~ Two flags: one for port, another for directory (if you want to specify)
    - Lightweight af
    - Single binary
    - Written in Golang to experiment
    - ~~Make it a Docker, while I'm at it~~ A bit redundant; can be made stackable easily regardless.
    - [Released under the codename Imami.](https://github.com/doamatto/inari) Will not be `go get`-table.
