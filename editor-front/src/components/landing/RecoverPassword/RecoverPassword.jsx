import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';

import TextInput from 'components/common/TextInput';
import { RECOVER_PASSWORD_EMAIL_FIELD_NAME } from 'constants/landing.constants';
import Button from 'components/common/Button';
import LandingPaper from 'components/common/LandingPaper';

import { routes } from 'configs/app.routes';
import styles from './RecoverPassword.scss';

const RecoverPassword = ({ handleSubmit, submitting }) => (
    <LandingPaper className={styles.block}>
        <Typography variant="h3">Recover Password</Typography>
        <Typography
            variant="body2"
            color="textSecondary"
            className={styles.text}
        >
            We will send you a link to reset the password.
        </Typography>
        <form onSubmit={handleSubmit} className={styles.form}>
            <Field
                component={TextInput}
                name={RECOVER_PASSWORD_EMAIL_FIELD_NAME}
                className={styles.formControl}
                label="Email Address"
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
                recover password
            </Button>
            <Typography variant="caption">
                <Link to={routes.signin} className={styles.link}>
                    Back to sign In
                </Link>
            </Typography>
        </form>
    </LandingPaper>
);

RecoverPassword.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
};

export default RecoverPassword;
