import React, { useState, useMemo, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import SelectBase from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

import isInvalid from 'core/utils/isInvalid';

import styles from './Select.scss';

const FETCH_OPTIONS_LIMIT_DEFAULT = 20;

const Select = ({
    input, meta, defaultOptions, getOptions, className, label, helperText,
    isRequired, isPaginated, noOutlines, isHeader, variant, multiple, ...props
}) => {
    const [options, setOptions] = useState(defaultOptions);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMoreOptions, setHasMoreOptions] = useState(false);

    const fetchOptions = useCallback(async (isInitial) => {
        const { hasMore, data } = await getOptions(FETCH_OPTIONS_LIMIT_DEFAULT, isInitial ? 0 : options.length);

        setHasMoreOptions(hasMore);

        return data;
    }, [getOptions, options, setHasMoreOptions]);

    const handleListScroll = useCallback(async (event) => {
        if (isLoading || !hasMoreOptions) return;

        const { scrollTop, scrollHeight, clientHeight } = event.target;

        if (scrollHeight - scrollTop - clientHeight < 50) {
            setIsLoading(true);
            const newOptions = await fetchOptions();
            setOptions((oldOptions) => [...oldOptions, ...newOptions]);
            setIsLoading(false);
        }
    }, [isLoading, fetchOptions, hasMoreOptions]);

    useEffect(() => {
        if (getOptions) {
            (async function initialFetch() {
                const responseOptions = await fetchOptions(true);

                setOptions(responseOptions);
            }());
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const error = useMemo(() => isInvalid(meta) && meta.error, [meta]);
    const hasError = useMemo(() => !!error, [error]);
    const labelId = useMemo(() => `select-${input.name}`, [input.name]);
    const labelElement = useMemo(() => (
        <>
            {isRequired ? <span className={styles.requiredColor}>* </span> : ''}
            {label}
        </>
    ), [isRequired, label]);

    const headerClasses = useMemo(() => (isHeader ? {
        select: styles.headerSelect,
        icon: styles.headerIcon,
    } : {}), [isHeader]);

    const outlineProps = useMemo(() => {
        switch (variant) {
            case 'outlined':
                return {};
            default:
                return {
                    disableUnderline: noOutlines,
                };
        }
    }, [variant, noOutlines]);

    const handleChipDelete = useCallback((index) => {
        const newSelection = [...input.value];
        newSelection.splice(index, 1);

        input.onChange(newSelection);
    }, [input]);

    const renderMultiple = useCallback((selected) => (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((value, index) => (
                // TODO: refactor label retrieval
                <Chip
                    key={value}
                    label={options.find((option) => option.value === value).label || value}
                    // workaround to prevent menu from opening when clicking delete icon
                    onMouseDown={(event) => event.stopPropagation()}
                    onDelete={() => handleChipDelete(index)}
                />
            ))}
        </Box>
    ), [options, handleChipDelete]);

    const processedValue = useMemo(() => {
        if (options.length) return input.value;

        return multiple ? [] : '';
    }, [input.value, multiple, options.length]);

    return (
        <FormControl variant={variant} className={className}>
            {label && <InputLabel id={labelId} error={hasError}>{labelElement}</InputLabel>}
            <SelectBase
                {...input}
                value={processedValue}
                {...props}
                {...outlineProps}
                classes={{
                    selectMenu: clsx({ [styles.staticBackground]: noOutlines }),
                    ...headerClasses,
                }}
                labelId={labelId}
                label={label ? labelElement : undefined}
                error={hasError}
                multiple={multiple}
                renderValue={multiple ? renderMultiple : undefined}
                MenuProps={{
                    MenuListProps: {
                        onScroll: isPaginated ? handleListScroll : undefined,
                        style: { maxHeight: 320, overflowY: 'scroll' },
                    },
                }}
            >
                {!options.length && <div className={styles.noOptions}>No options</div>}
                {options.map(({ label: optionLabel, value }) => (
                    <MenuItem key={`${label}_${value}`} value={value}>
                        {optionLabel}
                    </MenuItem>
                ))}
            </SelectBase>
            <FormHelperText variant="standard" error={hasError}>{error || helperText}</FormHelperText>
        </FormControl>
    );
};

Select.propTypes = {
    isRequired: PropTypes.bool,
    input: PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.arrayOf(PropTypes.string)]),
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
    label: PropTypes.string,
    helperText: PropTypes.node,
    className: PropTypes.string,
    defaultOptions: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
    })),
    getOptions: PropTypes.func,
    isPaginated: PropTypes.bool,
    noOutlines: PropTypes.bool,
    isHeader: PropTypes.bool,
    variant: PropTypes.string,
    multiple: PropTypes.bool,
};

Select.defaultProps = {
    defaultOptions: [],
    isRequired: false,
    className: '',
    isPaginated: false,
    noOutlines: false,
    isHeader: false,
    variant: 'outlined',
};

export default Select;
