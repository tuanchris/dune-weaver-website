---
title: WLED Integration
description: Integrate WLED LED controller with your Dune Weaver
tableType: General
date: 2025-01-28
---

# WLED Integration

## Overview

Dune-Weaver integrates with WLED, an open-source firmware for ESP8266/ESP32-based LED controllers, enabling automation of lighting effects. A separate ESP32 is required to control addressable LEDs.

![WLED Integration Overview](/images/docs/wled-integration/01-overview.jpeg)

With WLED integration configured, Dune Weaver provides:
- Loading effect during boot-up
- Green blinking signal indicating successful startup
- Customizable idle lighting effect (using WLED playlist or preset)
- Customizable playing effect (using WLED playlist or preset)

## Installing WLED

1. Connect ESP32 board to computer via USB
2. Open [WLED Web Installer](https://install.wled.me/) in Google Chrome or Edge
3. Click "Install", select your ESP32 device, and follow instructions

## Setting up WLED Wi-Fi

1. Use WiFi device to connect to access point WLED-AP with password `wled1234`
2. Click Config (gear) icon and select "Wifi Setup"
3. Enter WiFi network name and password
4. Optionally change mDNS address for WLED module
5. Click "Save & Connect"
6. Reconnect device to home WiFi network
7. Check router's device list for WLED IP address (or use WLED Native app)
8. Configure static IP via router for consistent connectivity after reboots

## Wiring

- ESP32 can be powered via USB or 3.3V/5V pins
- For addressable LEDs, verify LED power input requirements (12V or 5V)
- Typically requires separate power supply for LEDs
- Share a ground pin between ESP32 and LED system

## Setting up WLED with Dune Weaver

1. Navigate to settings and configure WLED IP address

![WLED IP Configuration](/images/docs/wled-integration/02-ip-config.png)
2. In WLED UI, create two playlists:
   - **ID 1**: Idle effect
   - **ID 2**: Playing effect

![Playlist Setup](/images/docs/wled-integration/03-playlist-setup.png)
3. Follow ID assignment strictly for code functionality
4. Example idle setup: auto turn-off after 2 minutes

![Idle Playlist Configuration](/images/docs/wled-integration/04-idle-playlist.png)
5. Configure playing effect playlist as desired

![Playing Effect Configuration](/images/docs/wled-integration/05-playing-effect.png)

6. Customize playlists to preference (or use presets for simpler control)

For additional support, join the [Discord community](https://discord.gg/YZ8PTezVHt).
