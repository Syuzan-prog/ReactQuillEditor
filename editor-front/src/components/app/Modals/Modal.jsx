import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import useUnmountTransition from 'core/hooks/useUnmountTransition';

import { ModalWrapper } from './Modal.styles';

const Modal = ({ withBackground, children, onClose, showCloseButton, className, ...props }) => {
    // alligned with material-ui screen exit transition duration
    const [isShown, handleClose] = useUnmountTransition(onClose, 195);

    return (
        <ModalWrapper
            {...props}
            open={isShown}
            onClose={handleClose}
            maxWidth="md"
            scroll="body"
        >
            {showCloseButton && (
                <IconButton onClick={handleClose} className="close-button">
                    <CloseIcon />
                </IconButton>
            )}
            {children}
        </ModalWrapper>
    );
};

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
    showCloseButton: PropTypes.bool,
    className: PropTypes.string,
    withBackground: PropTypes.bool,
};

Modal.defaultProps = {
    withBackground: false,
    showCloseButton: true,
    className: '',
};

export default Modal;
