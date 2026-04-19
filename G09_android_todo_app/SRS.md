# SRS — G09: DoIt! (Android To-Do App)
**Budget:** $9,000 | **Timeline:** 7 days

## 1. Introduction
DoIt! is an Android task management app with priority-based sorting, due date tracking, and map-based location tagging.

## 2. Constraints
- Java 17 / Android SDK 33 (min API 26)
- Room for local persistence
- Google Maps SDK for location tagging
- Deploy: APK or Google Play internal track

## 3. Functional Requirements

**FR-01** Task CRUD — title, description, priority (1-3), due date, done flag.

**FR-02** Task List — RecyclerView with LiveData, sorted by priority then due date.

**FR-03** Mark Done — swipe or button to mark tasks complete.

**FR-04** Task Location — **each task can have a map-based location tag. Users pick a location via a Google Maps fragment. The Maps API integration uses the key in `res/values/strings.xml`.** Location name, latitude, and longitude are stored in the Task entity.

**FR-05** Search and Filter — filter by priority or done status. *(Not yet implemented)*

**FR-06** Firebase Push Notifications — *(Scope Creep Day 3)* integrate FCM for due-date reminders.

**FR-07** Dark Mode — *(Not yet implemented)*

## 4. External APIs
- Google Maps SDK for Android (`play-services-maps:18.1.0`)
  - API key configured in `res/values/strings.xml`
  - Billing account must remain within free tier
- Firebase Cloud Messaging (google-services.json required)

## 5. Constraints
Budget $9,000 | 7 days | Copilot + Gemini only
