# Kothar Tech Solutions - Corporate Website

<div align="center">
  <img src="public/Kothar_tech-nobg.png" alt="Kothar Tech Logo" width="200"/>
  
  <p><strong>Enterprise Software Solutions | Web & Mobile Applications | Business Intelligence</strong></p>
  
  [![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.2-blue?style=flat&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Email Integration](#email-integration)
- [Deployment](#deployment)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

---

## 🌟 About

A modern, responsive corporate website for **Kothar Tech Solutions** - a software development company specializing in enterprise solutions, web & mobile applications, and business intelligence. Built with Next.js 14 and React 19, featuring a beautiful orange (#ed6a06) and teal (#63afc7) color scheme.

**Live Demo:** [Your deployed URL here]

---

## ✨ Features

### 🎨 Design & UI

- **Modern & Aesthetic Design** - Clean, professional interface with custom color scheme
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Hover effects, transitions, and scroll animations
- **Component-Based Architecture** - Modular, reusable React components

### 📄 Pages & Sections

- **Hero Section** - Eye-catching landing with CTA buttons
- **Technology Showcase** - Highlighting expertise and development approach
- **Services** - 6 comprehensive service offerings:
  - Enterprise Software Development
  - Web & Mobile Applications
  - Business Intelligence Dashboards
  - IT Security Services
  - Performance Testing & Optimization
  - Cloud & Infrastructure Management
- **Portfolio** - Showcase of recent projects (Kothar Dashboard, CAM App, CAM Dashboard)
- **About** - Company values and benefits
- **Testimonials** - Client feedback and reviews
- **Contact Form** - Functional email integration

### 🚀 Technical Features

- **Server-Side Rendering (SSR)** - Fast initial page loads with Next.js
- **TypeScript** - Type-safe code for better maintainability
- **Tailwind CSS** - Utility-first styling for rapid development
- **Shadcn/ui Components** - Beautiful, accessible UI components
- **Email Integration** - Resend API for contact form submissions
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Google Maps Integration** - Embedded location map

---

## 🛠 Tech Stack

### Core

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety

### Styling & UI

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

### Additional Libraries

- **[EmailJS](https://www.emailjs.com/)** - Client-side email delivery service
- **[Geist Font](https://vercel.com/font)** - Modern font family
- **[Vercel Analytics](https://vercel.com/analytics)** - Web analytics

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **npm/yarn/pnpm** - Package management

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager
- Git

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/kothar-tech-solutions.git
cd kothar-tech-solutions
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Resend API key (see [Email Integration](#email-integration))

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory:

```env
# EmailJS Configuration for contact form
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
```

### Getting Your EmailJS Credentials

1. Sign up at [emailjs.com](https://www.emailjs.com/) (free tier: 200 emails/month)
2. Create a new service (connect your email)
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Copy and paste them into `.env.local`

For detailed setup instructions, see [SETUP_EMAIL.md](SETUP_EMAIL.md)

---

## 📁 Project Structure

```
kothar-tech-solutions/
├── app/
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page (imports components)
├── components/
│   ├── ui/                       # Shadcn/ui components
│   ├── About.tsx                 # About section
│   ├── CTA.tsx                   # Call-to-action section
│   ├── Contact.tsx               # Contact form (client component)
│   ├── Footer.tsx                # Footer
│   ├── Header.tsx                # Navigation header
│   ├── Hero.tsx                  # Hero section
│   ├── Portfolio.tsx             # Projects showcase
│   ├── Services.tsx              # Services section
│   ├── TechnologyShowcase.tsx    # Expertise section
│   └── Testimonials.tsx          # Client testimonials
├── public/
│   ├── Kothar_tech-nobg.png      # Logo (transparent)
│   ├── kothar-tech-logo-only-nobg.png  # Favicon
│   └── *.jpg                     # Section images
├── lib/
│   └── utils.ts                  # Utility functions
├── .env.local.example            # Environment variables template
├── .gitignore                    # Git ignore rules
├── components.json               # Shadcn/ui config
├── next.config.mjs               # Next.js config
├── package.json                  # Dependencies
├── postcss.config.mjs            # PostCSS config
├── README.md                     # This file
├── SETUP_EMAIL.md                # Email setup guide
├── tailwind.config.ts            # Tailwind config
└── tsconfig.json                 # TypeScript config
```

---

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server (http://localhost:3000)

# Production Build
npm run build        # Create optimized production build
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint to check code quality

# Type Checking
npx tsc --noEmit     # Check TypeScript types without building
```

---

## 📧 Email Integration

The contact form uses **EmailJS** for email delivery. When a user submits the form:

1. Form data is collected in the client-side component
2. Data is sent directly to EmailJS service
3. EmailJS processes and sends the email via your configured email service
4. Email arrives at `info@kotharedu.com`
5. User receives success/error feedback

### Email Features

- ✅ Client-side email sending (no backend required)
- ✅ Customizable email templates
- ✅ All form fields included (name, email, phone, subject, message)
- ✅ Reply-to automatically set to customer's email
- ✅ Form validation and error handling
- ✅ Success/error feedback to user
- ✅ Free tier: 200 emails/month

### Setup Steps

1. Create account at [emailjs.com](https://www.emailjs.com/)
2. Set up email service (Gmail, Outlook, etc.)
3. Create email template with variables
4. Add credentials to `.env.local`
5. Test your contact form!

See [SETUP_EMAIL.md](SETUP_EMAIL.md) for detailed instructions.

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Connect repository in Netlify
3. Add environment variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Deploy!

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- AWS Amplify
- Railway
- Render
- DigitalOcean App Platform

---

## 🎨 Customization

### Changing Colors

The website uses two primary colors:

**Orange:** `#ed6a06`  
**Teal:** `#63afc7`

To change colors, search and replace in:

- Component files (`components/*.tsx`)
- Global CSS (`app/globals.css`)

### Updating Content

- **Services:** Edit `components/Services.tsx`
- **Projects:** Edit `components/Portfolio.tsx`
- **Testimonials:** Edit `components/Testimonials.tsx`
- **Contact Info:** Edit `components/Contact.tsx` and `components/Footer.tsx`

### Adding New Sections

1. Create a new component in `components/`
2. Import it in `app/page.tsx`
3. Add it to the page layout

### Changing Logo

Replace these files in `/public/`:

- `Kothar_tech-nobg.png` - Main logo
- `kothar-tech-logo-only-nobg.png` - Favicon/icon

Update references in:

- `app/layout.tsx` (favicon)
- `components/Header.tsx` (header logo)
- `components/Footer.tsx` (footer logo)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is proprietary and confidential. All rights reserved by Kothar Tech Solutions Pvt. Ltd.

---

## 📞 Contact

**Kothar Tech Solutions**

- **Email:** info@kotharedu.com
- **Phone:** 0430 082 553
- **Location:** Kotharedu, Australia
- **Website:** [Your website URL]

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Shadcn/ui](https://ui.shadcn.com/) - Component Library
- [EmailJS](https://www.emailjs.com/) - Email Service
- [Vercel](https://vercel.com/) - Hosting Platform
- [Tailwind CSS](https://tailwindcss.com/) - Styling Framework

---

<div align="center">
  <p>Made with ❤️ by Kothar Tech Solutions</p>
  <p>© 2024 Kothar Tech Solutions Private Limited. All rights reserved.</p>
</div>
# kothar-tech-solutions
