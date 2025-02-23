import {Backdrop, Box, Fade, Modal, Paper, Typography} from "@mui/material";
import React, {useState} from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: '800px'
};

const TutorialModal = ({ tutorial_link, open, handleClose }: { tutorial_link: string, open: boolean, handleClose: () => void }) => {
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{ backdrop: { timeout: 500 } }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <Paper style={{padding: '20px'}} >
                        <Typography id="transition-modal-title" variant="h6" component="h2" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '20px' }}>
                            Tutorial
                            <Box component="button" onClick={handleClose} sx={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.5rem'}}>
                                &times;
                            </Box>
                        </Typography>
                        <iframe src={tutorial_link} title="tutorial" width="100%" height="500" style={{ border: 'none', borderRadius: '20px' }}/>
                    </Paper>
                </Box>
            </Fade>
        </Modal>
    );
};

const ObjectiveName = ({ name, handleOpen }: { name: string; handleOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {

    return name == "Certificate Awarded?" ? (
        <Typography variant="body1" style={{fontWeight: 'bold', color: 'green'}}>{name}</Typography>
    ) : (
        <Typography
            variant="body1"
            component="a"
            href="#"
            onClick={(e) => {
                e.preventDefault();
                handleOpen(true);
            }}
            sx={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
        >
            {name}
        </Typography>
    );
};


const ObjectiveText = ({ name, tutorial_link }: { name: string, tutorial_link: string }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box>
            <ObjectiveName name={name} handleOpen={handleOpen} />
            <TutorialModal tutorial_link={tutorial_link} open={open} handleClose={handleClose} />
        </Box>
    );
};

export default ObjectiveText;
