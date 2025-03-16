---
outline: [1, deep]
order: 1
title: References
description: Here I will keep note of all referenced material and any honourable mentions.

---

<PageTitle />

# Third Party Code:

## Pico USB KBD Mouse

To implement the keyboard, this following project was used to create an HID-over-UART implementation, which is loaded onto the WaveShare RP2040 Keyboard Host.

[pico-usb-kbd-mouse](https://github.com/a-h/pico_usb_kbd_mouse)


# Honourable Mentions

Where do you even start on a project that I have been researching for about 2 years. This section is dedicated to some of the fantastic projects I have found while researching this field. Undoubtedly, these projects will have influenced my design.

## Ben Eater

He gets his own title! and rightly so. If you’re reading this page, Ben does not need an introduction to you. While I am not going to attempt any of the things he has done in this project, he is one of the reasons I find 8-bit/retro so fascinating, why I fell in love with the MOS6502 beyond the nostalgia of the C64.

[Ben Eater](https://eater.net/)

## C64

The C64 has a place in my heart and probably one of the driving forces behind how I want the system to run, I don’t want a desktop, or a mouse (I have computer for that). I want to boot straight into an interpreter. However, my extensive use of the Pico 8 system of late, is also going to heavily sway what the user experience looks like.

## Pico-8

The Pico-8 fantasy computer is probably the epitome of everything I love about computer science. I love what it sets out to achieve, how it achieves it and the community that has been created around it. It is without a doubt the steganographic approach to storage, and the use of that same approach to implement cartridge limitations, is hands down the best thing I’ve discovered on this journey. I want to follow in the Pico’s footsteps somewhat, and provide a development experience close to that, than the C64. It still gives you that instant boot → start typing, but you get more hands on with the terminal and it feels more like an OS than an application.

[Pico-8](https://www.lexaloffle.com/pico-8.php)

## Slime OS

This is a funny one. I found SlimeOS while researching my handheld computer idea and immediately dismissed it as being ‘not what I want’. “I don’t want the Pico in my handheld, I want a handheld with the power of my desktop, but with the form factor akin to a GameBoy”. I didn’t pay attention to the PicoVision, had not even considered MicroPython as an option. I stumbled on the PicoVision later on YouTube probably recommended because I had watched SlimeOS video (https://www.youtube.com/watch?v=4lidGHZpKBM&pp=ygUTcGltb3JvbmkgcGljb3Zpc2lvbg%3D%3D), it was then I realised the potential this could have for my retro home computer and revisited the SlimeOS video. Abe’s vision, is very different to my vision for this project, but looking through their channel, we are clearly aligned on a lot of things. So I want to tip my hat here, as the reason I was even shown the SlimeOS video (other than ‘the algorithm’) is because it turns out I was already subscribed to Abe’s channel from my interest in their other work.

[Slime OS GitHub](https://github.com/abeisgoat/slime_os/)
[Slime OS](https://www.youtube.com/watch?v=4lidGHZpKBM&pp=ygUTcGltb3JvbmkgcGljb3Zpc2lvbg%3D%3D)


# Bibliographic Collections

This is just a collection of things I’ve watched/read and held onto for inspiration. Essentially this is just a data dump from my browser’s ‘Collections’ tab. 

## Computer

This is a collection I would say is closest to my current thinking. Its what drove me to explore the Raspberry Pi Pico as a base

Lynx Tuts: Mask 11 - 15
https://www.bing.com/images/search?q=&view=detailv2&id=10BAA71B32A4820F73BD220CC9F74E62E0F34E53&ccid=g1pcSBNQ&iss=fav&FORM=SVIM01&idpview=singleimage&mediaurl=https%253a%252f%252f4.bp.blogspot.com%252f-W1IsXC_B4Uw%252fW0wlAHDW6LI%252fAAAAAAAAR0s%252fOTORTj8Knpo4njplnVTSe5UsuFS4OlZBwCLcBGAs%252fs320%252fLynx-Mask12.jpg&expw=320&exph=320&thid=OIP.g1pcSBNQumtayAR7boCZvAAAAA[lynxtuts.blogspot.com](http://lynxtuts.blogspot.com/)

Build Your Own Computer - Emulate RAM/ROM For A 6502 Using a Raspberry Pi Pico
https://www.youtube.com/watch?v=elrf1nM5nco[www.youtube.com](http://www.youtube.com/)

Running Apple 1 software on a breadboard computer (Wozmon)
https://www.youtube.com/watch?v=HlLCtjJzHVI[www.youtube.com](http://www.youtube.com/)

So how does a PS/2 keyboard interface work?
https://www.youtube.com/watch?v=7aXbh9VUB3U[www.youtube.com](http://www.youtube.com/)

Set up the SD Card | RP2040 RunCPM Emulator with USB Keyboard & HDMI screen | Adafruit Learning System
https://learn.adafruit.com/rp2040-runcpm-emulator-with-usb-keyboard-hdmi-screen/set-up-the-sd-card[learn.adafruit.com](http://learn.adafruit.com/)

Create your own Version of Microsoft BASIC for 6502 – [pagetable.com](http://pagetable.com/)https://www.pagetable.com/?p=46[www.pagetable.com](http://www.pagetable.com/)

Pico C/C++ Development Using Windows
https://learn.pimoroni.com/article/pico-development-using-wsl[learn.pimoroni.com](http://learn.pimoroni.com/)

How to Set Up Raspberry Pi Pico C/C++ Toolchain on Windows with VS Code - Shawn Hymel
https://shawnhymel.com/2096/how-to-set-up-raspberry-pi-pico-c-c-toolchain-on-windows-with-vs-code/[shawnhymel.com](http://shawnhymel.com/)

RP2040-PiZero - Waveshare Wiki
https://www.waveshare.com/wiki/RP2040-PiZero#Pico-W_Series_Tutorial_.28To_be_continued....29[www.waveshare.com](http://www.waveshare.com/)

GitHub - rp-rs/rp-hal: A Rust Embedded-HAL for the rp series microcontrollers
https://github.com/rp-rs/rp-hal[github.com](http://github.com/)

Building a BASIC Interpreter, '80s style
https://able.bio/kerrishotts/building-a-basic-interpreter-80s-style--79a9d703
able.bio

VGA Library For The Raspberry Pi Pico | Hackaday
https://hackaday.com/2021/06/11/vga-library-for-the-raspberry-pi-pico/[hackaday.com](http://hackaday.com/)

Building a Retro-Styled Homebrew Computer & Operating System from micro-controllers
https://www.youtube.com/watch?v=exvY3OEy6o0&t=201s[www.youtube.com](http://www.youtube.com/)

VGA
https://vanhunteradams.com/Pico/VGA/VGA.html[vanhunteradams.com](http://vanhunteradams.com/)

## Calisto P8

This is a collection of links around the idea of making a standalone physical implementation of the Pico-8

16MB 32MB 64MB 128MB 256MB 512MB 1GB 2GB SD Secure Digital Flash Memory Card NEW | eBay
[https://www.ebay.co.uk/itm/273144586517?hash=item3f98afa115:g:7MEAAOSwWWtaxoAo&amdata=enc%3AAQAHAAAAoP6FEAx2FBCvbPz%2F7ht8%2BtHCJS6hKWyO8CVnw7TzBkVzNn7D0g9RSBV%2FMQgGIZsbjiRpTBpLK3PKxBYasxLhxdMIiN9mW6eclajVuqV%2BLRGc3C%2B2Pa4STsnwU5NFCsIToiPU4TpnkaO6S9Ym3YGYWNKRWoUQf6AKGCR0aIcRPGBLWjQ1pR1cBP7B85MnIb%2F6MDB5shsVoivJiQnxHIEhJ20%3D|tkp%3ABk9SR66-obnXYQ](https://www.ebay.co.uk/itm/273144586517?hash=item3f98afa115:g:7MEAAOSwWWtaxoAo&amdata=enc%3AAQAHAAAAoP6FEAx2FBCvbPz%2F7ht8%2BtHCJS6hKWyO8CVnw7TzBkVzNn7D0g9RSBV%2FMQgGIZsbjiRpTBpLK3PKxBYasxLhxdMIiN9mW6eclajVuqV%2BLRGc3C%2B2Pa4STsnwU5NFCsIToiPU4TpnkaO6S9Ym3YGYWNKRWoUQf6AKGCR0aIcRPGBLWjQ1pR1cBP7B85MnIb%2F6MDB5shsVoivJiQnxHIEhJ20%3D%7Ctkp%3ABk9SR66-obnXYQ)[www.ebay.co.uk](http://www.ebay.co.uk/)

Callisto 2 - Fully Printable Retro Computer by LowBudgetTech - Thingiverse
https://www.thingiverse.com/thing:4846997[www.thingiverse.com](http://www.thingiverse.com/)

PICO-8 for Raspberry Pi starter guide — The MagPi magazine
https://magpi.raspberrypi.com/articles/pico-8-raspberry-pi-starter-guide[magpi.raspberrypi.com](http://magpi.raspberrypi.com/)

Dedicated pico 8 raspberry pi?
https://www.lexaloffle.com/bbs/?tid=29159[www.lexaloffle.com](http://www.lexaloffle.com/)

PICO-8 Manual
https://www.lexaloffle.com/dl/docs/pico-8_manual.html[www.lexaloffle.com](http://www.lexaloffle.com/)

127pcs Mechanical Keyboard Keycap Set XDA Height for MX Switches (Retro) UK | eBay
[https://www.ebay.co.uk/itm/285075569147?hash=item425fd3f9fb:g:ai4AAOSwOCFjmYn8&amdata=enc%3AAQAHAAAA4E71PtUvSwg%2FDWdcqVm%2BLmEk%2FWIxVQThv%2Bb7n4LkG4XHXC7tIlkvD7lRRgUpKsAv6gmRGeBqOBBBw%2BstkpC%2FcQCx1ezSr9Z8Iob5ByiWG2GDVwhmo200ZGCrzgEY1DUErs9H77ky9YYDGKfb3VumoDGo4xJhvcccOVOoD0EjZfkOhWSYxharsKjtgeyJDtLfjEuRw2ZleyJxwQ9zlmpGMHHvJBZVdF4Xn7FftgDuUmuAKHNcjrTKKIoFvisJ%2Fb9OT5L6So9wSNjGTuErTo24dBlgwT0dZNrZSGGVYHnPd9nL|tkp%3ABk9SR5KM_b3XYQ](https://www.ebay.co.uk/itm/285075569147?hash=item425fd3f9fb:g:ai4AAOSwOCFjmYn8&amdata=enc%3AAQAHAAAA4E71PtUvSwg%2FDWdcqVm%2BLmEk%2FWIxVQThv%2Bb7n4LkG4XHXC7tIlkvD7lRRgUpKsAv6gmRGeBqOBBBw%2BstkpC%2FcQCx1ezSr9Z8Iob5ByiWG2GDVwhmo200ZGCrzgEY1DUErs9H77ky9YYDGKfb3VumoDGo4xJhvcccOVOoD0EjZfkOhWSYxharsKjtgeyJDtLfjEuRw2ZleyJxwQ9zlmpGMHHvJBZVdF4Xn7FftgDuUmuAKHNcjrTKKIoFvisJ%2Fb9OT5L6So9wSNjGTuErTo24dBlgwT0dZNrZSGGVYHnPd9nL%7Ctkp%3ABk9SR5KM_b3XYQ)[www.ebay.co.uk](http://www.ebay.co.uk/)

Devkit keyboard layout
https://www.lexaloffle.com/bbs/?pid=64295[www.lexaloffle.com](http://www.lexaloffle.com/)

Raspberry Pi 4 mechanical keyboard upgrade - YouTube
https://www.youtube.com/watch?v=jM9uYymSemE[www.youtube.com](http://www.youtube.com/)

png file structure - Google Search
https://www.google.com/search?q=png+file+structure&oq=png+file+struction&aqs=edge.1.69i57j0i13i512l2j0i22i30j0i8i13i30l2j0i8i13i15i30j0i390l2.4944j0j1&sourceid=chrome&ie=UTF-8[www.google.com](http://www.google.com/)

PNG file chunk inspector
[https://www.nayuki.io/page/png-file-chunk-inspector#:~:text=A PNG file is composed,depend on the chunk type](https://www.nayuki.io/page/png-file-chunk-inspector#:~:text=A%20PNG%20file%20is%20composed,depend%20on%20the%20chunk%20type).
[www.nayuki.io](http://www.nayuki.io/)

unsteganize.ipynb - Colaboratory
https://colab.research.google.com/drive/19qDlHCcSF5CYVzEJEAbTmfD7tjyy3azj#scrollTo=x1vuziV2IBw1[colab.research.google.com](http://colab.research.google.com/)

binary - Interpret PNG pixel data - Stack Overflow
[https://stackoverflow.com/questions/26456447/interpret-png-pixel-data#:~:text=Looking at the PNG specification,(slightly clearer explanation here](https://stackoverflow.com/questions/26456447/interpret-png-pixel-data#:~:text=Looking%20at%20the%20PNG%20specification,(slightly%20clearer%20explanation%20here)).
[stackoverflow.com](http://stackoverflow.com/)

Splore via web browser? : pico8
https://www.reddit.com/r/pico8/comments/tpgb56/splore_via_web_browser/[www.reddit.com](http://www.reddit.com/)

Awesome PICO-8 | awesome-PICO-8
https://pico-8.github.io/awesome-PICO-8/[pico-8.github.io](http://pico-8.github.io/)

Why is splore paid?
https://www.lexaloffle.com/bbs/?tid=46094[www.lexaloffle.com](http://www.lexaloffle.com/)

## 8 Bit Computer

This is just a collection of things I’ve explored while looking at 8 bit computers on a microcontroller 

(8) Assembly via Arduino (part 1) - Introduction - YouTube
https://www.youtube.com/watch?v=j-qs-gJhxfs[www.youtube.com](http://www.youtube.com/)

How-To: C64 Arduino based Restore Key/Four Kernal Switcher/Hard Reset
https://www.youtube.com/watch?v=GPq5xnJRw2w[www.youtube.com](http://www.youtube.com/)

(8) Minimal Arduino Nano VGA 320x200 (using ONE IC) - YouTube
https://www.youtube.com/watch?v=-ZABNgYb6TQ[www.youtube.com](http://www.youtube.com/)

My homemade Arduino Nano computer running CP/M os | My fascinating and dangerous experiments
https://acdc.foxylab.com/node/76[acdc.foxylab.com](http://acdc.foxylab.com/)

Improve your Arduino programming skills - SRAM management
https://www.youtube.com/watch?v=iOJ52VIvqYM[www.youtube.com](http://www.youtube.com/)

Named Address Spaces - Using the GNU Compiler Collection (GCC)
https://gcc.gnu.org/onlinedocs/gcc-4.7.1/gcc/Named-Address-Spaces.html[gcc.gnu.org](http://gcc.gnu.org/)

Arduino composite video out using only 3 resistors | Blog My Wiki!
http://www.suppertime.co.uk/blogmywiki/2017/01/arduino-tvout/[www.suppertime.co.uk](http://www.suppertime.co.uk/)

TVout Colors - Using Arduino / Displays - Arduino Forum
https://forum.arduino.cc/t/tvout-colors/65357/49[forum.arduino.cc](http://forum.arduino.cc/)

Howtocolor.pdf
https://elinux.org/images/e/eb/Howtocolor.pdf[elinux.org](http://elinux.org/)

qix67/uVGA: uVGA is a 100% hardware VGA driver for teensy 3.6, 3.2 (& probably 3.5)
https://github.com/qix67/uVGA[github.com](http://github.com/)

Jean-MarcHarvengt/VGA_t4: VGA library for the Teensy4 and Teensy4.1
https://github.com/Jean-MarcHarvengt/VGA_t4[github.com](http://github.com/)

Produce 640x480 Color VGA Video from an Arduino - DQYDJ
https://dqydj.com/arduino-640x480-vga/[dqydj.com](http://dqydj.com/)

(19) Let's Build a FAST Serial Terminal with PS/2 and VGA - YouTube
https://www.youtube.com/watch?v=jR-SqXLgBNo[www.youtube.com](http://www.youtube.com/)

Writing an Interpreter From Scratch | Toptal
[https://www.toptal.com/scala/writing-an-interpreter#:~:text=To create an interpreter first,interprets it in some way](https://www.toptal.com/scala/writing-an-interpreter#:~:text=To%20create%20an%20interpreter%20first,interprets%20it%20in%20some%20way).
[www.toptal.com](http://www.toptal.com/)

ESP32 VGA Beginner Tutorial [Arduino Library ESP32Lib]
https://www.youtube.com/watch?v=qJ68fRff5_k[www.youtube.com](http://www.youtube.com/)

(2) Amethyst: 8-Bit Home Computer, Powered By An AVR Microcontroller - YouTube
https://www.youtube.com/watch?v=6GKgxBEGH1M[www.youtube.com](http://www.youtube.com/)

What Does It Take to Make a Kernel? | Linux Journal
https://www.linuxjournal.com/content/what-does-it-take-make-kernel-0[www.linuxjournal.com](http://www.linuxjournal.com/)

AVR Instruction Set Manual
http://ww1.microchip.com/downloads/en/devicedoc/atmel-0856-avr-instruction-set-manual.pdf[ww1.microchip.com](http://ww1.microchip.com/)

Arduino Basic PC With VGA Output : 5 Steps (with Pictures) - Instructables
https://www.instructables.com/Arduino-Basic-PC-With-VGA-Output/[www.instructables.com](http://www.instructables.com/)

Unit 0.1: The Road Ahead | Coursera
https://www.coursera.org/learn/build-a-computer/lecture/gd00Q/unit-0-1-the-road-ahead[www.coursera.org](http://www.coursera.org/)

Linux on an 8-bit micro? - [Dmitry.GR](http://dmitry.gr/)[https://dmitry.gr/?r=05.Projects&proj=07. Linux on 8bit](https://dmitry.gr/?r=05.Projects&proj=07.%20Linux%20on%208bit)[dmitry.gr](http://dmitry.gr/)

64k RAM « RC2014
https://rc2014.co.uk/modules/64k-ram/[rc2014.co.uk](http://rc2014.co.uk/)

C64 Basic ROM in 27C64 EPROM | ezContents blog
https://ezcontents.org/c64-basic-rom-27c64-eprom[ezcontents.org](http://ezcontents.org/)

Introduction to Atmel's 8-bit AVR Microcontrollers
https://www.youtube.com/watch?v=7UvSUf2frlI[www.youtube.com](http://www.youtube.com/)

DAN64, an AVR based 8-bit microcomputer - [usebox.net](http://usebox.net/)https://www.usebox.net/jjm/dan64/[www.usebox.net](http://www.usebox.net/)

Arduino Basic PC With VGA Output : 5 Steps (with Pictures) - Instructables
https://www.instructables.com/Arduino-Basic-PC-With-VGA-Output/[www.instructables.com](http://www.instructables.com/)

BASIC Programming On An Arduino | Hackaday
https://hackaday.com/2011/08/28/basic-programming-on-an-arduino/[hackaday.com](http://hackaday.com/)

512KB EEPROM for your ATmega328P - heliosoph
http://heliosoph.mit-links.info/512kb-eeprom-atmega328p/[heliosoph.mit-links.info](http://heliosoph.mit-links.info/)

ATmega Microcontroller Series - Comparison Table
https://www.futurlec.com/ICAtmel_ATMega_Comparison.shtml[www.futurlec.com](http://www.futurlec.com/)

ps2 mechanical keyboard | eBay
https://www.ebay.co.uk/sch/i.html?_from=R40&_trksid=p2499334.m570.l1311&_nkw=ps2+mechanical+keyboard&_sacat=0[www.ebay.co.uk](http://www.ebay.co.uk/)

cobalt-3/Cobalt3_v3.ino at master · leonardo-code/cobalt-3
https://github.com/leonardo-code/cobalt-3/blob/master/sketch/Cobalt3_v3.ino[github.com](http://github.com/)

Arduino/ATmega328 C64 Emulator - Community / Exhibition / Gallery - Arduino Forum
https://forum.arduino.cc/t/arduino-atmega328-c64-emulator/191649[forum.arduino.cc](http://forum.arduino.cc/)

Cobalt 3, a pocket computer DIY | [Hackaday.io](http://hackaday.io/)https://hackaday.io/project/172046-cobalt-3-a-pocket-computer-diy[hackaday.io](http://hackaday.io/)

ESP32 Basic PC With VGA Output : 7 Steps - Instructables
https://www.instructables.com/ESP32-Basic-PC-With-VGA-Output/[www.instructables.com](http://www.instructables.com/)

AVR Instruction Set Manual
http://atmel-studio-doc.s3-website-us-east-1.amazonaws.com/webhelp/GUID-0B644D8F-67E7-49E6-82C9-1B2B9ABE6A0D-en-US-1/index.html?GUID-B9C70743-D5EF-4162-8193-D33E75878C80[atmel-studio-doc.s3-website-us-east-1.amazonaws.com](http://atmel-studio-doc.s3-website-us-east-1.amazonaws.com/)

FabGL: FabGL Library
http://www.fabglib.org/index.html[www.fabglib.org](http://www.fabglib.org/)

Driving a VGA Display?! Getting started with an FPGA! (TinyFPGA)
https://www.youtube.com/watch?v=ZNunxg7o8l0[www.youtube.com](http://www.youtube.com/)

Adding external memory to Atmega128 - Do It Easy With ScienceProg
https://scienceprog.com/adding-external-memory-to-atmega128/[scienceprog.com](http://scienceprog.com/)

robinhedwards/ArduinoBASIC: A BASIC interpreter & environment for the Arduino
https://github.com/robinhedwards/ArduinoBASIC[github.com](http://github.com/)

Alliance Memory SRAM, AS6C4008-55SIN- 4Mbit | RS Components
https://uk.rs-online.com/web/p/sram/1700738[uk.rs-online.com](http://uk.rs-online.com/)

24LC256 Serial I2C Eeprom 256K
https://www.hobbytronics.co.uk/eeprom-24lc256[www.hobbytronics.co.uk](http://www.hobbytronics.co.uk/)

Alliance Memory SRAM, AS6C1008-55PCN- 1Mbit | RS Components
https://uk.rs-online.com/web/p/sram/7444542[uk.rs-online.com](http://uk.rs-online.com/)

23LC1024 Serial SPI SRAM 1Mbit
https://www.hobbytronics.co.uk/23lc1024[www.hobbytronics.co.uk](http://www.hobbytronics.co.uk/)

## Blackberry PI

This was in my  explorations into handheld (I want to make a hand held computer with the power of Raspberry 5) - basically micro console, but more expansible. 

PocketPi Is Exactly What It Sounds Like | Hackaday
https://hackaday.com/2019/05/16/pocketpi-is-exactly-what-it-sounds-like/[hackaday.com](http://hackaday.com/)

Upgrading a Cheap USB-C Connector #science #engineering #usb #electronics #usbc  #upgrade
https://www.youtube.com/shorts/89B7LcG4uUA[www.youtube.com](http://www.youtube.com/)

Rii K06 Mini Bluetooth Keyboard,2.4GHz Wireless Keyboard with IR Remote, Mini Keyboard with Touchpad Compatible with Android TV Box， Mac, Laptop, Windows, Tablet : [Amazon.co.uk](http://amazon.co.uk/): Computers & Accessories
£20.39
4.2/5★
https://www.amazon.co.uk/Rii-Bluetooth-Keyboard-Wireless-Compatible/dp/B0C98KM4CL/ref=asc_df_B0C98KM4CL?tag=bingshoppinga-21&linkCode=df0&hvadid=80608133409703&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=&hvtargid=pla-4584207598304593&psc=1[www.amazon.co.uk](http://www.amazon.co.uk/)

Card Edge Connector Black Socket Straight Connection 40 Pin 2.54mm Pitch, 2 Pcs | eBay
£4.76
[https://www.ebay.co.uk/itm/185692074661?itmmeta=01HSHA93NKW47VG8CF0EXMM6CM&hash=item2b3c1c32a5:g:8rMAAOSw57Zj6ZiY&itmprp=enc%3AAQAJAAAA4G3dgurscm9UvdyS1KbwFMBKGVkEzjUzARRFbilK5YybAEysVWgeWLRvikZjzsJFSwET4OzK3HwFDpRA1npKpTM%2FIAVbelAy3zvPXS8u7ukeGNMweajLHSIzxHhum%2BkJFJj03agz8R85kLx8eOgdBMACMDH2%2BrAmrCZB79xsBvcKastT3PD3%2BubBVKGc16xba8SmCCEQR2KplugyTzK0Yo2aQyvelDzvu5ZniNYPNg4OlHoUdByKyISWS050UyPqXwzRof%2BOkJrlCqyjFOhuO15vJaJnxoWV7nBDOsr9KuXi|tkp%3ABFBMirukqsxj](https://www.ebay.co.uk/itm/185692074661?itmmeta=01HSHA93NKW47VG8CF0EXMM6CM&hash=item2b3c1c32a5:g:8rMAAOSw57Zj6ZiY&itmprp=enc%3AAQAJAAAA4G3dgurscm9UvdyS1KbwFMBKGVkEzjUzARRFbilK5YybAEysVWgeWLRvikZjzsJFSwET4OzK3HwFDpRA1npKpTM%2FIAVbelAy3zvPXS8u7ukeGNMweajLHSIzxHhum%2BkJFJj03agz8R85kLx8eOgdBMACMDH2%2BrAmrCZB79xsBvcKastT3PD3%2BubBVKGc16xba8SmCCEQR2KplugyTzK0Yo2aQyvelDzvu5ZniNYPNg4OlHoUdByKyISWS050UyPqXwzRof%2BOkJrlCqyjFOhuO15vJaJnxoWV7nBDOsr9KuXi%7Ctkp%3ABFBMirukqsxj)[www.ebay.co.uk](http://www.ebay.co.uk/)

QIANRENON Dual USB 3.0 Panel Mount 90° Angle Adapter 5Gbps USB3.0 2 Female to 2 Female Right Angle Connector Mount Socket Dual USB3.0 Data Transfer and Charging, Extended Extension 2 USB3.0 Port: [Amazon.co.uk](http://amazon.co.uk/): Computers & Accessories
£14.39
5/5★
https://www.amazon.co.uk/QIANRENON-Connector-Transfer-Charging-Extension/dp/B0C81HCMWH/ref=sr_1_28?crid=1U5VCE6PSWMQQ&dib=eyJ2IjoiMSJ9.iMqoSCp9oKNha9BQD2FbbWN_fOl3L-_EoTjlmd2P00kvdfocSvS5xhenfFYSW8XoqoeoR2TjAEmxgKUCeDSEcsjbcVrk0MdAyCbLl7JxYJXeGHPMfu_ndDBlM3xBvyiRLiMlU4NnkK5xztPM-_H1Pj8E86DujXxb4i1uYWC4A-0zlX9vYdj7BTMoMu9AemOIsRrt3xJ7PvVREmYK5QtegBfReDFreutMU_O5-K3Qbr5wKGOJOOGSCP6w7iaywK_t1WjHTxdxmkuLwWD7lqmIpHT4BdBlB9mj-MPHav_E5nY.Qk7q1fVqlY7M8b_m76btzFMeIHVuNgSNBw-d7oSzw4w&dib_tag=se&keywords=usb+panel+mount&qid=1710978125&s=computers&sprefix=usb+panel+mount%2Ccomputers%2C68&sr=1-28[www.amazon.co.uk](http://www.amazon.co.uk/)

Nooelec RTL-SDR v5 SDR - NESDR SMArt HF/VHF/UHF (100kHz-1.75GHz) Software Defined Radio. Premium RTLSDR w/ 0.5PPM TCXO, SMA Input & Aluminum Enclosure. RTL2832U & R820T2 (R860)-Based Radio : [Amazon.co.uk](http://amazon.co.uk/): Computers & Accessories
£31.95
4.3/5★
https://www.amazon.co.uk/Nooelec-NESDR-SMArt-SDR-R820T2-Based/dp/B01HA642SW/ref=sr_1_2_sspa?crid=1Y3LL7DWEO9NC&dib=eyJ2IjoiMSJ9.MSCWjJKLmC2Ha3XONAVKIb9u7E4f8YlK3tlxxcGSGzgtB4eeVj2F4GcNV6AoNclOcp9PCDP93_DOgzULL99JjsKZPFCwbU5Dqz2mw8eikOZAvCpDzBnBPfOZ41IZjM_Jn2aWpKk9RhtK0IMg07E-MJ1lhvzF-_qWRjv1P6VTokYYZUVNCy7X5mm2C58uGQNyMwvpeOIYDxQerjBJvgMSRVkKRiqtZEB-YAJ666IRxEPdLWAU_4mA2qUgv2HulqBQrsongA-3f6HQCHspMCrESJbm6uuC3MtfLYg0RbP67hs.c3f6Qljc8zAsumNjjXuxypJzQHOLfzhvB2lfQbg9fPI&dib_tag=se&keywords=mini+sdr&qid=1710978355&s=computers&sprefix=mini+sdr+%2Ccomputers%2C73&sr=1-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1[www.amazon.co.uk](http://www.amazon.co.uk/)

ELECROW For Raspberry Pi Screen, 7 Inch Touchscreen Monitor 1024X600 IPS LCD Small Monitor Compatible with Raspberry Pi 4, Raspberry Pi 3, Laptop and Other Devices that Out Put HD Signals : [Amazon.co.uk](http://amazon.co.uk/): Computers & Accessories
£39.99
4.5/5★
https://www.amazon.co.uk/Elecrow-Monitor-Display-1024X600-Raspberry/dp/B076J8ZWFF/?_encoding=UTF8&pd_rd_w=06hj3&content-id=amzn1.sym.d39eaba8-9dea-4104-a282-4e6a956175c4%3Aamzn1.symc.acc592a4-4352-4855-9385-357337847763&pf_rd_p=d39eaba8-9dea-4104-a282-4e6a956175c4&pf_rd_r=6HVWQ4F2Z98NZHXN4M8C&pd_rd_wg=PgAdP&pd_rd_r=3f3124f2-e676-40a8-bd22-11cd3cb00ec9&ref_=pd_gw_ci_mcx_mr_hp_d[www.amazon.co.uk](http://www.amazon.co.uk/)

F5OEO/rpitx: RF transmitter for Raspberry Pi
https://github.com/F5OEO/rpitx[github.com](http://github.com/)

Rii New Dual Mode Wireless Multimedia Keyboard with Touchpad Mouse I4 Bluetooth 4.0 with 2.4G Wireless Mini Keyboard with Scroll Button LED Backlit Rechargeable Battery : [Amazon.co.uk](http://amazon.co.uk/): Computers & Accessories
£18.99
4.5/5★
https://www.amazon.co.uk/Wireless-Multimedia-Rii-Bluetooth-Rechargeable/dp/B07RNCJ39B/ref=sr_1_20?crid=1GJ8UB4SNR4HQ&keywords=mini+keyboard&qid=1706053446&sprefix=mini+keyboard%2Caps%2C79&sr=8-20[www.amazon.co.uk](http://www.amazon.co.uk/)

Convert a BlackBerry QWERTY Keyboard to an I2C Device
https://www.hackster.io/news/convert-a-blackberry-qwerty-keyboard-to-an-i2c-device-8c059b59ab70[www.hackster.io](http://www.hackster.io/)

Blackberry Pi — The MagPi magazine
https://magpi.raspberrypi.com/articles/blackberry-pi[magpi.raspberrypi.com](http://magpi.raspberrypi.com/)