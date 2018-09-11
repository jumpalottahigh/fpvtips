---
path: '/fpv/setup-flysky-fs-i6-ibus'
date: '2017-10-28'
title: 'How to setup iBUS on Flysky FS-i6'
author: 'Georgi Yanev'
affiliate: 'Links to Banggood in this article are affiliate links and would support the blog if used to make a purchase.'
draft: false
tags: 'fpv'
relatedArticles:
  - 'flysky'
  - 'upgrade'
  - 'wizard'
ogKeywords: 'wizard x220, how to setup Flysky FS-i6 in iBUS, iBus, Flysky, FS-i6'
ogDescription: "Here's a quick guide on how to change the default PPM on your Flysky FS-i6 receiver to the much faster iBUS. No soldering required."
ogImage: './setup-ibus-on-flysky-2.jpg'
canonical: 'https://blog.georgi-yanev.com/fpv/setup-flysky-fs-i6-ibus'
---

The [Eachine Wizard x220][1] comes with a Flysky receiver plugged in and set to PPM mode. You can easily switch to the much faster iBUS mode following the steps bellow.

First you want to take off the 6 top screws and put the top frame plate on the side.

![Wizard x220 with the top frame plate off](setup-ibus-on-flysky-1.jpg)

![Receiver plugged in the front facing port](setup-ibus-on-flysky-2.jpg)

By default your receiver should be plugged in the camera facing port of the flight controller. You want to carefully take that out and plug it in on the other side of the flight controller (tail side port).

![Receiver plugged in the back facing port](setup-ibus-on-flysky-3.jpg)

Next you want to unplug the cable from the receiver itself and plug it in as in the image bellow for iBUS. It goes horizontally into the top row, spanning across channels 4, 5 and 6. With black, red and white wire in that corresponding order.

![Receiver plugged in the back facing port](setup-ibus-on-flysky-4.jpg)

![Receiver plugged in the back facing port](setup-ibus-on-flysky-5.jpg)

Hardware wise we are done, now let's jump quickly into Betaflight. Take the quad's props off and plug in the USB and the battery.

On the Ports tab, set Serial RX for UART3.

![Receiver plugged in the back facing port](setup-ibus-on-flysky-7.jpg)

On the Configuration tab scroll down to the receiver settings and select _Serial-based receiver_ and then IBUS from the other dropdown. Save and reboot.

![Receiver plugged in the back facing port](setup-ibus-on-flysky-6.jpg)

Congrats if all is well, your receiver should now work in iBUS mode.

If for whatever reason you need to bind again the transmitter and the receiver, insert the bind key into the receiver as in the image below (vertically, right hand side, on the B/VCC line).

![Receiver plugged in the back facing port](setup-ibus-on-flysky-8.jpg)

![Receiver plugged in the back facing port](setup-ibus-on-flysky-9.jpg)

With your quad's props off (and vtx antenna on!) plug in the battery. With the transmitter off, hold the bind button on it and THEN TURN IT ON. The Flysky radio should bind and you should be set. Happy flying!

[0]: Linkslist
[1]: https://bit.ly/wizardx220
