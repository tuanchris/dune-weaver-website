---
title: Wiring
description: Hardware connection instructions for Dune Weaver
tableType: General
date: 2025-01-28
---

# Wiring

## Pi/Computer Connection

Your backend code will be deployed in a Raspberry Pi or on your computer. You would then connect the ESP32, Arduino Uno, or DLC32 to the Pi or Computer via USB.

## Motor Driver Configurations

### Common Wiring Issue

"I've heard reports that sometimes, the motor wires may be different. For example, instead of red, blue, green, black, the wires may go red, green, blue, black. If you face this problem, you need to swap the two middle cables around."

### CNC Shield + TMC2209

This is one of the most common configurations. The TMC2209 stepper drivers provide:
- Silent operation (StealthChop mode)
- Higher current capacity
- Better heat dissipation

![CNC Shield + TMC2209 wiring diagram](/images/docs/wiring/cnc-shield-tmc2209.png)

**Important**: Make sure the motor wire colors match the expected sequence. If your motors don't work correctly, try swapping the middle two wires.

![Motor wire swap configuration](/images/docs/wiring/tmc2209-wire-swap.png)

### CNC Shield + DRV8825

An alternative stepper driver configuration. The DRV8825 provides:
- Reliable performance
- Good torque
- Simpler configuration

![CNC Shield + DRV8825 wiring diagram](/images/docs/wiring/cnc-shield-drv8825.png)

### ESP32 Direct Connection

For builds using an ESP32 microcontroller directly without a CNC shield. This configuration is common for the Mini version with unipolar stepper motors.

![ESP32 wiring diagram](/images/docs/wiring/esp32-wiring.png)

## Troubleshooting Wiring Issues

1. **Motors not moving**: Check power supply voltage and current
2. **Motors moving in wrong direction**: See motor direction correction in [Troubleshooting](/docs/troubleshooting)
3. **Intermittent connection**: Replace Dupont wires with more reliable connections
4. **No response**: Verify USB connection and check firmware installation

## Resources

For additional assistance regarding hardware setup and troubleshooting, join our Discord community at [https://discord.gg/YZ8PTezVHt](https://discord.gg/YZ8PTezVHt).
