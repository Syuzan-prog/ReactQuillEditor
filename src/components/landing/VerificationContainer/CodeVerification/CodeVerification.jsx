import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import LandingPaper from 'components/common/LandingPaper';
import CodeInput from 'components/common/CodeInput';

import { VERIFY_CODE_FIELD_NAME } from 'constants/landing.constants';

import styles from './CodeVerification.scss';

const CodeVerification = ({ handleSubmit, submitting, requestCode }) => {
    const [isMessageShown, setIsMessageShown] = useState(false);

    useEffect(() => {
        requestCode();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const handleClose = useCallback(() => setIsMessageShown(false), []);

    const handleResend = useCallback(() => {
        requestCode();
        setIsMessageShown(true);
    }, [requestCode]);

    return (
        <LandingPaper className={styles.block}>
            <Typography variant="h2">Verification</Typography>
            <Typography variant="body2" className={styles.title}>
                Thank you for choosing  Please enter the
                {' '}
                <strong>
                    verification code
                </strong>
                {' '}
                sent to your registered email.
            </Typography>
            <form onSubmit={handleSubmit}>
                <Field
                    name={VERIFY_CODE_FIELD_NAME}
                    component={CodeInput}
                />
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    disabled={submitting}
                    fullWidth
                >
                    Submit
                </Button>
                <Typography variant="caption" className={styles.resend} onClick={handleResend}>
                    Resend code
                </Typography>
            </form>
            <Snackbar
                open={isMessageShown}
                onClose={handleClose}
                message="A new code has been sent to your email"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                TransitionComponent={Slide}
                TransitionProps={{ direction: 'left' }}
                action={(
                    <IconButton
                        color="inherit"
                        className={styles.closeButton}
                        onClick={handleClose}
                    >
                        <CloseIcon />
                    </IconButton>
                )}
            />
        </LandingPaper>
    );
};

CodeVerification.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    requestCode: PropTypes.func.isRequired,
};

export default CodeVerification;
