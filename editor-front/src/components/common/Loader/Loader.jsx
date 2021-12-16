import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import CircularProgress from '@mui/material/CircularProgress';

import styles from './Loader.scss';

const Loader = ({ size, className, classes, container: Container, ...rest }) => (
    <Container className={clsx(styles.container, className)}>
        <CircularProgress
            {...rest}
            size={size}
            classes={classes}
        />
    </Container>
);

Loader.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    size: PropTypes.number,
    container: PropTypes.elementType,
};

Loader.defaultProps = {
    className: '',
    container: 'div',
};

export default Loader;
