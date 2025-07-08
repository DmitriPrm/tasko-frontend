import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../pages/main-layout/MainLayout.tsx';
import WorkSpacesPage from '../pages/work-spaces/WorkSpacesPage.tsx';
import axios from 'axios';

const login = (): void => {
    axios
        .post('http://localhost:8080/api/auth/login', {
            username: 'admian',
            password: 'adminpassword',
        })
        .then((response) => {
            console.log(response.data.token);
            localStorage.setItem('token', response.data.token);
            console.log('logged!');
        });
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        loader: login,
        children: [
            {
                index: true,
                element: <WorkSpacesPage />,
            },
        ],
    },
]);

export const AppRouter = () => <RouterProvider router={router} />;
