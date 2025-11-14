---
title: Deploying Backend Code
description: Deploy the Dune Weaver backend on Raspberry Pi or your computer
tableType: General
date: 2025-01-28
---

# Deploying Backend Code

## Overview
The Dune Weaver project supports two deployment modes for backend code: **Docker** and **Python script**. Docker deployment is recommended for supported devices with 64-bit operating systems.

### Supported Devices
- Raspberry Pi 3B, 4, 5
- Raspberry Pi Zero 2W
- Any PC/Mac (Python script only)

## Raspberry Pi Setup

### Initial Configuration
Users should employ the Raspberry Pi Imager to install the 64-bit OS. Key setup steps include:
- Selecting appropriate hardware and SD card
- Enabling SSH during advanced configuration
- Configuring Wi-Fi credentials
- Disabling WLAN Power Save via `raspi-config`
- Running system updates (`sudo apt update` and `sudo apt full-upgrade`)

### SSH Access
Connect remotely using: `ssh pi@raspberrypi.local`

## Docker Deployment

### Installation
Execute these commands to install Docker:
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

Add user to Docker group to eliminate sudo requirement:
```bash
sudo usermod -aG docker $USER
```

### Deployment via Docker Compose
Clone the repository and deploy:
```bash
git clone https://github.com/tuanchris/dune-weaver --single-branch
cd dune-weaver
docker compose up -d
```

Access the interface at `<raspberrypi_ip_address>:8080`

## Python Script Deployment

### Manual Execution
For devices without Docker support:
```bash
git clone https://github.com/tuanchris/dune-weaver --single-branch
cd dune-weaver
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python main.py
```

### Systemd Service (Linux)
Create `/etc/systemd/system/dune-weaver.service` with appropriate paths, then:
```bash
sudo systemctl daemon-reload
sudo systemctl enable dune-weaver
sudo systemctl start dune-weaver
```

### Windows Execution
Activate the virtual environment using `.venv\Scripts\activate.bat` and install from `requirements-nonrpi.txt`

## Web Interface Access
- Local computer: `localhost:8080`
- Raspberry Pi: `raspberrypi.local:8080` or `<ip_address>:8080`

## UART Configuration
Modify `/boot/firmware/config.txt` with specific overlays and run `raspi-config` Interface Options → Serial Port settings.

**Critical requirement**: Establish shared ground connection between Raspberry Pi and DLC32 device.

## Troubleshooting
Check Docker logs using: `docker compose logs -f`

For additional support, visit the Discord community linked in the documentation.
