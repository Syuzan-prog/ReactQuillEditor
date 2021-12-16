import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';

export const HomePageWrapper = styled(Paper)(
    ({ theme }) => `
        margin-right: ${theme.spacing(2)};
        
        .MuiTypography-h4 {
            margin-top: ${theme.spacing(1)};
        }

        .header {
            display: flex;
            justify-content: space-between;
            padding: ${theme.spacing(2.3)};
            border-bottom: 1px solid ${theme.palette.grey[300]};
        }

       .scroll-block {
        width: 100%;
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        position: relative;

        .result-container {
            height: calc(100vh - 140px);
            &.loading {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    `
);

export const NoResultsWrapper = styled('div')(
    () => `
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    `
);
