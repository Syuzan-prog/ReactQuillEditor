import { styled } from '@mui/material/styles';

import Dialog from '@mui/material/Dialog';

export const ModalWrapper = styled(Dialog)(
    ({ theme }) => `
        .MuiPaper-root {
            padding: ${theme.spacing(3)} ${theme.spacing(2)} ${theme.spacing(2)};
        }

        .close-button {
            position: absolute;
            top: ${theme.spacing(1)};
            right:${theme.spacing(1)};
        }
    `
);
