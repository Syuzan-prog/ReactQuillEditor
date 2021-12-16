import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import ReactCodeInput from 'react-code-input';

import Typography from '@mui/material/Typography';

import isInvalid from 'core/utils/isInvalid';

import styles from './CodeInput.scss';

const CodeInput = ({ slotCount, input, meta, ...props }) => {
    const error = useMemo(() => meta && isInvalid(meta) && meta.error, [meta]);

    return (
        <div className={styles.container}>
            <ReactCodeInput
                {...props}
                {...input}
                inputMode="numeric"
                fields={6}
                type="number"
            />
            {error && <Typography variant="body2" color="error">Invalid code</Typography>}
        </div>
    );
};

CodeInput.propTypes = {
    input: PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
    slotCount: PropTypes.number,
};

CodeInput.defaultProps = {
    slotCount: 6,
};

export default CodeInput;
