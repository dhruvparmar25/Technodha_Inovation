# SaaS UI Design Spec

## Project Scope
Design two pages using the existing multi-product SaaS visual system:
1. Project Detail Page
2. Portfolio Listing Page

This spec strictly reuses the current design pattern (spacing, typography, containers, cards, and CTA behavior).

---

## Shared Design System Rules
- Typography: `Poppins` (same heading/body scale as existing sections)
- Brand accent: `#fb6557` to `#fe9139` gradient
- Base background: `#faf9f6` with subtle white section/card surfaces
- Content container: centered `max-w-[1230px]` and horizontal `15px` padding
- Section rhythm: consistent vertical spacing (`pt-16`, `mt-10` pattern)
- Card style: white background, rounded-xl, border `#f2c5be`, soft hover shadow
- CTA style: existing gradient/arrow behavior from current shared button component

---

## Page 1: Project Detail Page
Use this structure for both:
- OHC Web App
- ERP System

### 1. Hero Section
- Project Title
- Short Description (1-2 lines)
- Primary CTA button (`Book a Demo` or `Request Consultation`)
- Optional breadcrumb to match internal page pattern

### 2. Overview Section
- Brief project explanation
- Suggested layout: two-column desktop, single-column mobile
- Optional right-side metadata card: industry, platform, timeline, team size

### 3. Problem Section
- Heading: `The Problem`
- 3 concise challenge cards
- Each card: short title + one supporting sentence

### 4. Solution Section
- Heading: `Our Solution`
- Clear narrative paragraph + structured bullet points
- Optional split layout with solution text and UI preview placeholder

### 5. Key Features Section
- Feature grid (3 columns desktop, 2 tablet, 1 mobile)
- Each feature card includes:
  - icon placeholder
  - feature title
  - short description

### 6. Screens / Preview Section
- UI image placeholder gallery
- 1 primary large preview + 2-3 secondary previews
- Keep consistent rounded corners, borders, and spacing

### 7. Outcomes / Benefits Section
- Impact cards with measurable outcomes
- Suggested examples:
  - Faster operations
  - Reduced manual effort
  - Better visibility and reporting

### 8. Final Call To Action
- Full-width engagement block
- Headline + short support line + primary button
- Match existing CTA hierarchy and spacing

---

## Page 2: Portfolio Listing Page
Projects to include:
- EHR Web App
- EHR Application
- Housekeeping App

### Layout
- Card grid: 3 columns desktop, 2 tablet, 1 mobile

### Each Project Card Must Include
- Project image placeholder
- Project title
- Short description
- `View Details` button

### Suggested Card Copy
- **EHR Web App**: Web-based electronic health record platform for care teams and admin workflows.
- **EHR Application**: Clinical data management application focused on secure records and faster access.
- **Housekeeping App**: Task and room-operations management app for efficient housekeeping coordination.

---

## Consistency Checklist
- Reuse existing container widths and gutters
- Reuse existing typography hierarchy
- Reuse existing card visuals and elevation
- Reuse existing CTA styles and interactions
- Keep light minimal SaaS aesthetics across both pages
- Avoid introducing unrelated components or experimental layouts
