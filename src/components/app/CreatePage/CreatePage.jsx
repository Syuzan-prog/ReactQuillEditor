import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Button from 'components/common/Button';
import { EDITOR_FIELD_NAME } from 'constants/editor.constants';
import Editor from 'components/common/Editor';

import { CreatePageFormWrapper } from './CreatePage.styles';

const CreatePage = ({ change, handleSubmit }) => {
    const [editorHtml, setEditorHtml] = useState('');

    const handleChange = useCallback((event, html) => {
        setEditorHtml(event);
        change( EDITOR_FIELD_NAME, event );
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <CreatePageFormWrapper onSubmit={handleSubmit} className="container">
            <div>
                <Field editorHtml={editorHtml} handleChange={handleChange} component={Editor} id="editor" name={EDITOR_FIELD_NAME} className="editor" />
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                >
                    Create Page
                </Button>
            </div>
        </CreatePageFormWrapper>
    );
};

CreatePage.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    form: PropTypes.string.isRequired,
};

export default CreatePage;
