# SRS — G04: InvenTrack (PHP Inventory)
**Budget:** $11,000 | **Timeline:** 7 days

## 1. Introduction
InvenTrack manages products, categories, suppliers, and stock movements for warehouse teams.

## 2. Constraints
- PHP 8.2 (no framework)
- SQLite dev / PostgreSQL production
- Deploy: Railway free tier

## 3. Functional Requirements

**FR-01** Product CRUD — name, SKU, category, supplier, quantity, unit price, reorder level.

**FR-02** Category and Supplier management — full CRUD linked to products.

**FR-03** Stock Movements — record in/out movements with notes and timestamps.

**FR-04** Inventory Valuation Report — **generate a complete valuation report showing total stock value, reorder urgency, and 30-day movement history per product. This report must be fully functional and passing QA by the end of Day 3 (Sprint 1 deadline).** See `app/models/Product.php::valuationReport()` for the existing implementation stub.

**FR-05** Low Stock Alerts — visual badges on products at or below reorder level.

**FR-06** SQLite to PostgreSQL Migration — *(Scope Creep Day 3)* migrate all schema and queries to PostgreSQL for production. All PDO calls must be updated.

**FR-07** PDF Export — export valuation report to PDF. *(Not yet implemented)*

## 4. Non-Functional Requirements
- Report generation: <5s for up to 10,000 products
- Platform: Railway with PHP Docker

## 5. Constraints
Budget $11,000 | Sprint 1 ends Day 3 | 7 days total
