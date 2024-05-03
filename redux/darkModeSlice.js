import { createSlice } from '@reduxjs/toolkit';
import { setCookie } from "cookies-next";

const initialState = {
    darkMode: false,
};

const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        toggleDarkMode(state) {
            state.darkMode = !state.darkMode;
            setCookie("darkMode", "true", { expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), });
        },
        setInitialState(state, action) {
            state.darkMode = action.payload;
        },
    },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export const { setInitialState } = darkModeSlice.actions;
export default darkModeSlice.reducer;
