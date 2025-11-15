---
title: Setting VREF
description: Adjust motor current on TMC2209 stepper drivers for optimal performance
tableType: General
date: 2025-01-28
---

# Setting VREF

## Set Vref for TMC2209 — Dune Weaver Table

A quick, safe procedure to set motor current on DW tables.

### TL;DR

- **Set Vref to 0.60 V.**
- Only raise if confirmed **step loss** after mechanical checks; **max 0.70 V**.
- **Clip the red lead** to the **VREF** pad; **hold the black probe on GND**. Adjust with a ceramic/plastic screwdriver while measuring.

### What is Vref (in one line)?

"Vref is the driver's reference voltage that sets motor current: higher = more torque & heat; lower = cooler & quieter."

### Safety

- **Power down** before attaching/removing the red clip.
- **Use a small insulated alligator/mini‑grabber on the _red_ lead to the VREF pad**—make sure it touches **only that pad**.
- **Hold** the **black** probe on a solid **GND** point (PSU − or controller GND); keep a steady hand.
- Keep axes **idle** while measuring/adjusting.

### Where to Probe

- **Red lead (clip):** vref adjustment screw. Use an alligator clip to clip to a screwdriver so you can measure and adjust simultaneously
- **Black probe (hand‑held):** any **GND** pad or PSU −.

![VREF adjustment diagram](/images/docs/vref/vref-adjustment.png)

### Procedure

1. **Power off.** Clip **red** lead to **VREF**. Position the **black** probe on **GND**.
2. **Power on.** Keep the black probe on GND to read Vref.
3. Using a metal screwdriver, **adjust while measuring** (tiny turns: **CW = up**, **CCW = down**) to **0.60 V**.
4. **Power off.** Remove the **red** clip; run a slow test pattern.

### Tuning

- If you still get stalls/step loss: **0.65 V → test → 0.70 V (hard max)**.
- Too low: skips, chattering, weak hold.
- Too high: hot drivers/motors, harsh sound, thermal shutdown.

### Before Raising Vref, Check

- Smooth mechanics (no binding); rails/bearings aligned.
- Belt tension, pulley grub‑screws on shaft flat.
- PSU voltage stable; connectors seated.

For further assistance, join their Discord community at [https://discord.gg/YZ8PTezVHt](https://discord.gg/YZ8PTezVHt).
