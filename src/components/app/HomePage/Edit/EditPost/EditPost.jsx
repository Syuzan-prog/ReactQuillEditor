import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Button from 'components/common/Button';
import { EDITOR_UPDATE_FIELD_NAME } from 'constants/editor.constants';
import Editor from 'components/common/Editor';

import { EditPostFormWrapper } from '../edit.styles';

const EditPost = ({ change, editDocument, handleSubmit, editPostID, post }) => {
    const [editorHtml, setEditorHtml] = useState(post.editor);

    const handleChange = useCallback((event, html) => {
        setEditorHtml(event);

        editDocument(editPostID, event)
        change(EDITOR_UPDATE_FIELD_NAME, event);
    }, [editPostID]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <EditPostFormWrapper onSubmit={handleSubmit} className="container">
            <div>
                <Field editorHtml={editorHtml} handleChange={handleChange} component={Editor} id="editor" name={EDITOR_UPDATE_FIELD_NAME} className="editor" />
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                >
                    Edit
                </Button>
            </div>
        </EditPostFormWrapper>
    );
};

EditPost.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    change: PropTypes.func.isRequired,
    editPostID: PropTypes.string,
    post: PropTypes.object,  // eslint-disable-line react-hooks/exhaustive-deps
};

export default EditPost;
