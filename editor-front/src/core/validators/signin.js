import {
    SIGNIN_EMAIL_FIELD_NAME,
    SIGNIN_PASSWORD_FIELD_NAME,
} from 'constants/landing.constants';

function validate(values) {
    const errors = {};

    if (!values[SIGNIN_EMAIL_FIELD_NAME]) {
        errors[SIGNIN_EMAIL_FIELD_NAME] = 'Email is required';
    }

    if (!values[SIGNIN_PASSWORD_FIELD_NAME]) {
        errors[SIGNIN_PASSWORD_FIELD_NAME] = 'Password is required';
    }

    return errors;
}

export default validate;
