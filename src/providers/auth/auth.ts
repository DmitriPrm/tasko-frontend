import { store } from '../../store/store.ts';
import { login, logout, setToken } from '../../store/slices/authSlice.ts';

export const destroyTokenInApp = () => {
    localStorage.removeItem('token');
    store.dispatch(logout());
};

export const setTokenInApp = (token: string) => {
    localStorage.setItem('token', token);
    store.dispatch(login());
};

export const loginToSystem = (): void => {
    const token = localStorage.getItem('token');

    if (token) {
        store.dispatch(setToken(token));
        store.dispatch(login());
        return;
    }
};
