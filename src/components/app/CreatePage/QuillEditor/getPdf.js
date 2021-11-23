import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export const getPDF = async () => {
    const el = document.getElementById('reactQuill')

    const canvas = await html2canvas(el);

    var myImage = await canvas.toDataURL("image/jpeg, 1.0");

    // jspdf changes
    var pdf = new jsPDF('p', 'mm', 'a4');

    pdf.addImage(myImage, 'png', 5, 5, 200, 0); 

    pdf.save(`test.pdf`);
}