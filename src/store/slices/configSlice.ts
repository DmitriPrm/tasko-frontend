import { createSlice } from '@reduxjs/toolkit';

const configSlice = createSlice({
    name: 'config',
    initialState: {
        isMenuOpen: true,
    },
    reducers: {
        openMenu(state) {
            state.isMenuOpen = true;
        },
        closeMenu(state) {
            state.isMenuOpen = false;
        },
        toggleMenu(state) {
            state.isMenuOpen = !state.isMenuOpen;
        },
    },
});

export const { openMenu, closeMenu, toggleMenu } = configSlice.actions;
export default configSlice.reducer;
