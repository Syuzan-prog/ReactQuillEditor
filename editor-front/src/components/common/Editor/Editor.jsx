import React, { useMemo, useRef, useState } from 'react';
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
    const [value, setValue] = useState([0, 100]);
    const error = useMemo(() => meta && isInvalid(meta) && meta.error, [meta]);
    const editorRef = useRef(null);
    const editorQuilParentRef = useRef(null);
    // const table = quillRef.getModule('table');
    // table.insertTable(2, 2);
    return (
        <>
            <EditorZoom editorRef={editorRef}>
                <div className={className}>
                    <EditorToolbar value={editorHtml} toolbarId={EDITOR_FIELD_ID_NAME}/>
                    <EditorWrapper>
                        <div ref={editorRef} className="editor-zoom">
                            <EditorSlider value={value} onChangeCommitted={setValue} onChange={(v)=>{
                                const elem = editorQuilParentRef.current;
                                if(elem){
                                    const width =  v[1] - v[0];
                                    const posX = v[0];
                                    elem.style.width = `${width}%`
                                    elem.style.marginLeft = `${posX}%`
                                    
                                }
                            }} />
                            <div ref={editorQuilParentRef}>
                                <ReactQuill
                                    value={editorHtml}
                                    onChange={handleChange}
                                    {...props}
                                    id={id}
                                    theme="snow"
                                    modules={modules(EDITOR_FIELD_ID_NAME)}
                                />
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
