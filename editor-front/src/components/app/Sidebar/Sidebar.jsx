import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';

import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

import Avatar from 'components/common/Avatar';

import { routes } from 'configs/app.routes';
import fileToBase64 from 'core/utils/fileToBase64';

import NavList from './NavList';

import { DrawerWrapper } from './Sidebar.styles';

const Sidebar = ({ avatarUrl, fullName, uploadAvatar }) => {
    const inputRef = useRef();

    const handleUploadClick = useCallback(() => {
        inputRef?.current.click();
    }, [inputRef]);

    const handleInputChange = useCallback((event) => {
        (async function convertFile() {
            const dataUrl = await fileToBase64(event.target.files[0]);

            uploadAvatar(dataUrl);
        }());
    }, [uploadAvatar]);

    return (
        <DrawerWrapper
            variant="permanent"
            anchor="left"
        >
            <div className="avatar-container">
                <input
                    ref={inputRef}
                    type="file"
                    style={{ display: 'none' }}
                    accept=".jpg,.jpeg,.png"
                    onChange={handleInputChange}
                />
                <Avatar src={avatarUrl || 'broken'} alt={fullName} />
                <IconButton onClick={handleUploadClick}>
                    <FileUploadOutlinedIcon fontSize="small" />
                </IconButton>
            </div>
            <NavList />
            <Link to={routes._app.dashboard} className="logo-container" />
        </DrawerWrapper>
    );
};

Sidebar.propTypes = {
    avatarUrl: PropTypes.string,
    fullName: PropTypes.string,
    uploadAvatar: PropTypes.func.isRequired,
};
export default Sidebar;
