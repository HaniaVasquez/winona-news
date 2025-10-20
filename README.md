# Winona News — Nuxt Blog Challenge

This project is a **technical assessment** for the **Website Tech Lead** position at [By Winona](https://bywinona.com).  
It demonstrates my ability to build a performant, SEO-friendly, and content-driven marketing site using **Nuxt 4**, **TailwindCSS**, **Nuxt UI**, and **Contentful** as a headless CMS while maintaining **Winona’s brand identity** through custom theme colors and UI consistency.

---

## 🚀 Overview

The goal of this challenge was to build a **simple blog** that:

- Displays articles loaded dynamically from a CMS (Contentful)
- Includes fields for **title**, **published date**, **description**, **content**, **featured image**, and **slug**
- Follows **SEO best practices**
- Uses **modern Nuxt architecture** with clean and scalable code

The project also includes real-world production setup elements:

- **Server-Side Rendering (SSR)** for fresh content and SEO
- **Automatic deployments** with **Vercel**
- **Continuous Integration (CI/CD)** via GitHub
- **Responsive, accessible, and brand-aligned dark/light mode UI** built with Nuxt UI and TailwindCSS

---

## 🧠 Tech Stack

| Layer          | Technology                                            | Purpose                                                |
| -------------- | ----------------------------------------------------- | ------------------------------------------------------ |
| **Framework**  | [Nuxt 4 (RC)](https://nuxt.com)                       | Hybrid rendering, file-based routing, SEO optimization |
| **Styling**    | [TailwindCSS](https://tailwindcss.com)                | Utility-first responsive styling                       |
| **UI Kit**     | [Nuxt UI](https://ui.nuxt.com)                        | Prebuilt components and composable design system       |
| **CMS**        | [Contentful](https://www.contentful.com)              | Headless content management and API integration        |
| **Deployment** | [Vercel](https://vercel.com)                          | Hosting with SSR and edge caching                      |
| **CI/CD**      | [GitHub Actions](https://github.com/features/actions) | Automated build and deployment pipeline                |
| **Branding**   | Winona colors — `#A783FF`, `#A686F3`, `#0F0F0F`       | Custom Tailwind theme for consistent brand look        |
| **Dark Mode**  | Built-in via Nuxt UI + Tailwind                       | Auto adapts to system theme for better UX              |

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/HaniaVasquez/winona-news.git
cd winona-news
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment variables

Create a `.env` file in the root directory with your Contentful credentials:

```
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ENVIRONMENT=master
CONTENTFUL_DELIVERY_TOKEN=your_delivery_token
CONTENTFUL_PREVIEW_TOKEN=your_preview_token
```

> **Note:**  
> The Contentful space for this project was created using the official **Contentful starter template** (specifically page blog Post as content type), which provides a base content model for articles, authors, and media.
>
> The `.env` file is **not committed** for security reasons.  
> If you’d like to run the project locally with real data, I can provide **temporary read-only Contentful credentials upon request.**

### 4. Run the development server

```bash
npm run dev
```

Then visit [http://localhost:3000](http://localhost:3000) to view the app.

### 5. Build for production

```bash
npm run build
npm run preview
```

---

## 🖼️ Features

- 📰 **Dynamic blog content** — articles fetched via Contentful API
- ⚡ **Fast rendering** — Server-Side Rendering (SSR) for SEO and instant content refresh
- 🎨 **Polished UI with Winona branding** — Nuxt UI components styled with Tailwind using Winona’s colors (`#A783FF`, `#A686F3`, `#0F0F0F`)
- 🌙 **Dark mode ready** — automatic detection and seamless theme switching
- 📱 **Fully responsive layout** for all screen sizes
- 🔍 **Optimized SEO** — meta tags, Open Graph, and Twitter cards
- 🧩 **Reusable components** — modular and scalable architecture
- 🔄 **Automatic redeploys** on content or code updates (via CI/CD)

---

## 🌍 Deployment

The project is deployed on **Vercel** with SSR enabled, ensuring that:

- Updates from Contentful appear instantly (no rebuild required)
- Every commit to `main` triggers a new deployment
- Pull Requests generate **preview URLs** for review

✅ **Production URL:** [https://winona-news.vercel.app](https://winona-news.vercel.app)

---

## 🔁 CI/CD Workflow

1. **GitHub Actions** runs automated linting and testing
2. **Vercel** builds and deploys every commit automatically
3. **Preview Deployments** are generated for PRs for QA and design review
4. Merging to `main` = instant production release

This approach ensures fast iteration, safe deployment, and continuous feedback.

---

## 🧪 Posible Future Improvements

- Add global search and tag filtering
- Integrate Contentful webhooks for incremental static revalidation
- Include pagination for better content navigation
- Add accessibility audits (Pa11y / Axe)
- Create admin-friendly content preview via Contentful web app

---

## ⚙️ Technical Decisions

Although the assessment requested **Nuxt 3**, I chose to build this project with **Nuxt 4 (RC)** — the upcoming stable version — because it offers:

- **Improved developer experience** with faster HMR and better TypeScript support
- **Enhanced performance and SSR optimizations** out of the box
- **Forward compatibility** — ensuring the project remains future-proof as Nuxt 4 replaces Nuxt 3
- Full compatibility with the existing **Nuxt UI** and **TailwindCSS** ecosystem

This decision reflects a real-world approach: balancing innovation with stability, while keeping the codebase aligned with the latest framework standards that the industry (and Winona’s stack) will soon adopt.

---

## ✨ Author

**Hania Vásquez**  
Website Tech Lead Candidate  
📧 haniavasquez@gmail.com
