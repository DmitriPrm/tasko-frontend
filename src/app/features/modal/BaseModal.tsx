import { Box, Modal } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 3,
};

export const BaseModal = ({ children, onClose, title }) => {
    return (
        <div>
            <Modal
                open
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="flex justify-between items-center pb-6">
                        {title && <h3 className="font-bold text-2xl">{title}</h3>}
                        <button
                            onClick={onClose}
                            className="cursor-pointer hover:text-gray-600 transform duration-300"
                        >
                            X
                        </button>
                    </div>
                    {children}
                </Box>
            </Modal>
        </div>
    );
};
