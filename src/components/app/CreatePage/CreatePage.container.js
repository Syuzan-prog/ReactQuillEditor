import { reduxForm } from 'redux-form';

import { EDITOR_FIELD_NAME } from 'constants/editor.constants';
import { createPage, createPageSuccess, createPageFail } from 'state/modules/createPage.module';
import { onSubmitActions } from 'state/modules/formSubmit.module';

import CreatePage from './CreatePage';

const form = {
    form: EDITOR_FIELD_NAME,
    onSubmit: onSubmitActions(createPage, createPageSuccess, createPageFail),
};

export default reduxForm(form)(CreatePage);
