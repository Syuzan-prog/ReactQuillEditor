import { styled } from '@mui/material/styles';

import List from '@mui/material/List';

export const ListWrapper = styled(List)(
    ({ theme }) => `
    &.MuiList-root {
        margin-top: ${theme.spacing(3)};

        .MuiListItem-root {
            padding: ${theme.spacing(0.25)};
            margin-bottom: ${theme.spacing(1)};
  
            .MuiButton-text {
                display: flex;
                position: relative;
  
                .MuiBadge-root {
                    position: absolute;
                    right: ${theme.spacing(3)};
  
                    .MuiBadge-standard {
                        background: ${theme.colors.secondary.main};
                        font-size: ${theme.typography.pxToRem(12)};
                        color: ${theme.palette.primary.contrastText};
                    }
                }
            }
      
            .MuiButton-root {
                display: flex;
                color: ${theme.sidebar.menuItemColor};
                background-color: ${theme.sidebar.menuItemBg};
                width: 100%;
                justify-content: flex-start;
                font-size: ${theme.typography.pxToRem(14)};
                padding-top: ${theme.spacing(0.8)};
                padding-bottom: ${theme.spacing(0.8)};
      
                .MuiButton-startIcon,
                .MuiButton-endIcon {
                    transition: ${theme.transitions.create(['color'])};
  
                    .MuiSvgIcon-root {
                        font-size: inherit;
                        transition: none;
                    }
                }
  
                .MuiButton-startIcon {
                    font-size: ${theme.typography.pxToRem(26)};
                    margin-right: ${theme.spacing(1.5)};
                    color: ${theme.sidebar.menuItemIconColor};
                }
                
                .MuiButton-endIcon {
                    margin-left: auto;
                    font-size: ${theme.typography.pxToRem(22)};
                }
    
                &.Mui-active,
                &:hover {
                    background-color: ${theme.sidebar.menuItemBgActive};
                    color: ${theme.sidebar.menuItemColorActive};
    
                    .MuiButton-startIcon,
                    .MuiButton-endIcon {
                        color: ${theme.sidebar.menuItemIconColorActive};
                    }
                }
            }
        }
    }
`);
