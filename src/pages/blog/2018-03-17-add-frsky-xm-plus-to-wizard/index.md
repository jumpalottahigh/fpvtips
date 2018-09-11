---
path: '/fpv/add-frsky-xm-plus-to-wizard-x220'
date: '2018-03-17'
title: 'How to add Frsky XM+ receiver to the Eachine Wizard x220'
author: 'Georgi Yanev'
draft: false
tags: 'fpv'
relatedArticles:
  - 'frsky'
  - 'upgrade'
  - 'wizard'
  - 'vtx'
affiliate: 'Links to Banggood in this article are affiliate links and would support the blog if used to make a purchase.'
ogKeywords: 'frsky receiver, xm+, xm plus, xm+ receiver, taranis, taranis qx7, setup, transmitter, drone, quad, wizard x220, how to add frsky receiver, betaflight receiver configuration, '
ogDescription: 'The Frsky XM+ receiver is an awesome little thing. Coming in at only $14 it is a tiny, but full featured receiver for Taranis radios. This article describes how to add it to your Eachine Wizard x220'
ogImage: './add-frsky-xm-plus-to-wizard-1.jpg'
canonical: 'https://blog.georgi-yanev.com/fpv/add-frsky-xm-plus-to-wizard-x220'
---

The [Frsky XM+][1] receiver is an awesome little thing. Coming in at only $14 it is a tiny, but full featured receiver for Taranis radios. Since I originally bought my [first drone][2] with a Flysky receiver, but lately transitioned to the [Taranis Q X7][3] radio, it only made sense to mod the Wizard x220 so I can fly it with my new favorite radio.

Here's the final product.

![Wizard x220 quad with a Frsky XM+ receiver mod](add-frsky-xm-plus-to-wizard-1.jpg)

### Solder and connect the XM+

Let's look past how dirty my Wizard is - from learning to fly and crashing.
First thing to take a note of - I have plugged in the Frsky XM+ to the back port (normally the Flysky receiver is connected to the front port of the flight controller).

![Wizard x220 quad with a Frsky XM+ receiver mod closer view](add-frsky-xm-plus-to-wizard-2.jpg)

Solder the following wires to the receiver in the order you see (top to bottom):

**black (top) = ground**

**red (mid) = voltage**

**white (bottom) = signal**

Those go into the back UART port in the same order from top to down - **ground, voltage, signal**.

### Bind the radio to the receiver

To bind the radio to the receiver, take the props off (!!!) if you haven't already and put your transmitter in bind mode.
Then press and hold the bind button on the receiver as you plug in your quad's battery. After a few seconds if all is well the receiver should bind. Stop the binding function on your transmitter and power cycle the quad - turn it off and on. If all is well you should see solid green led on the receiver.

If at this point you have any issues (which happened to me) you might need to flash your receiver with the EU version of the firmware. This is not as hard as it sounds, but will be covered in another post.

### Configure Betaflight

In Betaflight you want to enable Serial Rx on UART3 in the Ports tab.

![Enable Serial RX on UART3 in Betaflight](add-frsky-xm-plus-to-wizard-3.png)

Then go to the Configuration tab and set receiver to SBUS and RSSI on.

![Set receiver to SBUS in Betaflight](add-frsky-xm-plus-to-wizard-4.png)

That's about it. Don't forget to check all your other settings and make sure your radio channels work as expected in the receiver tab.
Happy flying!

[0]: Linkslist
[1]: https://bit.ly/xm-plus
[2]: https://bit.ly/wizardx220
[3]: https://bit.ly/taranis-qx7
