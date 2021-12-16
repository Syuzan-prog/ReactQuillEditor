import { createAction } from 'redux-act';
import { call, put, takeEvery } from 'redux-saga/effects';
import { camelizeKeys, decamelizeKeys } from 'humps';

import * as api from 'core/api';

const namespace = 'recovery email';

export const changeRecoveryEmail = createAction(
    `${namespace} | change`,
    ({ recoveryEmail }) => ({ recoveryEmail })
);

export const changeRecoveryEmailSuccess = createAction(
    `${namespace} | change - success`,
    (update) => update
);

export const changeRecoveryEmailFail = createAction(`${namespace} | change - fail`);

export const reducer = {
    [changeRecoveryEmailSuccess.getType()]: (state, update) => ({
        ...state,
        ...update,
    }),
};

function* changeRecoveryEmailSaga({ payload: body }) {
    const { success, data, error } = yield call(api.account.changeRecoveryEmail, decamelizeKeys(body));

    if (success) {
        yield put(changeRecoveryEmailSuccess(camelizeKeys(data)));
    } else {
        yield put(changeRecoveryEmailFail(error));
    }
}

export function* watchChangeRecoveryEmail() {
    yield takeEvery(changeRecoveryEmail.getType(), changeRecoveryEmailSaga);
}
