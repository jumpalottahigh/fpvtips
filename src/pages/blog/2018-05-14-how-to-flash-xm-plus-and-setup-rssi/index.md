---
path: '/fpv/flash-xm-plus-and-setup-rssi'
date: '2018-05-14'
title: 'How to flash XM+ and setup RSSI'
author: 'Georgi Yanev'
draft: false
category: 'fpv'
tags:
  - 'frsky'
affiliate: 'Links to Banggood or Amazon in this article are affiliate links and would support the blog if used to make a purchase.'
ogKeywords: 'FPV, racing quads, quad, drone, drone build, DIY, RSSI, FrSky, FrSky XM+, XM+, XM plus, Taranis Q X7, RSSI, telemetry signal, flash xm+, flash xm plus, enable rssi on xm+'
ogDescription: "Sometimes you might need to flash new firmware on the XM+ receiver. Here's how to do that with the Taranis Q X7"
ogImage: './flash-xm-plus-and-setup-rssi-5.jpg'
canonical: 'https://blog.georgi-yanev.com/fpv/flash-xm-plus-and-setup-rssi'
---

Sometimes you might need to flash new firmware on the [XM+ receiver][3]. The two main reasons as to why you may want to do that are usually:

- You have purchased **LBT (EU)** version of the receiver and need to flash the **FCC (US)** firmware (or the other way around)
- You want to **enable RSSI** on channel 16 (requires latest firmware)

If these sound familiar, look no further, let's get this done.

#### ⬇️ Download the firmware

Go to FrSky's site, look for the XM+ receiver, go to the downloads section for it. [Or click here][1]. Expand the firmware tab and download the latest firmware. At the time of this writing this is the firmware version **170313** from 2017-03-28. When you unzip the downloaded file you should get a folder (named XM+ 170313) with 6 files in it. These different versions of the firmware are:

- FCC
- FCC + RSSI on channel 8
- FCC + RSSI on channel 16
- LBT
- LBT + RSSI on channel 8
- LBT + RSSI on channel 16

#### 📋 Copy the firmware to the Taranis Q X7

Copy the whole folder with all 6 files in it to the [Taranis Q X7][4]. You should place the files under the **FIRMWARE** directory on your Taranis SD card. If you haven't set that up, you can [read here how to do it][2].

#### 🔌 Prepare cables and solder the receiver

You can use many different cable types, but a servo cable or a dupont cable will serve just fine. Anything, as long as you have 3 female ends to plug into the Taranis. Here's an example:

![Example cable mod for flashing the XM+ receiver](flash-xm-plus-and-setup-rssi-1.jpg)

Solder the other ends of the cables to the XM+ receiver as seen below. In this case I'm using:

- Blue for Ground
- White for 5V
- Yellow for Signal

![Solder cable for flashing to the XM+](flash-xm-plus-and-setup-rssi-2.jpg)

#### 📲 Flash the firmware

We are gonna use this port on the bottom of the Taranis to perform the flashing.

![Taranis port for flashing](flash-xm-plus-and-setup-rssi-3.jpg)

> _If for whatever reason this port does not work for you (older radio?), you can also use the port in the module bay on the back of your Taranis. I'm not gonna go over these here, however, there are plenty of guides on how to do that using the back port. You just need to be careful and figure out which wire is for what. Back to our story._

You wanna plug in the cable according to this order of pins:

**G V S** - as seen on the image below. With the front of the radio facing yourself, left to right - ground, 5V and signal pin.

![Pin order of port for flashing on Taranis Q X7](flash-xm-plus-and-setup-rssi-4.jpg)

Next, hold the menu button to get to the radio setup screen. Press page onces to get to the SD card content. Scroll to and open the **FIRMWARE** directory, then into the **XM+170313** directory, then select the firmware you want to write (again, pay attention to the FCC vs LBT versions (US vs EU)) and select a version with **RSSI16**. Hold press the radio action button and select **Flash ext. device**.

If you see "Writing" and a progess bar, you are in the game. Your receiver should also start blinking in alternating red and green. Wait patiently for the flashing to complete. If successful, congrats, your receiver is flashed! If you don't care for RSSI, you are done!

![FrSky XM+ receiver flashing in progress](flash-xm-plus-and-setup-rssi-5.jpg)

#### 🛠️ Set up RSSI on channel 16

With this new firmware in place the XM plus receiver outputs RSSI telemetry by default on channel 16. In order to utilize this, in Betaflight, go to the **Receiver** tab and set for **RSSI Channel - AUX 12** (= channel 16, since the first 4 channels are for roll, pitch, yaw and throttle). Click save.

![Betaflight receiver tab](flash-xm-plus-and-setup-rssi-6.png)

Go to the **OSD** tab and make sure RSSI value is on so you can see it when you fly.

![Betaflight OSD tab](flash-xm-plus-and-setup-rssi-7.png)

Lastly, go to the **Setup** tab and verify that you see a value for RSSI. The value should react to interference and you moving your radio away from the receiver.

![Betaflight setup tab](flash-xm-plus-and-setup-rssi-8.png)

#### 🎉 Enjoy, I hope this helped you and happy flying!

[0]: Linkslist
[1]: https://www.frsky-rc.com/xm-plus-mini-sbus-non-telemetry-full-range/
[2]: /blog/fpv/setup-taranis-qx7
[3]: https://bit.ly/xm-plus
[4]: https://bit.ly/taranis-qx7
