# 🎨 3D Animation Website

A stunning 3D animation website built with **Next.js**, **Three.js**, **Framer Motion**, and **Tailwind CSS**. Features scroll-triggered animations, interactive 3D scenes, and glassmorphic UI design.

## ✨ Features

- **3D Interactive Scene**: Animated 3D sphere with OrbitControls using Three.js
- **Scroll-Triggered Animations**: Smooth frame-by-frame animations synchronized with scroll position
- **Glassmorphic Design**: Modern frosted glass UI with backdrop blur effects
- **Responsive Layout**: Fully responsive across mobile, tablet, and desktop
- **Dark Theme**: Beautiful gradient dark background with cyan and magenta accents
- **Performance Optimized**: Uses Next.js optimization and lazy loading
- **Framer Motion Animations**: Smooth entrance animations and interactive transitions

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Navigate to project directory:**
   ```bash
   cd c:\Users\hp\Desktop\cake\3d-animation-site
   ```

2. **Dependencies are already installed!** ✅
   
   If you need to reinstall:
   ```bash
   npm install
   ```

### Development Server

Start the development server:

```bash
npm run dev
```

The application will be available at:
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
3d-animation-site/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page (home)
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── ScrollImageSequence.tsx # Scroll-triggered image animation
│   ├── 3d/
│   │   └── ThreeDScene.tsx # 3D scene with Three.js
│   └── sections/
│       ├── Hero.tsx        # Hero section with animations
│       └── Gallery.tsx     # Gallery with scroll animations
├── public/
│   └── images/             # Animation frames (19 images)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🎬 Animation Frames

The website includes **19 animation frames** from your video:
- Located in: `public/images/`
- Frames: `Create_video_breaking_202604251826_001.jpg` → `Create_video_breaking_202604251826_019.jpg`
- Automatically loaded and synchronized with scroll position

### Adding More Animations

To add additional frame sequences:

1. **Add images to** `public/images/`
2. **Update Gallery component** to reference new sequences
3. **Create new ScrollImageSequence instances** with different image arrays

## 🎨 Customization

### Colors & Theme

Edit `tailwind.config.ts` to modify:
- Primary accent color: `#00d9ff` (cyan)
- Secondary accent: `#ff006e` (magenta)
- Dark background: `#0a0e27`

### 3D Scene

Modify `components/3d/ThreeDScene.tsx` to:
- Change sphere geometry
- Adjust rotation speeds
- Add new 3D objects
- Customize lighting

### Styling

Global styles in `app/globals.css`:
- Gradient backgrounds
- Glass morphism effects
- Custom scrollbar styling
- Animation keyframes

## 📦 Dependencies

### Core
- **Next.js 14**: React framework with SSR & SSG
- **React 18**: UI library
- **TypeScript**: Type-safe development

### 3D & Animation
- **Three.js**: 3D graphics library
- **Framer Motion**: Smooth animations & transitions
- **@react-three/fiber**: React renderer for Three.js
- **@react-three/drei**: Useful helpers for Three.js

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **GSAP**: Animation library (advanced animations)

## 🔧 Development

### Available Scripts

```bash
# Development mode
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### TypeScript

Full TypeScript support with strict mode enabled. Type definitions included for all dependencies.

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect to Vercel
3. Deploy with one click

### Other Platforms

Build and deploy the static/serverless export:
```bash
npm run build
npm start
```

## ⚙️ Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance Tips

- Images are lazy-loaded
- Three.js uses `antialias: true` for smooth rendering
- CSS animations use GPU acceleration
- Tailwind CSS is optimized with PurgeCSS

## 📝 Environment Variables

Create `.env.local` for environment-specific variables:

```
NEXT_PUBLIC_API_URL=your_api_url
```

## 🐛 Troubleshooting

### Port 3000 already in use?
```bash
npm run dev -- -p 3001
```

### Images not loading?
- Ensure images are in `public/images/`
- Clear `.next` folder: `rm -r .next`
- Restart dev server

### 3D Scene not rendering?
- Check browser WebGL support
- Ensure Three.js is properly installed
- Check browser console for errors

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Three.js Documentation](https://threejs.org/docs/)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## 🎓 Learning Path

1. **Start**: Explore `app/page.tsx` to understand structure
2. **Animations**: Check `components/ScrollImageSequence.tsx` for scroll sync
3. **3D**: Study `components/3d/ThreeDScene.tsx` for Three.js setup
4. **Styling**: Review `app/globals.css` for effects

## 📄 License

This project is open source and available under the MIT License.

## 🚀 Next Steps

1. ✅ Run `npm run dev` to start the development server
2. ✅ Visit `http://localhost:3000` in your browser
3. ✅ Scroll to see animations in action
4. ✅ Interact with the 3D scene
5. ✅ Customize colors, fonts, and content to your liking

---

**Built with ❤️ using Next.js, Three.js, and Framer Motion**
