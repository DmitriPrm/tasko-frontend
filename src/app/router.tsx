import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../pages/main-layout/MainLayout.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            // {
            //     path: "/",
            //     element: <Home />,
            // },
            // {
            //     path: "/about",
            //     element: <About />,
            // },
            // {
            //     path: "/contact",
            //     element: <Contact />,
            // },
        ],
    },
]);

export const AppRouter = () => <RouterProvider router={router} />;
