import { Quill } from 'react-quill';
import ImageResize from 'quill-image-resize-module-react';
import ImageCompress from 'quill-image-compress';
// import * as Quill from "quill";
import QuillBetterTable from 'quill-better-table'

Quill.register('modules/ImageResize', ImageResize);
Quill.register('modules/imageCompress', ImageCompress);
Quill.register("modules/better-table", QuillBetterTable);

const Font = Quill.import('formats/font');
Font.whitelist = ['arial', 'comic-sans', 'courier-new', 'georgia', 'helvetica', 'lucida'];
Quill.register(Font, true);

const fontSizeStyle = Quill.import('attributors/style/size');
fontSizeStyle.whitelist = ['1px', '2px', '3px', '4px', '5px', '6px', '7px', '8px', '9px', '10px', '12px', '14px', '16px', '20px', '24px', '36px', '50px', '68px', '100'];
Quill.register(fontSizeStyle, true);

const Parchment = Quill.import('parchment');
const lineHeightConfig = {
    scope: Parchment.Scope.INLINE,
    whitelist: [
        '1.0',
        '1.2',
        '1.5',
        '1.6',
        '1.8',
        '2.0',
        '2.4',
        '2.8',
        '3.0',
        '4.0',
        '5.0',
    ],
};
const lineHeightClass = new Parchment.Attributor.Class('lineheight', 'ql-line-height', lineHeightConfig);
const lineHeightStyle = new Parchment.Attributor.Style('lineheight', 'line-height', lineHeightConfig);
Parchment.register(lineHeightClass);
Parchment.register(lineHeightStyle);

function undoChange() {
    this.quill.history.undo();
}
function redoChange() {
    this.quill.history.redo();
}

function insertTable() {
    // const text = '<b>example123</b>'
    // const htmlTable = this.quill.getContents()
    // const cursorPosition = this.quill.getSelection().index;
    // this.quill.insertText(cursorPosition, text);
    // this.quill.setSelection(cursorPosition + (text.length));
    // this.quill.insertTable(3, 3);


    // const range = this.quill.getSelection(true)
    // this.quill.insertEmbed(range.index, 'table',[2,2] , 'user')
    // this.quill.setSelection(range.index + 1, 'silent')
    // const value = `<table border="2"><tr><th>New</th><th>Country</th><th>Contact</th></tr></table>`
    // const delta = this.quill.clipboard.convert(value)
    // this.quill.setContents(delta, 'silent')

    // var htmlToInsert = `<table style="width:100%" border="2"><tr><th>Company</th><th>Contact</th><th>Country</th></tr></table>`
    // var editor = document.getElementsByClassName('ql-editor')
    // editor[0].innerHTML = htmlToInsert

    // this.quill.getModule("better-table");
    // let tableModule = this.getEditor().getModule('better-table');
    // tableModule.insertTable(3, 3)

    // let tableModule = this.quill.getModule()
    // console.log(tableModule)
    // tableModule.insertTable(3, 3)
  }

export const modules = (props) => ({
    toolbar: {
        container: `#${props}`,
        handlers: {
            undo: undoChange,
            redo: redoChange,
            insertTable: insertTable
        }, 
    },
    history: {
        delay: 500,
        maxStack: 100,
        userOnly: true,
    },
    ImageResize: {
        parchment: Quill.import('parchment'),
        modules: ['Resize', 'DisplaySize', 'Toolbar'],
    },
    imageCompress: {
        quality: 0.7,
        maxWidth: 1000,
        maxHeight: 1000,
        imageType: 'image/jpeg',
        debug: true,
    },
});



