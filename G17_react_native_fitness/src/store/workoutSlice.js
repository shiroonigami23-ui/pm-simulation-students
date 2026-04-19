import { createSlice } from '@reduxjs/toolkit';

const workoutSlice = createSlice({
  name: 'workouts',
  initialState: { list: [], loading: false },
  reducers: {
    addWorkout:    (s, a) => { s.list.unshift(a.payload); },
    deleteWorkout: (s, a) => { s.list = s.list.filter(w => w.id !== a.payload); },
    setLoading:    (s, a) => { s.loading = a.payload; },
  },
});

export const { addWorkout, deleteWorkout, setLoading } = workoutSlice.actions;
export default workoutSlice.reducer;
