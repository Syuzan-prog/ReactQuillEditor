import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { InputText } from 'primereact/inputtext';

import styles from './TextInput.scss';

const TextInput = ({ type, name, input, meta, isRequired, helperText, className, ...props }) => (
    <InputText {...props} {...input} type={type} className={clsx(styles.inputText, className)} />
);

TextInput.propTypes = {
    type: PropTypes.string,
    isRequired: PropTypes.bool,
    input: PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        onFocus: PropTypes.func,
    }),
    meta: PropTypes.shape({
        error: PropTypes.node,
        invalid: PropTypes.bool,
        submitFailed: PropTypes.bool,
        submitting: PropTypes.bool,
        touched: PropTypes.bool,
    }),
    helperText: PropTypes.node,
    className: PropTypes.string,
};

TextInput.defaultProps = {
    type: 'text',
    isRequired: false,
    className: '',
    helperText: ' ',
};

export default TextInput;
