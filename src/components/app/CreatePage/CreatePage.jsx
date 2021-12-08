import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import Button from 'components/common/Button';
import { EDITOR_FIELD_NAME } from 'constants/editor.constants';
import Editor from './Editor';

import { CreatePageWrapper } from './CreatePage.styles';

const CreatePage = ({ change }) => {
    const [editorHtml, setEditorHtml] = useState('');

    const handleChange = useCallback((event, html) => {
        setEditorHtml(event);
        change(EDITOR_FIELD_NAME, event);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <CreatePageWrapper className="container">
            <div>
                <Editor onChange={handleChange} value={editorHtml} id="editor" name={EDITOR_FIELD_NAME} className="editor" />
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                >
                    Create Page
                </Button>
            </div>
        </CreatePageWrapper>
    );
};

CreatePage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    form: PropTypes.string.isRequired,
};

export default CreatePage;
