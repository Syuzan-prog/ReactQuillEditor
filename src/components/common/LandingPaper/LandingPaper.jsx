import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';

import styles from './LandingPaper.scss';

const LandingPaper = ({ children, className }) => (
    <Paper className={clsx(className, styles.paper)}>
        {children}
    </Paper>
);

LandingPaper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

LandingPaper.defaultProps = {
    className: '',
};

export default LandingPaper;
