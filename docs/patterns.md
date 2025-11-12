---
title: Pattern Library
description: Explore and create patterns for your Dune Weaver
tags: [patterns, creative, software]
date: 2024-02-05
---

# Pattern Library

Discover the world of Dune Weaver patterns and learn to create your own.

## Built-in Patterns

Your Dune Weaver comes with several pre-loaded patterns:

### Geometric Patterns
- **Spiral:** Classic logarithmic spiral
- **Circles:** Concentric circles of varying sizes
- **Squares:** Nested square patterns
- **Stars:** Multi-pointed star designs

### Natural Patterns
- **Wave:** Flowing wave patterns
- **Maze:** Random maze generation
- **Branches:** Organic branching structures
- **Mountains:** Topographic contours

### Complex Patterns
- **Mandala:** Intricate symmetrical designs
- **Celtic Knots:** Interwoven patterns
- **Sacred Geometry:** Mathematical sacred patterns
- **Fractals:** Self-similar recursive patterns

## Loading Patterns

### From Web Interface
1. Connect to your Dune Weaver
2. Navigate to Patterns
3. Select a pattern from the library
4. Click "Play"

### From SD Card
1. Save `.thr` files to SD card
2. Insert SD card into table
3. Patterns appear in local library

## Creating Custom Patterns

### Using Sandify
[Sandify](https://sandify.org) is a free web-based pattern creator:

1. Visit sandify.org
2. Choose a pattern type
3. Adjust parameters
4. Export as `.thr` file
5. Upload to your Dune Weaver

### Pattern Format
Dune Weaver uses the Theta-Rho (`.thr`) format:
```
# Comments start with #
# theta (angle in radians), rho (radius)
0.0, 0.0
0.1, 5.0
0.2, 10.0
```

### Programming Patterns
Create patterns programmatically using Python:
```python
import math

def spiral(rotations, points):
    pattern = []
    for i in range(points):
        theta = (i / points) * rotations * 2 * math.pi
        rho = (i / points) * 100
        pattern.append(f"{theta}, {rho}")
    return "\n".join(pattern)

print(spiral(10, 1000))
```

## Pattern Parameters

### Size and Scale
- Adjust to fit your table dimensions
- Scale: 0.1 to 2.0 (1.0 = full size)

### Rotation
- Rotate patterns 0-360 degrees
- Create variations of the same pattern

### Speed
- Slower speeds: More detail visibility
- Faster speeds: Quick pattern changes

## Sharing Patterns

### Community Library
Submit your patterns to the community:
1. Create your pattern
2. Test thoroughly
3. Upload to MakerWorld or GitHub
4. Share on Discord

### Pattern Collections
Find curated collections:
- Beginner-friendly patterns
- Holiday themes
- Seasonal collections
- Artist showcases

## Tips for Great Patterns

### Design Principles
- **Contrast:** Use both dense and sparse areas
- **Symmetry:** Often pleasing but not required
- **Flow:** Consider the ball's path
- **Duration:** 5-15 minutes is ideal for most patterns

### Technical Considerations
- Avoid extremely sharp corners (causes jerky movement)
- Ensure paths don't overlap too much
- Test at different speeds
- Consider sand depth effects

### Advanced Techniques
- Layer multiple simple patterns
- Use mathematical functions for organic shapes
- Incorporate randomness for unique results
- Create pattern sequences (playlists)

## Troubleshooting Patterns

### Pattern Won't Load
- Check file format (must be .thr)
- Verify file isn't corrupted
- Ensure coordinates are within table bounds

### Pattern Looks Wrong
- Check scale settings
- Verify rotation is at 0 degrees
- Ensure home position is correct
- Calibrate your table

### Pattern Incomplete
- Increase speed to complete within timeout
- Split into multiple smaller patterns
- Optimize path to remove redundancy

## Pattern Resources

- [Sandify Pattern Generator](https://sandify.org)
- [Community Pattern Library](https://github.com/duneweaver/patterns)
- [Pattern Creation Tutorial](/docs/pattern-tutorial)
- [Math Behind Patterns](/docs/pattern-math)

## Next Steps

- Experiment with the built-in patterns
- Modify existing patterns to learn
- Create your first custom pattern
- Share your creations with the community!
