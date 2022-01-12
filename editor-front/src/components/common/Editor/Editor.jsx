import React, { useMemo, useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';

import isInvalid from 'core/utils/isInvalid';
import { modules } from 'configs/modules';
import { EDITOR_FIELD_ID_NAME } from 'constants/editor.constants';
import EditorToolbar from './EditorToolbar';
import EditorZoom from './EditorZoom';
import EditorSlider from './EditorSlider/EditorSlider';

import { EditorWrapper } from './Editor.styles';
import EditorResizeable from './EditorResizeable';

export const Editor = ({ editorHtml, meta, handleChange, id, className, ...props }) => {
    const [value, setValue] = useState([10, 90]);
    const error = useMemo(() => meta && isInvalid(meta) && meta.error, [meta]);
    const editorRef = useRef(null);

    return (
        <>
            <EditorZoom editorRef={editorRef}>
                <div className={className}>
                    <EditorToolbar value={editorHtml} toolbarId={EDITOR_FIELD_ID_NAME} editorRef={editorRef} />
                    <EditorWrapper>
                        <div ref={editorRef} className="editor-zoom">
                            <EditorSlider value={value} setValue={setValue} sx={{background:"red"}}/>
                            <EditorResizeable resizableRef={editorRef} >
                                <ReactQuill
                                    value={editorHtml}
                                    onChange={handleChange}
                                    {...props}
                                    id={id}
                                    theme="snow"
                                    modules={modules(EDITOR_FIELD_ID_NAME)}
                                />
                            </EditorResizeable>
                        </div>
                    </EditorWrapper>
                    { error && <div className="errors"> Error</div> }
                </div>
            </EditorZoom>
        </>
    );
};

Editor.propTypes = {
    id: PropTypes.string,
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
