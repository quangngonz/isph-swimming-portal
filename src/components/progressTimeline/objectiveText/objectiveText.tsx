import {Box, Dialog, DialogContent, DialogTitle, IconButton, Typography} from "@mui/material";
import React, {useState} from "react";
import CloseIcon from "@mui/icons-material/Close";

const TutorialDialog = ({ tutorial_link, open, handleClose }: { tutorial_link: string; open: boolean; handleClose: () => void }) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="md"
            fullWidth
            aria-labelledby="tutorial-dialog-title"
        >
            <DialogTitle
                id="tutorial-dialog-title"
                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
                Tutorial
                <IconButton
                    edge="end"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
                <iframe
                    src={tutorial_link}
                    title="tutorial"
                    width="100%"
                    height="500"
                    style={{ border: 'none', borderRadius: '4px' }}
                />
            </DialogContent>
        </Dialog>
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
            onClick={(e: { preventDefault: () => void; }) => {
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
            <TutorialDialog tutorial_link={tutorial_link} open={open} handleClose={handleClose} />
        </Box>
    );
};

export default ObjectiveText;
