import { styled } from '@mui/material/styles';

export const CreatePageFormWrapper = styled('form')(
    ({ theme }) => `

        display: flex;
        justify-content: center;
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
            }
        } `
);
