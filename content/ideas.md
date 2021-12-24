+++
title = "Ideas"
template = "page.html"
description = "I get a lot of ideas of things I should make, this is a way I easily log those things down so I can do them in the future."
+++

Although I don't mind if you do one of these before me, it's very likely I'll do all of these things myself. I'm an overachiever like that :P

## Table of contents
- [Ideas I have](/ideas)
  - [Software](#software)
    - [SaaS](#saas)
    - [Apps/websites](#appswebsites)
    - [The Extremes](#the-extremes)
    - [Utilities](#utilities) 
  - [Hardware](#hardware)
- [Ideas I've done](/archive/good-ideas)
- [Ideas I won't do](/archive/bad-ideas)

---

## Software
- Steal Daniel's idea about making an ideas page at [cyckl.net/idea](https://cyckl.net) about logging ideas over time
- NationStates "copycat"
  - Lightweight UI so it loads quick
  - Crowdsource issues (I think NationStates does a similar thing; would still need an approval process)
  - Creative/Sandbox mode (set the nation how you want, start getting issues from there)
  - No telegrams; keep that crap to things like Discord. Recruitment messages are bleh
  - Would be cool to migrate policies and similar from NationStates over for those who want to

### SaaS
- A quiz to find out what computer you might need
    - Looks at both Macs, prebuilts, and custom-builts
    - Based off the usage that you describe
- Music search by location
    - Find artists based on a location you give
    - Searches Bandcamp first, then a platform like Spotify
- Private analytics (f\*ck privacy-friendly)
    - Only with a pixel/image (makes for much smaller file to use)
    - Collect basically a mirror of [Plausible](https://plausible.io), [Shynet](https://github.com/milesmcc/shynet), or [umami](https://umami.is/)
- Anonymous network solutions for Librewolf
    - Proxies to Mozilla's normal servers sans analytics
    - Support for DRM (needed for a lot of web apps), localisation, et al.
    - Easily self-hostable
- Git-based CMS that doesn't suck
    - Crazy fast IOPS
    - Secure endpoints for allowing client development (either with a standard or through compatible endpoints to other apps (ie. Ghost, WP, et al.)

### Apps/websites
- Alfred for Windows and Linux
    - [Alfred in the first place](https://www.alfredapp.com/)
- Sim racing/trucking telemetry made easy
    - Support for major titles (Project Cars, Assetto Corsa, ETS2/ATS, et al)
    - Should have a nil effect on the perfomance of the game
    - Should have both basic information (for those who just want to keep track of times and general performance) to nerd stats
- Mobile data syncing using NFC
    - Easily sync a calendar event for a meetup time, with the phone numbers and emails of both parties
    - Easily share meeting notes with others
    - Easily share business cards with a tap or QR code scan (similar to Cardhop cards)
- Package tracker app/site
    - Literally every thing I've used is rubbish
    - Support for major world platforms
    - Plugin system for each shipping carrier to make it easy to self-host without racking up costs from mass usage
- F\*ck Google. Make an AIO [like Soverin](https://soverin.net/), that has:
    - Far better uptime than whatever has recently been happening at Soverin,
    - A dead-simple interface so anyone can easily get started (issue with most paid mail solutions imo)
    - Support for all sieve filters (issue with Protonmail)
    - Support for basic mail standards (IMAP/SMTP, JMAP; issue with Protonmail)
    - Easy method for taking your domain and inbox elsewhere
- An OSM app that doesn't suck
    - Native UI in Swift and Kotlin (please change prior)
    - Backend in something funky (Golang?)
    - Updates database weekly, manual bypass
    - Support for editing OSM
- Kaomoji client for iOS
    - They took it out of the Japanese keyboard on iOS grr
    - All the other apps have tracking bullsh\*t; they are literally just kaomojis, they don't need all the extra crap.
    - Should be a native looking keyboard with a GUI that allows compatibility with things like macOS to have a mini dashboard for it.
- FOSS HotSchedules app
    - I shouldn't have to pay 2,99 US$ for the luxury of having an easier way to view my schedules
    - I'll probably still buy the app for feature comparsion
    - [API for reference](http://docs.hotschedules.io/#rest-api-service)
- FOSS flight app
    - I will quite literally gut this idea if Flighty just added trip passes (like Slopes) instead of having to do monthly or yearly subscriptions
- A sane golden hour timer
    - Most make you pay for specific times. Let's not.
    - Fetch sun position from reputable organisation(s) (NASA? ESA? CNSA? JAXA? Roscosmos? ISRO? All of them?)
- FOSS iOS tasks app
  - Syncs with common backends (WebDAV or JMAP Tasks) if wanted
  - KISS with lovability of Pocket Lists
- FOSS grades app
  - Adopts similar styling as stocks with colours and graphs to show grades outside of just a number
  - Integrated with Canvas, PowerSchool, Google Classroom (BYOT?)
  - Works with student accounts (cough cough PowerSchool)
- School schedule app
  - Integration with Siri Shortcuts for fun
  - Lets you set locations, names, times
  - Custom days for things like minimum days
- Gemini browser for iOS that doesn't suck

### The Extremes
- A user-friendly, but hackable Linux distro
    - As user-friendly as elementary
    - As hackable as something like Gentoo, Void, Arch
- Bring PGP to iOS
    - Tweak for having it through that whisker like in Mail and Notes
    - App (like PGPro and similr) that gives both simple info and nerd stats
- uBlock but for Safari
    - Support for the same list syntax as uBlock to make plug and play
    - Should import and export to uBlock compatible data
    - Swift > JavaScript
    - Manually fetch rules by default, make it easy to change frequency
- Cross platform browser syncing extensions
    - Think Firefox Sync, but on all devices
    - Hooks into native APIs for each browser to sync as much amongst the browsers as possible
    - E2EE with no-knowledge possible
    - Dirt-simple API system
- Gemini protocol integration for Firefox, Safari, and Chrome

### Utilities
- Blogging made simple
    - A simple way to start blogging (similar to Wordpress)
    - Made to look good on any screen
    - Native support for a11y, i18n, and feed readers
    - Server and renderer written in something native (Golang?)
- Add new ideas using POST requests
    - Alfred plugin to make it super fast and easy
- Audio driver for Windows and Linux to send to UPnP (specifically my Sonos)
    - Could make it work for macOS too, but I don't need to (AirPlay 2 would be faster afaik)
- Assetto Corsa Server in Docker
- Software repository generator
    - TOML config because why not
    - Takes TOML configs for apps and creates platform-specific packages (eg. Flatpak, DEB/APT, XBPS, et al)
    - Makes it easy to serve as a repo and download site for your projects
    - Should have same endpoints to work as a drop-in for an official Plex server
    - Should be native and 64-bit (unlike Plex on Windows afaik)
- Proxy for Google Forms (straight to Sheets or auto-submitted for you in one server-side request)
- Auto-locking utility for Wayland
  - Hooks with brightness client to fade brightness when inactive
  - Hooks with lock client to lock and go to sleep when inactive
  - Support for ambient light sensor to auto-dim and brighten

## Hardware
- Prusa-esque 2D printer
  - FOSS firmware, software, drivers, et al.
  - Open blueprints so you could print it or buy a DIY kit
- Move to country X
  - Move to province/state Y
    - Move to city Z 
