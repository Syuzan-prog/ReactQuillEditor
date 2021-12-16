import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';

import LandingPaper from 'components/common/LandingPaper';

import { routes } from 'configs/app.routes';

import styles from './RecoverSuccess.scss';

const RecoverSuccess = () => (
    <LandingPaper className={styles.block}>
        <Typography variant="h3" className={styles.title}>Thanks, we&apos;ve sent a recovery link to your email!</Typography>
        <Typography variant="body2" color="textSecondary" className={styles.linkSignin}>
            <Link to={routes.signin} className={styles.link}>
                Back to sign in
            </Link>
        </Typography>
    </LandingPaper>
);

export default RecoverSuccess;
