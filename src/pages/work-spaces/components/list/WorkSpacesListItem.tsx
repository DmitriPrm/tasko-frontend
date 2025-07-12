import { Button, Card } from '@mui/material';
import type { FC } from 'react';

export interface WorkSpaceListItemProps {
    id: number;
    title: string;
    description: string;
    imagePath: string;
}

const WorkSpacesListItem: FC<WorkSpaceListItemProps> = (props) => {
    const { title, description, imagePath } = props;
    const href = 'my-tasks';

    return (
        <Card>
            <a href={href}>
                <img src={imagePath} />
            </a>
            <div className="flex flex-col gap-2 p-4">
                <a href={href} className="hover:text-gray-600 transform duration-150">
                    <h4 className="font-bold text-xl">{title}</h4>
                </a>
                <p className="text-gray-600">{description}</p>
                <ul>
                    <li className="flex justify-between">
                        <span>Participants</span>
                        <span>{0}</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Tasks</span>
                        <span>{0}</span>
                    </li>
                </ul>
                <Button href={href} variant="contained">
                    Enter
                </Button>
            </div>
        </Card>
    );
};

export default WorkSpacesListItem;
