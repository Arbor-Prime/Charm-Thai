# Charm Thai Restaurant — Project Memory

## Project Overview
Premium multi-page website for **Charm Thai Restaurant**, Bath, UK. Award-winning authentic Thai restaurant at 2 George Street, Bath BA1 2EH.

**Created:** January 2026  
**Stack:** React + FastAPI + MongoDB + Tailwind CSS  
**URL:** https://charm-thai-menu.preview.emergentagent.com

---

## Architecture

### Frontend (`/app/frontend/src/`)
- `App.js` — React Router with all 9 routes
- `components/Navigation.jsx` — Sticky nav, transparent→black on scroll, mobile hamburger
- `components/Footer.jsx` — Dark footer, social links, opening hours, award badges
- `pages/HomePage.jsx` — Hero, About, Text Feature, Signature Dishes, Gallery Preview, Reviews, Private Dining CTA, Order Strip, Find Us
- `pages/MenuPage.jsx` — Full menu with 11 category tabs, all items from foodbooking.com
- `pages/PrivateDiningPage.jsx` — Function room info + enquiry form
- `pages/WhatsOnPage.jsx` — 3 Wix-hosted videos with HTML5 modal player + social links
- `pages/GalleryPage.jsx` — Masonry gallery with category filter + lightbox
- `pages/ContactPage.jsx` — Google Map + reservation form
- `pages/PrivacyPage.jsx` — Privacy Policy
- `pages/TermsPage.jsx` — Terms & Conditions
- `pages/CookiePage.jsx` — Cookie Policy

### Backend (`/app/backend/`)
- `server.py` — FastAPI with `/api/enquiry` POST endpoint (MongoDB storage)

---

## Pages & Routes
| Route | Page |
|-------|------|
| `/` | Home |
| `/menu` | Full Menu (11 tabs) |
| `/private-dining` | Function Room + Enquiry Form |
| `/whats-on` | Videos + Social |
| `/gallery` | Photo Gallery |
| `/contact` | Contact + Reservation Form |
| `/privacy` | Privacy Policy |
| `/terms` | Terms & Conditions |
| `/cookies` | Cookie Policy |

---

## Key External Links
- Order Online: `https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=charm-thai-menu`
- Uber Eats: `https://www.ubereats.com/gb/store/charm-thai/oD4ILZtRQ8aa7e-WKP6emQ`
- Instagram: `https://www.instagram.com/charmthaiuk/`
- Facebook: `https://www.facebook.com/charmthaiuk/`
- TikTok: `https://www.tiktok.com/@charmthaiuk`

---

## Design System
- **Background:** #0A0A0A (primary), #111111 (alternate)
- **Gold:** #C9A96E (primary), #E8D5A3 (secondary)
- **Text:** #F5F0E8 (off-white)
- **Fonts:** Playfair Display (headings) + DM Sans (body) + Great Vibes (script)

---

## Content Sources
- Menu: Extracted from foodbooking.com (full menu, all 60+ dishes)
- Images: Wix CDN static.wixstatic.com + Unsplash/Pexels fallbacks
- Videos: video.wixstatic.com (3 restaurant tour videos)
- Contact: Phone 01225 481001, Email charmthaiuk@gmail.com, Address 2 George Street Bath BA1 2EH

---

## What's Been Implemented
- [2026-01] Complete 9-page website built from scratch
- [2026-01] Full menu with 60+ dishes in 11 category tabs
- [2026-01] HTML5 video player modal for What's On page
- [2026-01] Masonry gallery with lightbox
- [2026-01] Contact + Private Dining enquiry forms (API-backed)
- [2026-01] Sticky navigation + mobile hamburger
- [2026-01] Mobile sticky bottom bar (CALL + ORDER)
- [2026-01] Privacy Policy, T&Cs, Cookie Policy pages
- [2026-01] Legal pages (Privacy, T&Cs, Cookies)
- [2026-01] Backend /api/enquiry endpoint with MongoDB
- [2026-02] Food item images scraped from foodbooking.com CDN (fbgcdn.com), 104 images mapped to menu items by code — displayed as thumbnails in menu
- [2026-02] "Order for Delivery or Collection" section moved to directly below Hero section on homepage

---

## Prioritized Backlog

### P0 (Critical — Next)
- None currently blocking

### P1 (Important Enhancements)
- Add email notification on new enquiry (Resend/SendGrid integration)
- TripAdvisor reviews widget embed
- Google Reviews widget integration
- Add VAT-inclusive prices on menu (current prices are likely pre-VAT)

### P2 (Nice to Have)
- Online table booking widget (OpenTable/ResDiary)
- Animated Thai ornamental SVG dividers
- Blog/News section
- Loyalty program / newsletter signup
- WhatsApp chat widget
- Menu PDF download

---

## Core Restaurant Info (Static)
- **Name:** Charm Thai Restaurant
- **Address:** 2 George Street, Bath, Somerset, BA1 2EH
- **Phone:** 01225 481001
- **Email:** charmthaiuk@gmail.com
- **Hours:** Mon-Thu & Sun 12:00-21:00, Fri-Sat 12:00-22:00
- **Awards:** Bath Good Food Award (since 2013), TripAdvisor Travellers' Choice
- **Private Room:** Up to 30 guests
