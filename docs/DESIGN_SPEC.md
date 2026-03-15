# GR Moms - Design & Technical Specification

## 1. Brand Summary
**Name:** GR Moms
**Tagline:** A softer place for Grand Rapids moms to connect.
**Core Feel:** Warm, feminine-modern, safe, community-centered, elegant, nurturing, locally rooted.
**Target Audience:** Moms, expecting moms, and caregivers in Grand Rapids / West Michigan.

## 2. Logo Concept Directions
*   **Primary Concept:** A heart integrated with a location pin (representing local love) in Blush Pink and Plum Accent.
*   **Secondary Concept:** Stylized floral wreath around "GR" in Sage Green and Dusty Rose.
*   **Typography:** "GR Moms" in a refined serif (e.g., DM Serif Display) paired with a clean sans-serif tagline.

## 3. Design System Overview
**Color Palette:**
*   Blush Pink: #F7D6E7
*   Dusty Rose: #D98FB3
*   Lavender: #CDB4F6
*   Warm Cream: #FFF9F4
*   Sage Green: #C9D9C3
*   Plum Accent: #7B4B6A
*   Soft Mauve: #B993B6
*   Charcoal Text: #2F2A2E
*   Light Gray Border: #E9E2E7
*   White: #FFFFFF

**Typography:**
*   Headings: DM Serif Display / Playfair Display
*   Body: Inter / Nunito Sans

## 4. Architecture Recommendation
**Frontend:** Next.js (React), Tailwind CSS.
**Backend (Recommended):** Firebase (Auth, Firestore, Storage, Functions) for ease of MVP and real-time features.
**Hosting:** GitHub Pages (Static Export) or Vercel/Firebase Hosting.

## 5. Database Schema (Firestore)
*   **users:** { id, email, role, profile... }
*   **posts:** { id, title, content, authorId, isAnonymous, type (blog/community)... }
*   **resources:** { id, title, category, location... }
*   **events:** { id, title, date, location... }

## 6. Admin & Moderation
*   **Role-based Access:** Guest, Member, Moderator, Admin.
*   **Moderation Queue:** For reviewing anonymous posts before publication.
