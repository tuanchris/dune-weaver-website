---
title: V2.0 Update
description: Information about the V2.0 update transition to FluidNC firmware
tableType: General
date: 2025-01-28
---

# V2.0 Update

## Update Summary

The version 2.0 release represents a significant architectural shift. The project "moved away from using custom firmware written in C++ in favor of using Fluidnc firmware." The transition affects different hardware configurations differently:

- **Dune Weaver Pro and DLC32 board variants**: Latest Fluidnc version
- **CNC Shield + Arduino Uno setup**: Grbl firmware
- **Mini Dune Weaver**: Fluidnc version 3.8.3

### Rationale

The developers chose Fluidnc to "simplify our codebase and enjoy many advantages that the fluidnc firmware has to offer (optimized batches, wireless connections, etc.)." Since Fluidnc derives from Grbl, the update maintains backward compatibility for Arduino Uno users, though the update process differs.

### Important Note on Spirograph Mode

Users with enclosed Ombonad versions should defer the update if they wish to retain spirograph functionality. This feature was part of the custom firmware and requires conversion to software form before migration.

## Update Instructions

### Software Updates
The automatic update feature is nonfunctional; manual instructions are referenced for software updates. See [Updating Software](/docs/updating-software) for details.

### Firmware Installation
Detailed instructions exist for installing Fluidnc on Mini, Pro, and DLC32 variants. See [Installing Firmware](/docs/installing-firmware) for step-by-step guides.

### Support
Community assistance is available through the project's Discord server at [https://discord.gg/YZ8PTezVHt](https://discord.gg/YZ8PTezVHt).
