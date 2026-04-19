import { configureStore } from '@reduxjs/toolkit';
import workoutReducer from './workoutSlice';
import profileReducer from './profileSlice';

export const store = configureStore({
  reducer: {
    workouts: workoutReducer,
    profile:  profileReducer,
  },
});
