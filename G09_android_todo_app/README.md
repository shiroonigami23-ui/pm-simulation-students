# DoIt! — Android To-Do App (Java)

## Tech Stack
- Java 17 + Android SDK 33
- Room (SQLite ORM)
- Google Maps SDK
- Firebase (push notifications)

## Setup
1. Open in Android Studio (Hedgehog+)
2. Add `google-services.json` from Firebase Console
3. Set your Maps API key in `res/values/strings.xml`
4. Build and run on device or emulator (API 26+)

## Project Structure
```
app/src/main/java/com/g09/todoapp/
  activities/   Screens
  adapters/     RecyclerView adapters
  models/       Entity classes
  database/     Room DAO and AppDatabase
```
