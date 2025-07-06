import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../pages/main-layout/MainLayout.tsx';
import WorkSpacesPage from '../pages/work-spaces/WorkSpacesPage.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <WorkSpacesPage />,
            },
        ],
    },
]);

export const AppRouter = () => <RouterProvider router={router} />;
