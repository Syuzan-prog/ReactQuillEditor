import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Typography from '@mui/material/Typography';

import TextInput from 'components/common/TextInput';
import PasswordInput from 'components/common/PasswordInput';
import Checkbox from 'components/common/Checkbox';
import Button from 'components/common/Button';
import LandingPaper from 'components/common/LandingPaper';

import {
    CREATE_PASSWORD_EMAIL_FIELD_NAME,
    CREATE_PASSWORD_PASSWORD_FIELD_NAME,
    CREATE_PASSWORD_CONFIRM_PASSWORD_FIELD_NAME,
    CREATE_PASSWORD_TERMS_CONDITIONS_FIELD_NAME,
} from 'constants/landing.constants';

import styles from './CreatePassword.scss';

const SignUp = ({ handleSubmit, submitting }) => (
    <LandingPaper className={styles.block}>
        <Typography variant="h2" className={styles.title}>Create a password</Typography>
        <Typography variant="body2" color="textSecondary" className={styles.text}>
            Thank you! Please enter a user name and password you will use for
        </Typography>
        <form onSubmit={handleSubmit}>
            <Field
                component={TextInput}
                id="email"
                name={CREATE_PASSWORD_EMAIL_FIELD_NAME}
                label="Email"
                fullWidth
                isRequired
                disabled
            />
            <Field
                component={PasswordInput}
                name={CREATE_PASSWORD_PASSWORD_FIELD_NAME}
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
                name={CREATE_PASSWORD_CONFIRM_PASSWORD_FIELD_NAME}
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
                name={CREATE_PASSWORD_TERMS_CONDITIONS_FIELD_NAME}
                label={(
                    <Typography variant="body2" color="textSecondary">
                        I accept the
                        <a href="/terms">terms and conditions</a>
                    </Typography>
                )}
            />
            <Button
                type="submit"
                color="primary"
                variant="contained"
                className={styles.button}
                disabled={submitting}
                fullWidth
            >
                Complete Registration
            </Button>
        </form>
    </LandingPaper>
);

SignUp.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
};

export default SignUp;
