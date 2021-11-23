import {
    CHANGE_PASSWORD_PASSWORD_FIELD_NAME,
    CHANGE_PASSWORD_NEW_PASSWORD_FIELD_NAME,
    CHANGE_PASSWORD_CONFIRM_NEW_PASSWORD_FIELD_NAME,
} from 'constants/settings.constants';

import validatePassword from './password';

function validate(values) {
    const errors = {};

    if (!values[CHANGE_PASSWORD_PASSWORD_FIELD_NAME]) {
        errors[CHANGE_PASSWORD_PASSWORD_FIELD_NAME] = 'Password is required';
    }

    if (!values[CHANGE_PASSWORD_NEW_PASSWORD_FIELD_NAME]) {
        errors[CHANGE_PASSWORD_NEW_PASSWORD_FIELD_NAME] = 'New password is required';
    } else if (!validatePassword(values[CHANGE_PASSWORD_NEW_PASSWORD_FIELD_NAME])) {
        errors[CHANGE_PASSWORD_NEW_PASSWORD_FIELD_NAME] = 'Must contain at least 8 characters';
    }

    if (values[CHANGE_PASSWORD_NEW_PASSWORD_FIELD_NAME] !== values[CHANGE_PASSWORD_CONFIRM_NEW_PASSWORD_FIELD_NAME]) {
        errors[CHANGE_PASSWORD_CONFIRM_NEW_PASSWORD_FIELD_NAME] = 'Passwords should match';
    }

    return errors;
}

export default validate;
