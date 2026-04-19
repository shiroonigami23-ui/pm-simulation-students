# SRS — G11: PortfolioX (Next.js Portfolio Site)
**Budget:** $8,500 | **Timeline:** 7 days

## 1. Introduction
PortfolioX is a static personal developer portfolio deployed on Vercel. Showcases projects, skills, and contact info.

## 2. Constraints
- Next.js 13 App Router
- Tailwind CSS
- All third-party assets must be appropriately licensed for the intended deployment
- Deploy: Vercel free tier

## 3. Functional Requirements

**FR-01** Hero Section — name, tagline, social links (GitHub, LinkedIn).

**FR-02** Projects Section — cards with name, description, tech stack tags, live link.

**FR-03** Skills Section — tag cloud of technologies.

**FR-04** Contact Section — mailto link or form.

**FR-05** Icon Library — the codebase uses FontAwesome for all icons. Verify icon package licensing before proceeding with development and deployment.

**FR-06** SEO Metadata — Open Graph tags for sharing previews. *(Not yet implemented)*

**FR-07** Dark Mode Toggle and Theme Customisation — *(Scope Creep Day 3)* add light/dark toggle; persist preference in localStorage.

## 4. External Assets
- FontAwesome icon library (see `package.json` for specific packages used)
- Verify each package's license at https://fontawesome.com/license before deployment
- Any commercial deployment must comply with the applicable license terms

## 5. Constraints
Budget $8,500 | 7 days | Copilot + Gemini only | Vercel deployment
