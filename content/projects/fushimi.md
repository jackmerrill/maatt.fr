+++
title = "伏見 (Fushimi)"
slug = "fushimi"
description = "A simple webhook updated to keep remotes up-to-date on every push to Git"
date = "2021-08-11"
+++

## ⚠️ Heads up!
This page is for a project that is no longer supported. The best term for something like this is a **deprecated project.** In my eyes, however, it's better to keep these pages than to remove them, [creating linkrot](@/blog/linkrot.md) (oh, the irony).

---

Over the past couple weeks, I've been working on moving things like this site and others that I've worked on into VPSs and solution like Uberspace. However, one thing I missed from these services was the easy, zero-effort deploys. Right when you made a push, the checks would run and the site would build on a server like Vercel's or Netlify's.

Fushimi is one of two projects (the other being [Inari](/projects/inari)) that I made to help remedy my issues. Fushimi is a dirt-simple webhook utility to pull changes on remote servers on every push. You can change GitHub's webhook settings to allow it to create just about any method that starts the pull and build process remotely.
