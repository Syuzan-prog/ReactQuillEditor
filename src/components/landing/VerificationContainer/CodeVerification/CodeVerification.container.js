import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { VERIFY_CODE_FORM_NAME } from 'constants/landing.constants';
import {
    requestCode,
    submitCode,
    submitCodeSuccess,
    submitCodeFail,
} from 'state/modules/verification';
import { onSubmitActions } from 'state/modules/formSubmit.module';

import CodeVerification from './CodeVerification';

const form = {
    form: VERIFY_CODE_FORM_NAME,
    onSubmit: onSubmitActions(submitCode, submitCodeSuccess, submitCodeFail),
};

const mapDispatchToProps = {
    requestCode,
};

export default connect(null, mapDispatchToProps)(reduxForm(form)(CodeVerification));
