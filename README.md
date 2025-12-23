# Hooked on Tails - Next.js (JavaScript)

A modern Next.js application for a Louisiana fishing charter business, converted from pure HTML/CSS/JS to Next.js with styled-components and Material UI.

## Features

- ✅ **Next.js 14** with App Router
- 🎨 **Styled-components** for component-scoped styling
- 📦 **Material UI** ready for enhanced components
- 🚀 **JavaScript** - no TypeScript, pure JS
- 🌊 **Responsive Design** - mobile-first approach
- ⚡ **Performance Optimized** with Next.js Image component
- 🎭 **Black & Gold Theme** maintaining original design

## Project Structure

```
hooked-on-tails/
├── app/
│   ├── layout.js            # Root layout with Navigation & Footer
│   └── page.js              # Home page
├── components/
│   ├── Navigation.js        # Fixed navigation bar
│   ├── Hero.js              # Hero section with animation
│   ├── ExperienceCards.js   # Rod & Reel and Bowfishing cards
│   ├── CaptainPreview.js    # Captain John introduction
│   └── Footer.js            # Footer with contact info
├── lib/
│   ├── theme.js             # Theme configuration (colors, gradients, etc.)
│   └── registry.js          # Styled-components SSR setup
├── styles/
│   └── GlobalStyles.js      # Global styles and animations
├── public/
│   └── images/              # Add your images here
└── package.json
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Your Images

Place these images in the `public/images/` directory:

- `rod_n_reel_hero.png` - Daytime fishing image
- `bowfish_boat.png` - Nighttime bowfishing image
- `captain_john.png` - Captain's photo (optional)

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 4. Build for Production

```bash
npm run build
npm start
```

## What's Been Converted

### ✅ Home Page (index.html)

- Hero section with animated background
- Experience cards (Rod & Reel and Bowfishing)
- Captain preview section
- Navigation and Footer

### 📋 Still Need Conversion

Share these files to convert them:

- `rod-and-reel.html` → `/app/rod-and-reel/page.js`
- `bowfishing.html` → `/app/bowfishing/page.js`
- Any JavaScript files (`js/main.js`)

## Key Features

### Pure JavaScript

- No TypeScript - all files are `.js`
- Uses `jsconfig.json` for path aliases
- Simple and straightforward

### Styling Approach

- Original CSS converted to styled-components
- Same visual design maintained
- Animations preserved with keyframes
- Responsive breakpoints consistent with original

## Theme Customization

Edit `lib/theme.js` to customize colors, gradients, shadows, etc.:

```javascript
export const theme = {
  colors: {
    primary: {
      main: "#ffd700", // Gold
      light: "#ffb800",
      dark: "#d4a600",
    },
    // ... more colors
  },
  // ... gradients, shadows, etc.
};
```

## File Extensions

All files use `.js` extension:

- `components/*.js`
- `app/*.js`
- `lib/*.js`
- `styles/*.js`

## Next Steps

1. **Add Remaining Pages**: Convert rod-and-reel and bowfishing pages
2. **Add Material UI Components**: Use MUI for forms, buttons, etc.
3. **Optimize Images**: Use Next.js Image component throughout
4. **Add Animations**: Implement scroll-triggered animations
5. **SEO Enhancement**: Add structured data for local business
6. **Contact Form**: Add functional booking form with API route

## Deployment

This Next.js app can be deployed to:

- **Vercel** (recommended - one-click deployment)
- **Netlify**
- Any platform supporting Node.js

For Vercel:

```bash
npm install -g vercel
vercel
```

## Need Help?

Ready to convert the remaining pages? Just share them one at a time!
