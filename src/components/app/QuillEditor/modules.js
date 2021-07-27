import { Quill } from 'react-quill';

const Font = Quill.import('formats/font');
Font.whitelist = ['arial', 'comic-sans', 'courier-new', 'georgia', 'helvetica', 'lucida'];
Quill.register(Font, true);

const fontSizeStyle = Quill.import('attributors/style/size');
fontSizeStyle.whitelist = ['10px', '12px', '14px', '16px', '20px', '24px', '36px'];
Quill.register(fontSizeStyle, true);

function undoChange() {
    this.quill.history.undo();
}
function redoChange() {
    this.quill.history.redo();
}

export const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'align',
    'strike',
    'script',
    'blockquote',
    'background',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'color',
    'code-block',
    'formula',
];

export const models = {
    toolbar: {
        container: '#toolbar',
        handlers: {
            undo: undoChange,
            redo: redoChange,
        },
    },
    history: {
        delay: 500,
        maxStack: 100,
        userOnly: true,
    },
};
