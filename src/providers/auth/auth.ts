import { store } from '../../store/store.ts';
import { login, logout } from '../../store/slices/authSlice.ts';

export const destroyTokenInApp = () => {
    localStorage.removeItem('token');
    store.dispatch(logout());
};

export const setTokenInApp = (token: string) => {
    localStorage.setItem('token', token);
    store.dispatch(login());
};
