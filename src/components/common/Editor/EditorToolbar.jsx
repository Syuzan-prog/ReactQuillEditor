import React from 'react';
import PropTypes from 'prop-types';
// import ReactToPrint from 'react-to-print';

import IconButton from '@mui/material/IconButton';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import RedoIcon from '@mui/icons-material/Redo';
import UndoIcon from '@mui/icons-material/Undo';

// import PrintIcon from '@mui/icons-material/Print';

import { getPDF, getDocx } from './editorFunc';

const EditorToolbar = ({ value }) =>
    // const handleUploadClick = useCallback(() => {
    //     containerRef?.current.click();
    // }, [containerRef]);
    (
        <div id="toolbar">
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
                <IconButton className="ql-bold" />
                <IconButton className="ql-italic" />
                <IconButton className="ql-underline" />
                <IconButton className="ql-strike" />
            </span>
            <span className="ql-formats">
                <IconButton className="ql-list" value="ordered" />
                <IconButton className="ql-list" value="bullet" />
                <IconButton className="ql-indent" value="-1" />
                <IconButton className="ql-indent" value="+1" />
            </span>
            <span className="ql-formats">
                <IconButton className="ql-script" value="super" />
                <IconButton className="ql-script" value="sub" />
                <IconButton className="ql-blockquote" />
            </span>
            <span className="ql-formats">
                <select className="ql-align" />
                <select className="ql-color" />
                <select className="ql-background" />
            </span>
            <span className="ql-formats">
                <IconButton className="ql-link" />
                <IconButton className="ql-image" />
            </span>
            <span className="ql-formats">
                <IconButton className="ql-formula" />
                <IconButton className="ql-code-block" />
                <IconButton className="ql-clean" />
            </span>
            <span className="ql-formats">
                <IconButton className="ql-undo">
                    <UndoIcon />
                </IconButton>
                <IconButton className="ql-redo">
                    <RedoIcon />
                </IconButton>
            </span>

            <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => getPDF(value)}>
                <PictureAsPdfIcon />
            </IconButton>
            <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => getDocx(value)}>
                <InsertDriveFileIcon />
            </IconButton>
            {/* <>
                <ReactToPrint
                    trigger={() => (
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <PrintIcon />
                        </IconButton>
                  )}
                    content={() => containerRef}
                />
            </> */}
        </div>
    );
EditorToolbar.propTypes = {
    // value: PropTypes.oneOfType(PropTypes.string, PropTypes.instanceOf(Delta)),
    value: PropTypes.any,
    containerRef: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default EditorToolbar;
