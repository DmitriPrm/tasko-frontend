import WorkSpacesListItem from './WorkSpacesListItem.tsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Skeleton } from '@mui/material';

const WorkSpacesList = () => {
    const [workSpaces, setWorkSpaces] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get('http://localhost:8080/api/work-space')
            .then((response) => setWorkSpaces(response.data))
            .finally(() => setIsLoading(false));
    }, []);
    return isLoading ? (
        <Skeleton />
    ) : (
        <div className="grid grid-cols-4 gap-4">
            {workSpaces.map((workSpace) => (
                <WorkSpacesListItem key={workSpace.id} workSpace={workSpace} />
            ))}
        </div>
    );
};

export default WorkSpacesList;
