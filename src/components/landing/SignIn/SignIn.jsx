import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';

import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import TextInput from 'components/common/TextInput';
import PasswordInput from 'components/common/PasswordInput';
import Checkbox from 'components/common/Checkbox';
import Button from 'components/common/Button';
import LandingPaper from 'components/common/LandingPaper';

import { locationShape } from 'configs/shapes';
import { routes } from 'configs/app.routes';
import {
    SIGNIN_EMAIL_FIELD_NAME,
    SIGNIN_PASSWORD_FIELD_NAME,
    SIGNIN_REMEMBER_ME_FIELD_NAME,
} from 'constants/landing.constants';

import styles from './SignIn.scss';

const SignIn = ({ handleSubmit, submitting, location, history }) => {
    const handleNotificationClose = useCallback(() => {
        history.replace({ ...location, state: {} });
    }, [history, location]);

    return (
        <LandingPaper className={styles.block}>
            <Typography variant="h3" className={styles.title}>Sign In</Typography>
            <Typography variant="body2" color="textSecondary" className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, dicta!
            </Typography>

            <form onSubmit={handleSubmit}>
                <Field component={TextInput} id="email" name={SIGNIN_EMAIL_FIELD_NAME} label="Email" fullWidth isRequired className={styles.emailInput} />
                <Typography variant="caption" className={styles.recoverPasswordLink}>
                    <Link to={routes.recoverPassword}>Forgot Password?</Link>
                </Typography>
                <Field
                    component={PasswordInput}
                    name={SIGNIN_PASSWORD_FIELD_NAME}
                    label="Password"
                    inputProps={{
                        autoComplete: 'password',
                    }}
                    fullWidth
                    isRequired
                />
                <Field
                    component={Checkbox}
                    controlClassName={styles.checkbox}
                    className={styles.coloredCheckbox}
                    name={SIGNIN_REMEMBER_ME_FIELD_NAME}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    className={styles.button}
                    disabled={submitting}
                    fullWidth
                >
                    Sign In
                </Button>
                <Typography variant="body2" color="textSecondary" className={styles.linkSignup}>
                    Don’t have an account, yet?
                    <Link to={routes.join} className={styles.link}>
                        Sign up here
                    </Link>
                </Typography>
            </form>
            <Snackbar
                open={location.state?.showVerificationNotification}
                autoHideDuration={5000}
                onClose={handleNotificationClose}
                message="Your account has been successfully verified"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                TransitionComponent={Slide}
                TransitionProps={{ direction: 'left' }}
                action={(
                    <IconButton
                        color="inherit"
                        className={styles.closeButton}
                        onClick={handleNotificationClose}
                    >
                        <CloseIcon />
                    </IconButton>
                )}
            />
        </LandingPaper>
    );
};

SignIn.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    location: locationShape.isRequired,
    history: PropTypes.shape({
        replace: PropTypes.func,
    }).isRequired,
};

export default SignIn;
