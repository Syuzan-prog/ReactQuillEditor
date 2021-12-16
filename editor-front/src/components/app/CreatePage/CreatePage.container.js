import { reduxForm } from 'redux-form';

import { EDITOR_FIELD_NAME } from 'constants/editor.constants';
import { saveDocument, saveDocumentSuccess, saveDocumentFail } from 'state/modules/editor/saveDocument.module';
import { onSubmitActions } from 'state/modules/formSubmit.module';

import createPage from './CreatePage';

const form = {
    form: EDITOR_FIELD_NAME,
    onSubmit: onSubmitActions(saveDocument, saveDocumentSuccess, saveDocumentFail),
};

export default reduxForm(form)(createPage);
