import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { EDITOR_UPDATE_FORM_NAME } from 'constants/editor.constants';
import { editDocument, editDocumentSuccess, editDocumentFail } from 'state/modules/editor/editDocument.module';
import { onSubmitActions } from 'state/modules/formSubmit.module';
import { getPostsById } from 'state/selectors/editor.selectors';

import EditPost from './EditPost';

const form = {
    form: EDITOR_UPDATE_FORM_NAME,
    onSubmit: onSubmitActions(editDocument, editDocumentSuccess, editDocumentFail),
};

const mapStateToProps = (state, props) => ({
    post: getPostsById(state, props),
});

export default connect(mapStateToProps)(reduxForm(form)(EditPost));
// export default reduxForm(form)(EditPost);
