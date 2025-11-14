---
title: Troubleshooting
description: Common troubleshooting steps for Dune Weaver issues
tableType: General
date: 2025-01-28
---

# Troubleshooting

## Common Troubleshooting Steps

The wiki provides systematic guidance for addressing sand table issues:

### 1. Power Verification
"Use a multimeter to check the power supply" and confirm voltage levels match component specifications (ESP32, Arduino, motor drivers, etc.).

### 2. Wiring Inspection
Verify all connections follow the circuit diagram precisely, checking for loose or misplaced wires throughout the assembly.

### 3. Microcontroller Firmware
Confirm successful firmware installation on the microcontroller and consider re-uploading if the device malfunctions.

### 4. Dupont Wire Assessment
"Dupont wires are known to be unreliable" — replace suspicious connections and test wire security in ports by gentle tugging.

### 5. Motor Direction Correction
- **CNC Shield (Arduino UNO)**: Reverse the motor cable at the shield
- **ESP32**: Swap IN1 with IN3 (or IN2 with IN4) in stepper motor wiring to reverse rotation direction

### 6. Gear Maintenance
Apply lubricant to stuck or rough-moving gears and remove any dirt or debris obstructing the mechanism.

The guide concludes that following these steps should resolve most issues, with a Discord server link provided for additional support at [https://discord.gg/YZ8PTezVHt](https://discord.gg/YZ8PTezVHt).
