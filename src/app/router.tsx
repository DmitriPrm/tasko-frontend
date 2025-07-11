import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../pages/main-layout/MainLayout.tsx';
import WorkSpacesPage from '../pages/work-spaces/WorkSpacesPage.tsx';
import { loginToSystem } from '../providers/auth/auth.ts';
import { MyTasksPage } from '../pages/my-tasks/MyTasksPage.tsx';

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
            {
                path: 'my-tasks',
                element: <MyTasksPage />,
            },
        ],
    },
]);

export const AppRouter = () => <RouterProvider router={router} />;
