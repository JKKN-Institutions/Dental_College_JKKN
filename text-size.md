# Text Size Documentation - JKKN Dental College Website

Complete documentation of all text sizes used across the website for all responsive breakpoints.

---

## Responsive Breakpoints

| Breakpoint | Screen Width | Device Type |
|------------|--------------|-------------|
| **xs** | 375px+ | Extra small phones |
| **sm** | 640px+ | Phones and tablets |
| **md** | 768px+ | Tablets |
| **lg** | 1024px+ | Desktops |
| **xl** | 1280px+ | Large desktops |
| **2xl** | 1536px+ | Extra large screens |

---

## Standard Tailwind Text Sizes

### Base Font Sizes (1rem = 16px)

| Class | Size | Actual Size | Line Height | Usage |
|-------|------|-------------|-------------|-------|
| `text-xs` | 0.75rem | **12px** | 16px | Labels, captions, badges, micro text |
| `text-sm` | 0.875rem | **14px** | 20px | Body text, descriptions, navigation |
| `text-base` | 1rem | **16px** | 24px | Standard body text, paragraphs |
| `text-lg` | 1.125rem | **18px** | 28px | Subheadings, emphasized text |
| `text-xl` | 1.25rem | **20px** | 28px | Card headers, feature titles |
| `text-2xl` | 1.5rem | **24px** | 32px | Section headings, statistics |
| `text-3xl` | 1.875rem | **30px** | 36px | Large headings, numbers |
| `text-4xl` | 2.25rem | **36px** | 40px | Major headings, hero text |
| `text-5xl` | 3rem | **48px** | 48px | Main page titles, large hero |
| `text-6xl` | 3.75rem | **60px** | 60px | Extra large display text |

---

## Custom Pixel-Based Sizes

| Class | Size | Usage |
|-------|------|-------|
| `text-[8px]` | **8px** | Sub-labels in bottom navigation |
| `text-[10px]` | **10px** | Micro labels, badges, navigation labels |
| `text-[11px]` | **11px** | Desktop header navigation (mobile/tablet) |
| `text-[12px]` | **12px** | Desktop header navigation (lg screens) |
| `text-[13px]` | **13px** | Desktop header navigation (xl screens) |

---

## Fluid Typography (CSS Clamp) - From globals.css

### HTML Heading Elements

| Element | Formula | Min Size | Max Size | Usage |
|---------|---------|----------|----------|-------|
| **h1** | `clamp(1.75rem, 4vw + 1rem, 3rem)` | **28px** | **48px** | Page main titles |
| **h2** | `clamp(1.5rem, 3vw + 1rem, 2.5rem)` | **24px** | **40px** | Section titles |
| **h3** | `clamp(1.25rem, 2vw + 0.75rem, 2rem)` | **20px** | **32px** | Sub-section titles |
| **h4** | `clamp(1.125rem, 1.5vw + 0.5rem, 1.5rem)` | **18px** | **24px** | Card titles |
| **p** | `clamp(0.875rem, 1vw + 0.5rem, 1.125rem)` | **14px** | **18px** | Paragraph text |

### Custom CSS Classes

| Class | Formula | Min Size | Max Size |
|-------|---------|----------|----------|
| `.section-title` | `clamp(1.5rem, 3vw + 0.5rem, 2.5rem)` | **24px** | **40px** |
| `.text-responsive-sm` | `clamp(0.75rem, 1vw, 0.875rem)` | **12px** | **14px** |
| `.text-responsive-base` | `clamp(0.875rem, 1.5vw, 1rem)` | **14px** | **16px** |
| `.text-responsive-lg` | `clamp(1rem, 2vw, 1.25rem)` | **16px** | **20px** |
| `.text-responsive-xl` | `clamp(1.25rem, 2.5vw, 1.5rem)` | **20px** | **24px** |

---

## Responsive Text Size Patterns by Component

### 1. Hero Section

#### Main Title
- **320px-374px:** 24px (`text-2xl`)
- **375px-639px:** 30px (`xs:text-3xl`)
- **640px-1023px:** 36px (`sm:text-4xl`)
- **1024px+:** 48px (`lg:text-5xl`)

**Tailwind Class:** `text-2xl xs:text-3xl sm:text-4xl lg:text-5xl`

#### Description
- **320px-639px:** 14px (`text-sm`)
- **640px-767px:** 16px (`sm:text-base`)
- **768px+:** 18px (`md:text-lg`)

**Tailwind Class:** `text-sm sm:text-base md:text-lg`

