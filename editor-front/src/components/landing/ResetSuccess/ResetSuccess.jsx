import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';

import LandingPaper from 'components/common/LandingPaper';

import { routes } from 'configs/app.routes';

import styles from './ResetSuccess.scss';

const ResetSuccess = () => (
    <LandingPaper className={styles.block}>
        <Typography variant="h3" className={styles.title}>You&apos;ve successfully reset your password!</Typography>
        <Typography variant="body2" color="textSecondary" className={styles.linkSignin}>
            <Link to={routes.signin} className={styles.link}>
                Back to sign in
            </Link>
        </Typography>
    </LandingPaper>
);

export default ResetSuccess;
