import React, { useState } from 'react';
import { Quill } from 'react-quill';
import katex from 'katex';

import styles from './QuillEditor.scss';

const { mathquill4quill } = window;
window.katex = katex;

const QuillHeader = () => {
    const [state, setstate] = useState(false);
    const fontSizeStyle = Quill.import('attributors/style/size');
    fontSizeStyle.whitelist = ['10px', '12px', '14px', '16px', '20px', '24px', '36px'];
    Quill.register(fontSizeStyle, true);

    // Add fonts to whitelist and register them
    const Font = Quill.import('formats/font');
    Font.whitelist = ['mirza', 'roboto', 'arial', 'comic-sans', 'courier-new', 'georgia', 'helvetica', 'lucida'];
    Quill.register(Font, true);

    const hendelChange = () => {
        setstate(true);
    };

    return (
        <div id="toolbar" className={styles.quillHeader}>
            <span className="ql-formats">
                <select className="ql-font" defaultValue="arial">
                    <option value="mirza">mirza</option>
                    <option value="roboto">roboto</option>
                    <option value="arial">Arial</option>
                    <option value="comic-sans">Comic Sans</option>
                    <option value="courier-new">Courier New</option>
                    <option value="georgia">Georgia</option>
                    <option value="helvetica">Helvetica</option>
                    <option value="lucida">Lucida</option>
                </select>

                <select className="ql-size" defaultValue="14px">
                    <option value="10px">10px</option>
                    <option value="12px">12px</option>
                    <option value="14px">14px</option>
                    <option value="16px">16px</option>
                    <option value="20px">20px</option>
                    <option value="24px">24px</option>
                    <option value="36px">36px</option>
                </select>
                <select className="ql-header" defaultValue="3">
                    <option value="1">Heading</option>
                    <option value="2">Subheading</option>
                    <option value="3">Normal</option>
                </select>
            </span>
            <span className="ql-formats">
                <button className="ql-bold" />
                <button className="ql-italic" />
                <button className="ql-underline" />
                <button className="ql-strike" />
            </span>
            <span className="ql-formats">
                <button className="ql-list" value="ordered" />
                <button className="ql-list" value="bullet" />
                <button className="ql-indent" value="-1" />
                <button className="ql-indent" value="+1" />
            </span>
            <span className="ql-formats">
                <button className="ql-script" value="super" />
                <button className="ql-script" value="sub" />
                <button className="ql-blockquote" />
                <button className="ql-direction" />
            </span>
            <span className="ql-formats">
                <select className="ql-align" />
                <select className="ql-color" />
                <select className="ql-background" />
            </span>
            <span className="ql-formats">
                <button className="ql-link" />
                <button className="ql-image" />
            </span>
            <span className="ql-formats">
                <button className="ql-formula" />
                <button className="ql-code-block" />
                <button className="ql-clean" />
            </span>
            <span className="ql-formats">
                <button className="ql-undo">
                    <i className="pi pi-refresh"></i>
                </button>
                <button className="ql-redo">
                    <i className="pi pi-replay"></i>
                </button>
            </span>

            <button style={{ background: 'grey' }} onClick={hendelChange}>
                a4
            </button>
            {/* <select defaultValue="a4">
                <option value="a4">a4</option>
                <option value="a3">a3</option>
                <option value="a5">a5</option>
                <option value="a6">a6</option>
            </select> */}
        </div>
    );
};

export default QuillHeader;
