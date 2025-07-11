import { BaseModal } from '../../../../../app/features/modal/BaseModal.tsx';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';

export const CreateWorkSpaceForm = ({ onClose }) => {
    const [isLoading, setIsLoading] = useState(false);

    const [Data, setData] = useState({
        title: '',
        description: '',
    });

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        const newData = { ...Data, [name]: value };
        setData(newData);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();

        setIsLoading(true);
        axios
            .post('http://localhost:8080/api/work-space', Data)
            .then((response) => {
                onClose();
            })
            .finally(() => setIsLoading(false));
    };

    return (
        <BaseModal onClose={onClose} title={'Create work space'}>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <TextField
                    name="title"
                    label="Title"
                    required
                    disabled={isLoading}
                    onChange={handleChange}
                />
                <TextField
                    name="description"
                    label="Description"
                    disabled={isLoading}
                    onChange={handleChange}
                />
                <Button
                    variant="contained"
                    loading={isLoading}
                    disabled={isLoading}
                    type="submit"
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </form>
        </BaseModal>
    );
};
