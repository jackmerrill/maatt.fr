+++
title="PrivacySpy Crawler"
template="page.html"
+++

If you're a web administrator or manage a site's analytics tool, you may have noticed requests from a device: `PS Crawl - https://maatt.ch/ps-crawl` or similar. This is the unofficial (hopefully to be official, in the future) web crawler for [PrivacySpy](https://privacyspy.org) that makes automated issues to GitHub for when a policy has problems. You can see its source code [on GitHub.](https://github.com/doamatto/privacyspy-bot)

### I saw this in my analytics tool, what is it?
PrivacySpy is an open-source crowdsourced privacy policy grading site, where we track online privacy. You can learn more about it [here](https://privacyspy.org/about/), but if you see this crawler on your site it means your privacy policy was added to PrivacySpy by someone.

### Is it possible to stop these requests?
Yes and no. As of writing, there is no opt-out method to these crawls; however, you can use a `robots.txt` file to block our user agent. We highly discourage this however, as it means we can't ensure your privacy policy is up to date and is being scored properly.
