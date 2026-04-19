import AppleHealthKit from 'react-native-health';
import { Platform } from 'react-native';

// HealthKit permissions required for FitTrack
// These entitlements must be declared in the iOS app's Info.plist AND
// enabled in the Apple Developer portal under the App ID's capabilities.
//
// react-native-health uses the HealthKit framework, which requires:
//   1. An Apple Developer Program membership ($99/year)
//   2. HealthKit capability enabled in App ID (developer.apple.com)
//   3. NSHealthShareUsageDescription in Info.plist
//   4. NSHealthUpdateUsageDescription in Info.plist
//
// Without the Developer Program membership, Xcode will fail at signing/entitlements.
// The Simulator does NOT require membership — the issue surfaces only on real device builds.

const PERMISSIONS = {
  permissions: {
    read: [
      AppleHealthKit.Constants.Permissions.Steps,
      AppleHealthKit.Constants.Permissions.DistanceWalkingRunning,
      AppleHealthKit.Constants.Permissions.ActiveEnergyBurned,
      AppleHealthKit.Constants.Permissions.HeartRate,
      AppleHealthKit.Constants.Permissions.SleepAnalysis,
      AppleHealthKit.Constants.Permissions.Weight,
    ],
    write: [
      AppleHealthKit.Constants.Permissions.Steps,
      AppleHealthKit.Constants.Permissions.ActiveEnergyBurned,
      AppleHealthKit.Constants.Permissions.Weight,
    ],
  },
};

export function initHealthKit() {
  if (Platform.OS !== 'ios') return Promise.resolve({ android: true });
  return new Promise((resolve, reject) => {
    AppleHealthKit.initHealthKit(PERMISSIONS, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

export function getStepsToday() {
  if (Platform.OS !== 'ios') return Promise.resolve(0);
  const options = { date: new Date().toISOString() };
  return new Promise((resolve, reject) => {
    AppleHealthKit.getStepCount(options, (err, result) => {
      if (err) reject(err);
      else resolve(result.value || 0);
    });
  });
}

export function getCaloriesToday() {
  if (Platform.OS !== 'ios') return Promise.resolve(0);
  const now   = new Date();
  const start = new Date(now); start.setHours(0, 0, 0, 0);
  return new Promise((resolve, reject) => {
    AppleHealthKit.getActiveEnergyBurned(
      { startDate: start.toISOString(), endDate: now.toISOString() },
      (err, results) => {
        if (err) reject(err);
        else resolve(results.reduce((sum, r) => sum + r.value, 0));
      }
    );
  });
}
