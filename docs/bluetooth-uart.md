---
title: Bluetooth UART
description: Set up Bluetooth serial connection for Dune Weaver
tableType: General
date: 2025-01-28
---

# Bluetooth UART

## Step 1. Add the Serial Port Profile on the Pi

```bash
sudo nano /etc/systemd/system/dbus-org.bluez.service
```

Add the compatibility flag, ' -C', at the end of the 'ExecStart=' line. Add a new line after that to add the SP profile. The two lines should look like this:

```
ExecStart=/usr/lib/bluetooth/bluetoothd -C
ExecStartPost=/usr/bin/sdptool add SP
```

Save the file and reboot.

## Step 2. Pair and trust the DLC32

```bash
bluetoothctl
scan on
```

You'll see a number of Bluetooth device addresses; one should be labeled as your device. If your device needs to be put into 'discoverable' mode, read the manual and do that first.

```bash
pair <bdaddr>
trust <bdaddr>
```

You can now 'exit' from bluetoothctl.

## Step 3. Build rfcomm service

```bash
sudo nano /etc/systemd/system/rfcomm.service
```

Enter the following:

```
[Unit]
Description=RFCOMM service
After=bluetooth.service
Requires=bluetooth.service

[Service]
ExecStart=/usr/bin/rfcomm bind hci0 <bdaddr>

[Install]
WantedBy=multi-user.target
```

Enable that to start at boot time with:

```bash
sudo systemctl enable rfcomm
```

Reboot the pi:

```bash
sudo reboot
```

Connect to DuneWeaver webgui and verify rfcomm serial port visible and connects.

For further assistance, join our Discord [here](https://discord.gg/YZ8PTezVHt).
