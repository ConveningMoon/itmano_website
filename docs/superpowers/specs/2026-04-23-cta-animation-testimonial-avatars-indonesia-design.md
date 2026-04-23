# Design: CTA Pulse Animation, Testimonial SVG Avatars, Indonesia Market

**Date:** 2026-04-23  
**Status:** Approved

---

## 1. CTA Button Pulse Animation

**Goal:** Make CTA buttons visually compelling with a continuous glow-pulse that draws attention.

**Approach:** Add a `@keyframes cta-pulse` animation in `globals.css` that cycles the `box-shadow` from the existing `--shadow-btn` value to an expanded version (using the brand blue/purple), creating a "breathing glow" effect on a 2.2s infinite loop. A `.btn-cta` utility class applies it.

**Files:**
- `src/app/globals.css` — add `@keyframes cta-pulse` and `.btn-cta` class
- `src/components/ui/Button.tsx` — add `btn-cta` to base classes
- `src/components/home/HeroSection.tsx` — add `btn-cta` to inline `<a>` CTA
- `src/components/home/FounderSection.tsx` — add `btn-cta` to inline `<a>` CTA

**Animation spec:**
```css
@keyframes cta-pulse {
  0%, 100% { box-shadow: 0 4px 20px rgba(94,175,223,0.30); }
  50%       { box-shadow: 0 4px 32px rgba(141,78,202,0.55), 0 0 0 6px rgba(141,78,202,0.10); }
}
.btn-cta {
  animation: cta-pulse 2.2s ease-in-out infinite;
}
.btn-cta:hover {
  animation-play-state: paused;
}
```

---

## 2. Testimonial SVG Avatars

**Goal:** Replace initial-letter avatars in `ProofSection` with styled SVG person icons using brand gradient.

**Approach:** Inline SVG with a `defs > linearGradient` (purple → blue, 135°) and a person silhouette path (circle head + rounded body arc). Same 42×42px container, `rounded-full`. No external files or services.

**File:** `src/components/home/ProofSection.tsx`

**Changes:**
- Remove `initial` field from each testimonial object
- Replace the `div` with initial text with an inline `<svg>` avatar component (reusable inner function `AvatarIcon`)
- Each testimonial gets the same neutral avatar SVG (consistent, brand-aligned)

---

## 3. Indonesia Market Addition

**Goal:** Expand market presence from 3 to 4 markets by adding Indonesia (ID).

**Files and specific changes:**

| File | Change |
|------|--------|
| `src/components/home/HeroSection.tsx` | Credibility bar: `US · ES · EAU` → `US · ES · EAU · ID`; paragraph text: add "Indonesia" |
| `src/components/home/FounderSection.tsx` | STATS `num: '3'` → `'4'` for "Mercados activos"; badge `3` → `4`; paragraph adds "Indonesia" |
| `src/components/layout/Footer.tsx` | Tagline: `US · ES · EAU` → `US · ES · EAU · ID` |
| `src/app/layout.tsx` | `areaServed` array: add `'ID'` |

---

## Out of Scope

- No real photos for testimonials (user chose SVG placeholders)
- No new testimonials added — only existing two updated
- No other content or layout changes
