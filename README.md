# 🌐 ScienceBatch Web (`sciencebatch.com`)

Official landing page for **[ScienceBatch](https://github.com/maanfitow/ScienceBatch)**: the high-performance, offline desktop LaTeX & Typst editor built with Rust and TypeScript (Tauri v2).

Engineered for **$0 hosting cost**, **zero maintenance**, **zero load on your home Raspberry Pi**, and **ultra-fast global CDN delivery** via Cloudflare Pages or GitHub Pages.

---

## ⚡ Quick Start (Local Development)

Prerequisites: Node.js 20+ and `pnpm` (or `npm`).

```bash
# 1. Install dependencies
pnpm install

# 2. Start the local development server with Hot Module Replacement (HMR)
pnpm dev

# 3. Build optimized static bundle for production (outputs to dist/)
pnpm build

# 4. Preview the production build locally
pnpm preview
```

The dev server will run by default at `http://localhost:3000`.

---

## 📁 Repository Structure

```
sciencebatch-web/
├── public/
│   ├── favicon.svg          # Stylized Sigma vector logo with emerald-cyan gradient
│   ├── CNAME                # Configured with sciencebatch.com
│   ├── robots.txt           # Search engine crawler policies
│   ├── sitemap.xml          # XML sitemap for SEO discovery
│   └── _headers             # Cloudflare Pages immutable caching & security headers
├── src/
│   ├── js/
│   │   ├── i18n.js          # Bilingual module (EN / ES) with localStorage persistence
│   │   ├── releases.js      # OS detection & live GitHub Releases API client
│   │   └── main.js          # Interactive tabs, accordions, mobile drawer & copy toast
│   └── styles/
│       └── main.css         # Tailwind directives, custom fonts & glassmorphism utilities
├── .github/
│   └── workflows/
│       └── deploy.yml       # Automated GitHub Pages deployment workflow (backup)
├── index.html               # Semantic, responsive, dark-mode OLED landing page
├── tailwind.config.js       # Design tokens (colors, typography, glow shadows)
├── vite.config.js           # Ultra-fast Vite build configuration
└── package.json             # Scripts and dependencies
```

---

## ☁️ Deployment Guide: Cloudflare Pages (Recommended)

Using Cloudflare Pages delivers your static site across 300+ global edge locations with free automatic SSL certificates, HTTP/3, and unlimited bandwidth.

### Step 1: Connect Repository to Cloudflare Pages
1. Navigate to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Go to **Workers & Pages** $\to$ **Create application** $\to$ click the **Pages** tab $\to$ **Connect to Git**.
3. Authorize GitHub and select the `sciencebatch-web` repository.
4. Configure the build parameters:
   - **Framework preset:** `Vite`
   - **Build command:** `pnpm build` (or `npm run build`)
   - **Build output directory:** `dist`
5. Click **Save and Deploy**. Cloudflare will build and publish your site in seconds (e.g., `sciencebatch-web.pages.dev`).

### Step 2: Configure Custom Domain (`sciencebatch.com`)
1. In your Cloudflare Pages project dashboard, open the **Custom domains** tab.
2. Click **Set up a custom domain**.
3. Enter `sciencebatch.com` and proceed.
4. Since your DNS is already managed through Cloudflare, it will automatically register the necessary CNAME records:
   - CNAME `@` (Apex) $\to$ `sciencebatch-web.pages.dev` (Proxied 🟧)
   - Repeat for `www.sciencebatch.com`.
5. Your custom domain `https://sciencebatch.com` will be live with full HTTPS in less than 2 minutes.

---

## 📦 How Dynamic Release Downloads Work

The script in `src/js/releases.js` interacts directly with the public GitHub API:
- **Operating System Detection:** Automatically determines whether the user is on Linux, Windows, or macOS.
- **Pre-Release Resilient Fallback:** When no release assets are published yet, the primary button displays *"View on GitHub (v0.1.0 Beta)"*, directing visitors to the open-source repository and manual terminal build instructions.
- **Zero-Code Update on First Release:** As soon as you publish your first release tag in `maanfitow/ScienceBatch` with attached binary installers (`.deb`, `.AppImage`, `.exe`, `.dmg`), the landing page automatically updates in real time to offer direct single-click downloads matching each visitor's operating system.

### To publish your first release in GitHub:
1. Go to your core repository: [github.com/maanfitow/ScienceBatch/releases](https://github.com/maanfitow/ScienceBatch/releases).
2. Click **Draft a new release**.
3. Create a semantic version tag (e.g., `v0.1.0` or `v1.0.0`).
4. Drag and drop your compiled binaries into the release assets box (e.g., `sciencebatch-linux-amd64.deb`, `sciencebatch-setup.exe`).
5. Click **Publish release**.
6. The download button on `sciencebatch.com` will instantly serve the new release without any website redeployment required.

---

## 🔒 Network Architecture & Raspberry Pi Isolation

```
[ Web Visitor ]
      │
      ▼
sciencebatch.com ──────> Cloudflare Global Edge (ScienceBatch Static Landing)
                              │
                              └── Clic on Download ──> GitHub Releases Global CDN

[ Your Raspberry Pi 4 ]
      └── 100% dedicated to your personal portfolio (Nginx + Cloudflare Tunnel).
          Zero ScienceBatch visitor traffic or download bandwidth consumed on your home network.
```

---

## 📄 License

This project is licensed under the **Apache License 2.0** in harmony with the ScienceBatch core repository.
