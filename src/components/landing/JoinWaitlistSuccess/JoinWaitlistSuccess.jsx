import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Alert from '@mui/lab/Alert';
import Avatar from '@mui/material/Avatar';
import CheckIcon from '@mui/icons-material/Check';

import LandingPaper from 'components/common/LandingPaper';

import { routes } from 'configs/app.routes';

import styles from './JoinWaitlistSuccess.scss';

const JoinWaitlistSuccess = () => (
    <LandingPaper className={styles.block}>
        <Avatar className={styles.avatar}>
            <CheckIcon />
        </Avatar>
        <Alert severity="info">A confirmation has been sent to your email address</Alert>
        <Typography variant="h3" className={styles.title}>Thank you for joining our waitlist</Typography>
        <Typography variant="caption">
            <Link to={routes.signin} className={styles.link}>
                Back to sign In
            </Link>
        </Typography>
    </LandingPaper>
);

export default JoinWaitlistSuccess;
