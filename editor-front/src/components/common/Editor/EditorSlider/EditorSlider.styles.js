import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';

export const EditorSliderWrapper = styled(Slider)(
    ({ theme }) => `
        height: 1;

        .MuiSlider-thumb {
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 7px 7px 0 7px;
            border-color: #008B91 transparent transparent transparent;
            background: none;
            &:focus, &:hover, &.Mui-active: {
                boxShadow:
                0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02),
            },  
        },

        .MuiSlider-mark {
            background: #008B91;
            height: 6px;
            width: 1px;

            MuiSlider-markActive {
            opacity: 1;
            background: red;
            },
        },
    `
);
