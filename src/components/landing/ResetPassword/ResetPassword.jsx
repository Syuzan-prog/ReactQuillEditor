import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { parse } from 'query-string';

import { change, Field } from 'redux-form';
import Typography from '@mui/material/Typography';

import Button from 'components/common/Button';
import PasswordInput from 'components/common/PasswordInput';
import LandingPaper from 'components/common/LandingPaper';
import {
    RESET_PASSWORD_PASSWORD_FIELD_NAME,
    RESET_PASSWORD_CONFIRM_PASSWORD_FIELD_NAME,
    RESET_PASSWORD_TOKEN_FIELD_NAME,
} from 'constants/landing.constants';
import { locationShape } from 'configs/shapes';

import styles from './ResetPassword.scss';

const ResetPassword = ({ dispatch, location, handleSubmit, submitting, form }) => {
    useEffect(() => {
        const { reset_token: token } = parse(location.search);

        if (token) {
            dispatch(change(form, RESET_PASSWORD_TOKEN_FIELD_NAME, token));
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <LandingPaper className={styles.block}>
            <Typography variant="h3" className={styles.title}>
                Create New Password
            </Typography>
            <Typography variant="body2" color="textSecondary" className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, dicta!
            </Typography>
            <form onSubmit={handleSubmit} className={styles.form}>
                <Field
                    component={PasswordInput}
                    name={RESET_PASSWORD_PASSWORD_FIELD_NAME}
                    label="Password"
                    helperText="Must contain at least 8 characters"
                    className={styles.passwordField}
                    fullWidth
                    isRequired
                />
                <Field
                    component={PasswordInput}
                    name={RESET_PASSWORD_CONFIRM_PASSWORD_FIELD_NAME}
                    label="Confirm Password"
                    fullWidth
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
                    reset password
                </Button>
            </form>
        </LandingPaper>
    );
};

ResetPassword.propTypes = {
    dispatch: PropTypes.func.isRequired,
    location: locationShape.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    form: PropTypes.string.isRequired,
};

export default ResetPassword;
