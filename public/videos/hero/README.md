# Hero Section Videos

This folder contains the background videos for the hero section.

## Usage

Place your hero background videos here with the following naming convention:
- `video1.mp4` - First video in the cycle
- `video2.mp4` - Second video in the cycle
- `video3.mp4` - Third video in the cycle

## How It Works

1. **Initial Display**: The hero section starts with a still image (`/images/hero-dune-weaver.jpeg`) for 5 seconds
2. **Video Preloading**: During those 5 seconds, the first video is preloaded in the background
3. **Smooth Transition**: After 5 seconds, the image fades out and the first video fades in
4. **Cycling**: When each video ends, it automatically cycles to the next video with a smooth crossfade transition

## Video Recommendations

For optimal performance and user experience:
- **Format**: MP4 with H.264 codec
- **Resolution**: 1920x1080 (Full HD) or higher
- **Aspect Ratio**: 16:9
- **Duration**: 10-30 seconds per video
- **File Size**: Keep under 10MB per video for faster loading
- **Compression**: Use moderate compression to balance quality and file size

## Adding/Removing Videos

To add or remove videos, edit the `HERO_VIDEOS` array in `/components/HeroSection.tsx`:

```typescript
const HERO_VIDEOS = [
  '/videos/hero/video1.mp4',
  '/videos/hero/video2.mp4',
  '/videos/hero/video3.mp4',
  // Add more videos here...
];
```

## Troubleshooting

- **Videos not playing**: Ensure video files are named correctly and placed in this folder
- **Slow loading**: Consider compressing videos or reducing resolution
- **Black screen**: Check browser console for errors and verify video codec compatibility