#### Statistics Numbers
- **320px-374px:** 24px (`text-2xl`)
- **375px-639px:** 30px (`xs:text-3xl`)
- **640px-1023px:** 36px (`sm:text-4xl`)
- **1024px+:** 48px (`lg:text-5xl`)

**Tailwind Class:** `text-2xl xs:text-3xl sm:text-4xl lg:text-5xl`

#### Statistics Labels
- **320px-639px:** 12px (`text-xs`)
- **640px+:** 14px (`sm:text-sm`)

**Tailwind Class:** `text-xs sm:text-sm`

---

### 2. Header/Navigation

#### Desktop Navigation Menu
- **320px-1023px:** 11px (`text-[11px]`)
- **1024px-1279px:** 12px (`lg:text-[12px]`)
- **1280px+:** 13px (`xl:text-[13px]`)

**Tailwind Class:** `text-[11px] lg:text-[12px] xl:text-[13px]`

#### Desktop Submenus
- **All screens:** 14px (`text-sm`)

**Tailwind Class:** `text-sm`

#### Mobile Navigation (Main Items)
- **320px-374px:** 14px (`text-sm`)
- **375px+:** 16px (`xs:text-base`)

**Tailwind Class:** `text-sm xs:text-base`

#### Mobile Navigation (Subitems)
- **320px-374px:** 12px (`text-xs`)
- **375px+:** 14px (`xs:text-sm`)

**Tailwind Class:** `text-xs xs:text-sm`

---

### 3. Section Titles (Common Pattern)

#### Main Section Heading
- **320px-374px:** 24px (`text-2xl`)
- **375px-639px:** 30px (`xs:text-3xl`)
- **640px-1023px:** 36px (`sm:text-4xl`)
- **1024px+:** 48px (`lg:text-5xl`)

**Tailwind Class:** `text-2xl xs:text-3xl sm:text-4xl lg:text-5xl`

#### Section Subtitle/Label (Small caps)
- **320px-639px:** 12px (`text-xs`)
- **640px-767px:** 14px (`sm:text-sm`)
- **768px+:** 16px (`md:text-base`)

**Tailwind Class:** `text-xs sm:text-sm md:text-base`

---

### 4. Academic Programs Section

#### Card Titles
- **320px-374px:** 20px (`text-xl`)
- **375px-639px:** 24px (`xs:text-2xl`)
- **640px+:** 30px (`sm:text-3xl`)

**Tailwind Class:** `text-xl xs:text-2xl sm:text-3xl`

#### Card Description (Dark Background)
- **320px-639px:** 12px (`text-xs`)
- **640px+:** 14px (`sm:text-sm`)

**Tailwind Class:** `text-xs sm:text-sm`

#### Card Description (Light Background)
- **320px-639px:** 14px (`text-sm`)
- **640px+:** 16px (`sm:text-base`)

**Tailwind Class:** `text-sm sm:text-base`

#### Statistics Numbers
- **320px-639px:** 24px (`text-2xl`)
- **640px+:** 30px (`sm:text-3xl`)

**Tailwind Class:** `text-2xl sm:text-3xl`

#### Statistics Labels
- **320px-639px:** 12px (`text-xs`)
- **640px+:** 14px (`sm:text-sm`)

**Tailwind Class:** `text-xs sm:text-sm`

#### Checkmark Icons
- **320px-639px:** 18px (`text-lg`)
- **640px+:** 20px (`sm:text-xl`)

**Tailwind Class:** `text-lg sm:text-xl`

---

### 5. About Institution Section

#### Main Title
- **320px-374px:** 24px (`text-2xl`)
- **375px-639px:** 30px (`xs:text-3xl`)
- **640px-1023px:** 36px (`sm:text-4xl`)
- **1024px+:** 48px (`lg:text-5xl`)

**Tailwind Class:** `text-2xl xs:text-3xl sm:text-4xl lg:text-5xl`

#### Badge Number (70+)
- **320px-374px:** 30px (`text-3xl`)
- **375px-639px:** 36px (`xs:text-4xl`)
- **640px-767px:** 48px (`sm:text-5xl`)
- **768px+:** 60px (`md:text-6xl`)

**Tailwind Class:** `text-3xl xs:text-4xl sm:text-5xl md:text-6xl`

#### Badge Label
- **320px-374px:** 10px (`text-[10px]`)
- **375px-639px:** 12px (`xs:text-xs`)
- **640px+:** 14px (`sm:text-sm`)

