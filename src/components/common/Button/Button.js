import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonBase } from 'primereact/button';

const Button = ({ children, label, ...props }) => {
    return (
        <ButtonBase label={label} {...props}>
            {children}
        </ButtonBase>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    type: PropTypes.oneOf(['submit', 'button', 'reset']),
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    label: 'Primary',
    type: 'button',
    className: '',
};

export default Button;
