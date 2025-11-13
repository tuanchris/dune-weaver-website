---
title: Kiosk Mode
description: Configure Dune Weaver to auto-play patterns on startup (deprecated in v3.2.1)
tableType: General
date: 2025-01-28
---

# Kiosk Mode

## Deprecated with Auto-play on boot

This feature has been superseded by the auto-play functionality released in v3.2.1. To disable the legacy system:

- If running: `sudo systemctl stop start-playlist.service`
- If inactive: `sudo systemctl disable start-playlist.service`

## Old Instructions

The original kiosk mode allowed a Dune Weaver device to run a preset playlist automatically at startup or after power loss without requiring WiFi connectivity.

###Setup start_playlist.py

1. SSH into the Pi (replace "pi" with your device name):
   ```bash
   ssh pi@raspberrypi.local
   ```

2. Create the script file:
   ```bash
   nano start_playlist.py
   ```

3. Add the provided Python code that monitors serial status and triggers playlist execution. The script checks device connectivity and initiates playback of the "kiosk" playlist with configurable pause times and shuffle settings.

4. Make the script executable and save to `/home/pi/start_playlist.py`

5. Create a systemd service file at `/etc/systemd/system/start-playlist.service` with appropriate startup configuration

6. Enable and start the service:
   ```bash
   sudo systemctl enable start-playlist.service
   sudo systemctl start start-playlist.service
   ```

### Configuring the "kiosk" Playlist via Web UI

1. Access the interface at `raspberrypi.local:8080`
2. Create a new playlist named "kiosk"
3. Add desired patterns to this playlist for automatic playback

### Configuring via SSH

Edit `playlists.json` directly to define the "kiosk" playlist with specific pattern files.

For further assistance, join our Discord [here](https://discord.gg/YZ8PTezVHt).
