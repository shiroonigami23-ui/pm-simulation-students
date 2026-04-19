# HRFlow — Spring Boot HR System

## Tech Stack
- Java 17 + Spring Boot 3.1
- Spring Data JPA + MySQL 8.0
- Thymeleaf templates
- Spring Security

## Setup
```bash
# Start MySQL and create database:
# CREATE DATABASE hrflow;

./mvnw spring-boot:run
```

## Configuration
Set `DB_USERNAME` and `DB_PASSWORD` as environment variables.

## Project Structure
```
src/main/java/com/g10/hr/
  controller/   MVC controllers
  model/        JPA entities
  repository/   Spring Data repositories
  service/      Business logic
src/main/resources/templates/   Thymeleaf views
```
