# Portfolio Website - Deepak Verma

A high-performance, award-winning style portfolio website showcasing my work as a Full-Stack Developer, AI/ML Enthusiast, and Competitive Programmer. Built with modern web technologies and featuring smooth animations, custom interactions, and a premium cyberpunk minimalist design.

![Portfolio Preview](https://img.shields.io/badge/Next.js-16.0.3-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **Smooth Scrolling**: Buttery smooth scroll experience powered by Lenis
- **Custom Cursor**: Magnetic cursor that follows mouse movements and snaps to interactive elements
- **Staggered Animations**: Beautiful entry animations using Framer Motion
- **Bento Grid Layout**: Modern grid-based layout for showcasing skills and information
- **Sticky Scroll Projects**: Interactive project gallery with parallax effects
- **Glassmorphism Design**: Premium glassmorphic UI elements with backdrop blur
- **Responsive Design**: Fully responsive across all device sizes
- **Dark Mode**: Cyberpunk minimalist dark theme with electric blue/purple accents
- **Performance Optimized**: Built with Next.js 14 App Router for optimal performance

## 🚀 Tech Stack

### Core Framework
- **Next.js 16.0.3** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript 5** - Type-safe development

### Styling & Animation
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion 12.23.24** - Animation library
- **clsx & tailwind-merge** - Conditional class name utilities

### Additional Libraries
- **@studio-freight/react-lenis** - Smooth scrolling
- **lucide-react** - Icon library

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vermadeepakd1/portfolio-next.git
   cd portfolio-next
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## 🏗️ Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and CSS variables
├── components/
│   ├── BentoGrid.tsx       # About section with bento grid layout
│   ├── CustomCursor.tsx    # Custom magnetic cursor component
│   ├── Footer.tsx          # Contact/Footer section
│   ├── HeroSection.tsx     # Hero section with name reveal animation
│   ├── MagneticButton.tsx # Button with magnetic hover effect
│   ├── Navbar.tsx          # Navigation bar with glassmorphism
│   ├── ProjectGallery.tsx  # Projects section with sticky scroll
│   └── SmoothScroll.tsx    # Lenis smooth scroll wrapper
├── lib/
│   └── utils.ts            # Utility functions (cn helper)
├── public/
│   ├── chit_chat_app.png
│   ├── hostel_management_system.png
│   ├── movie_ticket_booking.png
│   └── xgboost_project.png
└── package.json
```

## 🎨 Design Philosophy

This portfolio follows a **"Cyberpunk Minimalist"** design approach:

- **Color Palette**: Deep blacks (#0a0a0a), dark grays, and electric blue/purple gradients
- **Typography**: Large, bold text with negative tracking (Space Grotesk for headings, Inter for body)
- **Effects**: Glassmorphism, subtle noise texture, and glowing accents
- **Animations**: Every element has entry animations with staggered timing
- **Interactions**: Custom cursor, magnetic buttons, and smooth scroll effects

## 📱 Sections

### Hero Section
- Massive typography with character-by-character reveal animation
- LeetCode Knight badge with breathing animation
- Stats showcase (Problems Solved, Projects, Rating)

### About Section
- Bento Grid layout with:
  - Bio card
  - Infinite scrolling tech stack marquee
  - University and location cards
  - Availability status with pulsing indicator

### Projects Section
- Sticky scroll gallery with parallax effects
- Four featured projects:
  - XGBoost Movie Recommender
  - High-Concurrency Booking Backend
  - Hostel Management Platform
  - Real-Time Chat Application

### Contact Section
- Full-screen footer with call-to-action
- Magnetic social media buttons
- Animated background elements

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Your site will be live!

Alternatively, you can deploy to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📄 License

This project is private and proprietary. All rights reserved.

## 👤 Author

**Deepak Verma**

- B.Tech CSE Student at IIITDM Kurnool (2027)
- Full-Stack Developer | AI/ML Enthusiast | Competitive Programmer
- LeetCode Knight (Rating: 1861)
- GitHub: [@Vermadeepakd1](https://github.com/Vermadeepakd1)
- LinkedIn: [Deepak Verma](https://linkedin.com/in/deepak-verma)

## 🙏 Acknowledgments

- Design inspiration from Awwwards-winning portfolios
- [Framer Motion](https://www.framer.com/motion/) for amazing animations
- [Lenis](https://github.com/studio-freight/lenis) for smooth scrolling
- [Lucide](https://lucide.dev/) for beautiful icons

---

⭐ If you like this project, please consider giving it a star!
