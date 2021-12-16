import { reduxForm } from 'redux-form';

import { JOIN_WAITLIST_FORM_NAME } from 'constants/landing.constants';
import { joinWaitlist, joinWaitlistSuccess, joinWaitlistFail } from 'state/modules/joinWaitlist.module';
import { onSubmitActions } from 'state/modules/formSubmit.module';
import validate from 'core/validators/joinWaitlist';

import JoinWaitlist from './JoinWaitlist';

const form = {
    form: JOIN_WAITLIST_FORM_NAME,
    onSubmit: onSubmitActions(joinWaitlist, joinWaitlistSuccess, joinWaitlistFail),
    validate,
};

export default reduxForm(form)(JoinWaitlist);
