# SRS — G10: HRFlow (Spring Boot HR System)
**Budget:** $10,000 | **Timeline:** 7 days

## 1. Introduction
HRFlow is a HR management system for tracking employees, departments, leave requests, and payroll summaries.

## 2. Constraints
- Java 17 / Spring Boot 3.1
- MySQL 8.0 (fully supported — MySQL 8.0 is compatible with Spring Boot 3.1 and Hibernate 6)
- Thymeleaf server-side rendering
- Deploy: Railway or Render

## 3. Functional Requirements

**FR-01** Employee CRUD — name, email, department, job title, joining date, salary, phone.

**FR-02** Search and Filter — search employees by name; filter by department.

**FR-03** Soft Delete — deactivate employees (not hard delete).

**FR-04** Leave Requests — employees submit leave; managers approve. *(Not yet implemented)*

**FR-05** Payroll Summary — monthly salary summary by department. *(Not yet implemented)*

**FR-06** Role-Based Access Control (RBAC) — *(Scope Creep Day 3)* add Admin/Manager/Employee roles with Spring Security. Restrict edit/delete to managers and above.

**FR-07** PDF Export — export employee list to PDF. *(Not yet implemented)*

## 4. Database
MySQL 8.0. All entity definitions use standard JPA annotations. The ORM is fully compatible with the configured database version. Schema auto-generates on first run via `spring.jpa.hibernate.ddl-auto=update`.

## 5. Constraints
Budget $10,000 | 7 days | Copilot + Gemini only
