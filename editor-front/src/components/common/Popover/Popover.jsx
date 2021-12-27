import React, { useState } from 'react';
import PropTypes from 'prop-types';

import PopoverBase from '@mui/material/Popover';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import IconButton from '@mui/material/IconButton';

const PopoverComponent = ({ children }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleClick}>
                <PictureAsPdfIcon />
            </IconButton>
            <PopoverBase
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
            >
                {children}
            </PopoverBase>
        </>
    );
};

PopoverComponent.propTypes = {
    children: PropTypes.any, // eslint-disable-line react/forbid-prop-types
};

export default PopoverComponent;
