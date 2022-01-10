import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';

export const EditorSliderWrapper = styled(Slider)(
    ({ theme }) => `
        height: 1;

        .MuiSlider-thumb {
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 8px 8px 0 8px;
            border-color: #008B91 transparent transparent transparent;
            background: none;
            &:focus, &:hover, &.Mui-active: {
                boxShadow:
                0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02),
            },
        },
        
        .MuiSlider-valueLabel {
            fontSize: 12;
            fontWeight: normal;
            top: -6;
            backgroundColor: unset;
            color: theme.palette.text.primary;
            &:before: {
                display: none;
            };
            & *: {
                background: transparent;
                color: theme.palette.mode === dark ? #fff : #000;
            };
        };

        .MuiSlider-track {
            border: none;
        };

        .MuiSlider-rail: {
            opacity: 0.5;
            backgroundColor: #bfbfbf;
        };

        .MuiSlider-mark {
            background: #008B91;
            height: 8px;
            width: 2px;
           
            &.MuiSlider-markActive: {
                opacity: 1;
                background: red;
            };
        }; 
        .MuiSlider-markLabel {
            font-size: 8px;
        }
    `
);
