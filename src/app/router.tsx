import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../pages/main-layout/MainLayout.tsx';
import WorkSpacesPage from '../pages/work-spaces/WorkSpacesPage.tsx';
import { loginToSystem } from '../providers/auth/auth.ts';
import { TasksPage } from '../pages/my-tasks/TasksPage.tsx';

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
                path: 'work-spaces/:id/tasks',
                element: <TasksPage mine />,
            },
            {
                path: 'my-tasks',
                element: <TasksPage />,
            },
        ],
    },
]);

export const AppRouter = () => <RouterProvider router={router} />;
