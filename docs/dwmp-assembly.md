---
title: Mini Pro Assembly Instructions
description: Step-by-step assembly instructions for the Dune Weaver Mini Pro
tableType: Dune Weaver Mini Pro
date: 2025-01-28
---

# Mini Pro Assembly Instructions

## Printing Instructions

Materials and specifications for printing the Dune Weaver Mini Pro components:

- **Material**: PLA is acceptable for all parts; PETG can be used for gears but avoid mixing materials on moving parts
- **Print order**: Save the magnet cup and sand bed for last as scaling may be needed
- **Acrylic holder**: Test fit with your bowl first; European users should print the 250mm OD version
- **Large beds**: Printers with beds exceeding 256mm³ can print the acrylic holder in a single piece

## 28BYJ-48 Version

Special printing requirements apply for the 28BYJ-48 motor variant, with different parts than the standard configuration.

## Assembly Instructions

### Electronics and Motors
Start by assembling and testing all electronics before mounting. Install motors in their slots with properly labeled wires, then secure the motor holder with four M3 screws at the corners.

### DLC32 Controller Setup
Attach the DLC32 to the motor base using three M3 screws, ensuring correct orientation. Wire the Pi Zero 2W to the controller and secure both components using M3 screws.

### Communication Options
- **USB method**: Connect DLC32 to Pi using a USB-a to micro USB adapter (preferred)
- **UART alternative**: Set up UART over pins if adapter unavailable

### Motor Configuration
Set all three switches under motor drivers to "off" position for both axes before operation.

### Calibration
Adjust Vref values according to separate calibration instructions for proper motor performance. See [Setting VREF](/docs/setting-vref).

### LED Installation
Add LED connector while ensuring the radial arm remains clear of all components.

### Gear Assembly
Mount the angular gear assembly with the radial arm, spur gears, and other components in specified sequence. Apply adhesive as needed to prevent rotation.

### Sand Bed Preparation
- Install LED strip with connectors for easy removal
- Secure EVA foam using double-sided tape without overlapping sections

### Acrylic Integration
Test fit acrylic holder pieces to the wooden bowl, ensuring flush alignment at the top. Glue components together and use electrical tape to prevent light leakage between segments.

### Base Mounting
Drill access hole for LED wires through the acrylic holder. Mount the base assembly to the wooden bowl using wood screws, ensuring level alignment.

### Height Calibration
Measure distances from magnet ring top to bowl rim at multiple points. If variations exist, add washers to posts. Calculate adapter height using the formula: magnet depth + smallest measured gap - tolerance allowance.

### Final Assembly
Install the magnet adapter, sand bed, acrylic holder, sand medium, and either a magnet or steel ball. The document notes that three 5x3mm magnets work effectively as an alternative to larger magnet assemblies.

## Wiring Configuration

### Standard Motor Setup
Connection diagram provided for Pi Zero 2W and DLC32 controller with labeled wire connections.

### 28BYJ-48 Motor Variant
Requires powering five components, making five-way Wago connectors recommended. Alternative methods include bundling wires with heat shrink tubing or solder connections.

### Connection Tips
- Dupont jumpers loosen with repeated connections; secure with hot glue if needed
- Firmware controls motor direction rather than physical wire repositioning
- Join the Discord community for additional support during assembly at [https://discord.gg/YZ8PTezVHt](https://discord.gg/YZ8PTezVHt)
