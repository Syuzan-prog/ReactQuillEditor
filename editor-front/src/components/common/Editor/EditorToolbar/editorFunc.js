import { useState, useCallback } from 'react';
import { jsPDF } from 'jspdf';

export const handleExportPdfFile = async (editorRef, value) => {
    if (value) {
        const el = document.querySelector('.ql-editor');
        const doc = new jsPDF('p', 'pt', 'a4');
        doc.html(el, {
            callback(pdf) {
                const pageCount = doc.internal.getNumberOfPages();
                pdf.deletePage(pageCount);
                pdf.save('my.pdf');
            },
        });

    } else {
        alert('');
    }
};

export const handleExportDocx = (value) => {
    if (value) {

        const html = `<html><head><meta charset="UTF-8"></head><body>${value}</body></html>`;

        const blob = new Blob(['\ufeff', html], {
            type: 'application/msword',
        });

        const url = `data:application/vnd.ms-word;charset=utf-8,${encodeURIComponent(html)}`;

        const filename = `Report for ${new Date().getMilliseconds()}.docx`;

        const downloadLink = document.createElement('a');

        document.body.appendChild(downloadLink);

        if (navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, filename);
        } else {
            downloadLink.href = url;

            downloadLink.download = filename;

            downloadLink.click();
        }
        document.body.removeChild(downloadLink);
    } else {
        alert('');
    }
};
