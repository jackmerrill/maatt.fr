+++
title = "ESLint plugin for Gulp"
slug = "gulp-eslint"
description = "A Gulp plugin for ESLint based off Adametry's gulp-eslint package"
tag = "Active development"
date = "2021-11-18"
+++

## ⚠️ Heads up!
This page is for a project that is no longer supported. The best term for something like this is a **deprecated project.** In my eyes, however, it's better to keep these pages than to remove them, [creating linkrot.](/blog/linkrot)

---

As much as I hate to admit it, I'm a rather large fan of and user of JavaScript (although I have been more and more wanting to move completely to TypeScript). To help make sure my spaghetti code isn't complete.. well.. spaghetti, I use a tool called [ESLint](https://eslint.org) to ensure silly mistakes like unclosed brackets and malformed indentations don't happen. I also use [Gulp](https://gulpjs.com) to run ESLint and a few other tools for me. In other words, it makes life easy. The most popular ESLint plugin for Gulp (at the time of writing) was from Adametry, but was both abandoned and outdated. So, I've decided, in true open-source fashion, to fork the repository and give it the love it needs.

Some rather big changes that happened to the plugin:
- Added failOnWarning and failAfterWarning
- Tons of updates to ESLint, Mocha (the current testing suite, as of writing), Acorn, and Vinyl
- and heaps more ([this was a big PR for some of the changes done up on the fork](https://github.com/doamatto/gulp-eslint/pull/10))

In February of 2021, I wanted to start to reshape the tool on a fundamental basis by rewriting the plugin in TypeScript and refactoring code to be easily understandable by others. Since then, [I've been in talks with numerous other developers](https://github.com/adametry/gulp-eslint/issues/266) and decided to ultimately detach myself from the old fork to create not only a better interface with Gulp for ESLint but to possibly make a better tool than ESLint and Gulp as a whole. These hopes and dreams are far into the future, [but planned nevertheless.](/ideas)

---

### Useful links
- [NPM Package](https://www.npmjs.com/package/@doamatto/gulp-eslint)
- [GitHub repository](https://github.com/doamatto/gulp-eslint)
