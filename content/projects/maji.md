+++
title = "マージ (Māji)"
slug = "maji"
description = "A dirt-simple tool to merge JSON files. An experiment with Newtonsoft."
date = "2021-08-26"
+++


Back in 2009, I started to play around with coding in VB.NET and C#, amongst some other languages. I never really kept with it since I didn't really enjoy working in either langauges (the reason is unknown to me considering how long it's been). I've been working on a monorepo / backup for my content blocker filters and themes in my browser (see [Ella](/projects/ella-filters)), and needed to merge JSON files between computers. I used this as a perfect oppurtunity to dabble in C# again, as well in the legendary Newtonsoft.Json library.

I think the only downside is that I don't know how well it works on other operating systems. On Windows, it works as expected; but .NET Core isn't *technically* on macOS and Linux. You can compile for both, however, so I will be able to test it outside of Wine, but it does mean I may have to revisit Maji for a rewrite to ensure I have a tool that works across operating systems.

---

## Useful links
- [GitHub repository](https://github.com/doamatto/maji)
