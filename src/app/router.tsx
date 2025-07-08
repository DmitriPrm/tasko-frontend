import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../pages/main-layout/MainLayout.tsx';
import WorkSpacesPage from '../pages/work-spaces/WorkSpacesPage.tsx';
import axios from 'axios';
import { login, setToken } from '../store/slices/authSlice.ts';
import { store } from '../store/store.ts';
import { setTokenInApp } from '../providers/auth/auth.ts';

const loginToSystem = (): void => {
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

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        loader: loginToSystem,
        children: [
            {
                index: true,
                element: <WorkSpacesPage />,
            },
        ],
    },
]);

export const AppRouter = () => <RouterProvider router={router} />;
