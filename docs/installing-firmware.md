---
title: Installing Microcontroller Firmware
description: Install FluidNC or GRBL firmware on your Dune Weaver controller
tableType: General
date: 2025-01-28
---

# Installing Microcontroller Firmware

## Overview
From v2.0 onward, Dune Weaver transitioned from custom firmware to FluidNC.

## FluidNC Installation (DW Mini, DW Pro, DW with DLC32)

**Installation Steps:**
1. Navigate to https://installer.fluidnc.com using Chrome
2. Select "Connect" and choose your Dune Weaver's serial port
3. Follow on-screen instructions (may require pressing/holding boot button)

**Version Requirements:**
- **DW Mini**: Use v3.8.3 (supports unipolar motors removed in later versions)
- **Mini Pro with 28BYJ-48 motors**: Use v3.8.3
- **Other configurations**: Can use latest version
- **DLC32 users**: Ensure switches 1, 2, 3 are OFF for both X and Y axes

**Wireless Options:**
- Bluetooth: Works immediately via serial connection
- WiFi: Implemented but not optimized; disabled by default

**Configuration Upload:**
After firmware installation, upload the corresponding config file from the `firmware` folder via File browser, then restart the board.

**Motor Direction Verification:**
- Command `$J=G91 G21 Y5 F100.0` should move ball outward
- Command `$J=G91 G21 X5 F100.0` should move ball clockwise

If incorrect, reverse motor directions using pin swaps (Mini) or config toggle (DLC32).

## GRBL Installation (Arduino with CNC Shield)

**Setup Process:**
1. Install GRBL following [these instructions](https://www.instructables.com/How-to-Installuse-GRBL-With-Your-Cnc-Machine/)
2. Manually copy grbl folder to Arduino libraries if needed

**Configuration Settings:**
Input via serial monitor:
```
$3=2
$22=0
$100=320
$101=287
$110=900
$111=3000
$120=30
$121=30
$131=10
```

**Motor Direction Verification:**
Same commands as FluidNC. Reverse directions by swapping motor cables at shield if needed.

## Sensorless Homing
Complex implementation with unreliable results. Contact the Discord community for detailed guidance.

**Support:** Join the community Discord [here](https://discord.gg/YZ8PTezVHt)
