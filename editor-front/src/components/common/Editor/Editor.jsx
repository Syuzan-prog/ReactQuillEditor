import React, { useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import { PDFExport } from '@progress/kendo-react-pdf';

import isInvalid from 'core/utils/isInvalid';
import { modules } from 'configs/modules';
import { EDITOR_FIELD_ID_NAME } from 'constants/editor.constants';
import EditorToolbar from './EditorToolbar';
import EditorZoom from './EditorZoom';

export const Editor = ({ editorHtml, meta, handleChange, id, input, className, ...props }) => {
    const error = useMemo(() => meta && isInvalid(meta) && meta.error, [meta]);
    const editorRef = useRef();

    return (
        <>
            <EditorZoom editorRef={editorRef}>
                <div className={className}>
                    <EditorToolbar value={editorHtml} toolbarId={EDITOR_FIELD_ID_NAME} editorRef={editorRef} />
                    <PDFExport>
                        <div ref={editorRef} className="zoom">
                            <ReactQuill
                            // {...input}
                                value={editorHtml}
                                onChange={handleChange}
                                {...props}
                                id={id}
                                theme="snow"
                                modules={modules(EDITOR_FIELD_ID_NAME)}
                            />
                        </div>
                    </PDFExport>
                    { error && <div className="errors"> Error</div> }
                </div>
            </EditorZoom>
        </>
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
    editorHtml: PropTypes.string,
    handleChange: PropTypes.func,
    className: PropTypes.string,
};
export default Editor;
