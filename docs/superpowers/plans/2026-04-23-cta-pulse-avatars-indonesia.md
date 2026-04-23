# CTA Pulse Animation, Testimonial SVG Avatars & Indonesia Market — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a glow-pulse animation to all CTA buttons, replace testimonial initial-letter avatars with inline SVG person icons, and add Indonesia as a 4th market across all relevant copy.

**Architecture:** Pure CSS keyframe animation for the pulse (no JS, no dependencies). SVG icon replaces the initial letter inside the existing gradient circle — keeps layout identical. Indonesia added via text edits across 4 files.

**Tech Stack:** Next.js 14, Tailwind CSS, inline CSS via `style` prop, `globals.css` for keyframes.

---

## File Map

| File | Change |
|------|--------|
| `src/app/globals.css` | Add `@keyframes cta-pulse` + `.btn-cta` class |
| `src/components/ui/Button.tsx` | Add `btn-cta` to base class string |
| `src/components/home/HeroSection.tsx` | Add `btn-cta` to inline `<a>`; update market text |
| `src/components/home/FounderSection.tsx` | Add `btn-cta` to inline `<a>`; update market count and text |
| `src/components/home/ProofSection.tsx` | Replace initial div with SVG avatar; remove `initial` field |
| `src/components/layout/Footer.tsx` | Add `· ID` to market tagline |
| `src/app/layout.tsx` | Add `'ID'` to `areaServed` array |

---

### Task 1: Add CSS pulse animation

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Add the keyframe and utility class**

In `src/app/globals.css`, inside the `@layer utilities` block (after the `.reveal-right` rule), add:

```css
  .btn-cta {
    animation: cta-pulse 2.2s ease-in-out infinite;
  }

  .btn-cta:hover {
    animation-play-state: paused;
  }
```

Then, **before** `@layer utilities` (at root level, after the `:root` block), add:

```css
@keyframes cta-pulse {
  0%, 100% { box-shadow: 0 4px 20px rgba(94,175,223,0.30); }
  50%       { box-shadow: 0 4px 36px rgba(141,78,202,0.60), 0 0 0 8px rgba(141,78,202,0.09); }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/globals.css
git commit -m "feat: add cta-pulse keyframe animation"
```

---

### Task 2: Apply btn-cta to Button component

**Files:**
- Modify: `src/components/ui/Button.tsx`

- [ ] **Step 1: Add btn-cta to the base class string**

Current `base` constant (line 23):
```ts
const base =
  'inline-flex items-center justify-center gap-2 px-10 py-[18px] rounded-lg text-white font-bold text-[13px] tracking-[0.08em] uppercase no-underline border-none cursor-pointer whitespace-nowrap transition-[filter,box-shadow] duration-200 hover:brightness-110'
```

Replace with:
```ts
const base =
  'inline-flex items-center justify-center gap-2 px-10 py-[18px] rounded-lg text-white font-bold text-[13px] tracking-[0.08em] uppercase no-underline border-none cursor-pointer whitespace-nowrap transition-[filter] duration-200 hover:brightness-110 btn-cta'
```

Note: `transition-[filter,box-shadow]` is changed to `transition-[filter]` to avoid the transition interfering with the keyframe on `box-shadow`.

- [ ] **Step 2: Commit**

```bash
git add src/components/ui/Button.tsx
git commit -m "feat: apply btn-cta pulse to Button component"
```

---

### Task 3: Apply btn-cta to inline CTA anchors

**Files:**
- Modify: `src/components/home/HeroSection.tsx`
- Modify: `src/components/home/FounderSection.tsx`

- [ ] **Step 1: Update HeroSection inline CTA (line 90–95)**

Current:
```tsx
<a
  href="#cta"
  className="inline-flex items-center justify-center gap-2 px-10 py-[18px] rounded-lg text-white font-bold text-[13px] tracking-[0.08em] uppercase transition-[filter,box-shadow] duration-200 hover:brightness-110"
  style={{ background: 'var(--grad)', boxShadow: 'var(--shadow-btn)' }}
>
  Agendar sesión estratégica gratuita
</a>
```

