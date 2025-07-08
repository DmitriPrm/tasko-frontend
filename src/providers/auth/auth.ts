import { store } from '../../store/store.ts';
import { login } from '../../store/slices/authSlice.ts';

export const setTokenInApp = (token: string) => {
    localStorage.setItem('token', token);
    store.dispatch(login());
};
