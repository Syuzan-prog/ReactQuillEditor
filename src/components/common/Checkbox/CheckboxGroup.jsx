import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';

import isInvalid from 'core/utils/isInvalid';

const CheckboxGroup = ({ options, input: { onChange, value: inputValue }, meta, className, color }) => {
    const handleChange = useCallback((event) => {
        onChange({
            ...inputValue,
            [event.target.name]: event.target.checked,
        });
    }, [inputValue, onChange]);

    const error = useMemo(() => meta && isInvalid(meta) && meta.error, [meta]);

    return (
        <FormControl
            component="fieldset"
            variant="standard"
            error={!!error}
            className={className}
        >
            <FormGroup>
                {options.map(({ value, label }) => (
                    <FormControlLabel
                        key={value}
                        control={
                            <Checkbox checked={!!inputValue[value]} onChange={handleChange} name={value} />
                        }
                        label={label}
                        color={color}
                    />
                ))}
            </FormGroup>
            {error && <FormHelperText className="m-b-16">{error}</FormHelperText>}
        </FormControl>
    );
};

CheckboxGroup.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        label: PropTypes.string,
    })),
    input: PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.object, // eslint-disable-line react/forbid-prop-types
        onFocus: PropTypes.func,
        onChange: PropTypes.func,
        onBlur: PropTypes.func,
    }),
    meta: PropTypes.shape({
        error: PropTypes.node,
        invalid: PropTypes.bool,
        submitFailed: PropTypes.bool,
        submitting: PropTypes.bool,
        touched: PropTypes.bool,
    }),
    className: PropTypes.string,
    color: PropTypes.string,
};

CheckboxGroup.defaultProps = {
    color: 'primary',
    className: '',
};

export default CheckboxGroup;
