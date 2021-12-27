import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Button from 'components/common/Button';
import { EDITOR_FIELD_NAME } from 'constants/editor.constants';
import Editor from 'components/common/Editor';

import { CreatePageFormWrapper } from './CreatePage.styles';

const CreatePage = ({ change, handleSubmit }) => {
    const [editorHtml, setEditorHtml] = useState('');

    const handleChange = useCallback((event) => {
        setEditorHtml(event);
        change(EDITOR_FIELD_NAME, event);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <CreatePageFormWrapper onSubmit={handleSubmit} className="container">
            <div>
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                >
                    Save
                </Button>
                <Field editorHtml={editorHtml} handleChange={handleChange} component={Editor} id="editor" name={EDITOR_FIELD_NAME} className="editor" />
            </div>
        </CreatePageFormWrapper>
    );
};

CreatePage.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    change: PropTypes.func.isRequired,
};

export default CreatePage;
