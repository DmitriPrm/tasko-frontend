import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { CreateWorkSpaceForm } from '../modals/CreateWorkSpaceForm.tsx';
import axios from 'axios';

const WorkSpacesMenuList = () => {
    const [isCreateWorkSpaceModalOpen, setIsCreateWorkSpaceModalOpen] = useState(false);
    const [workSpaces, setWorkSpaces] = useState([]);

    const handleIsCreateWorkSpaceModalOpen = () =>
        setIsCreateWorkSpaceModalOpen(!isCreateWorkSpaceModalOpen);

    const fetchWorkSpaces = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/work-space');
            setWorkSpaces(response.data);
        } catch (error) {
            console.error('Error fetching workspaces:', error);
        }
    };

    const handleCloseModal = () => {
        fetchWorkSpaces();
        setIsCreateWorkSpaceModalOpen(false);
    };

    const getHref = (workSpaceId: number) => `/work-spaces/${workSpaceId}/tasks`;

    useEffect(() => {
        fetchWorkSpaces();
    }, []);

    return (
        <>
            <div className="py-4">
                <div className="flex items-center justify-between px-4 pb-2">
                    <h3 className="text-white font-medium">Work spaces</h3>
                    <Button
                        size="small"
                        variant="contained"
                        onClick={handleIsCreateWorkSpaceModalOpen}
                    >
                        +
                    </Button>
                </div>
                <ul>
                    {workSpaces.map((workSpace) => (
                        <li
                            className="text-white py-2 px-4 hover:text-gray-200 transform duration-150 cursor-pointer"
                            key={workSpace.title}
                        >
                            <a className="block w-100" href={getHref(workSpace.id)}>
                                {workSpace.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            {isCreateWorkSpaceModalOpen && <CreateWorkSpaceForm onClose={handleCloseModal} />}
        </>
    );
};

export default WorkSpacesMenuList;
