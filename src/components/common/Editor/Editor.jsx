import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';

import isInvalid from 'core/utils/isInvalid';
import { modules } from 'configs/modules';
import { EDITOR_FIELD_ID_NAME } from 'constants/editor.constants';
import EditorToolbar from './EditorToolbar';

export const Editor = ({ editorHtml, meta, handleChange, id, input, className, ...props }) => {
    const error = useMemo(() => meta && isInvalid(meta) && meta.error, [meta]);
    return (
        <div className={className}>
            <EditorToolbar value={editorHtml}  toolbarId={EDITOR_FIELD_ID_NAME} />
            <ReactQuill
                // {...input}
                value={editorHtml}
                onChange={handleChange}
                {...props}
                id={id}
                theme="snow"
                modules={modules(EDITOR_FIELD_ID_NAME)}
                placeholder="Write something awesome..."
            />
             { error && <div className="errors"> Error</div> }
        </div>
    );
};

Editor.propTypes = {
    id: PropTypes.string,
    input: PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.arrayOf(PropTypes.string)]),
        onFocus: PropTypes.func,
        onChange: PropTypes.func,
        onBlur: PropTypes.func,
    }),
    meta: PropTypes.shape({
        error: PropTypes.node,
        invalid: PropTypes.bool,
        submitFailed: PropTypes.bool,
        submitting: PropTypes.bool,
        touched: PropTypes.bool,
    }),
    className: PropTypes.string,
};
export default Editor;