Replace with:
```tsx
<a
  href="#cta"
  className="inline-flex items-center justify-center gap-2 px-10 py-[18px] rounded-lg text-white font-bold text-[13px] tracking-[0.08em] uppercase transition-[filter] duration-200 hover:brightness-110 btn-cta"
  style={{ background: 'var(--grad)' }}
>
  Agendar sesión estratégica gratuita
</a>
```

- [ ] **Step 2: Update FounderSection inline CTA (lines 85–91)**

Current:
```tsx
<a
  href="#cta"
  className="inline-flex items-center justify-center gap-2 px-10 py-[18px] rounded-lg text-white font-bold text-[13px] tracking-[0.08em] uppercase transition-[filter,box-shadow] duration-200 hover:brightness-110"
  style={{ background: 'var(--grad)', boxShadow: 'var(--shadow-btn)' }}
>
  Habla con James
</a>
```

Replace with:
```tsx
<a
  href="#cta"
  className="inline-flex items-center justify-center gap-2 px-10 py-[18px] rounded-lg text-white font-bold text-[13px] tracking-[0.08em] uppercase transition-[filter] duration-200 hover:brightness-110 btn-cta"
  style={{ background: 'var(--grad)' }}
>
  Habla con James
</a>
```

- [ ] **Step 3: Commit**

```bash
git add src/components/home/HeroSection.tsx src/components/home/FounderSection.tsx
git commit -m "feat: apply btn-cta pulse to inline CTA anchors"
```

---

### Task 4: Replace testimonial initials with SVG avatars

**Files:**
- Modify: `src/components/home/ProofSection.tsx`

- [ ] **Step 1: Remove `initial` field from testimonials and add SVG avatar**

Replace the entire `TESTIMONIALS` constant and the avatar markup.

Current `TESTIMONIALS`:
```ts
const TESTIMONIALS = [
  {
    text: '"Pasamos de depender 100% de referidos a tener un pipeline constante de prospectos cualificados. El sistema de filtrado fue el mayor cambio estructural que hemos implementado en la agencia."',
    name: 'Ana Martínez',
    role: 'Directora · Jana Real Estate · Miami',
    initial: 'A',
  },
  {
    text: '"En tres meses, el porcentaje de leads que llegaba a reunión con perfil real de compra pasó del 15% al 62%. Ahora invierto mi tiempo donde tiene sentido económico — y se nota en el P&L."',
    name: 'Carlos Ruiz',
    role: 'Broker · Azul Inversiones · Madrid',
    initial: 'C',
  },
]
```

Replace with:
```ts
const TESTIMONIALS = [
  {
    text: '"Pasamos de depender 100% de referidos a tener un pipeline constante de prospectos cualificados. El sistema de filtrado fue el mayor cambio estructural que hemos implementado en la agencia."',
    name: 'Ana Martínez',
    role: 'Directora · Jana Real Estate · Miami',
  },
  {
    text: '"En tres meses, el porcentaje de leads que llegaba a reunión con perfil real de compra pasó del 15% al 62%. Ahora invierto mi tiempo donde tiene sentido económico — y se nota en el P&L."',
    name: 'Carlos Ruiz',
    role: 'Broker · Azul Inversiones · Madrid',
  },
]
```

- [ ] **Step 2: Replace the initial div with SVG avatar in the JSX**

Current avatar markup (lines 85–92):
```tsx
<div className="flex items-center gap-3">
  <div
    className="w-[42px] h-[42px] rounded-full flex items-center justify-center text-[16px] font-bold text-white flex-shrink-0"
    style={{ background: 'var(--grad-135)' }}
    aria-hidden="true"
  >
    {t.initial}
  </div>
```

Replace with:
```tsx
<div className="flex items-center gap-3">
  <div
    className="w-[42px] h-[42px] rounded-full flex items-center justify-center flex-shrink-0"
    style={{ background: 'var(--grad-135)' }}
  >
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="11" cy="7.5" r="4" fill="white" />
      <path d="M2 21c0-4.97 4.03-9 9-9s9 4.03 9 9" fill="white" />
    </svg>
  </div>
```

- [ ] **Step 3: Commit**

