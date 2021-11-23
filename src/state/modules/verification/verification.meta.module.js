import { createAction } from 'redux-act';
import { takeLeading, call, put } from 'redux-saga/effects';

import * as api from 'core/api';
import history from 'configs/app.history';
import { routes } from 'configs/app.routes';

const namespace = 'verification meta';

export const fetchMeta = createAction(
    `${namespace} | fetch meta`,
    (token) => token
);

const fetchMetaSuccess = createAction(
    `${namespace} | fetch meta success`,
    (meta) => meta
);

const fetchMetaFail = createAction(
    `${namespace} | fetch meta fail`,
    (error) => error
);

export const reducer = {
    [fetchMeta.getType()]: (state, token) => ({
        ...state,
        isLoading: true,
        token,
    }),
    [fetchMetaSuccess.getType()]: (state, meta) => ({
        ...state,
        ...meta,
        isLoading: false,
        isLoaded: true,
    }),
    [fetchMetaFail.getType()]: (state, error) => ({
        ...state,
        isLoading: false,
        isLoaded: false,
        error,
    }),
};

function* fetchMetaSaga({ payload: token }) {
    const { success, data, error } = yield call(api.auth.fetchMeta, token);

    if (success) {
        yield put(fetchMetaSuccess(data));
    } else {
        yield put(fetchMetaFail(error));
        history.push(routes.signin);
    }
}

export function* watchFetchMeta() {
    yield takeLeading(fetchMeta.getType(), fetchMetaSaga);
}
