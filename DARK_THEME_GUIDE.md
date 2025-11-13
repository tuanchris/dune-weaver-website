# Dark Theme Guide

## Overview

Your website now has a sophisticated dark gray theme configured with modern, professional colors.

## Color Palette

### Dark Grays (Primary Palette)

| Color | Hex | Usage |
|-------|-----|-------|
| `dark-900` | `#0f1419` | Base background (deepest black) |
| `dark-800` | `#1a1f2e` | Secondary background (near black) |
| `dark-700` | `#242936` | Cards and panels (very dark gray) |
| `dark-600` | `#2d3548` | Elevated surfaces (darker gray) |
| `dark-500` | `#374151` | Elevated surfaces (dark gray) |
| `dark-400` | `#4b5563` | Cards and interactive elements |
| `dark-300` | `#6b7280` | Borders and dividers |
| `dark-200` | `#9ca3af` | Muted text |
| `dark-100` | `#d1d5db` | Secondary text |
| `dark-50` | `#e8eaed` | Primary text on dark backgrounds |

### Accent Colors

#### Teal (Primary Accent)
- `accent-teal-light`: `#5eead4` - Highlights and emphasis
- `accent-teal`: `#14b8a6` - Primary actions and CTAs
- `accent-teal-dark`: `#0d9488` - Hover states

#### Cyan
- `accent-cyan-light`: `#67e8f9`
- `accent-cyan`: `#06b6d4`
- `accent-cyan-dark`: `#0891b2`

#### Purple (Secondary Accent)
- `accent-purple-light`: `#c4b5fd`
- `accent-purple`: `#8b5cf6`
- `accent-purple-dark`: `#7c3aed`

#### Blue
- `accent-blue-light`: `#93c5fd`
- `accent-blue`: `#3b82f6`
- `accent-blue-dark`: `#2563eb`

## Activation

### Option 1: Manual Dark Theme (Always On)

Edit `/styles/globals.css` and uncomment the dark theme section:

```css
/* Dark theme - uncomment to activate */
:root {
  --foreground-rgb: 232, 234, 237;
  --background-rgb: 15, 20, 25;
  --surface-rgb: 26, 31, 46;
  --card-rgb: 36, 41, 54;
  --border-rgb: 45, 53, 72;
  --accent-rgb: 94, 234, 212;
}
```

### Option 2: Auto Dark Theme (System Preference)

Edit `/styles/globals.css` and uncomment the media query section:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --foreground-rgb: 232, 234, 237;
    --background-rgb: 15, 20, 25;
    /* ... rest of variables */
  }
}
```

## Usage Examples

### Basic Dark Page Layout

```jsx
<div className="bg-dark-900 min-h-screen">
  <div className="bg-dark-800 border-b border-dark-600">
    {/* Header */}
  </div>

  <main className="container mx-auto px-4 py-8">
    {/* Content */}
  </main>
</div>
```

### Dark Card Component

```jsx
<div className="bg-dark-700 border border-dark-600 rounded-lg p-6 hover:bg-dark-600 transition-colors">
  <h3 className="text-dark-50 text-xl font-bold mb-2">Card Title</h3>
  <p className="text-dark-100">Card description text</p>
</div>
```

### Buttons with Accent Colors

```jsx
{/* Primary Button - Teal */}
<button className="bg-accent-teal hover:bg-accent-teal-dark text-dark-900 px-6 py-2 rounded-lg font-medium transition-colors">
  Primary Action
</button>

{/* Secondary Button - Purple */}
<button className="bg-accent-purple hover:bg-accent-purple-dark text-white px-6 py-2 rounded-lg font-medium transition-colors">
  Secondary Action
</button>

{/* Outline Button */}
<button className="border-2 border-accent-teal text-accent-teal hover:bg-accent-teal hover:text-dark-900 px-6 py-2 rounded-lg font-medium transition-colors">
  Outline Button
