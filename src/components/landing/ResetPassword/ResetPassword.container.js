import { reduxForm } from 'redux-form';

import { RESET_PASSWORD_FORM_NAME } from 'constants/landing.constants';
import { resetPassword, resetPasswordSuccess, resetPasswordFail } from 'state/modules/resetPassword.module';
import { onSubmitActions } from 'state/modules/formSubmit.module';
import validate from 'core/validators/resetPassword';

import ResetPassword from './ResetPassword';

const form = {
    form: RESET_PASSWORD_FORM_NAME,
    onSubmit: onSubmitActions(resetPassword, resetPasswordSuccess, resetPasswordFail),
    validate,
};

export default reduxForm(form)(ResetPassword);
