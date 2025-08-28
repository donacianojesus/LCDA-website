# La Casa del Alfarero (LCDA) Website

[![Next.js](https://img.shields.io/badge/Next.js-13.5-blue?logo=nextdotjs)](https://nextjs.org/) 
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3-teal?logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployment-black?logo=vercel)](https://vercel.com/)

**Work in Progress / Planned Project**

This repository contains the **planned website for La Casa del Alfarero (LCDA)**, a church in Scranton, PA, part of **IPUL (Iglesia Pentecostal Unida Latinoamérica)**. The website is being designed to provide information about the church’s ministries, events, announcements, and online giving, with support for **English and Spanish**.

---

## Tech Stack (Planned)

- **Frontend:** Next.js + TypeScript  
- **Styling:** Tailwind CSS  
- **Routing & Pages:** Next.js `/pages` structure  
- **Internationalization:** `next-intl` / i18next (English & Spanish)  
- **Hosting/Deployment:** Vercel  
- **Content Management:** Planned CMS integration (Sanity / Contentful)  
- **Donations:** PayPal or Stripe integration planned  

---

## Planned Features

- Homepage with welcome message and service times  
- About page (mission, history, leadership)  
- Ministries (Youth, Women’s, Men’s, Outreach)  
- Events & Announcements section  
- Online Giving / Donations page  
- Contact page (address, email, Google Maps)  
- English/Spanish language toggle  
- Mobile-first responsive design  
- Future enhancements: CMS integration, sermon archive, newsletter signup  

---

## Project Structure (Planned)

```
church-website/
├── public/ # Static assets (images, icons)
├── src/
│ ├── pages/ # Next.js pages (Home, About, Ministries, etc.)
│ ├── components/ # Reusable UI components
│ ├── styles/ # Tailwind CSS
│ ├── lib/ # Utilities & helpers (i18n, API)
│ └── data/ # Static JSON/Markdown (temporary)
├── .env.local # API keys (future)
├── next.config.js # Next.js config
├── tailwind.config.js # Tailwind config
├── tsconfig.json # TypeScript config
└── package.json
```

---

## Developer Roadmap

**Phase 1 – MVP:**  

- Setup Next.js + Tailwind + TypeScript  
- Create static pages (Home, About, Ministries, Events, Donate, Contact)  
- Basic navbar + footer  
- Sample static content  
- Deploy MVP to Vercel  

**Phase 2 – Enhancements:**  

- Add bilingual support  
- Dynamic events/announcements via CMS or Google Sheets  
- Improved donation workflow (Stripe Checkout)  

**Phase 3 – Advanced Features:**  

- Admin dashboard for staff  
- Sermon archive  
- Newsletter signup and analytics  

---

## Notes

- This project is **planned and a work in progress**.  
- Features, structure, and design are subject to change as development progresses.  
- Contributions, suggestions, and feedback are welcome!
