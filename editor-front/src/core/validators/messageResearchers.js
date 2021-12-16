import {
    MESSAGE_RESEARCHERS_RESEARCHERS_FIELD_NAME,
    MESSAGE_RESEARCHERS_MESSAGE_FIELD_NAME,
} from 'constants/dashboard.constants';

function validate(values) {
    const errors = {};

    if (!values[MESSAGE_RESEARCHERS_RESEARCHERS_FIELD_NAME]?.length) {
        errors[MESSAGE_RESEARCHERS_RESEARCHERS_FIELD_NAME] = 'Please select at least one researcher';
    }

    if (!values[MESSAGE_RESEARCHERS_MESSAGE_FIELD_NAME]) {
        errors[MESSAGE_RESEARCHERS_MESSAGE_FIELD_NAME] = 'Message is required';
    }

    return errors;
}

export default validate;
