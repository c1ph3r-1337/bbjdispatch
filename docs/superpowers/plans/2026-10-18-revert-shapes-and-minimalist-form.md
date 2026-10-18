# Revert Section 4 Capsule Shapes & Minimalist Icon Form Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Revert Section 4 cards back to their stadium capsule shape (`rounded-full`) with crisp yellow borders and zero drop-shadow glow, and rebuild the Course Query form with a minimalist icon-embedded design and subtle section dividers matching the user's reference image.

**Architecture:** 
- In [`src/components/GeometricGallery.tsx`](file:///vault/Projects/bbj-dispatch/src/components/GeometricGallery.tsx), restore `rounded-full` capsule geometry and remove the ambient yellow halo/shadow glow (`shadow-[0_0_30px_...]` and `ring-2`), keeping a clean `border-2 border-dispatch-yellow` border on active cards.
- In [`src/components/CourseQuerySection.tsx`](file:///vault/Projects/bbj-dispatch/src/components/CourseQuerySection.tsx), restructure the form fields to match the reference layout: section divider lines (`———— Personal Information ————` and `———— Course & Query ————`), embedded left icons (`User`, `Phone`, `BookOpen`, `MapPin`, `MessageSquare`), subtle translucent borders, and yellow focus rings.

**Tech Stack:** React 19, TypeScript, Tailwind CSS, Lucide React icons, Vite.

**Spec:** User prompt requesting shape reversion, glow removal, and minimalist icon-embedded form redesign based on `uploaded_media_1792334078903.png`.

## Global Constraints
- Minimal code changes under Ponytail mode: avoid unnecessary abstractions or state variables.
- Maintain WhatsApp integration and `9XXXXXXXXXX` phone placeholder.
- Maintain existing 4 courses: `Freight brokerage`, `Truck Dispatch`, `Dispatch course`, `Logging and Tracking course`.
- Retain WebP image optimization and preloading already implemented in Section 4.

## Review Focus
- Capsule content overflow: ensure course titles and descriptions stay neatly centered/padded inside `rounded-full` boundaries without clipping.
- Mobile viewport height (`100dvh`): keep form padding compact so users don't face double-scrollbars on mobile devices.
- Icon alignment: verify icons remain vertically centered inside inputs across both mobile and desktop screen sizes.
- Keyboard navigation & focus states: ensure inputs highlight with `border-dispatch-yellow` and `text-dispatch-yellow` on focus.
- Card hover & active transitions: ensure opacity transitions smoothly from dark overlay (`opacity-100`) to clear image (`opacity-0`).

---

### Task 1: Revert Section 4 Cards to Stadium Capsule Shape and Remove Glow

**Files:**
- Modify: `src/components/GeometricGallery.tsx`

- [ ] **Step 1: Update Card Outer and Inner Containers**
  - Change card container classes:
    - Replace `rounded-2xl` with `rounded-full`.
    - Restore stadium aspect ratio: `aspect-[1/1.38] sm:aspect-[1/1.45] md:aspect-[1/1.5]`.
    - Restore max width: `max-w-[155px] xs:max-w-[170px] sm:max-w-[190px] md:max-w-[210px]`.
  - Remove glow effect on active card:
    - Replace `border-2 border-dispatch-yellow ring-2 ring-dispatch-yellow/40 shadow-[0_0_30px_rgba(251,194,30,0.45)]` with clean `border-2 border-dispatch-yellow shadow-2xl shadow-black/80`.
  - Ensure centered content layout inside capsule:
    - `flex flex-col items-center justify-center p-3 sm:p-4 text-center`.

- [ ] **Step 2: Verify in Browser & Visual Inspection**
  - Run `npm run build` to confirm no syntax or JSX errors.

---

### Task 2: Redesign Course Query Form with Minimalist Icon Layout

**Files:**
- Modify: `src/components/CourseQuerySection.tsx`

- [ ] **Step 1: Import Required Lucide Icons**
  - Import `User`, `Phone`, `BookOpen`, `MapPin`, `MessageSquare`, `Send`, `CheckCircle` from `lucide-react`.

- [ ] **Step 2: Implement Subtle Section Dividers**
  - Add divider component or inline markup:
    - Line with centered label: `Personal Information`
    - Line with centered label: `Course & Inquiry`

- [ ] **Step 3: Update Inputs with Embedded Left Icons**
  - Wrap each input in a `relative group` container:
    - Absolute icon on left: `<User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-dispatch-yellow transition-colors" />`
    - Input with padding: `pl-10 pr-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/12 focus:border-dispatch-yellow focus:ring-1 focus:ring-dispatch-yellow/50 text-white placeholder:text-white/25 text-xs sm:text-sm transition-all outline-none`
  - Apply to:
    - Name field (`User` icon)
    - Phone field (`Phone` icon, placeholder `9XXXXXXXXXX`)
    - Course select (`BookOpen` icon, dropdown chevron on right)
    - City / Address (`MapPin` icon, placeholder `City, State`)
    - Details textarea (`MessageSquare` icon at `top-3 left-3.5`)

- [ ] **Step 4: Keep Clean Minimalist Styling & Yellow Accent Button**
  - Container: minimalist dark card `bg-[#0c151f]/70 border border-white/10 rounded-2xl p-5 sm:p-7`.
  - Action button: `Send Query via WhatsApp` with yellow background, dark text, and subtle hover lift.

---

### Task 3: Build Verification & Deployment

- [ ] **Step 1: Build Application**
  - Run `npm run build` and ensure 0 errors.

- [ ] **Step 2: Commit & Push**
  - Commit changes with message `fix(gallery,query): revert section 4 capsule shape, remove glow, and apply minimalist icon form design`.
  - Push to `main` and verify GitHub Pages workflow.
