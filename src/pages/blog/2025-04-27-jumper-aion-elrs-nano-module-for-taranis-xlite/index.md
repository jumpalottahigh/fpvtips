---
path: '/fpv/jumper-aion-elrs-nano-module-for-taranis-xlite/'
date: '2025-04-27'
updated: '2025-04-27'
title: 'Review and setup Jumper AION ExpressLRS nano module for Taranis X-Lite'
author: 'Georgi Yanev'
draft: false
category: 'fpv'
tags:
  - 'mepsking'
  - 'frsky'
  - 'jumper'
  - 'elrs'
  - 'x-lite'
  - 'opentx'
  - 'review'
  - 'radio'
gearList:
affiliate: 'Links to Banggood, Mepsking or Amazon in this article are affiliate links and would support the blog if used to make a purchase.'
ogKeywords: 'fpv, drone, freestyle, fpv freestyle, fpv drone, quad, quadcopter, micro drone, micro quad, tinywhoop, mepsking, cinewhoop'
ogDescription: "I have to admit that while being away from the FPV drones hobby past few years I have completely missed out the entire ExpressLRS (ELRS) movement. From what I've been able to gather and understand so far since my comeback, it seems like an amazing community-driven open-source project with all of the code on GitHub and allows vendors to use that protocol when building their receiver and transmitter hardware. And there seem to be a lot of ELRS radios on the market, as well as receivers and AIO boards with built-in SPI receivers."
ogImage: './jumper-aion-elrs-nano-module-for-taranis-xlite-1.jpg'
canonical: 'https://blog.georgi-yanev.com/fpv/jumper-aion-elrs-nano-module-for-taranis-xlite'
---

I have to admit that while being away from the FPV drone hobby past few years I have completely missed out the entire ExpressLRS (ELRS) movement. From what I've been able to gather and understand so far since my comeback, it seems like an amazing community-driven open-source project with all of the code on GitHub and allows vendors to use that protocol when building their receiver and transmitter hardware. And there seem to be a lot of ELRS radios on the market, as well as receivers and AIO boards with built-in SPI receivers.

I am really, really simplifying and keeping it short here, but it seems that the thriving ecosystem has led to some really nice hardware that people are very happy with, it delivers really good range and link quality.

Because I've had my Taranis X-Lite radio for a while and I still like it, I decided to look for a module that fits it and use that to dip my toes into the ExpressLRS world.

So here is the <a href="https://www.mepsking.shop/jumper-aion-2-4ghz-nano-els-tx-module.html?inviterId=1869316794740477954&utm_source=affiliate&utm_medium=affiliate" target="_blank" rel="noopener noreferrer">Jumper AION ELRS nano module</a> I went for:

![Jumper AION ELRS nano module front](jumper-aion-elrs-nano-module-for-taranis-xlite-18.jpg)

![Jumper AION ELRS nano module back](jumper-aion-elrs-nano-module-for-taranis-xlite-19.jpg)

Fits nicely into the Taranis X-Lite nano slot:

![Taranis X-Lite nano external module slot](jumper-aion-elrs-nano-module-for-taranis-xlite-17.jpg)

![Jumper AION ELRS nano module plugged into the Taranis X-Lite](jumper-aion-elrs-nano-module-for-taranis-xlite-1.jpg)

In terms of setup, there's not a lot to do really. Once you have plugged in the module, we need to do basically two things:

- Flash the firmware to both update it and to set the binding phrase we will use to bind our quads
- Copy the ELRS script on the Taranis X-Lite SD card

To begin with flashing the firmware first download the [ExpressLRS Configurator][2] for your operating system. When you run it, you wanna select the correct `device category`, `device`, and `regulatory domain` and of course, set your `custom binding phrase`. With all of those set, hit the flash button.

![ExpressLRS Configurator with Jumper AION settings](jumper-aion-elrs-nano-module-for-taranis-xlite-2.jpg)

If all goes well you should see a screen like this where you can also download the Lua script we're gonna copy to the radio.

