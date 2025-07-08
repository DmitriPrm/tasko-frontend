import { Button, Card } from '@mui/material';

const WorkSpacesListItem = ({ workSpace }) => {
    return (
        <Card>
            <img
                src={
                    'https://avatars.mds.yandex.net/i?id=353a756d104d8b145578defe460c9d7b_l-5333398-images-thumbs&n=13'
                }
            />
            <div className="flex flex-col gap-2 p-4">
                <h4 className="font-bold text-xl">{workSpace.title}</h4>
                <p className="text-gray-600">Description for the card</p>
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
                <Button variant="contained">Enter</Button>
            </div>
        </Card>
    );
};

export default WorkSpacesListItem;
