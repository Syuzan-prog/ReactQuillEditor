import { Quill } from 'react-quill';

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

export const modules = {
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
    // autoformat: true,
};
