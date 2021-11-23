import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

let displayed = [];

const NotificationController = ({ notifications, closeNotification, removeNotification }) => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const storeDisplayed = (id) => {
        displayed = [...displayed, id];
    };

    const removeDisplayed = (id) => {
        displayed = [...displayed.filter((key) => id !== key)];
    };

    useEffect(() => {
        notifications.forEach(({ key, message, options = {}, dismissed = false }) => {
            if (dismissed) {
                closeSnackbar(key);
                return;
            }

            if (displayed.includes(key)) return;

            enqueueSnackbar(message, {
                key,
                ...options,
                onClose: (event, reason, myKey) => {
                    if (options.onClose) {
                        options.onClose(event, reason, myKey);
                    }
                },
                onExited: (event, myKey) => {
                    removeNotification(myKey);
                    removeDisplayed(myKey);
                },
                autoHideDuration: 4000,
                action: () => (
                    <IconButton onClick={() => closeNotification(key)}>
                        <CloseIcon sx={{ color: 'white' }} />
                    </IconButton>
                ),
            });

            storeDisplayed(key);
        });
    }, [notifications]); // eslint-disable-line react-hooks/exhaustive-deps

    return null;
};

NotificationController.propTypes = {
    closeNotification: PropTypes.func.isRequired,
    removeNotification: PropTypes.func.isRequired,
    notifications: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.number,
        message: PropTypes.string,
        type: PropTypes.string,
    })),
};

export default NotificationController;
