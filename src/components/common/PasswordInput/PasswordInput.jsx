import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextInput from 'components/common/TextInput';

const PasswordInput = ({ disableShowIcon, ...props }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);

    const handleClickShowPassword = useCallback(() => {
        setIsPasswordShown(!isPasswordShown);
    }, [isPasswordShown]);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <TextInput
            {...props}
            type={isPasswordShown ? 'text' : 'password'}
            InputProps={{
                endAdornment: !disableShowIcon ? (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {isPasswordShown ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                ) : null,
            }}
            // eslint-disable-next-line react/jsx-no-duplicate-props
            inputProps={{
                autoComplete: 'field-password',
                ...props.inputProps,
            }}
        />
    );
};

PasswordInput.propTypes = {
    disableShowIcon: PropTypes.bool,
    inputProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

PasswordInput.defaultProps = {
    disableShowIcon: false,
};

export default PasswordInput;
