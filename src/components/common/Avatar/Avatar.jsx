import React from 'react';
import PropTypes from 'prop-types';

import AvatarBase from '@mui/material/Avatar';

const Avatar = ({ wrapperClassName, ...props }) => (
    <div className={wrapperClassName}>
        <AvatarBase {...props} />
    </div>
);

Avatar.propTypes = {
    wrapperClassName: PropTypes.string,
};

Avatar.defaultProps = {
    wrapperClassName: '',
};

export default Avatar;
