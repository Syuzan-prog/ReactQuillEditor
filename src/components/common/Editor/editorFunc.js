import htmlDocx from 'html-docx-js/dist/html-docx';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export const getPDF = async (value) => {
    if (value) {
        const el = document.getElementById('reactQuill');

        const canvas = await html2canvas(el);

        const myImage = await canvas.toDataURL('image/jpeg, 1.0');

        const pdf = new jsPDF('p', 'mm', 'a4');

        pdf.addImage(myImage, 'png', 5, 5, 200, 0);

        pdf.save('test.pdf');
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
