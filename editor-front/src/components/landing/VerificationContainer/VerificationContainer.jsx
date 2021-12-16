import React, { useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { parse } from 'query-string';

import CircularProgress from '@mui/material/CircularProgress';
import { locationShape } from 'configs/shapes';

import CodeVerification from './CodeVerification';
import CreatePassword from './CreatePassword';

const stepComponents = [CodeVerification, CreatePassword];

const VerificationContainer = ({ location, step, fetchMeta }) => {
    useEffect(() => {
        const { verification_token: token } = parse(location.search);

        fetchMeta(token);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const Component = useMemo(() => stepComponents[step], [step]);

    if (!Component) {
        return <CircularProgress />;
    }

    return (
        <Component />
    );
};

VerificationContainer.propTypes = {
    location: locationShape.isRequired,
    history: PropTypes.shape({
        replace: PropTypes.func.isRequired,
    }),
    step: PropTypes.number,
    fetchMeta: PropTypes.func.isRequired,
};

export default VerificationContainer;