</button>
```

### Navigation Header

```jsx
<header className="bg-dark-800 border-b border-dark-600">
  <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
    <div className="text-dark-50 text-xl font-bold">Dune Weaver</div>
    <div className="flex gap-6">
      <a href="/" className="text-dark-100 hover:text-accent-teal transition-colors">Home</a>
      <a href="/about" className="text-dark-100 hover:text-accent-teal transition-colors">About</a>
      <a href="/gallery" className="text-dark-100 hover:text-accent-teal transition-colors">Gallery</a>
    </div>
  </nav>
</header>
```

### Hero Section

```jsx
<section className="bg-dark-900 py-20">
  <div className="container mx-auto px-4">
    <h1 className="text-5xl font-bold text-dark-50 mb-6">
      Welcome to <span className="text-accent-teal">Dune Weaver</span>
    </h1>
    <p className="text-xl text-dark-100 mb-8 max-w-2xl">
      Experience the mesmerizing art of kinetic sand patterns
    </p>
    <button className="bg-accent-teal hover:bg-accent-teal-dark text-dark-900 px-8 py-3 rounded-lg font-bold text-lg transition-colors">
      Explore Gallery
    </button>
  </div>
</section>
```

### Feature Cards Grid

```jsx
<section className="bg-dark-800 py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-dark-50 mb-12 text-center">Features</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-dark-700 border border-dark-600 rounded-lg p-8 hover:border-accent-teal transition-colors">
        <div className="w-12 h-12 bg-accent-teal rounded-lg mb-4"></div>
        <h3 className="text-xl font-bold text-dark-50 mb-3">Feature One</h3>
        <p className="text-dark-200">Description of the feature</p>
      </div>

      <div className="bg-dark-700 border border-dark-600 rounded-lg p-8 hover:border-accent-purple transition-colors">
        <div className="w-12 h-12 bg-accent-purple rounded-lg mb-4"></div>
        <h3 className="text-xl font-bold text-dark-50 mb-3">Feature Two</h3>
        <p className="text-dark-200">Description of the feature</p>
      </div>

      <div className="bg-dark-700 border border-dark-600 rounded-lg p-8 hover:border-accent-cyan transition-colors">
        <div className="w-12 h-12 bg-accent-cyan rounded-lg mb-4"></div>
        <h3 className="text-xl font-bold text-dark-50 mb-3">Feature Three</h3>
        <p className="text-dark-200">Description of the feature</p>
      </div>
    </div>
  </div>
</section>
```

## Conversion Guide: Sand → Dark

| Original (Sand) | New (Dark) | Purpose |
|-----------------|-----------|---------|
| `bg-white` | `bg-dark-900` or `bg-dark-800` | Page background |
| `bg-gray-50` | `bg-dark-800` | Section background |
| `bg-sand-600` | `bg-accent-teal` | Primary buttons |
| `bg-gray-800` | `bg-dark-700` | Cards/panels |
| `text-gray-900` | `text-dark-50` | Primary text |
| `text-gray-700` | `text-dark-100` | Secondary text |
| `text-gray-500` | `text-dark-200` | Muted text |
| `border-gray-200` | `border-dark-600` | Borders |
| `border-sand-600` | `border-accent-teal` | Accent borders |
| `hover:bg-sand-700` | `hover:bg-accent-teal-dark` | Button hovers |

## Design Principles

1. **Contrast**: Use `dark-50` for important text on dark backgrounds
2. **Hierarchy**: Use `dark-100` for secondary text, `dark-200` for tertiary
3. **Surfaces**: Layer backgrounds with `dark-900` → `dark-800` → `dark-700`
4. **Accents**: Use teal as primary accent, purple/cyan for variety
5. **Borders**: Use `dark-600` for subtle separation, `dark-500` for emphasis
6. **Interactive**: Use accent colors for hover states and active elements

## Tips

- Always test text contrast for accessibility
- Use `transition-colors` for smooth hover effects
- Layer surfaces from darkest (900) to lighter (700/600) for depth
- Use accent colors sparingly for maximum impact
- Consider adding subtle shadows: `shadow-lg shadow-black/20`
