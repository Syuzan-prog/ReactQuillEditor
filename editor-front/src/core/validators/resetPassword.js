import {
    RESET_PASSWORD_PASSWORD_FIELD_NAME,
    RESET_PASSWORD_CONFIRM_PASSWORD_FIELD_NAME,
} from 'constants/landing.constants';

import validatePassword from './password';

function validate(values) {
    const errors = {};

    if (!values[RESET_PASSWORD_PASSWORD_FIELD_NAME]) {
        errors[RESET_PASSWORD_PASSWORD_FIELD_NAME] = 'Password is required';
    } else if (!validatePassword(values[RESET_PASSWORD_PASSWORD_FIELD_NAME])) {
        errors[RESET_PASSWORD_PASSWORD_FIELD_NAME] = 'Must contain at least 8 characters';
    }

    if (values[RESET_PASSWORD_PASSWORD_FIELD_NAME] !== values[RESET_PASSWORD_CONFIRM_PASSWORD_FIELD_NAME]) {
        errors[RESET_PASSWORD_CONFIRM_PASSWORD_FIELD_NAME] = 'Passwords should match';
    }

    return errors;
}

export default validate;
