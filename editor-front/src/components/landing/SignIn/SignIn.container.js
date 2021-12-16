import { reduxForm } from 'redux-form';

import { SIGNIN_FORM_NAME } from 'constants/landing.constants';
import { signin, signinSuccess, signinFail } from 'state/modules/signin.module';
import { onSubmitActions } from 'state/modules/formSubmit.module';
import validate from 'core/validators/signin';

import SignIn from './SignIn';

const form = {
    form: SIGNIN_FORM_NAME,
    onSubmit: onSubmitActions(signin, signinSuccess, signinFail),
    validate,
};

export default reduxForm(form)(SignIn);
