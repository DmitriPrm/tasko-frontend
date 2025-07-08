import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,
        token: null,
    },
    reducers: {
        login(state) {
            state.isAuth = true;
        },
        logout(state) {
            state.isAuth = false;
        },
        setToken(state, token?: string) {
            state.token = token;
        },
    },
});

export const { login, logout, setToken } = authSlice.actions;
export default authSlice.reducer;
