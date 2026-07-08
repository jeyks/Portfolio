# Developer Portfolio

A modern, responsive personal portfolio built with Next.js (App Router), React, TypeScript, and Tailwind CSS. Supports light/dark mode via `next-themes`, subtle animations via Framer Motion, and icons via Lucide React.

## Tech Stack

- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- next-themes (dark/light mode)
- Framer Motion (animations)
- Lucide React (icons)

## Project Structure

```
app/
  layout.tsx        Root layout, metadata, theme provider, navbar/footer
  page.tsx           Home page composing all sections
  globals.css         Tailwind layers + shared utility classes
components/
  Navbar.tsx          Sticky nav, mobile menu, theme toggle
  ThemeToggle.tsx      Light/dark toggle button
  ThemeProvider.tsx    next-themes wrapper
  SectionWrapper.tsx   Shared fade-in-on-scroll section container
  Hero.tsx
  About.tsx
  Skills.tsx
  Projects.tsx
  ProjectCard.tsx      Reusable project card
  Experience.tsx
  Education.tsx
  Certifications.tsx
  Contact.tsx
  Footer.tsx
data/
  portfolio.ts         All sample content (edit this to personalize)
lib/
  types.ts             Shared TypeScript interfaces
public/
  resume.pdf           Placeholder — replace with your real resume
```

## Personalizing

Almost everything you'd want to change lives in `data/portfolio.ts`:
- Name, title, intro, summary, career goals, interests
- Email / LinkedIn / GitHub links
- Skills, projects, experience, education, certifications

Replace `public/resume.pdf` with your actual resume, and swap the profile photo placeholder in `components/Hero.tsx` for a real `<Image />` once you have a photo.

The contact form in `components/Contact.tsx` currently simulates a submission. Wire it up to a real backend (an API route, Formspree, Resend, etc.) before deploying for real use.

## Running Locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Building for Production

```bash
npm run build
npm run start
```

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to https://vercel.com/new and import the repository.
3. Vercel auto-detects Next.js — no extra config needed.
4. Click Deploy.

Alternatively, with the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## Accessibility & Performance Notes

- Semantic HTML landmarks (`header`, `main`, `section`, `footer`) are used throughout.
- All interactive elements have visible focus states and `aria-label`s where needed.
- Images use `next/image` for automatic optimization.
- Animations are subtle and respect a professional, minimal aesthetic — consider adding a `prefers-reduced-motion` check in `SectionWrapper.tsx` if you want to fully respect reduced-motion settings.
