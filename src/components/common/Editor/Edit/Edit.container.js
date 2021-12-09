import { reduxForm } from 'redux-form';

import { EDITOR_FIELD_NAME } from 'constants/editor.constants';
import { edit, editSuccess, editFail } from 'state/modules/editor/edit.module';
import { onSubmitActions } from 'state/modules/formSubmit.module';

import Edit from './Edit';

const form = {
    form: EDITOR_FIELD_NAME,
    onSubmit: onSubmitActions(edit, editSuccess, editFail),
};

export default reduxForm(form)(Edit);
