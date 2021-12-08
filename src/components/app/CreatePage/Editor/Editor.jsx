import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';

import { modules } from 'configs/modules';
import { EDITOR_FIELD_ID_NAME } from 'constants/editor.constants';
import EditorToolbar from './EditorToolbar';

export const Editor = ({ id, value, onChange, className, ...props }) => {
    const reactQuillRef = useRef();
    return (
        <div className={className}>
            <EditorToolbar value={value} reactQuillRef={reactQuillRef} toolbarId={EDITOR_FIELD_ID_NAME} />
            <ReactQuill
                {...props}
                value={value}
                id={id}
                onChange={onChange}
                theme="snow"
                modules={modules(EDITOR_FIELD_ID_NAME)}
                placeholder="Write something awesome..."
                ref={reactQuillRef}
            />
        </div>
    );
};

Editor.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.node,
};
export default Editor;
