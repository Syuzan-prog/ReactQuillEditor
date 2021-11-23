import { createAction } from 'redux-act';
import { takeEvery, call, put } from 'redux-saga/effects';
import { camelizeKeys } from 'humps';

import * as api from 'core/api';

const namespace = 'account';

export const fetchAccount = createAction(`${namespace} | fetch account`);

export const fetchAccountSuccess = createAction(
    `${namespace} | fetch account success`,
    (account) => account
);

export const fetchAccountFail = createAction(
    `${namespace} | fetch account fail`,
    (error) => error
);

export const reducer = {
    [fetchAccount.getType()]: (state) => ({
        ...state,
        isLoading: true,
        error: '',
    }),
    [fetchAccountSuccess.getType()]: (state, account) => ({
        ...state,
        ...account,
        isLoading: false,
        isLoaded: true,
    }),
    [fetchAccountFail.getType()]: (state, error) => ({
        ...state,
        isLoaded: false,
        isLoading: false,
        error,
    }),
};

function* fetchAccountSaga() {
    const { success, data, error } = yield call(api.account.fetch);

    if (success) {
        const processedData = camelizeKeys(data);
        yield put(fetchAccountSuccess(processedData));

        window.intercomSettings = {
            ...window.intercomSettings,
            name: processedData.fullName,
            email: processedData.email,
        };
    } else {
        yield put(fetchAccountFail(error));
    }
}

export function* watchFetchAccount() {
    yield takeEvery(fetchAccount.getType(), fetchAccountSaga);
}
