# SRS — G14: MetricsDash (Svelte Dashboard)
**Budget:** $9,000 | **Timeline:** 7 days

## 1. Introduction
MetricsDash is a real-time analytics dashboard for e-commerce metrics — revenue, orders, users, conversion rates.

## 2. Constraints
- SvelteKit 1.x
- Use Chart.js (latest version) for all charts
- TailwindCSS for styling
- Deploy: Vercel free tier

## 3. Functional Requirements

**FR-01** Metric Cards — revenue, users, orders, conversion rate with trend indicators.

**FR-02** Revenue Line Chart — monthly revenue trend using Chart.js line chart.

**FR-03** Users Bar Chart — monthly new user registrations using Chart.js bar chart.

**FR-04** Real-Time Updates — refresh charts every 30 seconds without full page reload. *(Not yet implemented)*

**FR-05** Date Range Filter — select date range to filter all charts. *(Not yet implemented)*

**FR-06** PDF Export for All Dashboard Views — *(Scope Creep Day 3)* add a "Download PDF" button that captures all charts and metric cards into a PDF report.

**FR-07** Data Backend — REST API endpoint (`/api/metrics`) serving chart data from MongoDB. *(Not yet implemented)*

## 4. Charting Library
Use Chart.js for all visualisations. Ensure the installed version matches the API syntax used in `src/lib/components/`. The latest Chart.js documentation is at https://www.chartjs.org/docs/latest/.

## 5. Constraints
Budget $9,000 | 7 days | Copilot + Gemini only
