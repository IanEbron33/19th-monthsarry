# GIF Optimization Guide

## Current GIF File Sizes
- `hero-cat.gif` - 2.97 MB (largest)
- `peeking-cat.gif` - 312 KB
- `cat-hero-section.gif` - 47.8 KB
- `footer-cat.gif` - 7.4 KB

## Recommendations

### 1. Compress Large GIFs
The `hero-cat.gif` (2.97 MB) is very large. Recommended actions:

**Online Tools (Free):**
- **ezgif.com** - https://ezgif.com/optimize
  - Upload your GIF
  - Use "Optimize GIF" with compression level 35-50
  - Target size: Under 500 KB

- **gifcompressor.com** - https://gifcompressor.com/
  - Drag and drop your GIF
  - Adjust compression slider
  - Download optimized version

**Desktop Tools:**
- **GIMP** (Free) - Export as GIF with reduced colors (128 or 64 colors)
- **Photoshop** - Save for Web with reduced colors and lossy compression

### 2. Reduce Dimensions
If GIFs are larger than needed:
- Hero cat: Max 200x200px
- Peeking cat: Max 150x150px
- Footer cat: Max 150x150px

### 3. Reduce Frame Rate
- Most GIFs look fine at 15-20 FPS instead of 30 FPS
- Use ezgif.com's "Reduce Frame Rate" tool

### 4. Reduce Colors
- Most cute GIFs work well with 64-128 colors instead of 256
- Significant file size reduction with minimal quality loss

### 5. Convert to Video (Advanced)
For very large GIFs, consider converting to MP4:
```html
<video autoplay loop muted playsinline class="hero-cat-gif">
  <source src="assets/hero-cat.mp4" type="video/mp4">
</video>
```
- MP4 files are typically 80-90% smaller than GIFs
- Better quality at smaller file sizes

## Quick Optimization Steps

1. Go to https://ezgif.com/optimize
2. Upload `hero-cat.gif`
3. Set compression level to 35
4. Click "Optimize GIF"
5. Download and replace the original file

**Expected Results:**
- Original: 2.97 MB → Optimized: ~500-800 KB
- 70-80% file size reduction
- Minimal visible quality loss
- Much faster page loading

## Already Implemented
✅ Lazy loading on all GIF images
✅ Images only load when scrolled into view
✅ Reduces initial page load time
