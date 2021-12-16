import { createAction } from 'redux-act';
import { call, put, takeEvery } from 'redux-saga/effects';

import * as api from 'core/api';

import history from 'configs/app.history';
import { routes } from 'configs/app.routes';

const namespace = 'reset password';

export const resetPassword = createAction(
    `${namespace} | submit`,
    ({ token, password }) => ({ token, password })
);

export const resetPasswordSuccess = createAction(`${namespace} | submit success`);

export const resetPasswordFail = createAction(`${namespace} | submit fail`);

function* resetPasswordSaga({ payload: { password, token } }) {
    const { success, error } = yield call(api.auth.resetPassword, { password, token });

    if (success) {
        yield put(resetPasswordSuccess());
        history.replace(routes.resetSuccess);
    } else {
        yield put(resetPasswordFail(error));
    }
}

export function* watchResetPassword() {
    yield takeEvery(resetPassword.getType(), resetPasswordSaga);
}
