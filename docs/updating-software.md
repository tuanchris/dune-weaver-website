---
title: Updating Software
description: Update your Dune Weaver backend software to the latest version
tableType: General
date: 2025-01-28
---

# Updating Software

## V3 update

Before following the steps below, you may have to do:

```bash
git fetch origin
git reset --hard origin/main
```

It's also a good idea to clear browser cache (cmd/ctrl + shift + r on Chrome)

## Docker Deployment

To update the software, run the following commands:

```bash
cd dune-weaver
git pull origin main
docker compose pull
docker compose up -d
```

**Notes:**

- If you have another docker container running on port `8080`, you won't be able to start the service. You can list docker services you have running with:
  ```bash
  docker ps
  ```
  To stop all running containers, use:
  ```bash
  docker stop $(docker ps -a -q)
  ```

- Currently, we only support running Docker for Raspberry Pi (3, 4, 5) and Zero 2W, running a 64-bit operating system. Consider using the Python script method if you're on an older Pi or a 32-bit system.

## Python Script

If you are using the Python script method, ensure that the current backend code is not running before updating.

### Stop the Running Service

If you have set up the script to run as a systemd service, stop it first:

```bash
sudo systemctl stop dune-weaver
```

### Update and Restart the Script

```bash
cd dune-weaver
pip install -r requirements.txt
git pull
python main.py
```

After updating, restart the systemd service:

```bash
sudo systemctl start dune-weaver
```

For further assistance, join our Discord [here](https://discord.gg/YZ8PTezVHt).
