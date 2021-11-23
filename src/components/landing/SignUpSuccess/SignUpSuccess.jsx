import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Alert from '@mui/lab/Alert';

import LandingPaper from 'components/common/LandingPaper';

import { routes } from 'configs/app.routes';

import styles from './SignUpSuccess.scss';

const SignUpSuccess = () => (
    <LandingPaper className={styles.block}>
        <Typography variant="h3" className={styles.title}>Thank you for signing up!</Typography>
        <Alert severity="info">A verification email has been sent to your email address</Alert>
        <Typography variant="body2" color="textSecondary" className={styles.linkSignin}>
            <Link to={routes.signin} className={styles.link}>
                Back to sign in
            </Link>
        </Typography>
    </LandingPaper>
);

export default SignUpSuccess;
