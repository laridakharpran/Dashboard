import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profiles: [],
  error: null,
  loading: false
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addProfileStart: (state) => {
      state.loading = true;
    },
    addProfileSuccess: (state, action) => {
      state.profiles.push(action.payload);
      state.loading = false;
      state.error = null;
    },
    addProfileFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    showProfileStart: (state) => {
      state.loading = true;
    },
    showProfileSuccess: (state, action) => {
      state.profiles = action.payload;
      state.loading = false;
      state.error = null;
    },
    showProfileFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    }
  }
});

export const { addProfileStart, addProfileSuccess, addProfileFail, showProfileStart, showProfileSuccess, showProfileFail } =
  profileSlice.actions;

export const selectProfiles = (state) => state.profile.profiles;
export default profileSlice.reducer;
