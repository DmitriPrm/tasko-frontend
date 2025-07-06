import WorkSpacesListItem from './WorkSpacesListItem.tsx';

const WorkSpacesList = () => {
    const workSpaces = [
        {
            id: 1,
        },
        {
            id: 2,
        },
    ];
    return (
        <div className="grid grid-cols-4 gap-4">
            {workSpaces.map((workSpace) => (
                <WorkSpacesListItem key={workSpace.id} />
            ))}
        </div>
    );
};

export default WorkSpacesList;
