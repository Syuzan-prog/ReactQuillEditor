import React, { useEffect, useRef, useState } from 'react';

import IconButton from '@mui/material/IconButton';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';

import InsertTable from '../utils/Table';
import usePopup from '../utils/usePopup';

import styles from './EditorTable.scss';

const EditorTable = ({ editorRef }) => {
    const tableOptionsRef = useRef();
    const [selection, setSelection] = useState();
    const [showOptions, setShowOptions] = usePopup(tableOptionsRef);
    const [tableData, setTableData] = useState({
        row: 0,
        column: 0,
    });

    const [tableInput, setTableInput] = useState(
        Array.from({ length: 6 }, () =>
            Array.from({ length: 6 }, (v, i) => ({
                bg: 'lightGray',
                column: i,
            }))
        )
    );

    useEffect(() => {
        const newTable = Array.from({ length: 6 }, (obj, row) =>
            Array.from({ length: 6 }, (v, col) => ({
                bg:
                row + 1 <= tableData.row && col + 1 <= tableData.column
                    ? 'orange'
                    : 'lightgray',
                column: col,
            }))
        );
        setTableInput(newTable);
    }, [tableData]);

    const handleButtonClick = () => {
        // setSelection(editorRef.current);
        setShowOptions((prev) => !prev);
    };
    const handleInsert = () => {
        // const quillRef = editorRef.current.getEditor();
        // const range = quillRef.getSelection(true);
        // const position = range ? range.index : 0;
        // if (!range) {
        //     return;
        // }
        // quillRef.insertEmbed(position, 'image', {
        //     src:
        //       'https://images.unsplash.com/photo-1508614999368-9260051292e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNTMxNTJ8MHwxfHNlYXJjaHw1fHxncmFkaWVudHxlbnwwfDB8fHwxNjM1MTU5MDY4&ixlib=rb-1.2.1&q=80&w=1080',
        //     caption: 'Image caption',
        // });
        // setEditorHtml(<InsertTable />);
        // selection && editor.current.focus(editor, selection);
        setTableData({ row: -1, column: -1 });
        setShowOptions(false);
        return <InsertTable row={5} column={5} />;
    };
    return (
        <div ref={tableOptionsRef} style={{ display: 'inline-block', verticalAlign: 'middle' }} className={styles.popupWrapper}>
            <IconButton
                onClick={handleButtonClick}
            >
                <TableChartOutlinedIcon />
            </IconButton>
            {showOptions && (
            <div className={styles.popup}>
                {tableData.row >= 1 && (
                <div>
                    <i>{`${tableData.row} x ${tableData.column}`}</i>
                </div>
          )}
                <div className={styles.tableInput}>
                    {tableInput.map((grp, row) =>
                        grp.map(({ column, bg }) => (
                            <div
                                onClick={() => handleInsert()}
                                onMouseEnter={() =>
                                setTableData({ row: row + 1, column: column + 1 })}
                                style={{ border: `1px solid ${bg}` }}
                                className={styles.tableUnit}
                            />
                        ))
            )}
                </div>
            </div>
      )}
        </div>
    );
};

export default EditorTable;
