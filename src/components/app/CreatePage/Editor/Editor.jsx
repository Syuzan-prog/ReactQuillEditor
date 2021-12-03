import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';

import { modules } from 'configs/modules';
import EditorToolbar from './EditorToolbar';

export const Editor = ({ id, value, onChange, className, ...props }) => {
    const reactQuill = useRef();
    return (
        <div className={className}>
            <EditorToolbar value={value} reactQuill={reactQuill} />
            <ReactQuill
                {...props}
                value={value}
                id={id}
                onChange={onChange}
                theme="snow"
                modules={modules}
                placeholder="Write something awesome..."
                ref={reactQuill}
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
