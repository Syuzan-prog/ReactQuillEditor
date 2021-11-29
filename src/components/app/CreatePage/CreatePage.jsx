import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Button from 'components/common/Button';
import Editor from 'components/common/Editor';

import { EDITOR_FIELD_NAME } from 'constants/editor.constants';

import { CreatePageWrapper } from './CreatePage.styles';

const CreatePage = ({ handleSubmit }) => (
    <CreatePageWrapper onSubmit={handleSubmit} className="container">
        <Field component={Editor} id="editor" name={EDITOR_FIELD_NAME} className="editor" />
        <Button
            type="submit"
            color="primary"
            variant="contained"
        >
            Create Page
        </Button>
    </CreatePageWrapper>
);

CreatePage.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default CreatePage;
