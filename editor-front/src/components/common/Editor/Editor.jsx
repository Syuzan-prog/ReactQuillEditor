import React, { useMemo, useRef, useState } from 'react';
import { Resizable } from 're-resizable';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';

import isInvalid from 'core/utils/isInvalid';
import { modules } from 'configs/modules';
import { EDITOR_FIELD_ID_NAME } from 'constants/editor.constants';
import EditorToolbar from './EditorToolbar';
import EditorZoom from './EditorZoom';
import EditorSlider from './EditorSlider/EditorSlider';

import { EditorWrapper } from './Editor.styles';

export const Editor = ({ editorHtml, meta, handleChange, id, className, ...props }) => {
    const error = useMemo(() => meta && isInvalid(meta) && meta.error, [meta]);
    const editorRef = useRef();
    const [widthValue, setWidthValue] = useState(700);
    return (
        <>
            <EditorZoom editorRef={editorRef}>
                <div className={className}>
                    <EditorToolbar value={editorHtml} toolbarId={EDITOR_FIELD_ID_NAME} editorRef={editorRef} />
                    <EditorWrapper>
                        <div ref={editorRef} className="editor-zoom">
                            <EditorSlider widthValue={widthValue} />
                            <div style={{ width: '210mm', background: 'white', display: 'flex', justifyContent: 'center' }}>
                                <Resizable
                                    enable={{ right: true, left: true }}
                                    minWidth="500px"
                                    size={{ width: widthValue }}
                                    bounds="parent"
                                    onResizeStop={(e, direction, ref, d) => {
                                        setWidthValue(widthValue + d.width);
                                    }}
                                >
                                    <ReactQuill
                                        value={editorHtml}
                                        onChange={handleChange}
                                        {...props}
                                        id={id}
                                        theme="snow"
                                        modules={modules(EDITOR_FIELD_ID_NAME)}
                                    />
                                </Resizable>
                            </div>

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
