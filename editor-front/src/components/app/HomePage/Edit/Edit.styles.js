import { styled } from '@mui/material/styles';

export const EditPostFormWrapper = styled('form')(
    ({ theme }) => `

        display: flex;
        justify-content: center;
        .editor {
            width: 210mm;
            &>:first-of-type {
                position: sticky;
                top: 0px;
                z-index: 1;
                background: white;
            }
        
            &>:last-child {
                position: relative;
                z-index: 0;

                background: white;
            }
        } `
);