import { Button, Card } from '@mui/material';
import type { FC } from 'react';

export interface WorkSpaceListItemProps {
    id: number;
    title: string;
    description: string;
}

const WorkSpacesListItem: FC<WorkSpaceListItemProps> = (props) => {
    const { title, description } = props;
    const href = 'my-tasks';

    return (
        <Card>
            <a href={href}>
                <img
                    src={
                        'https://avatars.mds.yandex.net/i?id=353a756d104d8b145578defe460c9d7b_l-5333398-images-thumbs&n=13'
                    }
                />
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
