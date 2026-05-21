---
name: Celestial Terminal
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#37393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#cdc6b2'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#96907e'
  outline-variant: '#4b4737'
  surface-tint: '#dcc661'
  primary: '#ffffff'
  on-primary: '#393000'
  primary-container: '#f9e37a'
  on-primary-container: '#746400'
  inverse-primary: '#6d5e00'
  secondary: '#c2c6d8'
  on-secondary: '#2b303e'
  secondary-container: '#424656'
  on-secondary-container: '#b0b4c7'
  tertiary: '#ffffff'
  on-tertiary: '#233143'
  tertiary-container: '#d4e4fa'
  on-tertiary-container: '#576679'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f9e37a'
  primary-fixed-dim: '#dcc661'
  on-primary-fixed: '#211b00'
  on-primary-fixed-variant: '#524600'
  secondary-fixed: '#dee2f5'
  secondary-fixed-dim: '#c2c6d8'
  on-secondary-fixed: '#161b29'
  on-secondary-fixed-variant: '#424656'
  tertiary-fixed: '#d4e4fa'
  tertiary-fixed-dim: '#b9c8de'
  on-tertiary-fixed: '#0d1c2d'
  on-tertiary-fixed-variant: '#39485a'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
  surface-deep: '#111827'
  surface-elevated: '#1A2235'
  star-white: rgba(255, 255, 255, 0.8)
  glow-amber: rgba(254, 231, 126, 0.15)
typography:
  display-lg:
    fontFamily: Metropolis
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Metropolis
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Metropolis
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Metropolis
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
  nav-link:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-gap: 120px
  section-gap-mobile: 64px
  container-max-width: 1200px
  gutter: 24px
---

## Brand & Style

This design system is engineered for a premium, immersive developer portfolio that balances technical precision with cosmic wonder. The brand personality is visionary, sophisticated, and authoritative, positioning the developer as a master of the digital "deep space."

The visual style is a fusion of **Corporate Modern** and **Glassmorphism**, leaning heavily into high-contrast accents against a monochromatic dark void. The interface should feel like a high-end command deck—clean, functional, yet atmospheric. Key stylistic pillars include:
- **Atmospheric Depth:** Use of z-axis layering through transparency and blurred background orbs.
- **Radiant Accents:** Strategic use of glow effects to guide attention and signify interactivity.
- **Cinematic Motion:** Fluid, "fade-in-up" transitions that suggest the assembly of a complex system.

## Colors

The palette is anchored by the "Deep Space" navy to establish an infinite, immersive canvas. **Amber Gold** serves as the singular chromatic driver, used for calls-to-action, status indicators, and critical highlights.

- **Primary Background:** `#080D1A`. This is the absolute base.
- **Surface Tiers:** Use `#111827` for standard containers and `#1A2235` for cards that require maximum lift.
- **Typography:** Use `#FFFFFF` for primary headings to ensure crisp legibility. Use `#94A3B8` (Slate) for secondary descriptions and metadata to maintain visual hierarchy.
- **Exclusion Zone:** Do not introduce purples, violets, or secondary vibrant hues. All "light" should feel like starlight or amber-tinted instrumentation.

## Typography

The typography strategy pairs the geometric precision of **Metropolis** (serving as a superior alternative to Poppins for a more professional, "tech" edge) with the clean readability of **DM Sans**.

- **Headlines:** Set in Metropolis with tight letter-spacing. Display styles should use Bold (700) for a commanding presence.
- **Body:** DM Sans provides a friendly yet neutral reading experience. Ensure line heights are generous (1.5x+) to support readability against dark backgrounds.
- **Monospace Accents:** JetBrains Mono is introduced for labels, skill tags, and small technical metadata to reinforce the developer-centric narrative.

## Layout & Spacing

This system utilizes a **12-column fluid grid** for desktop and a **single-column fluid layout** for mobile. The layout philosophy emphasizes "Breatheability"—large vertical gaps between sections prevent the dark theme from feeling cramped.

- **Vertical Rhythm:** Use a 120px gap between major portfolio sections.
- **Reflow Rules:** On mobile, horizontal margins should shrink to 20px while maintaining the vertical stack of cards.
- **Alignment:** Content should be primarily center-aligned for hero sections to maximize the "impact" of background bokeh effects, transitioning to left-aligned for content-heavy project descriptions.

## Elevation & Depth

Hierarchy is established through transparency and light rather than traditional heavy shadows.

- **Background Layer:** The base navy floor features low-opacity Navy-Blue bokeh orbs and a static "Star Field" (0.5px to 1.5px white dots with 10%–40% opacity).
- **Surface Layer:** Project cards and containers use a semi-transparent fill of `surface-elevated` with a 1px border. 
- **Interactive Elevation:** On hover, cards do not just "lift" (TranslateY -4px), they emit an **Amber Gold outer glow** (`box-shadow: 0 0 20px rgba(254, 231, 126, 0.2)`).
- **Glassmorphism:** The Navigation Bar utilizes a 70% blur (15px–20px) with a very thin bottom border (`rgba(255,255,255,0.1)`) to feel like a floating HUD.

## Shapes

The design system employs **Soft** roundedness. This prevents the UI from feeling too "toy-like" (which happens with high-radius pills) while avoiding the aggressive sharpness of brutalism.

- **Standard Elements:** 4px (0.25rem) for input fields and small buttons.
- **Large Elements:** 8px (0.5rem) for project cards and skill containers.
- **Pill Exception:** Skill badges and small decorative tags use a full pill radius to contrast against the structured grid of the cards.

## Components

### Buttons
- **Primary:** Solid Amber Gold (#FEE77E) background with Dark Navy (#080D1A) text. High-contrast, bold weight.
- **Secondary:** Amber Gold 1.5px outline with White text. On hover, fills with a 10% Amber opacity.

### Project Cards
- Constructed with `Surface-Elevated` background.
- Features a persistent bottom-aligned "Stack Tag" row using JetBrains Mono labels.
- Integration of a GitHub icon button in the top-right corner, appearing as a ghost button that gains full opacity on hover.

### Skill Badges
- Small, dark containers with a 4px Amber Gold dot prepended to the text.
- Border-color should be a muted version of the slate text to keep them subtle.

### Timeline
- A vertical 2px central line in Amber Gold.
- Event markers are 12px circles with a 4px Amber glow.
- Content alternate sides on desktop; single-sided on mobile.

### Input Fields
- Dark Navy background with a 1px Slate border. 
- On focus, the border transitions to Amber Gold with a subtle internal glow.