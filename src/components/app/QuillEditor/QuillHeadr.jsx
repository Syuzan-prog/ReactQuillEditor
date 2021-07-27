import React from 'react';
import clsx from 'clsx';
import Button from 'components/common/Button';
import { getPDF } from './jsPdf';
// import { Default} from './jsWord'

import styles from './QuillEditor.scss';

const QuillHeader = () => {
    return (
        <div id="toolbar" className={styles.quillHeader}>
            <span className="ql-formats">
                <select className="ql-font">
                    <option value="arial" defaultValue="arial">
                        Arial
                    </option>
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
            <Button label="pdf" className={clsx('p-button-raised p-button-text', styles.buttonPdf)} onClick={getPDF} />
            <Button
                label="word"
                className={clsx('p-button-raised p-button-text', styles.buttonPdf)}
                // onClick={Default}
            />
        </div>
    );
};

export default QuillHeader;
