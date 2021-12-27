import { reduxForm } from 'redux-form';

import { EDITOR_UPDATE_FORM_NAME } from 'constants/editor.constants';
import { editDocument, editDocumentSuccess, editDocumentFail } from 'state/modules/editor/document.edit.module';
import { onSubmitActions } from 'state/modules/formSubmit.module';

import EditPost from './EditPost';

const form = {
    form: EDITOR_UPDATE_FORM_NAME,
    onSubmit: onSubmitActions(editDocument, editDocumentSuccess, editDocumentFail),
};

export default reduxForm(form)(EditPost);
