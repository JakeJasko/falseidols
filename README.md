# The Four False Idols Assessment

An interactive, mobile-first diagnostic assessment based on **St. Thomas Aquinas's** treatise on happiness in *Summa Theologiae* and Harvard social scientist **Arthur C. Brooks'** framework in *From Strength to Strength*.

The assessment guides users through 12 nuanced hypothetical dilemmas to determine which of the four classic earthly substitutes for happiness—**Money (*Divitiae*)**, **Power (*Potestas*)**, **Pleasure (*Voluptas*)**, or **Fame (*Gloria / Honor*)**—they unconsciously elevate as their primary idol under pressure.

---

## Live Deployment (GitHub Pages)

- **Production URL**: [https://hmnconsulting.github.io/falseidols/](https://hmnconsulting.github.io/falseidols/)
- **GitHub Repository**: [https://github.com/HMNConsulting/falseidols](https://github.com/HMNConsulting/falseidols)

> **Note on Enabling GitHub Pages**:
> 1. Go to repository **Settings** &rarr; **Pages** (`https://github.com/HMNConsulting/falseidols/settings/pages`).
> 2. Under **Build and deployment** &rarr; **Source**, select **GitHub Actions**.
> 3. The included workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) will automatically build and publish the site to GitHub Pages on every push to `main`.

---

## Core Framework: The Four False Idols

| Idol | Latin Title | Core Promise | Underlying Terror | The Hedonic Trap | Brooks' Antidote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Money** | *Divitiae* | Absolute autonomy & security | Scarcity & dependence | "Never enough" treadmill | Radical Generosity & Detachment |
| **Power** | *Potestas* | Control & architectural agency | Subjugation & helplessness | Fortress of distrust | Subsidiarity & Servant Leadership |
| **Pleasure** | *Voluptas* | Frictionless comfort & delight | Chronic pain & deprivation | Satiety cliff & numbness | Voluntary Asceticism & Constructive Hardship |
| **Fame** | *Gloria / Honor* | Peer admiration & validation | Obscurity & humiliation | Audience captivity | The Inner Scorecard & Quiet Love |

---

## Features

- **12 Multi-Faceted Dilemmas**: Realistic scenarios across career pivots, financial windfalls, social friction, late-night dread, and crisis reactions.
- **Full Spectrum Diagnostic Profile**:
  - Primary Core Idol & Archetype dossier.
  - Secondary "Shadow" Idol (your backup sanctuary when your primary drive is blocked).
  - Fourfold Spectrum distribution meter across all 4 idols.
  - Psychological anatomy breakdown (*The Seductive Promise*, *The Unconscious Terror*, *The Hedonic Treadmill*, *The Chronic Blind Spot*).
  - Arthur Brooks' tailored antidote with 3 concrete daily/weekly habits.
- **The Four Pillars of Happiness**: Educational drawer on Arthur Brooks' 4 true sources of well-being (Faith/Philosophy, Family, Friendship, Meaningful Work).
- **High-Resolution Share Card**: HTML5 Canvas engine that generates a 1080×1350 (4:5 portrait) editorial dossier image ready for download or social sharing.
- **Answer Audit Drawer**: Inspect all 12 dilemmas and see which idol each choice mapped to.
- **Classical Editorial Aesthetics**:
  - Typography: *Newsreader* (editorial serif), *Cinzel* (classical Roman letterforms), and *Plus Jakarta Sans*.
  - Dual Theme: Parchment Light Mode (`#FAF7F2`) and Contemplative Obsidian Dark Mode (`#151413`).
  - Mobile-first thumb ergonomics with tactile tap feedback and fluid directional slide transitions.

---

## Local Development

```bash
# Clone repository
git clone https://github.com/HMNConsulting/falseidols.git
cd falseidols

# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## Manual Deployment (Alternative to GitHub Actions)

If you prefer to deploy directly from your local terminal via the `gh-pages` branch:

```bash
npm run deploy
```
