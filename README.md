# 🚀 Sandeep Sisodiya - Premium 3D Portfolio

A modern, interactive 3D portfolio website showcasing Android & Flutter development expertise with premium design aesthetics.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![React](https://img.shields.io/badge/React-18+-blue)
![Three.js](https://img.shields.io/badge/Three.js-3D-orange)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-cyan)

## ✨ Features

- **Premium Dark Theme** - Deep black/charcoal with neon blue/violet accents
- **Interactive 3D Elements** - Smooth Three.js animations via React Three Fiber
- **Glassmorphism Design** - Modern glass card effects throughout
- **Smooth Animations** - Framer Motion for buttery-smooth transitions
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Performance Optimized** - 60 FPS 3D animations with graceful degradation
- **SEO Ready** - Comprehensive meta tags for better discoverability

## 🛠️ Tech Stack

- **Frontend Framework**: React 18+ with Vite
- **3D Graphics**: Three.js via @react-three/fiber + drei
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **Fonts**: Inter & JetBrains Mono (Google Fonts)

## 📂 Project Structure

```
sandeep/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Hero section with 3D cube
│   │   ├── About.jsx          # About section with tilt card
│   │   ├── Skills.jsx         # Interactive 3D skills visualization
│   │   ├── Projects.jsx       # Project showcase cards
│   │   ├── Education.jsx      # Animated timeline
│   │   ├── Contact.jsx        # Contact form & social links
│   │   ├── Navbar.jsx         # Sticky navigation
│   │   ├── Footer.jsx         # Footer section
│   │   └── Loader.jsx         # Loading animation
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles & Tailwind
├── public/                    # Static assets
├── index.html                 # HTML template
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
├── vite.config.js             # Vite configuration
└── package.json               # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm installed

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sandeep/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📦 Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** to link your project and deploy

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Drag and drop** the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

Or use the Netlify CLI:

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## 🎨 Customization

### Update Personal Information

Edit the content in each component file:

- **Hero.jsx** - Name, title, stats
- **About.jsx** - Bio, education details
- **Skills.jsx** - Technical skills
- **Projects.jsx** - Project details and links
- **Education.jsx** - Education timeline
- **Contact.jsx** - Contact information and social links

### Update Colors

Modify `tailwind.config.js`:

```js
colors: {
  'dark-bg': '#your-color',
  'neon-blue': '#your-color',
  'neon-violet': '#your-color',
}
```

## 🔧 Performance Tips

- 3D elements automatically reduce complexity on mobile devices
- Animations respect `prefers-reduced-motion` for accessibility
- Lazy loading implemented for all 3D components
- Optimized bundle size with Vite

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💬 Contact

**Sandeep Sisodiya**

- Email: sandeep@example.com
- GitHub: [@sandeep](https://github.com/sandeep)
- LinkedIn: [Sandeep Sisodiya](https://linkedin.com/in/sandeep)

---

**Built with ❤️ using React, Three.js, and Tailwind CSS**
