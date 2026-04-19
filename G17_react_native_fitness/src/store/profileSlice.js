import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: { name: 'User', weight: 70, goal: 10000, steps: 0, calories: 0 },
  reducers: {
    updateProfile: (s, a) => Object.assign(s, a.payload),
    setSteps:      (s, a) => { s.steps    = a.payload; },
    setCalories:   (s, a) => { s.calories = a.payload; },
  },
});

export const { updateProfile, setSteps, setCalories } = profileSlice.actions;
export default profileSlice.reducer;
