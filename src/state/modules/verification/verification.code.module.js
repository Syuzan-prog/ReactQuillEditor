import { createAction } from 'redux-act';
import { all, fork, takeEvery, select, call, put } from 'redux-saga/effects';

import * as api from 'core/api';

import { getVerificationToken } from 'state/selectors/verification.selectors';

import { enqueueNotification } from '../notifications.module';

const namespace = 'verification code';

export const requestCode = createAction(`${namespace} | request code`);

const requestCodeSuccess = createAction(`${namespace} | request code success`);

const requestCodeFail = createAction(
    `${namespace} | request code fail`,
    (error) => error
);

export const submitCode = createAction(
    `${namespace} | submit code`,
    ({ code }) => code
);

export const submitCodeSuccess = createAction(`${namespace} | submit code success`);

export const submitCodeFail = createAction(
    `${namespace} | submit code fail`,
    (error) => error
);

export const reducer = {
    [submitCodeSuccess.getType()]: (state) => ({
        ...state,
        step: state.step + 1,
    }),
};

function* requestCodeSaga() {
    const token = yield select(getVerificationToken);

    const { success, error } = yield call(api.auth.requestCode, token);

    if (success) {
        yield put(requestCodeSuccess());
    } else {
        yield put(requestCodeFail(error));
    }
}

function* submitCodeSaga({ payload: code }) {
    const token = yield select(getVerificationToken);

    const { success, error } = yield call(api.auth.submitCode, token, code);

    if (success) {
        yield put(submitCodeSuccess());
    } else {
        yield put(submitCodeFail(error));
        yield put(enqueueNotification({
            message: 'Invalid code',
            options: { variant: 'error' },
        }));
    }
}

function* watchRequestCode() {
    yield takeEvery(requestCode.getType(), requestCodeSaga);
}

function* watchSubmitCode() {
    yield takeEvery(submitCode.getType(), submitCodeSaga);
}

export function* watchCode() {
    yield all([
        fork(watchRequestCode),
        fork(watchSubmitCode),
    ]);
}