![ExpressLRS Configurator flashing completed](jumper-aion-elrs-nano-module-for-taranis-xlite-3.jpg)

You will need to disconnect the connection to the ELRS module and instead plug in your radio (Taranis X-Lite) to mount the SD card. You need to copy the `elrsV3` lua file to the `SCRIPTS\TOOLS` location on the radio, as you can see below:

![copying the elrsV3 lua script to the correct location on the SD card of the radio](jumper-aion-elrs-nano-module-for-taranis-xlite-4.jpg)

Now let's boot up the radio and create a new model.

![Create a new model in Taranis X-lite](jumper-aion-elrs-nano-module-for-taranis-xlite-10.jpg)

You can use this model for basically all of your ELRS drones if you so wish. Let's jump into the `Setup` view. Here we will turn off the `Internal RF` and we will set the `External RF` to `CRSF`.

![Taranis X-Lite setup view](jumper-aion-elrs-nano-module-for-taranis-xlite-6.jpg)

And for the most part, we are kind of done.

![ELRS Jumper AION running](jumper-aion-elrs-nano-module-for-taranis-xlite-5.jpg)

![Taranis X-Lite and micro drone on table](jumper-aion-elrs-nano-module-for-taranis-xlite-9.jpg)

To bind to a drone, plug it in and open Betaflight. In the `Receiver` tab put in your binding phrase in the field for it.

![Betaflight receiver tab](jumper-aion-elrs-nano-module-for-taranis-xlite-22.jpg)

Remember the elrsV3 lua script we copied earlier? In your radio's `Tools` menu you should have an entry for `ExpressLRS` if you scroll it down a bit.

![Tools menu in opentx](jumper-aion-elrs-nano-module-for-taranis-xlite-12.jpg)

![ExpressLRS entry in Tools menu](jumper-aion-elrs-nano-module-for-taranis-xlite-13.jpg)

Apart from allowing us to set the output power of the module and other useful settings, this also provides another super useful option I'd like to show you - `BLE Joystick`.

![ELRS Lua script menu](jumper-aion-elrs-nano-module-for-taranis-xlite-14.jpg)

And it's exactly what it sounds like. Say you wanna use your radio with a simulator on your PC, for example, but you don't wanna use a cable, yes, just do it over Bluetooth. Very handy and super easy!

![Bluetooth joystick functionality running](jumper-aion-elrs-nano-module-for-taranis-xlite-15.jpg)

Once the module is in Bluetooth joystick mode you should see it on the radio's screen and on the module's screen too.

![Jumper AION ELRS module running in bluetooth joystick mode](jumper-aion-elrs-nano-module-for-taranis-xlite-16.jpg)

All that is left is to connect to your PC via Bluetooth:

![connect via bluetooth on windows](jumper-aion-elrs-nano-module-for-taranis-xlite-23.png)

![ExpressLRS module connected to PC via Bluetooth](jumper-aion-elrs-nano-module-for-taranis-xlite-24.png)

And get into Liftoff, setup the controller and play the game.

![Liftoff simulator](jumper-aion-elrs-nano-module-for-taranis-xlite-21.jpg)

All in all from what I've seen from this module so far and what I've used it for, which is still not a whole lot, but still, I'm pretty happy. Works as expected and doesn't break the bank at its pretty affordable price point. I'm a fan.

Here's a link if you decide to grab the <a href="https://www.mepsking.shop/jumper-aion-2-4ghz-nano-els-tx-module.html?inviterId=1869316794740477954&utm_source=affiliate&utm_medium=affiliate" target="_blank" rel="noopener noreferrer">Jumper AION ELRS nano module</a>.

<div style="text-align: center">
 <iframe width="560" height="315" src="https://www.youtube.com/embed/j_qc6SrCIWc?rel=0" frameBorder="0" allowFullScreen title="Mepsking 65mm micro drone kit flight 4"></iframe>
</div>

Happy flying!

[0]: Linkslist
[2]: https://github.com/ExpressLRS/ExpressLRS-Configurator/releases
