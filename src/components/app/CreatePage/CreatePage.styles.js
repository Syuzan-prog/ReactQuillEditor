import { styled } from '@mui/material/styles';

export const CreatePageWrapper = styled('form')(
    ({ theme }) => `
        text-align: center;

        .editor {
            &>:first-of-type {
                position: sticky;
                top: 0px;
                z-index: 1;
                background: white;
            }
        
            &>:last-child {
                position: relative;
                z-index: 0;
                height: 297mm;
                background: white;
            }
        } `
);
