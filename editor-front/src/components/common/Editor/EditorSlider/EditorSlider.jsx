import React, { useState } from 'react';

import { marks } from 'constants/editor.constants';
import { EditorSliderWrapper } from './EditorSlider.styles';

const EditorSlider = ({ widthValue }) => {
    const [value, setValue] = useState([10, 90]);

    const minDistance = 50;

    function calculateValue(value) {
        return value / 2;
    }

    const handleChange = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
            setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }
    };

    return (
        <EditorSliderWrapper
            marks={marks}
            step={1}
            valueLabelDisplay="auto"
            getAriaLabel={(index) =>
            (index === 0 ? 'Minimum price' : 'Maximum price')}
            value={value}
            scale={calculateValue}
            size="small"
            onChange={handleChange}
            disableSwap
        />
    );
};

export default EditorSlider;
