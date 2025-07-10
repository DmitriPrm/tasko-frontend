import { store } from '../../store/store.ts';
import { login, logout, setToken } from '../../store/slices/authSlice.ts';
import axios from 'axios';

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

    axios
        .post('http://localhost:8080/api/auth/login', {
            username: 'admian',
            password: 'adminpasswosrd',
        })
        .then((response) => setTokenInApp(response.data.token));
};
