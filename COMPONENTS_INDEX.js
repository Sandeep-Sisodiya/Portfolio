// Component Index - Quick Reference for Portfolio Components

/**
 * HERO SECTION
 * File: src/components/Hero.jsx
 * 
 * Features:
 * - 3D floating code cube with inner sphere (Three.js)
 * - Typing animation effect
 * - Gradient text with animations
 * - Availability badge
 * - Quick stats (CGPA, Users, Projects)
 * - Dual CTA buttons with hover effects
 * - Scroll indicator
 * 
 * 3D Elements:
 * - Wireframe cube (neon blue)
 * - Distorting sphere (neon violet)
 * - Auto-rotate controls
 * - Point lights for glow
 */

/**
 * ABOUT SECTION
 * File: src/components/About.jsx
 * 
 * Features:
 * - Asymmetric two-column layout
 * - HTML tag decorators
 * - Scroll-reveal animations
 * - Profile card with avatar placeholder
 * - Education & institute info
 * - Highlight cards (4 items)
 * - Glassmorphism effects
 */

/**
 * SKILLS SECTION
 * File: src/components/Skills.jsx
 * 
 * Features:
 * - 3D floating skill nodes
 * - Interactive OrbitControls
 * - Category filter buttons
 * - Skill cards with progress bars
 * - Hover glow effects
 * 
 * Categories:
 * - Languages: Java, Dart, C, Python
 * - Frameworks: Flutter, Firebase, REST APIs, SQLite, Provider, GetX, Bloc, Geolocator
 * - Tools: Android Studio, VS Code, IntelliJ, Git & GitHub
 */

/**
 * PROJECTS SECTION
 * File: src/components/Projects.jsx
 * 
 * Features:
 * - Expandable project cards
 * - Tech stack badges
 * - Features list
 * - GitHub links
 * - Animated borders
 * - Glassmorphism design
 * 
 * Projects:
 * 1. AI Therapy App - Gemini API + Flutter + Firebase
 * 2. Backtrack App - GPS tracking + 500+ users
 * 3. Chat Application - Real-time messaging + Firebase
 */

/**
 * EDUCATION SECTION
 * File: src/components/Education.jsx
 * 
 * Features:
 * - Vertical timeline with scroll progress
 * - Alternating left/right layout
 * - Animated timeline nodes
 * - Color-coded milestones
 * - Glassmorphism cards
 * 
 * Timeline Items:
 * 1. B.Tech CSE - KIET (2023-2027)
 * 2. Gemini Buildathon (2024)
 * 3. CodeVita (2024)
 * 4. OASIS Internship (2024)
 * 5. Null Classes (2023-Present)
 */

/**
 * CONTACT SECTION
 * File: src/components/Contact.jsx
 * 
 * Features:
 * - Contact form with validation
 * - Form submission animation
 * - Success state feedback
 * - Quick contact cards
 * - Social media links
 * - Availability status
 * 
 * Social Links:
 * - GitHub
 * - LinkedIn
 * - Email
 * - Twitter
 */

/**
 * NAVIGATION
 * File: src/components/Navbar.jsx
 * 
 * Features:
 * - Sticky on scroll
 * - Active section tracking
 * - Animated indicator
 * - Glass morphism effect
 * - Responsive design
 * - Logo with gradient
 */

/**
 * FOOTER
 * File: src/components/Footer.jsx
 * 
 * Features:
 * - Brand section
 * - Quick links
 * - Social media icons
 * - Copyright notice
 * - Responsive grid layout
 */

/**
 * LOADER
 * File: src/components/Loader.jsx
 * 
 * Features:
 * - Animated progress bar
 * - Gradient logo
 * - Loading dots animation
 * - Smooth exit transition
 */

/**
 * MAIN APP
 * File: src/App.jsx
 * 
 * Features:
 * - Component orchestration
 * - Custom cursor glow (desktop)
 * - Loading state management
 * - Scroll-to-top button
 * - Smooth transitions
 */

// CUSTOMIZATION CHECKLIST
// 
// Personal Info:
// ✅ Update name in Hero.jsx
// ✅ Update bio in About.jsx
// ✅ Update skills in Skills.jsx
// ✅ Update projects in Projects.jsx
// ✅ Update timeline in Education.jsx
// ✅ Update contact info in Contact.jsx
// 
// Styling:
// ✅ Colors in tailwind.config.js
// ✅ Fonts in index.css
// ✅ Animations in index.css
// 
// SEO:
// ✅ Meta tags in index.html
// ✅ Title and description
// ✅ Open Graph tags
// 
// Deployment:
// ✅ Build: npm run build
// ✅ Deploy: See DEPLOYMENT.md

export default {
    hero: './src/components/Hero.jsx',
    about: './src/components/About.jsx',
    skills: './src/components/Skills.jsx',
    projects: './src/components/Projects.jsx',
    education: './src/components/Education.jsx',
    contact: './src/components/Contact.jsx',
    navbar: './src/components/Navbar.jsx',
    footer: './src/components/Footer.jsx',
    loader: './src/components/Loader.jsx',
}