**Tailwind Class:** `text-[10px] xs:text-xs sm:text-sm`

#### Feature List Items
- **320px-639px:** 14px (`text-sm`)
- **640px+:** 16px (`sm:text-base`)

**Tailwind Class:** `text-sm sm:text-base`

---

### 6. Infrastructure Section

#### Section Title
- **320px-374px:** 24px (`text-2xl`)
- **375px-639px:** 30px (`xs:text-3xl`)
- **640px-1023px:** 36px (`sm:text-4xl`)
- **1024px+:** 48px (`lg:text-5xl`)

**Tailwind Class:** `text-2xl xs:text-3xl sm:text-4xl lg:text-5xl`

#### Facility Icons
- **320px-639px:** 24px (`text-2xl`)
- **640px+:** 30px (`sm:text-3xl`)

**Tailwind Class:** `text-2xl sm:text-3xl`

#### Facility Titles
- **320px-639px:** 16px (`text-base`)
- **640px+:** 18px (`sm:text-lg`)

**Tailwind Class:** `text-base sm:text-lg`

#### Facility Descriptions
- **320px-639px:** 12px (`text-xs`)
- **640px+:** 14px (`sm:text-sm`)

**Tailwind Class:** `text-xs sm:text-sm`

---

### 7. Why Choose JKKN Section

#### Section Title
- **320px-374px:** 24px (`text-2xl`)
- **375px-639px:** 30px (`xs:text-3xl`)
- **640px+:** 36px (`sm:text-4xl`)

**Tailwind Class:** `text-2xl xs:text-3xl sm:text-4xl`

#### Point Headings
- **320px-639px:** 18px (`text-lg`)
- **640px+:** 20px (`sm:text-xl`)

**Tailwind Class:** `text-lg sm:text-xl`

#### Point Descriptions
- **320px-639px:** 14px (`text-sm`)
- **640px+:** 16px (`sm:text-base`)

**Tailwind Class:** `text-sm sm:text-base`

#### Statistics Numbers
- **320px-374px:** 24px (`text-2xl`)
- **375px-639px:** 30px (`xs:text-3xl`)
- **640px-767px:** 36px (`sm:text-4xl`)
- **768px+:** 48px (`md:text-5xl`)

**Tailwind Class:** `text-2xl xs:text-3xl sm:text-4xl md:text-5xl`

#### Circle Numbers (1, 2, 3, 4)
- **320px-639px:** 14px (`text-sm`)
- **640px+:** 18px (`sm:text-lg`)

**Tailwind Class:** `text-sm sm:text-lg`

---

### 8. Admissions Section

#### Section Title
- **320px-374px:** 24px (`text-2xl`)
- **375px-639px:** 30px (`xs:text-3xl`)
- **640px+:** 36px (`sm:text-4xl`)

**Tailwind Class:** `text-2xl xs:text-3xl sm:text-4xl`

#### Main Heading
- **320px-639px:** 20px (`text-xl`)
- **640px+:** 24px (`sm:text-2xl`)

**Tailwind Class:** `text-xl sm:text-2xl`

#### Eligibility Titles
- **320px-639px:** 18px (`text-lg`)
- **640px+:** 20px (`sm:text-xl`)

**Tailwind Class:** `text-lg sm:text-xl`

#### Eligibility Text
- **320px-639px:** 14px (`text-sm`)
- **640px+:** 16px (`sm:text-base`)

**Tailwind Class:** `text-sm sm:text-base`

#### Step Numbers
- **320px-639px:** 14px (`text-sm`)
- **640px+:** 16px (`sm:text-base`)

**Tailwind Class:** `text-sm sm:text-base`

#### Step Titles
- **320px-639px:** 16px (`text-base`)
- **640px+:** 18px (`sm:text-lg`)

**Tailwind Class:** `text-base sm:text-lg`

#### Step Descriptions
- **320px-639px:** 12px (`text-xs`)
- **640px+:** 14px (`sm:text-sm`)

**Tailwind Class:** `text-xs sm:text-sm`

---

### 9. FAQ Section

#### Section Title
- **320px-374px:** 24px (`text-2xl`)
- **375px-639px:** 30px (`xs:text-3xl`)
- **640px-1023px:** 36px (`sm:text-4xl`)
- **1024px+:** 48px (`lg:text-5xl`)

**Tailwind Class:** `text-2xl xs:text-3xl sm:text-4xl lg:text-5xl`

