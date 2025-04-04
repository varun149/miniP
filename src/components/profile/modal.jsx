import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useEffect } from 'react';
import { TextField } from '@mui/material';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal({ modalOpen ,handleImage,setModalOpen}) {
    const [open, setOpen] = React.useState(false);
    useEffect(() => {
        console.log(open,modalOpen)
       if(modalOpen)
        setOpen(!open)
    }, [modalOpen])
    const handleClose = () => {
        setOpen(false)
        setModalOpen(!modalOpen)
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Please select a profile picture
                    </Typography>
                    <TextField
                        type="file"
                        accept="image/*"
                        variant="outlined"
                        onChange={handleImage}
                        sx={{
                            '& .MuiInputBase-root': {
                                // Style the input field here
                                backgroundColor: 'lightgray',
                                borderRadius: '4px',
                                padding: '10px',
                            },
                        }}
                    />
                </Box>
            </Modal>
        </div>
    );
}