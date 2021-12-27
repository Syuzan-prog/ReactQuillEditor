import htmlDocx from 'html-docx-js/dist/html-docx';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { drawDOM, exportPDF } from '@progress/kendo-drawing';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';

export const handleExportPdfimg = async (value) => {

    if (value) {
        const el = document.querySelector('.ql-editor');

        const canvas = await html2canvas(el);

        const image = await canvas.toDataURL();

        const doc = new jsPDF('p', 'mm', 'a4');

        doc.addImage(image, 'PNG', 0, 0);

        doc.internal.getNumberOfPages();
        // console.log(doc.internal.getNumberOfPages())
        // var doc = new jsPDF('landscape') //horizonakan paper
        // doc.internal.getNumberOfPages() // qani paper ka
        // doc.autoTable
        // doc.addPage() // nor paper i avelacum
        // doc.deletePage(1) // jnjum e 1 papery
        // doc.text(20, 20, 'Do you like that?')
        doc.save('test.pdf');
    } else {
        alert('');
    }
};

export const handleExportPdfFile = (editorRef) => {
    savePDF(editorRef.current, {
        paperSize: 'auto',
        fileName: `Report for ${new Date().getMilliseconds()}`,
    });

    // const gridElement = document.querySelector('.editor'); /
    // drawDOM(gridElement, {
    //     paperSize: 'A4',
    // }).then((group) => exportPDF(group)).then((dataUri) => {
    //     console.log('.../', dataUri.split(';base64,')[1]); /// back-end uxarkelu
    // });
};

export const handleExportDocx = (value) => {
    if (value) {

        const finalHtml = `<html><head><meta charset="UTF-8"></head><body>${value}</body></html>`;

        const converted = htmlDocx.asBlob(finalHtml);

        saveAs(converted, 'test.docx');
    } else {
        alert('');
    }
};
