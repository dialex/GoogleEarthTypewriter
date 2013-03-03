# Google Earth Typowriter

*Write a message using the Earth as your canvas.*

##Why

During the first ever [Google DevFest Portugal](https://plus.google.com/events/ci9mfrnaa4orhffgb18eobhogfo) we had to come up with an idea (using Google technology), implement it in 24h and present it. I decided to use Google Maps API and some responsive web technology present during the event.

##Concept

I knew for a long time a [website](http://rhettdashwood.com/16575) with Earth locations very similar to letters. Therefore, the objective was to emulate the behaviour of a [traditional typewriter](http://en.wikipedia.org/wiki/Typewriter) but using those aerial views as letters. Therefore, a **Google Earth Typewriter**.

##How it works

You type a letter (spaces are also supported, but `Y` is not), you hear the good old sound of a typewriter's keystroke, and the website loads a real Google Map to display that letter. As with a typewriter, you can't erase what you already wrote you roll the paper to get a new line (and that's what the new line button does, with the respective sound).

##Technologies

The website is responsive although, for legibility reasons, the maps/letters display are not. It uses Twitter Bootstrap, Fittext, Google Maps Typography, Google Maps API, Bitter and SpecialElite fonts, and Soundjay's typewriter sounds.

##Special Thanks

* [Guilherme Simões](https://github.com/GuilhermeSimoes): for all the help with Javascript, jQuery and sounds
* Albuquerque Figueira: for helping me with Google Maps API

##License
*Google Earth Typewriter  Copyright (C) 2013  Diogo Nunes. This program is free software under the terms of the GNU General Public License version 3 and it comes with ABSOLUTELY NO WARRANTY.*