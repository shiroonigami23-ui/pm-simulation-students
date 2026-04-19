# SRS — G17: FitTrack (React Native Fitness App)
**Budget:** $9,000 | **Timeline:** 7 days

## 1. Introduction
FitTrack tracks workouts, steps, calories, and sleep using native device health APIs.

## 2. Constraints
- React Native 0.72 + Expo SDK 49
- iOS + Android targets
- HealthKit (iOS) / Google Fit (Android) for health data
- Deploy: APK (Android) + TestFlight (iOS)

## 3. Functional Requirements

**FR-01** Dashboard — daily steps, calories burned, progress toward goal.

**FR-02** Workout Logger — log workout type, duration, notes.

**FR-03** Workout History — list past workouts with date/type/duration.

**FR-04** HealthKit Integration — **read step count, calories burned, and heart rate from iOS HealthKit. The integration is implemented in `src/services/healthService.js` using the `react-native-health` library. Requires HealthKit entitlement enabled in the iOS app.**

**FR-05** Profile — set name, weight, daily step goal.

**FR-06** Social Sharing and Leaderboard — *(Scope Creep Day 3)* share workout summary; leaderboard among friends.

**FR-07** Sleep Tracking — *(Not yet implemented)*

## 4. External APIs
- `react-native-health` library for HealthKit (see `src/services/healthService.js`)
- HealthKit entitlement requires Apple Developer Program enrollment
- See: https://developer.apple.com/programs/ for membership details

## 5. Constraints
Budget $9,000 | 7 days | Copilot + Gemini only
