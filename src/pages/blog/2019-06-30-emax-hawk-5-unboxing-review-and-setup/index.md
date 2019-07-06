---
path: '/fpv/emax-hawk-5-unboxing-review-and-setup/'
date: '2019-06-30'
title: 'Emax Hawk 5 review, Betaflight and radio setup'
author: 'Georgi Yanev'
affiliate: 'Links to Banggood or Amazon in this article are affiliate links and would support the blog if used to make a purchase.'
draft: false
category: 'fpv'
tags:
  - 'emax'
  - 'hawk5'
  - 'freestyle'
  - 'drone'
ogKeywords: 'fpv, quad, drone, fpv racing, fpv freestyle, review, setup, setup emax hawk 5, upgrades, emax, hawk5, hawk 5, setup hawk 5, how to configure hawk 5, how to configure betaflight, how to configure taranis radio, how to configure radio, how to setup switches, how to setup mixers, BNF, bind and fly, high quality drone, high quality quad, high quality racing drone, frsky xm+, foxeer arrow, foxeer micro arrow'
ogDescription: "The quickest I have ever gone from opening a box with a prebuilt quad to actually flying it. Binding it, 3 minutes config on my radio, 3 minutes in Betaflight. Putting props on took more time than the rest 😅. Today we are having a look at the Emax Hawk 5 BNF 5-inch quad. Let's get to it."
ogImage: './emax-hawk-5-unboxing-review-and-setup-6.jpg'
canonical: 'https://blog.georgi-yanev.com/fpv/emax-hawk-5-unboxing-review-and-setup'
---

The quickest I have ever gone from opening a box with a prebuilt quad to actually flying it.
Binding it, 3 minutes config on my radio, 3 minutes in Betaflight. Putting props on took more time than the rest 😅.
Today we are having a look at the [Emax Hawk 5][1] BNF 5 inch quad. Let's get to it.

![Emax Hawk 5 with props on, picture 2](emax-hawk-5-unboxing-review-and-setup-40.jpg)

### Table of contents

