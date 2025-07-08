import { Button } from '@mui/material';

const WorkSpacesMenuList = () => {
    const workSpaces = [
        {
            title: 'WorkSpace 1',
        },
        {
            title: 'WorkSpace 2',
        },
        {
            title: 'WorkSpace 3',
        },
    ];
    return (
        <div className="py-4">
            <div className="flex items-center justify-between px-4 pb-2">
                <h3 className="text-white">Work spaces</h3>
                <Button size="small" variant="contained">
                    +
                </Button>
            </div>
            <ul>
                {workSpaces.map((workSpace) => (
                    <li className="text-white py-2 px-4" key={workSpace.title}>
                        {workSpace.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WorkSpacesMenuList;
