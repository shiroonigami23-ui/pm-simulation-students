# FitTrack — React Native Fitness App

## Tech Stack
- React Native 0.72 + Expo SDK 49
- Redux Toolkit
- react-native-health (iOS HealthKit)
- MPAndroidChart equivalent

## Setup
```bash
npm install
npx expo start
```

**iOS (physical device required for health data):**
```bash
npx expo run:ios
```

**Android:**
```bash
npx expo run:android
```

> HealthKit features require a physical iOS device. Review Apple Developer Program requirements before building for device.

## Project Structure
```
App.js                Entry point
src/screens/          Screen components
src/store/            Redux slices
src/services/         Native health API wrappers
```
