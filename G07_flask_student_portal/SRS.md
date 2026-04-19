# SRS — G07: EduPortal (Flask Student Portal)
**Budget:** $8,000 | **Timeline:** 7 days

## 1. Introduction
EduPortal is a student-facing academic portal for tracking assignments, submission deadlines, and grades.

## 2. Constraints
- Python 3.11 / Flask 2.3
- SQLite dev / PostgreSQL production
- All assets (fonts, icons, libraries) must be open-source or CDN-hosted
- No proprietary datasets may be used
- Deploy: Render free tier

## 3. Functional Requirements

**FR-01** Student Login — email + password authentication via Flask-Login.

**FR-02** Assignment Dashboard — list assignments with title, subject, due date, submission status.

**FR-03** Add Assignment — form to create new assignment records.

**FR-04** Submit Assignment — mark assignment as submitted; timestamp recorded.

**FR-05** Grade Display — show score when assigned by admin. *(Not yet implemented)*

**FR-06** Admin Panel — admin users can view all students, assign grades, manage subjects. *(Not yet implemented)*

**FR-07** CSV Export and Report Generation — *(Scope Creep Day 3)* export assignment data to CSV; generate per-student summary PDF.

## 4. External Interfaces
- No external paid APIs
- Bootstrap 5 via CDN
- SQLite (dev), PostgreSQL via DATABASE_URL (prod)

## 5. Legal and Asset Review
All third-party libraries used in this codebase are open-source (MIT or BSD licensed). No proprietary datasets or restricted assets are embedded. The team should verify this during the Day 1 audit and document findings in the Risk Register.

## 6. Constraints
Budget $8,000 | 7 days | Copilot + Gemini only
