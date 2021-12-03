import React, { useEffect, useRef, useState } from 'react';

import IconButton from '@mui/material/IconButton';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';

import { TableUtil } from './utils/Table';
import usePopup from './utils/usePopup';

import styles from './Table.scss';

const Table = ({ editor }) => {
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
    console.log('...', editor);
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
    const table = new TableUtil();

    const handleButtonClick = () => {
        setSelection(editor.current);
        setShowOptions((prev) => !prev);
    };
    const handleInsert = () => {
        selection && editor.current.focus(editor, selection);
        setTableData({ row: -1, column: -1 });
        table.insertTable(tableData.row, tableData.column);
        setShowOptions(false);
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
                      onMouseOver={() =>
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

export default Table;
