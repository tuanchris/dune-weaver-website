---
title: Configuration Options
description: Customize your Dune Weaver's behavior and performance settings
tags: [configuration, software, advanced]
date: 2024-02-01
---

# Configuration Options

Learn how to customize your Dune Weaver's behavior and performance.

## Configuration Methods

### Web Interface
The easiest way to configure your Dune Weaver:
1. Connect to the table's WiFi network
2. Navigate to `http://duneweaver.local`
3. Access the configuration panel

### Configuration File
For advanced users, edit `config.json` directly:
```json
{
  "speed": 100,
  "acceleration": 50,
  "homeOnStart": true,
  "ledBrightness": 80
}
```

## Motion Settings

### Speed Control
- **Range:** 1-200
- **Default:** 100
- **Effect:** Controls how fast patterns are drawn

Lower speeds create more detailed patterns but take longer to complete.

### Acceleration
- **Range:** 10-100
- **Default:** 50
- **Effect:** How quickly the ball reaches target speed

Higher values create sharper movements; lower values are smoother.

## Pattern Settings

### Loop Behavior
- **Single:** Play pattern once and stop
- **Loop:** Continuously repeat pattern
- **Playlist:** Queue multiple patterns

### Rotation and Scaling
```json
{
  "rotation": 0,
  "scale": 1.0,
  "centerX": 0,
  "centerY": 0
}
```

## WiFi Configuration

### Access Point Mode
Default when no network is configured:
- SSID: `DuneWeaver-XXXX`
- Password: `duneweaver`

### Client Mode
Connect to your home network:
1. Access web interface
2. Navigate to WiFi settings
3. Select your network
4. Enter password

## LED Settings

### Brightness Control
Adjust LED brightness (if your model includes LEDs):
- **Range:** 0-100
- **0:** LEDs off
- **100:** Maximum brightness

### Color Modes
- Static color
- Rainbow cycle
- Pattern-reactive
- Music-reactive (requires audio input)

## Advanced Settings

### Homing Behavior
- **Home on Start:** Return to origin when powered on
- **Home Position:** Define custom home coordinates
- **Endstop Type:** Mechanical or optical

### Performance Tuning
```json
{
  "stepsPerMM": 80,
  "maxSpeed": 200,
  "cornerRadius": 2.0,
  "junctionDeviation": 0.05
}
```

## Backup and Restore

### Exporting Configuration
1. Access web interface
2. Navigate to Settings > Backup
3. Download `config.json`

### Restoring Configuration
1. Access web interface
2. Navigate to Settings > Restore
3. Upload your `config.json` file

## Resetting to Defaults

To reset all settings:
1. Power off the table
2. Hold the reset button
3. Power on while holding for 5 seconds
4. Release when LED flashes

## Tips and Best Practices

- Start with default settings and adjust gradually
- Document custom configurations for easy restoration
- Test changes with simple patterns first
- Join the community to share configurations

## Related Documentation

- [Pattern Creation](/docs/patterns)
- [Troubleshooting](/docs/troubleshooting)
- [API Reference](/docs/api)