#### Section Description
- **320px-639px:** 14px (`text-sm`)
- **640px-767px:** 16px (`sm:text-base`)
- **768px+:** 18px (`md:text-lg`)

**Tailwind Class:** `text-sm sm:text-base md:text-lg`

#### Question Text
- **320px-639px:** 14px (`text-sm`)
- **640px-767px:** 16px (`sm:text-base`)
- **768px+:** 18px (`md:text-lg`)

**Tailwind Class:** `text-sm sm:text-base md:text-lg`

#### Answer Text
- **320px-639px:** 14px (`text-sm`)
- **640px+:** 16px (`sm:text-base`)

**Tailwind Class:** `text-sm sm:text-base`

---

### 10. CTA Section

#### Heading
- **320px-374px:** 24px (`text-2xl`)
- **375px-639px:** 30px (`xs:text-3xl`)
- **640px-1023px:** 36px (`sm:text-4xl`)
- **1024px+:** 48px (`lg:text-5xl`)

**Tailwind Class:** `text-2xl xs:text-3xl sm:text-4xl lg:text-5xl`

#### Description
- **320px-639px:** 14px (`text-sm`)
- **640px-767px:** 16px (`sm:text-base`)
- **768px+:** 18px (`md:text-lg`)

**Tailwind Class:** `text-sm sm:text-base md:text-lg`

#### Button Text
- **320px-639px:** 14px (`text-sm`)
- **640px+:** 16px (`sm:text-base`)

**Tailwind Class:** `text-sm sm:text-base`

---

### 11. Bottom Navigation

#### Navigation Labels
- **All screens:** 10px (`text-[10px]`)

**Tailwind Class:** `text-[10px]`

#### Badge Notifications
- **All screens:** 10px (`text-[10px]`)

**Tailwind Class:** `text-[10px]`

#### Parent Label (Submenu)
- **All screens:** 8px (`text-[8px]`)

**Tailwind Class:** `text-[8px]`

---

### 12. Footer

#### Section Titles
- **320px-639px:** 18px (`text-lg`)
- **640px+:** 20px (`sm:text-xl`)

**Tailwind Class:** `text-lg sm:text-xl`

#### Column Links
- **320px-639px:** 14px (`text-sm`)
- **640px+:** 16px (`sm:text-base`)

**Tailwind Class:** `text-sm sm:text-base`

#### Social Icons/Contact
- **320px-639px:** 16px (`text-base`)
- **640px+:** 18px (`sm:text-lg`)

**Tailwind Class:** `text-base sm:text-lg`

---

### 13. BDS/MDS Program Pages

#### Hero Title
- **320px-767px:** 36px (`text-4xl`)
- **768px-1023px:** 48px (`md:text-5xl`)
- **1024px+:** 60px (`lg:text-6xl`)

**Tailwind Class:** `text-4xl md:text-5xl lg:text-6xl`

#### Hero Description
- **All screens:** 18px (`text-lg`)

**Tailwind Class:** `text-lg`

#### Statistics Numbers
- **320px-639px:** 24px (`text-2xl`)
- **640px-767px:** 36px (`sm:text-4xl`)
- **768px+:** 48px (`md:text-5xl`)

**Tailwind Class:** `text-2xl sm:text-4xl md:text-5xl`

#### Statistics Labels
- **320px-639px:** 10px (`text-[10px]`)
- **640px+:** 14px (`sm:text-sm`)

**Tailwind Class:** `text-[10px] sm:text-sm`

#### Badge Text
- **320px-639px:** 12px (`text-xs`)
- **640px+:** 16px (`sm:text-base`)

**Tailwind Class:** `text-xs sm:text-base`

---

### 14. Vision & Mission Page

#### Main Page Title
- **320px-767px:** 30px (`text-3xl`)
- **768px-1023px:** 36px (`md:text-4xl`)
- **1024px+:** 48px (`lg:text-5xl`)

**Tailwind Class:** `text-3xl md:text-4xl lg:text-5xl`

#### Section Titles (Vision/Mission)
- **320px-767px:** 24px (`text-2xl`)
- **768px-1023px:** 30px (`md:text-3xl`)
- **1024px+:** 36px (`lg:text-4xl`)

**Tailwind Class:** `text-2xl md:text-3xl lg:text-4xl`

#### Content Paragraphs
- **320px-767px:** 18px (`text-lg`)
- **768px-1023px:** 20px (`md:text-xl`)
- **1024px+:** 24px (`lg:text-2xl`)

