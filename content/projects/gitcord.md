+++
title = "GitCord"
slug = "gitcord"
description = "A bot that allows users to search repositories via GitHub's API"
tag = "Transfered elsewhere"
date = "2021-01-23"
+++

<section id="timeline">
  {{item(
    status="eol",
    date="23 January, 2021",
    title="Transfered repository to DevingOnDiscord",
    info="I focused on developing something that would get the job done. That was really my only priority. I don''t plan to contribute anymore to GitCord because there's really no need for me to."
  )}}
  {{item(
    status="released",
    date="23 January, 2021",
    title="v0.1.0 unofficially releases"
  )}}
  {{item(
    status="active",
    date="21 January, 2021",
    title="Started development"
  )}}
  {{item(
    status="progress",
    date="19 January, 2021",
    title="Conceptialised idea"
  )}}
</section>

### Useful links
- [GitCord repo](https://github.com/DevingOnDiscord/gitcord-discord-bot)

---

I recently was sent an invite to a GitHub organisation and a Discord group known as «DevingOnDiscord». From my understanding, it's essentially a group of lads who use Discord to turn a profit with their software. Frankly, I've never really cared about making a profit from my service, but I decided to help out with some of the projects. One of those being GitCord.

GitCord is a Discord bot that allows people to search for repositories via GitHub's API. It's pretty simple. Written in TypeScript with Discord.js, it uses the `/search/repositories` endpoint to query for results. It works not too far from the following:

1. You call the command and provide a query (eg. `git!search user:doamatto`)
2. It takes your query and:
  - encodes it as a URI using [encodeURI()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI); and:
  - inserts it into a request to GitHub's servers, providing the results needed to display the data and logging the query for later use
3. The data provided by GitHub is then:
  - parsed into an easy format (JSON, in this case),
  - sliced to the top 5 results; and:
  - scanned to mark forked repos.
4. All the data is coagulated into a [MessageEmbed()](https://discord.js.org/#/docs/main/stable/class/MessageEmbed), or embed message, using data from:
  - the data from step 3 in a list,
  - the query in step 1 to remind you what you searched for; and:
  - the parsed query in step 2 in the form of a search to see other results that were excluded.

Overall, there are some flaws with how the bot operates that may be addressed by current maintainers, such as missing types (with the infamous `TSFixMe` as a placeholder) and rate limiting from not using a token. However, for the average person who might see the need to self-host a bot to search GitHub, this gets the job done easily.
