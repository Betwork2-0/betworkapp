// YourComponent.js
import React from 'react';
import { useSnackbar } from '../context/SnackbarContext';
import { Snackbar, Alert } from '@mui/material';

function PageLevelMessage() {
    const { openSuccessMessage, closeSuccessMessage, snackbarStates } = useSnackbar();

    const handleOpenSnackbar = () => {
        openSuccessMessage('This is a success message!');
    };

    const handleCloseSnackbar = () => {
        closeSuccessMessage();
    };

    return (
        <Snackbar 
            open={snackbarStates.success.open}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            sx={{ top: '80px !important' }} 
        >
            <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                {snackbarStates.success.message}
            </Alert>
        </Snackbar>
    );
}

export default PageLevelMessage;