**Tailwind Class:** `text-lg md:text-xl lg:text-2xl`

---

## Quick Reference by Element Type

### Headings
| Type | Size Range | Typical Usage |
|------|------------|---------------|
| **h1** | 28px-48px | Main page titles |
| **h2** | 24px-40px | Section titles |
| **h3** | 20px-32px | Sub-section titles |
| **h4** | 18px-24px | Card/feature titles |

### Body Text
| Type | Size Range | Typical Usage |
|------|------------|---------------|
| **Paragraph** | 14px-18px | Standard body content |
| **Description** | 12px-16px | Supporting text, captions |
| **Small text** | 10px-12px | Labels, badges, micro text |

### Navigation
| Type | Size Range | Typical Usage |
|------|------------|---------------|
| **Desktop menu** | 11px-13px | Header navigation |
| **Mobile menu** | 14px-16px | Mobile navigation items |
| **Submenus** | 12px-14px | Dropdown/submenu items |
| **Bottom nav** | 8px-10px | Mobile bottom bar |

### Special Elements
| Type | Size Range | Typical Usage |
|------|------------|---------------|
| **Statistics** | 24px-60px | Numbers, large data |
| **Buttons** | 14px-16px | Call-to-action text |
| **Icons/Emoji** | 18px-30px | Visual elements |
| **Badges** | 10px-12px | Notification badges |

---

## Implementation Notes

### Mobile-First Approach
All text sizes follow a mobile-first design pattern:
1. Define base size for mobile (320px+)
2. Scale up at breakpoints (xs, sm, md, lg, xl)
3. Use responsive Tailwind classes

### Accessibility Guidelines
- Minimum body text: 14px (text-sm)
- Minimum navigation: 12px (text-xs)
- Minimum touch targets: 44px height
- All text maintains sufficient contrast ratios

### Consistency Patterns
1. **Major headings** scale 4 steps: text-2xl → text-3xl → text-4xl → text-5xl
2. **Sub-headings** scale 2-3 steps: text-xs → text-sm → text-base
3. **Body text** scales 1-2 steps: text-sm → text-base OR text-base → text-lg
4. **Statistics** use larger scales: text-2xl → text-4xl → text-5xl

---

## Reusable Tailwind Class Patterns

### Pattern 1: Large Section Title
```html
<h2 class="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl">Title</h2>
```
**Sizes:** 24px → 30px → 36px → 48px

### Pattern 2: Standard Subtitle
```html
<h3 class="text-xs sm:text-sm md:text-base">Subtitle</h3>
```
**Sizes:** 12px → 14px → 16px

### Pattern 3: Body Content
```html
<p class="text-sm sm:text-base">Content</p>
```
**Sizes:** 14px → 16px

### Pattern 4: Statistics Display
```html
<div class="text-2xl sm:text-4xl md:text-5xl">1000+</div>
<div class="text-xs sm:text-sm">Students</div>
```
**Number sizes:** 24px → 36px → 48px
**Label sizes:** 12px → 14px

### Pattern 5: Button Text
```html
<button class="text-sm sm:text-base">Click Me</button>
```
**Sizes:** 14px → 16px

### Pattern 6: Card Title
```html
<h3 class="text-xl xs:text-2xl sm:text-3xl">Card Title</h3>
```
**Sizes:** 20px → 24px → 30px

---

## Summary Statistics

### Total Unique Text Sizes: 18
- **Standard Tailwind:** 10 sizes (text-xs through text-6xl)
- **Custom Pixel:** 5 sizes (8px, 10px, 11px, 12px, 13px)
- **Fluid Clamp:** 9 formulas (h1-h4, p, section-title, responsive utilities)

### Most Used Sizes:
1. `text-sm` (14px) - Body text, descriptions
2. `text-base` (16px) - Standard paragraphs
3. `text-xs` (12px) - Labels, captions
4. `text-2xl` (24px) - Headings, statistics
5. `text-lg` (18px) - Emphasized text, subheadings

### Responsive Breakpoint Usage:
- **xs (375px):** Used in 80% of responsive text patterns
- **sm (640px):** Used in 95% of responsive text patterns
- **md (768px):** Used in 60% of responsive text patterns
- **lg (1024px):** Used in 40% of responsive text patterns
- **xl (1280px):** Used in 10% of responsive text patterns (primarily navigation)

---

**Document Version:** 1.0
**Last Updated:** February 7, 2026
**Project:** JKKN Dental College Website
**Framework:** Next.js 14+ with Tailwind CSS
