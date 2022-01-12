import React, { useCallback } from 'react';
import { EditorSliderWrapper } from './EditorSlider.styles';

const EditorSlider = ({ value, onChangeCommitted, onChange }) => {
    const key = `EditorSlider-${value}`
    const minDistance = 10;

    const normilizeValues = useCallback(
        (event, newValue, activeThumb) => {
            if (!Array.isArray(newValue)) {
                return [0, 100];
            }

            let r = newValue;

            if (newValue[1] - newValue[0] < minDistance) {
                if (activeThumb === 0) {
                    const clamped = Math.min(newValue[0], 100 - minDistance);
                    r = ([clamped, clamped + minDistance]);
                } else {
                    const clamped = Math.max(newValue[1], minDistance);
                    r = ([clamped - minDistance, clamped]);
                }
            }

            return r
        },
        [key],
    );

    const handleChange = useCallback(
        (...args) => {
            const r = normilizeValues(...args)
            return onChange(r)
        },
        [normilizeValues, onChange],
    )

    const handleChangeCommitted = useCallback(
        (...args) => {
            const r = normilizeValues(...args)
            return onChangeCommitted(r)
        },
        [normilizeValues, onChangeCommitted],
    )

    return (
        <EditorSliderWrapper
            // marks={marks}
            valueLabelDisplay="auto"
            // getAriaLabel={(index) =>
            // (index === 0 ? 'Minimum price' : 'Maximum price')}
            key={key}
            min={0}
            max={100}
            size="small"
            defaultValue={value}
            onChange={handleChange}
            onChangeCommitted={handleChangeCommitted}
            disableSwap
            steps={null}
        />
    );
};

export default EditorSlider;
