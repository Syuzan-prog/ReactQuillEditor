import React, {useState, useRef, useEffect} from "react";
import ReactQuill from "react-quill";
import EditorToolbar from "./EditorToolbar";

import { modules, formats } from "../../../../configs/modules";

import styles from './QuillEditor.scss';

export const Editor = () => {
  const [editorHtml, setEditorHtml] = useState('');
  const handleChange = value => {
    setEditorHtml( value );
  };
  const containerRef = useRef();

  useEffect(() => {
    containerRef.current;
    console.log(containerRef.current.editor)
  }, [containerRef]);

  
  return (
    <div>
        <EditorToolbar containerRef={containerRef} />
        <ReactQuill
          id="reactQuill"
          theme="snow"
          value={editorHtml}
          modules={modules}
          formats={formats}
          onChange={handleChange}
          placeholder={"Write something awesome..."}
          className={styles.quillEditor}
          ref={containerRef}
        />
    </div>
  );
};

export default Editor;