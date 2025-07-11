import { Card } from '@mui/material';
import type { FC } from 'react';
import './taskCard.scss';

export interface TTaskCardProps {
    title: string;
    description: string;
}

export const TaskCard: FC<TTaskCardProps> = (props) => {
    const { title, description } = props;

    return (
        <Card className="task-card">
            <h3 className="font-bold text-xl">{title}</h3>
            <p>{description}</p>
        </Card>
    );
};
