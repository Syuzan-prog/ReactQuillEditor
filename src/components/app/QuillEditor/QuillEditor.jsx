import React, { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import PropTypes from 'prop-types';

import { models, formats } from './modules';
import QuillHeader from './QuillHeadr';

import styles from './QuillEditor.scss';


const QuillEditor = ({ placeholder, onEditorChange }) => {
    const [editorHtml, setEditorHtml] = useState('');

    const handleChange = (html) => {
        setEditorHtml(html);
        onEditorChange(editorHtml);
    };

    return (
        <>
            <QuillHeader/>
            <ReactQuill
                theme="snow"
                value={editorHtml}
                modules={models}
                formats={formats}
                onChange={handleChange}
                placeholder={placeholder}
                className={styles.quillEditor}
            />
        </>
    );
};

QuillEditor.propTypes = {
    placeholder: PropTypes.string,
    onEditorChange: PropTypes.func,
};

QuillEditor.defaultProps = {
    placeholder: '',
};
export default QuillEditor;
