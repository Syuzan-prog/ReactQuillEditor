import React, { useState } from 'react';

import { marks } from 'constants/editor.constants';
import { EditorSliderWrapper } from './EditorSlider.styles';

function calculateValue(value) {
    return 2 * value + 10;
}

const EditorSlider = ({ value, setValue }) => {

    const minDistance = 50;

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
    // console.log(value);
    return (
        <EditorSliderWrapper
            marks={marks}
            valueLabelDisplay="auto"
            getAriaLabel={(index) =>
            (index === 0 ? 'Minimum price' : 'Maximum price')}
            value={value}
            size="small"
            onChange={handleChange}
            disableSwap
            steps={null}
            scale={calculateValue}
        />
    );
};

export default EditorSlider;
