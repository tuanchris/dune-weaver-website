---
title: Troubleshooting Guide
description: Common issues and solutions for your Dune Weaver
tags: [troubleshooting, support, hardware]
date: 2024-02-10
---

# Troubleshooting Guide

Solutions to common issues with your Dune Weaver.

## Power Issues

### Table Won't Turn On
**Symptoms:** No lights, no movement, no response

**Solutions:**
1. Check power supply connection
2. Verify outlet has power
3. Test power supply voltage (should be 12V DC)
4. Inspect power cable for damage
5. Check internal fuse (if applicable)

### Intermittent Power Loss
**Symptoms:** Table turns off randomly

**Solutions:**
1. Ensure power supply provides adequate amperage (2A minimum)
2. Check for loose connections
3. Verify power cable isn't damaged
4. Test with different outlet
5. Check for overheating issues

## Movement Issues

### Ball Doesn't Move
**Symptoms:** Power on but no motion

**Solutions:**
1. Run homing sequence
2. Check belt tension
3. Verify stepper motors are connected
4. Test each axis independently
5. Ensure ball bearing is in place

### Jerky or Stuttering Movement
**Symptoms:** Movement is not smooth

**Solutions:**
1. Reduce acceleration in settings
2. Check for sand buildup on mechanism
3. Lubricate linear rails
4. Adjust belt tension
5. Lower maximum speed
6. Update firmware

### Position Drift
**Symptoms:** Patterns become misaligned over time

**Solutions:**
1. Recalibrate home position
2. Tighten belts
3. Check for mechanical binding
4. Verify motor steps per mm
5. Run homing more frequently

## Pattern Issues

### Pattern Not Visible
**Symptoms:** Ball moves but leaves no trace

**Solutions:**
1. Check sand depth (should be 5-10mm)
2. Ensure magnetic ball is present
3. Verify magnets have proper strength
4. Level the table surface
5. Try different sand type

### Pattern Incomplete
**Symptoms:** Pattern stops before finishing

**Solutions:**
1. Check if pattern exceeds table boundaries
2. Verify pattern file isn't corrupted
3. Increase timeout settings
4. Ensure adequate power supply
5. Check for mechanical obstructions

### Pattern Distorted
**Symptoms:** Pattern shape incorrect

**Solutions:**
1. Calibrate step settings
2. Verify home position
3. Check scale settings
4. Ensure table is level
5. Verify belt tension is equal on both axes

## Connectivity Issues

### Can't Connect to WiFi
**Symptoms:** Cannot access web interface

**Solutions:**
1. Verify WiFi network name (SSID)
2. Check WiFi password
3. Ensure router is nearby
4. Reset WiFi settings
5. Try access point mode
6. Update firmware

### Web Interface Won't Load
**Symptoms:** Connection timeout or error

**Solutions:**
1. Check device is on same network
2. Try IP address instead of hostname
3. Clear browser cache
4. Try different browser
5. Restart table
6. Check firewall settings

## Sand-Related Issues

### Sand Too Thin
**Symptoms:** Mechanism visible, poor pattern quality

**Solution:** Add more sand gradually until patterns look good (typically 5-10mm depth)

### Sand Too Deep
**Symptoms:** Ball struggles to move, uneven patterns

**Solution:** Remove excess sand until ball moves smoothly

### Sand Clumping
**Symptoms:** Lumps in sand, inconsistent patterns

**Solutions:**
1. Remove and sift sand
2. Ensure sand is completely dry
3. Check for contamination
4. Use proper sand type (fine play sand)
5. Store in sealed container

### Sand Escaping
**Symptoms:** Sand outside table boundaries

**Solutions:**
1. Check edge containment
2. Reduce maximum speed
3. Lower acceleration
4. Verify level installation
5. Add or increase edge barriers

## Noise Issues

### Excessive Noise
**Symptoms:** Table louder than expected

**Solutions:**
1. Check for loose components
2. Lubricate moving parts
3. Adjust stepper motor current
4. Use vibration dampening feet
5. Reduce speed and acceleration
6. Check belt tension

### Grinding Sounds
**Symptoms:** Mechanical grinding or scraping

**Solutions:**
1. Check for debris in mechanism
2. Verify belt alignment
3. Inspect bearings
4. Ensure proper lubrication
5. Check for damaged components

## LED Issues (If Applicable)

### LEDs Not Working
**Solutions:**
1. Check LED power connection
2. Verify LED settings (brightness > 0)
3. Test LED strip with multimeter
4. Check data line connection
5. Update firmware

### Wrong Colors
**Solutions:**
1. Check LED type setting (WS2812 vs APA102)
2. Verify color order (RGB vs GRB)
3. Update firmware
4. Reset LED configuration

## Firmware and Software

### Firmware Update Failed
**Solutions:**
1. Ensure stable power during update
2. Use recommended update method
3. Try different USB cable
4. Check firmware file integrity
5. Contact support if persists

### Settings Not Saving
**Solutions:**
1. Allow time for settings to write
2. Check storage space
3. Reset to factory defaults
4. Update firmware
5. Verify configuration file permissions

## Getting More Help

### Before Contacting Support
1. Note exact symptoms
2. Document what you've tried
3. Check firmware version
4. Prepare photos/videos if applicable
5. Review recent changes

### Community Resources
- [Discord Community](https://discord.gg/duneweaver)
- [GitHub Issues](https://github.com/duneweaver)
- [FAQ](/docs/faq)
- [Community Forum](/docs/community)

### Warranty and Repairs
- Check warranty status
- Contact manufacturer for repair options
- Review return policy
- Find authorized service centers

## Preventive Maintenance

Regular maintenance prevents many issues:
- Clean mechanism monthly
- Check belt tension regularly
- Lubricate rails every 3 months
- Update firmware when available
- Keep sand clean and dry
- Inspect electrical connections quarterly