```bash
git add src/components/home/ProofSection.tsx
git commit -m "feat: replace testimonial initials with SVG person avatars"
```

---

### Task 5: Add Indonesia market across all files

**Files:**
- Modify: `src/components/home/HeroSection.tsx`
- Modify: `src/components/home/FounderSection.tsx`
- Modify: `src/components/layout/Footer.tsx`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: HeroSection — update credibility bar and paragraph**

Credibility bar (line 102), current:
```tsx
{['US · ES · EAU', 'Sistema propietario FCI', 'Sin compromiso · 30 minutos'].map((item) => (
```

Replace with:
```tsx
{['US · ES · EAU · ID', 'Sistema propietario FCI', 'Sin compromiso · 30 minutos'].map((item) => (
```

Paragraph text (line 87), current:
```tsx
El framework que implementamos con agentes y firmas en US, España y EAU<br className="hidden md:block" />
```

Replace with:
```tsx
El framework que implementamos con agentes y firmas en US, España, EAU e Indonesia<br className="hidden md:block" />
```

- [ ] **Step 2: FounderSection — update STATS count, badge, and body text**

`STATS` constant, current:
```ts
const STATS = [
  { num: '+6', label: 'Años en ventas B2B' },
  { num: '3', label: 'Mercados activos' },
  { num: '3', label: 'Idiomas operativos' },
]
```

Replace with:
```ts
const STATS = [
  { num: '+6', label: 'Años en ventas B2B' },
  { num: '4', label: 'Mercados activos' },
  { num: '3', label: 'Idiomas operativos' },
]
```

Badge inside photo column (line 52), current:
```tsx
<div className="text-[26px] font-black leading-none mb-[3px] gradient-text">3</div>
<div className="text-[11px] text-gray-text font-medium max-w-[80px] leading-[1.4]">mercados activos</div>
```

Replace with:
```tsx
<div className="text-[26px] font-black leading-none mb-[3px] gradient-text">4</div>
<div className="text-[11px] text-gray-text font-medium max-w-[80px] leading-[1.4]">mercados activos</div>
```

Body text (line 69), current:
```tsx
Con operaciones en Estados Unidos, España y Emiratos Árabes, trabajamos exclusivamente con profesionales que ya tienen tracción real y quieren escalar con estructura — no con volumen. Si llegas aquí buscando atajos, no somos tu opción.
```

Replace with:
```tsx
Con operaciones en Estados Unidos, España, Emiratos Árabes e Indonesia, trabajamos exclusivamente con profesionales que ya tienen tracción real y quieren escalar con estructura — no con volumen. Si llegas aquí buscando atajos, no somos tu opción.
```

- [ ] **Step 3: Footer — update market tagline**

Line 22, current:
```tsx
Growth Partner · Real Estate · US · ES · EAU
```

Replace with:
```tsx
Growth Partner · Real Estate · US · ES · EAU · ID
```

- [ ] **Step 4: layout.tsx — update areaServed schema**

Line 53, current:
```ts
areaServed: ['US', 'ES', 'AE'],
```

Replace with:
```ts
areaServed: ['US', 'ES', 'AE', 'ID'],
```

- [ ] **Step 5: Commit**

```bash
git add src/components/home/HeroSection.tsx src/components/home/FounderSection.tsx src/components/layout/Footer.tsx src/app/layout.tsx
git commit -m "feat: add Indonesia as 4th market across site copy"
```

---

### Task 6: Visual verification

- [ ] **Step 1: Start dev server**

```bash
npm run dev
```

Open `http://localhost:3000` and verify:

1. **CTA buttons pulse** — the purple/blue glow breathes in and out on Hero CTA, Founder CTA, and any `<Button>` component instances. Pauses on hover.
2. **Testimonial avatars** — white person icon on gradient circle, no initial letters visible.
3. **Indonesia market** — "US · ES · EAU · ID" in Hero credibility bar and Footer; "4 mercados activos" in Founder stats and badge; Indonesia in Founder body text.

- [ ] **Step 2: Final commit if all looks correct**

```bash
git add -A
git commit -m "chore: verify UI changes complete"
```
