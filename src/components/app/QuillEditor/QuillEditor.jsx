import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import PropTypes from 'prop-types';

import { models, formats } from './modules';
import QuillHeader from './QuillHeadr';

import styles from './QuillEditor.scss';
import JsWord from './JsWord';


const QuillEditor = ({ placeholder, onEditorChange }) => {
    const [editorHtml, setEditorHtml] = useState('');

    const handleChange = (html) => {
        setEditorHtml(html);
        onEditorChange(editorHtml);
    };

    return (
        <div className={styles.card}>
            <JsWord/>
            <QuillHeader />
            <ReactQuill
                id="reactQuill"
                theme="snow"
                value={editorHtml}
                modules={models}
                formats={formats}
                onChange={handleChange}
                placeholder={placeholder}
                className={styles.quillEditor}
            />
            
        </div>
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
