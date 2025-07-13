import { type FC, useEffect, useState } from 'react';
import axios from 'axios';
import { Skeleton } from '@mui/material';
import { TaskCard } from './components/TaskCard.tsx';
import { useParams } from 'react-router-dom';

export const TasksPage = () => {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const params = useParams();

    const fetchTasks = async () => {
        try {
            const endpoint = params.id
                ? `http://localhost:8080/api/work-space/${params.id}/tasks`
                : 'http://localhost:8080/api/my-tasks';
            const response = await axios.get(endpoint);
            setTasks(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const title = params.id ? 'Work space tasks' : 'My tasks';

    useEffect(() => {
        fetchTasks();
    }, []);
    return isLoading ? (
        <Skeleton />
    ) : (
        <div>
            <h2 className="text-2xl font-bold mb-3">{title}</h2>
            <div className="flex flex-col gap-5">
                {tasks.map((task) => (
                    <TaskCard {...task} />
                ))}
            </div>
        </div>
    );
};
