import { styled } from '@mui/material/styles';

export const CreatePageFormWrapper = styled('form')(
    ({ theme }) => `
        margin-top: 50px;
        
        .editor {
            &>:first-of-type {
                position: sticky;
                top: 0px;
                z-index: 1;
            }
        
            &>:last-child {
                position: relative;
                z-index: 0;
            }
        } `
);
