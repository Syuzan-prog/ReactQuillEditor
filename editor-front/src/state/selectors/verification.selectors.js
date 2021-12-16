import { createSelector } from 'reselect';

const getVerificationState = (state) => state.verification;

export const getVerificationToken = createSelector(
    getVerificationState,
    (state) => state.token
);

export const getVerificationStep = createSelector(
    getVerificationState,
    (state) => state.step
);

export const getVerficationEmail = createSelector(
    getVerificationState,
    (state) => state.email
);
