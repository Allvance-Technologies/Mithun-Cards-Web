# ⚜️ Mitun Cards — Premium Invitation Solutions

An exquisite, state-of-the-art e-commerce platform designed for **Mitun Cards**, India's premier boutique studio for luxury wedding invitations and elegant social stationery.

This application is built with a sleek, responsive, and performance-optimized architecture leveraging Next.js and premium modern design aesthetics.

---

## ✨ Features & Architecture

* **⚜️ Exquisite Aesthetic & Palette:** A tailored dark-serif and warm cream-gold styling paradigm designed to wow customers at first glance.
* **📱 Responsive Design:** Completely optimized for high-resolution monitors, tablets, and mobile screens.
* **🔄 Advanced Filtering Suite:** Interactive sidebars inside the [Gallery](app/gallery/page.tsx) to instantly filter cards by Celebration type, Style, Color, and price sliders with real-time UI response.
* **📦 Dynamic Product Details:** Detail pages featuring zoomed mockups, zoomable gallery previews, specifications (paper type, weight, print technique), and structured order inquiry panels.
* **💡 Custom Design Studio:** Dedicated forms for clients wishing to order bespoke illustrations or custom bespoke invitations.
* **💬 Integrated Inquiries:** Integrated inquiry forms and a floating WhatsApp customer support trigger pointing directly to active business channels.

---

## 🛠️ Technology Stack

* **Framework:** [Next.js 16.2.6 (Turbopack Enabled)](https://nextjs.org/)
* **Runtime:** React 19.2.4
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Primitives:** [@base-ui/react](https://base-ui.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Animation:** [Framer Motion](https://www.framer.com/motion/)

---

## 🚀 Getting Started

### 1. Installation
Clone the repository and install all dependencies:
```bash
npm install
```

### 2. Development Server
Run the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) inside your browser to view the application with Hot Module Replacement (HMR).

### 3. Production Compilation & Export
Compile and generate the optimized static export assets:
```bash
npm run build
```
Static assets will be exported directly into the `/out` directory.

---

## 🌐 Automatic Deployment (GitHub Pages)

This project features a fully automated CI/CD pipeline inside [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

Every time a push is made to the `master` branch:
1. GitHub Actions spins up a runner.
2. Automatically configures sub-path prefix mapping (`basePath: '/Mithun-Cards-Web'`).
3. Installs, compiles, and builds the static assets.
4. Automatically deploys them directly to [GitHub Pages](https://allvance-technologies.github.io/Mithun-Cards-Web/).

---

*⚜️ Crafted with absolute care & elegance by Mitun Cards.*
