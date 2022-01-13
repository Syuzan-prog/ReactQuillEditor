import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { EditorSliderWrapper } from './EditorSlider.styles';

import { marks } from 'constants/editor.constants'

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
            valueLabelDisplay="auto"
            key={key}
            min={0}
            max={100}
            size="small"
            defaultValue={value}
            onChange={handleChange}
            onChangeCommitted={handleChangeCommitted}
            disableSwap
            steps={null}
            marks={marks}
        />
    );
};

EditorSlider.propTypes = {
    value: PropTypes.arrayOf(PropTypes.number),
    onChangeCommitted: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default EditorSlider;
