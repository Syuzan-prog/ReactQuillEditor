import { styled } from '@mui/material/styles';

import Drawer from '@mui/material/Drawer';

export const DrawerWrapper = styled(Drawer)(
    ({ theme }) => `
        .avatar-container {
            position: relative;
            display: flex;
            justify-content: center;
            margin-top: ${theme.spacing(3)};

            .MuiAvatar-root {
                width: 108px;
                height: 108px;
            }

            .MuiIconButton-root {
                position: absolute;
                bottom: 0;
                right: calc(50% - 54px);
                color: white;
                background: ${theme.colors.secondary.main};
                padding: ${theme.spacing(0.5)};
                box-shadow: ${theme.colors.shadows.primary};
            }
        }
        
        .logo-container {
            margin-bottom: 36px;
            margin-top: auto;
            text-align: center;
        }
    `
);
