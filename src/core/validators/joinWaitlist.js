import {
    JOIN_WAITLIST_EMAIL_FIELD_NAME,
} from 'constants/landing.constants';

function validate(values) {
    const errors = {};

    if (!values[JOIN_WAITLIST_EMAIL_FIELD_NAME]) {
        errors[JOIN_WAITLIST_EMAIL_FIELD_NAME] = 'Email is required';
    }

    return errors;
}

export default validate;
