+++
title = "ESLint plugin for Gulp"
slug = "gulp-eslint"
description = "A Gulp plugin for ESLint based off Adametry's gulp-eslint package"
tag = "Active development"
date = "2021-02-02"
+++

<section id="timeline">
  {{item(
    status="released",
    date="02 February, 2021",
    title="Released several versions",
    info="8 tagged releases, as of wriitng, have been made brining patches, dependency updates, and more to this amazing utility. I plan to start the TypeScript rewrite sometimes this month and release it sometime early March."
  )}}
  {{item(
    status="progress",
    date="03 January, 2021",
    title="Started development",
    info="I've finally decided to get started on the TypeScript rewrite and other major improvements to this package (apart from updating to newer versions of ESLint and other tweaks). It will definetely be a challenge, but I look forward to bringing a great tool to the table for everyone."
  )}}
</section>

### Useful links
- [NPM Package](https://www.npmjs.com/package/@doamatto/gulp-eslint)
- [GitHub repository](https://github.com/doamatto/gulp-eslint)

---

As much as I hate to admit it, I'm a rather large fan of and user of JavaScript (although I have been more and more wanting to move completely to TypeScript). To help make sure my spaghetti code isn't complete.. well.. spaghetti, I use a tool called [ESLint](https://eslint.org) to ensure silly mistakes like unclosed brackets and malformed indentations don't happen. I also use [Gulp](https://gulpjs.com) to run ESLint and a few other tools for me. In other words, it makes life easy. The most popular ESLint plugin for Gulp (at the time of writing) was from Adametry, but was both abandoned and outdated. So, I've decided, in true open-source fashion, to fork the repository and give it the love it needs.

Some rather big changes that happened to the plugin:
- Added failOnWarning and failAfterWarning
- Tons of updates to ESLint, Mocha (the current testing suite, as of writing), Acorn, and Vinyl
- and heaps more ([this was a big PR for some of the changes done up on the fork](https://github.com/doamatto/gulp-eslint/pull/10))

Some rather big plans for the plugin:
- a full rewrite of the plugin in TypeScript
- a full rewrite of the testing suite in Jest (probably also in TypeScript, though)
