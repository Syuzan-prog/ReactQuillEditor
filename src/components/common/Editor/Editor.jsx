import React from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import EditorToolbar from './EditorToolbar';

import { modules, formats } from '../../../configs/modules';

export const Editor = ({ id, input, className, ...props }) => {
    console.log('input.value', input.value);
    return (
        <div className={className}>
            <EditorToolbar value={input.value} />
            <ReactQuill
                {...props}
                {...input}
                // value={input.value}
                // name={input.name}
                id={id}
                theme="snow"
                modules={modules}
                formats={formats}
                placeholder="Write something awesome..."
            />
        </div>
    );
};

Editor.propTypes = {
    id: PropTypes.string,
    input: PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        onFocus: PropTypes.func,
        onChange: PropTypes.func,
        onBlur: PropTypes.func,
    }),
    className: PropTypes.string,
};
export default Editor;
