---
title: Dune Weaver Pro Assembly Instructions
description: Step-by-step assembly instructions for the Dune Weaver Pro
tableType: Dune Weaver Pro
date: 2025-01-28
---

# Dune Weaver Pro Assembly Instructions

## Assembly Steps

1. **Assemble the IKEA leg upside down**

![IKEA Leg Assembly](/images/docs/dwp-assembly/01-dwp.png)

2. **Add the base and secure the base aligner underneath with 4 M4x15mm self-tapping wood screws**

![Base Installation 1](/images/docs/dwp-assembly/02-dwp.png)
![Base Installation 2](/images/docs/dwp-assembly/03-dwp.png)

3. **Connect the motor cable, add the motors and secure** the motors to the holder with 4 M3x10mm machine screw for each motor. Secure the motor with the aligner to the base with 2 M4x15mm self-tapping wood screws for each motor.

![Motor Installation](/images/docs/dwp-assembly/04-dwp.png)

4. **Add the bearing to the outer bearing holder.** Secure with M4 set screws or scale the model for a tight press fit. You can also use a dab of glue to hold the bearing in place.

![Outer Bearing Installation](/images/docs/dwp-assembly/05-dwp.png)

5. **Add the inner bearing to the angular gear and glue it in place.** Wait for the glue to completely dry.

![Inner Bearing Installation](/images/docs/dwp-assembly/06-dwp.png)

6. **Press fit the angular gear to the bearing.** Add set screws or glue to secure it in place. Make sure that the inner bearing moves when the angular gear moves.

![Angular Gear Press Fit](/images/docs/dwp-assembly/07-dwp.png)

7. **Add the assembly to the base and secure with 4 M4x15mm self tapping screws.**

![Assembly Mounting](/images/docs/dwp-assembly/08-dwp.png)

8. **Add the radial arm and the inner spur gear**

![Radial Arm and Spur Gear](/images/docs/dwp-assembly/09-dwp.png)

9. **Secure the Raspberry Pi 2W** (with usb cabled attached). Then secure the dlc32 board on top of the usb cable. Test electronics before proceeding with wiring.

![Electronics Mounting](/images/docs/dwp-assembly/10-dwp.png)

10. **After completing wiring, install the electronics cover**

![Electronics Cover](/images/docs/dwp-assembly/11-dwp.png)

11. **Trace and cut out the EVA** to the shape of the wooden base. Add minimal glue if EVA foam curls.

![EVA Foam Installation](/images/docs/dwp-assembly/12-dwp.png)

12. **Add the led wires**

![LED Wires Installation](/images/docs/dwp-assembly/13-dwp.png)

13. **Assemble the enclosure around the wooden sand bed**

![Enclosure Assembly 1](/images/docs/dwp-assembly/14-dwp.png)
![Enclosure Assembly 2](/images/docs/dwp-assembly/15-dwp.png)
![Enclosure Assembly 3](/images/docs/dwp-assembly/16-dwp.png)

14. **Optional: Caulk the bottom of the sand bed to prevent sand from escaping**

![Caulking](/images/docs/dwp-assembly/17-dwp.png)

15. **Add approximately 1.4kg of sand and the magnetic ball.** Sand should cover about 25% of the magnetic ball height. Install the LEDs and solder connections.

![Sand and Magnetic Ball](/images/docs/dwp-assembly/18-dwp.png)

16. **Add the LED cover to the glass and put the glass ring on**

![LED Cover and Glass Ring 1](/images/docs/dwp-assembly/19-dwp.png)
![LED Cover and Glass Ring 2](/images/docs/dwp-assembly/20-dwp.png)

17. **Put the sand bed on the four legs. Add the glass ring with the glass on top**

![Complete Assembly](/images/docs/dwp-assembly/21-dwp.png)

## Wiring

### Pi Zero 2W and DLC32 Connection

![Wiring Diagram](/images/docs/dwp-assembly/22-dwp.png)

- **Add the Pi Zero 2W and wire to the DLC32.** If using WLED (deprecated; use DW LEDs instead), attach ESP32 as well.

- **USB Connection Options:**
  - Use USB-a to micro USB adapter to connect dlc32 to Pi (skip next step)
  - Alternatively, set up UART over pins following [additional instructions](/docs/deploying-backend#uart-configuration)

- **Set the 3 switches under the motor drivers to off for both axes**

- **Adjust Vref values** using the [provided instructions](/docs/setting-vref).

### Power Supply

- Single 12V 5A supply powers everything
- Current requirements depend on LED choice
- Example: 12V WS2815 60 LEDs/m
- Higher LED density may require increased current capacity

### Connection Notes

- Use Dupont wires for Pi Zero 2W and ESP32 board (prone to issues; consider soldering after testing)
- Confirm all electronics function before final assembly

### Power Cable Installation

- Connect power cable to female 12V plug
- Run power wires through the steel tube

![Power Cable Installation](/images/docs/dwp-assembly/23-dwp.png)

### LED Wiring

- Create connector plug for LED removal when detaching table top

![LED Connector](/images/docs/dwp-assembly/24-dwp.png)

- Green cable = data cable (connects to pin 16 on ESP32)

![LED Data Cable](/images/docs/dwp-assembly/25-dwp.png)

## Additional Resources

- [Discord Community](https://discord.gg/YZ8PTezVHt)
- [DW Pro BOM](/docs/dw-pro-bom)
- [Printing Instructions](/docs/dw-pro-printing)
- [Troubleshooting](/docs/troubleshooting)
