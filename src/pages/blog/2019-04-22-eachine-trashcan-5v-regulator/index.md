---
path: '/fpv/eachine-trashcan-5v-regulator/'
date: '2019-04-22'
title: 'Add an external voltage regulator to the Eachine Trashcan'
author: 'Georgi Yanev'
affiliate: 'Links to Banggood or Amazon in this article are affiliate links and would support the blog if used to make a purchase.'
draft: false
category: 'fpv'
tags:
  - 'eachine'
  - 'trashcan'
  - 'micro'
  - 'diy'
ogKeywords: 'trashcan micro drone, trashcan, FPV, racing quads, quad, drone, getting started, taranis q x7, practice, micro, micro drone, eachine, eachine trashcan, trashcan micro drone, review, eachine trashcan review, trashcan setup, configure eachine trashcan, unbox, setup trashcan drone'
ogDescription: 'If you are one of the unlucky folks with a busted 5v regulator on your Eachine Trashcan, fear not. There is a solution and the fix is easier to do than you might expect - add an external 5v regulator.'
ogImage: './eachine-trashcan-5v-regulator-3.jpg'
canonical: 'https://blog.georgi-yanev.com/fpv/eachine-trashcan-5v-regulator'
---

If you are one of the unlucky folks with a busted 5v regulator on your [Eachine Trashcan][1], fear not. There is a solution and the fix is easier to do than you might expect - add an external 5v regulator.

You can grab a [Matek Systems Micro BEC][2] which would get the job done just fine.

![Matek Systems package with 3 Micro BEC 6s voltage regulators](eachine-trashcan-5v-regulator-1.jpg)

Solder a few wires to it. In my case, red silicon wire to the input voltage, black wire to ground and white wire to the 5V output.

![Matek voltage regulator with 3 wires soldered to it](eachine-trashcan-5v-regulator-2.jpg)

Finally, solder the other end of the red wire to your battery positive pad. Solder ground to ground and the white wire to the positive 5V pad, for example where the Trashcan LEDs were connected.

![Eachine Trashcan with a micro voltage regulator added](eachine-trashcan-5v-regulator-3.jpg)

That's it, enjoy, hopefully, this solves your problems. Do keep in mind that the regulator gets very hot, so mount it away from other components that get hot, such as the vtx, and avoid just keeping the quad plugged in without flying it.

[0]: Linkslist
[1]: https://bit.ly/eachine-trashcan
[2]: https://bit.ly/matek-bec
