import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';

import Typography from '@mui/material/Typography';

import { routes } from 'configs/app.routes';
import TextInput from 'components/common/TextInput';
import PasswordInput from 'components/common/PasswordInput';
import Checkbox from 'components/common/Checkbox';
import Button from 'components/common/Button';
import LandingPaper from 'components/common/LandingPaper';

import {
    SIGNUP_EMAIL_FIELD_NAME,
    SIGNUP_PASSWORD_FIELD_NAME,
    SIGNUP_CONFIRM_PASSWORD_FIELD_NAME,
    SIGNUP_TERMS_CONDITIONS_FIELD_NAME,
} from 'constants/landing.constants';

import styles from './SignUp.scss';

const SignUp = ({ handleSubmit }) => (
    <LandingPaper className={styles.block}>
        <Typography variant="h3" className={styles.title}>Sign Up</Typography>
        <Typography variant="body2" color="textSecondary" className={styles.text}>
            Thank you! Please entera user name and password you will use for
        </Typography>

        <form onSubmit={handleSubmit}>
            <Field component={TextInput} id="email" name={SIGNUP_EMAIL_FIELD_NAME} label="Email" fullWidth isRequired />
            <Field
                component={PasswordInput}
                name={SIGNUP_PASSWORD_FIELD_NAME}
                label="Create password"
                inputProps={{
                    autoComplete: 'password',
                }}
                fullWidth
                isRequired
                className={styles.passwordInput}
            />
            <Field
                component={PasswordInput}
                name={SIGNUP_CONFIRM_PASSWORD_FIELD_NAME}
                label="Confirm password"
                inputProps={{
                    autoComplete: 'password',
                }}
                fullWidth
                isRequired
                className={styles.passwordInput}
            />
            <Field
                component={Checkbox}
                controlClassName={styles.checkbox}
                name={SIGNUP_TERMS_CONDITIONS_FIELD_NAME}
                label={(
                    <Typography variant="body2" color="textSecondary">
                        I accept the
                        <Link to={routes.termsConditions}>terms and conditions</Link>
                    </Typography>
                )}
            />
            <Button
                type="submit"
                color="primary"
                variant="contained"
                className={styles.button}
                fullWidth
            >
                Sign In
            </Button>
            <Typography variant="body2" color="textSecondary" className={styles.linkSignup}>
                Already have an account?
                <Link to={routes.signin} className={styles.link}>
                    Sign in here
                </Link>
            </Typography>
        </form>
    </LandingPaper>
);

SignUp.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default SignUp;
