// authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  role: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.role = action.payload.role;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.role = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserRole = state => state.auth.role;

export default authSlice.reducer;
