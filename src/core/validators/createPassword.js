import {
    CREATE_PASSWORD_PASSWORD_FIELD_NAME,
    CREATE_PASSWORD_CONFIRM_PASSWORD_FIELD_NAME,
    CREATE_PASSWORD_TERMS_CONDITIONS_FIELD_NAME,
} from 'constants/landing.constants';

import validatePassword from './password';

function validate(values) {
    const errors = {};

    if (!values[CREATE_PASSWORD_PASSWORD_FIELD_NAME]) {
        errors[CREATE_PASSWORD_PASSWORD_FIELD_NAME] = 'Password is required';
    } else if (!validatePassword(values[CREATE_PASSWORD_PASSWORD_FIELD_NAME])) {
        errors[CREATE_PASSWORD_PASSWORD_FIELD_NAME] = 'Must contain at least 8 characters';
    }

    if (values[CREATE_PASSWORD_PASSWORD_FIELD_NAME] !== values[CREATE_PASSWORD_CONFIRM_PASSWORD_FIELD_NAME]) {
        errors[CREATE_PASSWORD_CONFIRM_PASSWORD_FIELD_NAME] = 'Passwords should match';
    }

    if (!values[CREATE_PASSWORD_TERMS_CONDITIONS_FIELD_NAME]) {
        errors[CREATE_PASSWORD_TERMS_CONDITIONS_FIELD_NAME] = 'Please read and accept our terms and conditions';
    }

    return errors;
}

export default validate;
