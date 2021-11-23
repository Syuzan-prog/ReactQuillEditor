import htmlDocx from 'html-docx-js/dist/html-docx'
import { saveAs } from 'file-saver';

export const getDocx = async () => {
    const el = document.getElementById('reactQuill').innerHTML

    const finalHtml = `<html><head><meta charset="UTF-8"></head><body>${el}</body></html>`

    const converted =  htmlDocx.asBlob(finalHtml);

    saveAs(converted, 'test.docx');
}