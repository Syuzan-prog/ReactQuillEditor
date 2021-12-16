import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';

import { JOIN_WAITLIST_EMAIL_FIELD_NAME } from 'constants/landing.constants';
import { routes } from 'configs/app.routes';

import TextInput from 'components/common/TextInput';
import Button from 'components/common/Button';
import LandingPaper from 'components/common/LandingPaper';

import styles from './JoinWaitlist.scss';

const JoinWaitlist = ({ handleSubmit, submitting }) => (
    <LandingPaper className={styles.block}>
        <Typography variant="h3">
            Thank you for choosing ''
        </Typography>
        <Typography
            variant="body2"
            color="textSecondary"
            className={styles.text}
        >
            We are excited to welcome new user in the near future.
            Please enter your email below to be placed our wait list
        </Typography>
        <form onSubmit={handleSubmit} className={styles.form}>
            <Field
                component={TextInput}
                name={JOIN_WAITLIST_EMAIL_FIELD_NAME}
                className={styles.formControl}
                label="Email"
                isRequired
            />
            <Button
                type="submit"
                className={styles.button}
                color="primary"
                variant="contained"
                disabled={submitting}
                fullWidth
            >
                Join Waitlist
            </Button>
            <Typography variant="body2" color="textSecondary">
                Already have an account?
                {' '}
                <Link to={routes.signin} className={styles.link}>
                    Sign in here
                </Link>
            </Typography>
        </form>
    </LandingPaper>
);

JoinWaitlist.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
};

export default JoinWaitlist;