- [Unboxing](#unboxing)
- [Components](#components)
- [Setup and binding](#binding)
- [Betaflight configuration](#betaflight)
- [Flying](#flying)
- [Upgrades](#upgrades)
- [Conclusion](#conclusion)

### 📦 <span id="unboxing">Unboxing</span>

The unboxing experience was pretty good. No damage on the box on the outside, and a slick design.

![Emax Hawk 5 box](emax-hawk-5-unboxing-review-and-setup-1.jpg)

The quad, props and all other parts are sunk deep in foam and well protected from all angles.

![Emax Hawk 5 box foam inside](emax-hawk-5-unboxing-review-and-setup-2.jpg)

We are greeted by some manuals for the different components, for the stack, for the xm+ receiver and some Emax stickers.

![Emax Hawk 5 in the protective foam in the box](emax-hawk-5-unboxing-review-and-setup-3.jpg)

Very cool packaging and I'd be very surprised if there were any defects because of shipping. Not a chance when everything is wrapped with soft foam.

But let's get to the good stuff, let's see what we get.

![Emax Hawk 5 all items from the box laid out, picture 1](emax-hawk-5-unboxing-review-and-setup-6.jpg)

We get the [Emax Hawk 5][1]. Even at a glance, the build quality is stellar, but more on that in a sec. We get a couple of LHCP Pagoda II antennas, which is a nice touch since they are LHCP, you can put one on the quad and one on your goggles or goggle video receiver.

![Two Pagoda antennas](emax-hawk-5-unboxing-review-and-setup-9.jpg)

However, we also note that the quad already has a small dipole whip antenna installed, which could be enough in some cases depending on how you fly. Of course, we get the necessary connector, should we make the transition to the Pagoda antennas.

We get a couple of battery straps, which at least in my case were way too short to hold any battery (I used [1300 mah 4S][4] and [1500 mah 4S][5] batteries in my tests). I use these [battery straps][3] instead. They might not be rubberized, but I have only snapped one so far after almost 2 years of using it (lol), and they are long and cheap. And I've been crashing too :)

![Emax Hawk 5 all items from the box laid out, picture 1](emax-hawk-5-unboxing-review-and-setup-5.jpg)

You also get 4 sets of props, which is pretty cool.

![4 sets of Avan Flow 5 props](emax-hawk-5-unboxing-review-and-setup-7.jpg)

And those are [Avan Flow][6] props too! If you haven't used them before, just know that they are very aggressive pitch props, that also offer plenty of control, but do tend to draw more amps from your battery when you really punch the throttle. At low and mid throttle they are fairly power efficient. They are also a joy to fly, indeed!

![2 Avan Flow props next to each other](emax-hawk-5-unboxing-review-and-setup-8.jpg)

We also find a spare arm in case you break one, that's a great addition and it basically means that a hard crash is not gonna render your entire quad obsolete if you break an arm.

![Spare quad arm and battery straps](emax-hawk-5-unboxing-review-and-setup-10.jpg)

Additionally, we also get a controller for tuning the Foxeer FPV camera, as well as another pouch with screws, washers and a few short zip ties. Onto the components overview.

![Foxeer Micro Arrow camera controller](emax-hawk-5-unboxing-review-and-setup-38.jpg)

### 🧪 <span id="components" class="offset-top-nav">Components</span>

I already mentioned that the build was pretty solid and the components are very high quality too. But we also haven't mentioned how much this drone costs. Currently, you can snatch up an [Emax Hawk 5][1] for about \$250 on Banggood.

![Emax Hawk 5 without props, front right](emax-hawk-5-unboxing-review-and-setup-13.jpg)

And to be honest for what you get that price is quite fine. However, that is also not one of the cheapest BNF options, and as such, naturally, we expect to get quality components and tune. **And you get exactly that!**

![Emax Hawk 5 without props, full frontal shot](emax-hawk-5-unboxing-review-and-setup-11.jpg)

**Frame**. The Emax Hawk is quite light, coming in at about 270 grams without battery. The frame is made of high-quality aerospace grade carbon fiber and allows for swapping out arms in case you break one. At the bottom of the frame, there is rubberized padding that provides extra battery grip, which is useful if you mount the battery there.

![Emax Hawk 5 bottom plate](emax-hawk-5-unboxing-review-and-setup-31.jpg)

Alternatively, you can mount a battery on top as well, by running a battery strap between the two mini topside plates and the top plate.

**Stack: Flight Controller, 4 in 1 ESC, VTX and Receiver**. The FC is an Emax Magnum Omnibus F4 with OSD, the ESC is a 30A 4 in 1 BLHeli_S DSHOT600 capable. The whole stack is soft mounted with rubber grommets to dampen vibrations. At the top of the stack, you will notice the vtx and the receiver (provided that's the version you purchased too).

![Emax Hawk 5 stack](emax-hawk-5-unboxing-review-and-setup-14.jpg)

In my case, I got my trusty [FrSky XM+][7]. The receiver antennas are already prepped and mounted to the sides with zip ties and shrink tube. **You can run the receiver antennas off the sides, keep them closer inside within the frame or run them up through the small cutouts on top of the frame.**

The VTX is a 48 channel 5.8GHz and can be switched between 25mW and 200mW. You can change the channels via an easily accessible button on the side. **To change the output power, press and hold the button for 10 seconds until you can see an extra dot (.) on the small led screen.** Speaking of which, 10/10 for adding that small top frame cut out! It's a lovely touch and makes it very convenient to see your VTX channel.

![Emax Hawk 5 top plate VTX cut out](emax-hawk-5-unboxing-review-and-setup-32.jpg)

The battery leads have a zip tie to reduce some of the potential impact / pull tension and there also is a capacitor soldered to the battery leads to soak up some unwanted voltage spikes.

**Camera**. In the front, we have the Foxeer Micro Arrow V2 camera. The picture quality and the detail is truly great and the flying experience is solid overall.

![Emax Hawk 5 Foxeer Micro Arrow camera](emax-hawk-5-unboxing-review-and-setup-35.jpg)

However, I'm not sure if it is the camera tune but I haven't been getting very good results late at night when the sun is low on the horizon. In particular, when I fly with the sun behind me, the camera produces a gorgeous image, but flying towards the sun leads to almost pitch black picture. I will make sure to update the post if I solve this by tweaking the camera settings.

However, the reality of it all is that, I'm comparing against the RunCam Split 2 and the WDR on the RunCam is not all over the place in the same conditions and I am able to fly in each direction with decent picture and no issues, with the stock tune on the RunCam Split 2.

**Motors**. The motors are the Emax LS 2206 Lite Spec 2300KV.

![Emax Hawk 5 motors brand](emax-hawk-5-unboxing-review-and-setup-36.jpg)

![Emax Hawk 5 motors model](emax-hawk-5-unboxing-review-and-setup-37.jpg)

They are definitely performers, never had issues with motors getting hot in my tests. Very zippy overall, especially paired with the...

**Props**. Avan Flow 5 inch props. This is the most aggressive tri-blade prop I have flown to date and ... I love it. I give so much of the overall flight characteristic to the Avan Flow props. In simplest terms, the craft is very fast and snappy, but also super controllable and behaving in turns and really just goes where you tell it. It is an AWESOME flight experience delivered by the good components and the excellent tune.

### 🔗 <span id="binding" class="offset-top-nav">Binding and radio setup</span>

Binding the [Emax Hawk 5][1] is very straightforward. **Take the props off**. Then, you have to take off the top plate in order to access the bind button on the FrSky XM+.

![Emax Hawk 5 stack](emax-hawk-5-unboxing-review-and-setup-14.jpg)

In your radio create a new model. I'm using the [X-Lite][9] here, but the setup is nearly identical for most FrSky radios.

![Taranis X-Lite create model screen](emax-hawk-5-unboxing-review-and-setup-22.jpg)

Change to the setup screen, navigate to and activate the Bind function.

![Taranis X-Lite setup screen](emax-hawk-5-unboxing-review-and-setup-23.jpg)

Plug in a battery to the quad (remember props off) while holding the bind button on the receiver depressed. If you don't have 3 hands you are out of luck :) It's a bit tricky sometimes but you can do it. Alternatively, if you have a [smoke stopper with a button (like mine)][10], it could make it a bit easier, as you can plug in the battery beforehand and then only hold the receiver bind button while pressing the smoke stopper power on button.

Next, let's jump to the Mixer screen and setup 2-3 switches.

![Taranis X-Lite  mixer screen](emax-hawk-5-unboxing-review-and-setup-16.jpg)

**Add some switches to channels 5,6,7**. You can certainly do less than that if you don't want to. Or more. I normally have an arm dedicated switch, a modes 3 step switch and sometimes a buzzer switch.

**BONUS: Adjust Radio Outputs**. While we are here, we might as well trim the channel outputs. If the outputs are not dead center, like in my case, you can adjust them from the Outputs screen. By moving the sticks you can tell which one controls the current channel as the number in the top middle of the screen will start changing (in case you are lazy like me to learn them by heart). Once you have identified the correct stick and axis, corresponding to channel 1, long press the menu button and select edit to change the min and max values.

![Taranis X-Lite outputs screen unadjusted](emax-hawk-5-unboxing-review-and-setup-17.jpg)

Here in the end screen (picture below) we want to achieve 3 things. We want to have a steady value of 1500 when the stick is centered, a value of 1000 when the stick is at its lowest point and a value of 2000 when the stick is at its max position. We want those values to be steady and not twitching.

To achieve this, deflect fully the stick in a given position and hold it there. The number at the top right will reflect those changes. While holding the stick at that value tweak the Min or Max values accordingly until you achieve the desired steady endpoints. If when the stick is centered the value is off from 1500, you can adjust that with subtrim.

![Taranis X-Lite outputs screen, channel menu](emax-hawk-5-unboxing-review-and-setup-24.jpg)

Here's how my endpoints ended up being.

![Taranis X-Lite outputs screen fully adjusted](emax-hawk-5-unboxing-review-and-setup-18.jpg)

Next, let's jump into Betaflight and set up the switches.

### ⚙ <span id="betaflight" class="offset-top-nav">Betaflight configuration</span>

I mentioned already perfect tune. Like, literally my first flight experience, from the first second, the PID tuning just clicked with me. Every roll, every flip, was spot on axis, very easy to perform. Amazing work there by Emax. In fact, here's the DVR footage from the maiden flight and my first ever time flying this quad.

<div style="text-align: center">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/yaP5ZEdxjeQ?rel=0" frameBorder="0" allowFullScreen title="Emax Hawk 5 Maiden 1"></iframe>
</div>

<div style="text-align: center">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/fJIqgj6Id9U?rel=0" frameBorder="0" allowFullScreen title="Emax Hawk 5 Maiden 2"></iframe>
</div>

I am simply in love with that tune. Out of the box with 0 extra tunings. Impressive!

**Setup modes**. Pretty much the only thing we have to do in Betaflight is to set up some modes. That will allow us to trigger those modes with the switches we set up in the radio mixer. Remember we set up CH5, CH6, CH7? Those correspond to AUX1, AUX2, AUX3 here in the modes tab.

Make sure you have at least an arming switch setup (AUX1 in my case). Again if you are doing any live debugging with a plugged-in quad, remove the props before plugging in a battery. If your transmitter is correctly bound, you will see the yellow notch move when you flip a switch. You can adjust when a switch is considered active by adjusting the yellow sliders.

I have Angle mode (I don't ever fly it, maybe I need to reconsider, but as a safety option I like keeping an angle/horizon mode around), and turtle mode (flip over after crash) on AUX2. And a beeper on AUX3.

![Betaflight Modes screen](emax-hawk-5-unboxing-review-and-setup-26.png)

If you are itching to fly, at this point you are good to go. Don't forget to hit save to save your changes. Additionally, double check and make sure your Failsafe is setup and working on the radio (I use the 'No Pulses' setting).

Here's the rest of the stock configuration:

![Betaflight configuration page 1](emax-hawk-5-unboxing-review-and-setup-42.png)

Let's verify that SBUS is set and also with the XM+ receiver we get RSSI output on channel 12, which is neat and can be then shown on the OSD. You can enable it here in the configuration tab.

![Betaflight configuration page 2](emax-hawk-5-unboxing-review-and-setup-27.png)

**Receiver tab:**

Then here under RSSI Channel select channel 12.

![Betaflight receiver tab](emax-hawk-5-unboxing-review-and-setup-25.png)

**OSD tab:**

Finally, in the OSD tab select to output the RSSI value.

![Betaflight OSD tab](emax-hawk-5-unboxing-review-and-setup-30.jpg)

**PID Tuning tab:**

![Betaflight PID Tuning tab](emax-hawk-5-unboxing-review-and-setup-43.png)

**Motors tab:**

If you want, you can test and make sure the motor directions are correct, but if you do so, take off the props :)

![Betaflight motors tab](emax-hawk-5-unboxing-review-and-setup-28.png)

Here's the [full stock Betaflight configuration dump + my modes changes](BTFL_cli_Hawk_5_20190628_220337.txt).

Now let's go rip some packs!

![Emax Hawk 5 with props on, picture 1](emax-hawk-5-unboxing-review-and-setup-39.jpg)

### 🚁 <span id="flying" class="offset-top-nav">Flying</span>

In my tests, I flew mostly [1300 mah 4S][4] packs, and a few [1500 mah 4S][5]. I don't think you can feel the difference that much, although it does indeed make the quad a bit heavier. I do prefer to rip 1300 mah packs.

**Sunny day**

<div style="text-align: center">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/htWUFSzpH14?rel=0" frameBorder="0" allowFullScreen title="Emax Hawk 5 very sunny day"></iframe>
</div>

**I think this is hands down the best quad I have flown to date!** My custom build quad doesn't fall too short either, although it cost a bit less to make, I'm not sure about the value comparison if I factor in the time I put in it and all the issues I had to go through. You can [read about my entire experience building it here][11]. I mean building is fun, but if you wanna fly quick, BNF is probably one of the fastest ways to get in the sky. At least before you get good at building if that's your cup of tea.

**Overcast day**

<div style="text-align: center">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/WDDIkdS-HBA?rel=0" frameBorder="0" allowFullScreen title="Emax Hawk 5 overcast"></iframe>
</div>

The PID tune really clicked with me from the first pack, the quad was really snappy and fast. It cuts the corners nicely and simply put is just a joy to fly. It definitely packs a punch and is truly so much fun to fly. Very responsive as well.

I was curious to what degree that pretty unique flight characteristic was because of the Avan props, so I went ahead and did a test flight with these [Gemfan Hurricane][12] props.

![Emax Hawk 5 with Gemfan Hurricane props](emax-hawk-5-unboxing-review-and-setup-41.jpg)

**Gemfan Hurricane props and late night Finnish sunny summer day (sun very low on the horizon)**

<div style="text-align: center">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/jeIA1IsE5U8?rel=0" frameBorder="0" allowFullScreen title="Emax Hawk 5 with Gemfan Hurricane props on a very sunny day, late night, sun low on the horizon"></iframe>
</div>

The bottom line? The [Hawk 5][1] still flies nice, but with the same rates, I actually had to noticeably deflect the sticks further to perform the same maneuvers. I feel like the power consumption was lower (haven't measured, so this is just a gut feel, take it for what it is), but also the Hawk lost some of its punch. I will continue testing and experimenting with different props for fun, but **I am convinced that the [Avan Flow][6]'s are probably the best match for this particular craft**.

![Emax Hawk 5 with props on, picture 2](emax-hawk-5-unboxing-review-and-setup-40.jpg)

### 🔝 <span id="upgrades" class="offset-top-nav">Upgrades</span>

There are [plenty of Emax Hawk 5 projects on Thingiverse][8] you can use to print different mounts and parts. So far I have printed this wall mounting bracket...

![Emax Hawk 5 3D printed wall mount](emax-hawk-5-unboxing-review-and-setup-34.jpg)

...and this pagoda mount, if you consider upgrading to Pagoda antennas.

![Emax Hawk 5 Pagoda antenna mount](emax-hawk-5-unboxing-review-and-setup-33.jpg)

The thing that is very easy to do, but definitely comes to mind first is - **add some electric tape to the shrink tubes on the arms** that hold the motor wires down. That's fairly easy to do, but don't underestimate it - the shrink tubing does tend to slide out and the motor wires are really right there in the way of the props. You don't want to be that guy or girl, definitely fix them in place.

I'm currently expecting a [RunCam 5][13] to arrive and definitely planning on testing how the Hawk behaves carrying a camera.

I'm also considering modding the Emax Hawk with a camera that records HD footage, maybe a [RunCam Split Mini 2][14] or a [Caddx Turtle V2][15]. And will make sure to post an update if I do. If you are interested, [subscribe to the newsletter][16] and get notified.

### 🔝 <span id="conclusion" class="offset-top-nav">Conclusion</span>

Want my verdict and to move on with your life? Should you buy the [Emax Hawk 5][1] if you are in the market for a 5-inch quad? **Yes, absolutely! I am very happy to recommend this quad to anyone - beginner or experienced pilot!**

First of all, this drone is really great value for money. It hits a sweet spot around the \$250 mark. It's not cheap, coming with parts you will change in a month, but it is also not way too expensive. It flies amazing and the tune is top notch.

Can you build something similar for less? Possibly. If you are not experienced with building quads and soldering, it might end up costing you more if you factor in all the expenses and issues. That literally happened to me on my first build. In my case, I'm fine with it cause I wanted to learn how to build quads and I valued the experience. But was it hard? Yeah. Did it take a hell of a lot of time? Yep. Did I wish I had a quad to fly at certain points last summer, due to issues? Yea.

I guess my point is that sometimes it makes sense to buy a BNF or a prebuilt quad. If you decide to do that, going for the Emax Hawk 5 is an amazing option.
In which case I'd like to remind you that you could support the blog by clicking the purchase link below, which I would really appreciate. Happy flying!

#### Who is this for? Grab this if you care about:

- Ease of getting started
- Beginner or experienced pilot
- Having a near perfect tune out of the box
- Good value for money and good parts

#### Where to get it?

###### Emax Hawk 5 - [Banggood][1]

[0]: Linkslist
[1]: https://bit.ly/emax-hawk-5
[2]: https://amzn.to/2Wq1KJ6
[3]: https://bit.ly/battery-straps
[4]: https://bit.ly/cnhl-1300
[5]: https://bit.ly/4s-battery-graphene
[6]: https://bit.ly/avan-flow
[7]: https://bit.ly/xm-plus
[8]: https://www.thingiverse.com/search?q=emax+hawk+5&dwh=25d1516d79598b
[9]: https://bit.ly/taranis-xlite
[10]: /fpv/make-a-smoke-stopper/
[11]: /fpv/build-a-quad/
[12]: https://bit.ly/gemfan-hurricane
[13]: https://bit.ly/runcam--5
[14]: https://bit.ly/runcam-split-mini-2
[15]: https://bit.ly/caddx-turtle-v2
[16]: https://tinyletter.com/jumpalottahigh
