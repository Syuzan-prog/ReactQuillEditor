import htmlDocx from 'html-docx-js/dist/html-docx';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export const getPDF = async (value) => {

    if (value) {
        const el = document.getElementById('editor');

        const canvas = await html2canvas(el);

        const image = await canvas.toDataURL('image/png');

        const doc = new jsPDF('p', 'mm', 'a4');

        doc.addImage(image, 'PNG', 0, 0);
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

export const getDocx = async (value) => {
    if (value) {

        const finalHtml = `<html><head><meta charset="UTF-8"></head><body>${value}</body></html>`;

        const converted = htmlDocx.asBlob(finalHtml);

        saveAs(converted, 'test.docx');
    } else {
        alert('');
    }

};
