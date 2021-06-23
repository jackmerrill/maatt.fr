+++
title = "Google APIs in Vlang"
slug = "google-apis-for-vlang"
description = "A wrapper for Google's APIs written in V. Both for fun and for future projects with Vlang."
tag = "active"
date = "2021-06-23"
+++

<section id="timeline">
  {{ item(
    status="active",
    date="23 June, 2021 to now",
    title="Active development"
  )}}
</section>

### Useful links
- [GitHub repo](https://github.com/doamatto/googleapis)

---

This is a library for all of the Google APIs written in Vlang using only modules in vlib[^1]. It's far from finished, but I do hope to get it done sometime in the near future. Vlang is known for being as fast as C and crazy fast and small. It also means that (in theory) I'm making a C wrapper for the Google APIs, as V works with anything with C interop.

Overall, this is both a way to introduce me into and experiment with Vlang before starting to use it in some production instances with things like [Studio9.](/projects/mono)

---

<sup id="1">1</sup> : vlib is Vlang's standard library of modules. I'm going to try and do it all in vlib (so far, so good), but I can't guarantee it.
