# La Casa del Alfarero (LCDA) Website

[![Next.js](https://img.shields.io/badge/Next.js-13.5-blue?logo=nextdotjs)](https://nextjs.org/) 
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3-teal?logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployment-black?logo=vercel)](https://vercel.com/)

**Project Status: MVP Complete & Running**

This repository contains the **website for La Casa del Alfarero (LCDA)**, a church in Scranton, PA, part of **IPUL (Iglesia Pentecostal Unida Latinoamérica)**. The website provides information about the church's ministries, events, announcements, and online giving, with support for **English and Spanish**.

---

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/donacianojesus/LCDA-website.git
cd LCDA-website

# Install dependencies
npm install

# Start development server
npm run dev
```

The website will be available at [http://localhost:3000](http://localhost:3000)

---

## Tech Stack (Implemented)

- **Frontend:** Next.js 13+ with App Router
- **Styling:** Tailwind CSS  
- **Language:** TypeScript
- **Routing:** Next.js App Router (`/app` structure)
- **Components:** React functional components with hooks
- **Responsive Design:** Mobile-first approach

---

## Features (Implemented)

- **Homepage** with welcome message and service times
- **About page** (mission, history, leadership, values)
- **Ministries page** (Youth, Women's, Men's, Children, Music, Outreach)
- **Events & Announcements page** with upcoming events
- **Contact page** with contact form and information
- **Online Giving page** with donation form
- **Responsive navigation** with language toggle (ES/EN)
- **Mobile-first responsive design**
- **Modern UI/UX** with Tailwind CSS

---

## Project Structure

```
LCDA-website/
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   ├── events/        # Events page
│   │   ├── give/          # Giving page
│   │   ├── ministries/    # Ministries page
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Homepage
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.tsx     # Navigation component
│   │   └── Footer.tsx     # Footer component
│   ├── styles/            # CSS and Tailwind
│   │   └── globals.css    # Global styles
│   └── lib/               # Utilities & helpers
├── .gitignore             # Git ignore file
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── postcss.config.js      # PostCSS configuration
└── package.json           # Dependencies and scripts
```

---

## Design Features

- **Color Scheme:** Primary blues with secondary grays
- **Typography:** Inter font family for modern readability
- **Components:** Reusable card, button, and section components
- **Responsive:** Mobile-first design with breakpoint-based layouts
- **Accessibility:** Semantic HTML and proper contrast ratios

---

## Next Steps (Phase 2)

- [ ] **Internationalization:** Implement `next-intl` for full bilingual support
- [ ] **CMS Integration:** Add Sanity or Contentful for content management
- [ ] **Payment Processing:** Integrate Stripe for online donations
- [ ] **Google Maps:** Add real location and directions
- [ ] **Contact Form:** Backend integration for form submissions
- [ ] **SEO Optimization:** Meta tags, sitemap, and analytics

---

## Pages Overview

1. **Homepage** (`/`) - Welcome, service times, quick links
2. **About** (`/about`) - Mission, vision, values, history, leadership
3. **Ministries** (`/ministries`) - All church ministries and involvement
4. **Events** (`/events`) - Upcoming events and announcements
5. **Give** (`/give`) - Online giving and donation information
6. **Contact** (`/contact`) - Contact form and church information

---

## Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Deployment

The website is ready for deployment to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---


## Acknowledgments

- Built with Next.js and Tailwind CSS
- Designed for La Casa del Alfarero church community
- Special thanks to the IPUL organization

---

**Last Updated:** August 2025  
**Status:** MVP Complete - Ready for Production Deployment
