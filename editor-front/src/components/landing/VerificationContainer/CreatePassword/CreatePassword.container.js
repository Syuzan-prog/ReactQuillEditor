import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { CREATE_PASSWORD_FORM_NAME, CREATE_PASSWORD_EMAIL_FIELD_NAME } from 'constants/landing.constants';
import { createPassword, createPasswordSuccess, createPasswordFail } from 'state/modules/verification';
import { onSubmitActions } from 'state/modules/formSubmit.module';
import { getVerficationEmail } from 'state/selectors/verification.selectors';
import validate from 'core/validators/createPassword';

import CreatePassword from './CreatePassword';

const form = {
    form: CREATE_PASSWORD_FORM_NAME,
    onSubmit: onSubmitActions(createPassword, createPasswordSuccess, createPasswordFail),
    validate,
};

const mapStateToProps = (state) => ({
    initialValues: {
        [CREATE_PASSWORD_EMAIL_FIELD_NAME]: getVerficationEmail(state),
    },
});

export default connect(mapStateToProps)(reduxForm(form)(CreatePassword));
