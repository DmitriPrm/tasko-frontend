import { useEffect, useState } from 'react';
import axios from 'axios';
import { Skeleton } from '@mui/material';
import { TaskCard } from './components/TaskCard.tsx';

export const MyTasksPage = () => {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/tasks');
            setTasks(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);
    return isLoading ? (
        <Skeleton />
    ) : (
        <div>
            <h2 className="text-2xl font-bold mb-3">My tasks</h2>
            <div>
                {tasks.map((task) => (
                    <TaskCard {...task} />
                ))}
            </div>
        </div>
    );
};
