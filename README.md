# Dune Weaver Website

Homepage for the open-source Dune Weaver kinetic sand table project.

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
dune-weaver-website/
├── components/          # Reusable React components
│   ├── Button.tsx      # Button component with variants
│   ├── ProductCard.tsx # Product card for showcasing builds
│   ├── Section.tsx     # Section wrapper component
│   ├── HeroSection.tsx # Hero section with CTA
│   ├── AboutSection.tsx # About section
│   ├── ProductsSection.tsx # Product showcase grid
│   ├── CommunitySection.tsx # Community links
│   └── Footer.tsx      # Site footer
├── pages/              # Next.js pages
│   ├── _app.tsx       # App wrapper
│   ├── _document.tsx  # Document wrapper
│   └── index.tsx      # Homepage
├── styles/            # Global styles
│   └── globals.css    # Tailwind CSS imports
├── public/            # Static assets (add images here)
├── package.json       # Dependencies
├── tsconfig.json      # TypeScript config
├── tailwind.config.js # Tailwind config with custom colors
├── postcss.config.js  # PostCSS config
└── next.config.js     # Next.js config
```

## Customization

### Update Content

Edit the section components in `/components` to update:
- **Hero**: Edit `HeroSection.tsx` for tagline and CTA buttons
- **About**: Edit `AboutSection.tsx` for project description
- **Products**: Edit `products` array in `ProductsSection.tsx`
- **Community**: Edit `communityLinks` array in `CommunitySection.tsx`
- **Footer**: Edit `Footer.tsx` for footer content

### Update Links

Replace `#` placeholders with actual links to:
- GitHub repository
- Discord server
- Patreon page
- MakerWorld profiles

### Add Images

Place images in `/public` folder and reference them as `/image-name.jpg`

### Styling

The project uses Tailwind CSS with custom sand color palette defined in `tailwind.config.js`.

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Mobile-responsive** - Works on all devices

## Next Steps

- Add product images
- Update all placeholder links
- Add favicon to `/public`
- Configure deployment (Vercel, Netlify, etc.)
