import { styled } from '@mui/material/styles';

export const ResearcherViewSwitchWrapper = styled('div')(
    ({ theme }) => `
        position: absolute;
        top: ${theme.spacing(0.5)};
        right: ${theme.spacing(1)};

        display: flex;
        align-items: center;
        gap: ${theme.spacing(1)};
    `
);
