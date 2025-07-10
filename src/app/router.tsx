import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../pages/main-layout/MainLayout.tsx';
import WorkSpacesPage from '../pages/work-spaces/WorkSpacesPage.tsx';
import { loginToSystem } from '../providers/auth/auth.ts';

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
