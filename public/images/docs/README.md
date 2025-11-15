# Documentation Images

This directory contains images for the Dune Weaver documentation that were originally hosted on the GitHub wiki.

## Directory Structure

- `assembly/` - Assembly instruction images for Dune Weaver Pro (25 images)
- `wiring/` - Wiring diagrams for different configurations (4 images)
- `vref/` - VREF adjustment procedure image (1 image)
- `performance/` - Performance optimization images (9 images)

## How to Download Images

The images are currently hosted on GitHub's private CDN and require authentication to download. You have two options:

### Option 1: Run the Download Script (Recommended)

From the project root, run:

```bash
./download-wiki-images.sh
```

This script will download all 35 images from the GitHub wiki CDN to their appropriate directories.

### Option 2: Manual Download from Wiki

If the script doesn't work due to authentication issues:

1. Visit the GitHub wiki pages:
   - [Dune Weaver Pro Assembly Instructions](https://github.com/tuanchris/dune-weaver/wiki/Dune-Weaver-Pro-Assembly-Instructions)
   - [Wiring](https://github.com/tuanchris/dune-weaver/wiki/Wiring)
   - [Setting VREF](https://github.com/tuanchris/dune-weaver/wiki/Setting-VREF)
   - [Improving Performance](https://github.com/tuanchris/dune-weaver/wiki/Improving-Pattern-Performance-and-Reducing-Noise)

2. Right-click on each image and save to the corresponding directory with the filename specified in the download script

## Image List

### Assembly Images (25)
- 01-ikea-leg.png
- 02-base-aligner.png
- 03-base-aligner-detail.png
- 04-motor-installation.png
- 05-outer-bearing-holder.png
- 06-inner-bearing-angular-gear.png
- 07-angular-gear-press-fit.png
- 08-assembly-to-base.png
- 09-radial-arm-spur-gear.png
- 10-pi-dlc32-installation.png
- 11-electronics-cover.png
- 12-eva-foam.png
- 13-led-wiring.png
- 14-enclosure-1.png
- 15-enclosure-2.png
- 16-enclosure-3.png
- 17-caulking.jpeg
- 18-led-sand-installation.png
- 19-glass-ring-1.png
- 20-glass-ring-2.png
- 21-complete-table.png
- 22-wiring-diagram.png
- 23-power-cable.jpeg
- 24-led-connector.jpeg
- 25-led-data-cable.jpeg

### Wiring Images (4)
- cnc-shield-tmc2209.png
- tmc2209-wire-swap.png
- cnc-shield-drv8825.png
- esp32-wiring.png

### VREF Images (1)
- vref-adjustment.png

### Performance Images (9)
- baking-soda-surface.png
- 80-100-mesh-sand.png
- ball-selection.png
- ball-wiggling.jpeg
- magnetic-ball-stability.jpeg
- ball-size-comparison.png
- magnetic-ball-wear.png
- foam-padded-ball.png
- faux-leather.png

## Verification

After downloading, verify all images are present:

```bash
# Count files in each directory
find public/images/docs -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) | wc -l
```

You should have 35 image files total (excluding this README).
