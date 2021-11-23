import React, { useState, useMemo, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'throttle-debounce';

import Autocomplete from '@mui/material/Autocomplete';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

import TextInput from 'components/common/TextInput';
import Loader from 'components/common/Loader';

import isInvalid from 'core/utils/isInvalid';

import styles from './Select.scss';

const FETCH_OPTIONS_LIMIT_DEFAULT = 20;

const SearchableSelect = ({
    input, meta, defaultOptions, getOptions, className, label, helperText,
    isRequired, isPaginated, variant, multiple, withAvatar, ...props
}) => {
    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState(defaultOptions);
    const [selected, setSelected] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMoreOptions, setHasMoreOptions] = useState(false);

    const fetchOptions = useCallback(async (isInitial) => {
        const {
            hasMore,
            data,
        } = await getOptions(inputValue, FETCH_OPTIONS_LIMIT_DEFAULT, isInitial ? 0 : options.length);

        setHasMoreOptions(hasMore);

        return data;
    }, [getOptions, options, inputValue, setHasMoreOptions]);

    const handleListScroll = useCallback(async (event) => {
        if (isLoading || !hasMoreOptions) return;

        const { scrollTop, scrollHeight, clientHeight } = event.target;

        if (scrollHeight - scrollTop - clientHeight < 100) {
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

    const labelElement = useMemo(() => `${isRequired ? '* ' : ''}${label}`, [isRequired, label]);

    const handleChange = useCallback((event, newValue) => {
        setSelected(newValue);
        input.onChange(newValue.map(({ value }) => value));
    }, [input]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleQueryFetch = useCallback(
        debounce(300, false, async (value) => {
            const {
                hasMore,
                data,
            } = await getOptions(value, FETCH_OPTIONS_LIMIT_DEFAULT, 0);

            setHasMoreOptions(hasMore);
            setOptions(data);
            setIsLoading(false);
        }),
        []);

    const handleInputChange = useCallback((event) => {
        setIsLoading(true);
        setOptions([]);
        setInputValue(event.target.value);
        handleQueryFetch(event.target.value);
    }, [handleQueryFetch]);

    const handleInputBlur = useCallback(() => setInputValue(''), []);

    const handleChipDelete = useCallback((index) => {
        const newSelection = [...selected];
        newSelection.splice(index, 1);

        handleChange(null, newSelection);
    }, [handleChange, selected]);

    const renderTags = useCallback((selectedOptions) => (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selectedOptions.map(({ value, label: chipLabel, avatar }, index) => (
                <Chip
                    key={value}
                    avatar={withAvatar ? <Avatar src={avatar || 'broken'} alt={chipLabel} /> : undefined}
                    label={chipLabel}
                    onDelete={() => handleChipDelete(index)}
                />
            ))}
        </Box>
    ), [handleChipDelete, withAvatar]);

    return (
        <FormControl variant={variant} className={className}>
            <Autocomplete
                {...props}
                onChange={handleChange}
                value={selected}
                multiple={multiple}
                options={options}
                loading={isLoading}
                loadingText={<Loader />}
                getOptionLabel={(option) => option.label}
                filterSelectedOptions
                isOptionEqualToValue={(option, value) => option.value === value.value}
                noOptionsText={<div className={styles.noOptions}>No options</div>}
                ListboxProps={{
                    onScroll: isPaginated ? handleListScroll : undefined,
                }}
                renderInput={(params) => (
                    <TextInput
                        {...params}
                        inputProps={{
                            ...params.inputProps,
                            value: inputValue,
                        }}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        label={label ? labelElement : undefined}
                        helperText=""
                    />
                )}
                renderOption={(optionProps, { label: optionLabel, avatar }) => (
                    <li {...optionProps}>
                        {withAvatar ? <Avatar src={avatar || 'broken'} alt={optionLabel} /> : null}
                        {optionLabel}
                    </li>
                )}
                renderTags={renderTags}
                disableCloseOnSelect
                disableClearable
            />
            <FormHelperText variant="standard" error={hasError}>{error || helperText}</FormHelperText>
        </FormControl>
    );
};

SearchableSelect.propTypes = {
    isRequired: PropTypes.bool,
    input: PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.arrayOf(PropTypes.string),
            PropTypes.arrayOf(PropTypes.number),
        ]),
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
        avatar: PropTypes.string,
    })),
    getOptions: PropTypes.func,
    isPaginated: PropTypes.bool,
    variant: PropTypes.string,
    multiple: PropTypes.bool,
    withAvatar: PropTypes.bool,
};

SearchableSelect.defaultProps = {
    defaultOptions: [],
    isRequired: false,
    className: '',
    isPaginated: false,
    variant: 'outlined',
    withAvatar: false,
};

export default SearchableSelect;
