import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import CheckboxBase from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';

import isInvalid from 'core/utils/isInvalid';

const Checkbox = ({ input, meta, label, className, controlClassName, color }) => {
    const error = useMemo(() => meta && isInvalid(meta) && meta.error, [meta]);

    return (
        <FormControl
            error={!!error}
        >
            <FormControlLabel
                className={controlClassName}
                control={(
                    <CheckboxBase
                        className={className}
                        checked={!!input.value}
                        onChange={input.onChange}
                        color={color}
                    />
            )}
                label={label}
            />
            {error && <FormHelperText className="m-b-16">{error}</FormHelperText>}
        </FormControl>
    );
};

Checkbox.propTypes = {
    label: PropTypes.node.isRequired,
    input: PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
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
    controlClassName: PropTypes.string,
    color: PropTypes.string,
};

Checkbox.defaultProps = {
    color: 'primary',
    className: '',
    controlClassName: '',
};

export default Checkbox;
