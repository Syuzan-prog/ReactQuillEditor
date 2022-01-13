import { styled } from '@mui/material/styles';

export const EditorWrapper = styled('div')(
    ({ theme }) => `
        display: flex;
        justify-content: center;

        .editor-zoom {
            transform-origin: center top;
            width: 210mm;
            background: white;
        }

        #editor {
            width: 100%;
        }
    `
);
