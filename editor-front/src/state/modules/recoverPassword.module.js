import { createAction } from 'redux-act';
import { call, put, takeEvery } from 'redux-saga/effects';

import * as api from 'core/api';
import history from 'configs/app.history';
import { routes } from 'configs/app.routes';

const namespace = 'recover password';

export const recoverPassword = createAction(
    `${namespace} | recover password`,
    (email) => email
);

export const recoverPasswordSuccess = createAction(`${namespace} | recover password - success`);

export const recoverPasswordFail = createAction(`${namespace} | recover password - fail`);

function* recoverPasswordSaga({ payload: { email } }) {
    const { success, error } = yield call(api.auth.recoverPassword, email);

    if (success) {
        yield put(recoverPasswordSuccess());

        history.push(routes.recoverSuccess);
    } else {
        yield put(recoverPasswordFail(error));
    }
}

export function* watchRecoverPassword() {
    yield takeEvery(recoverPassword.getType(), recoverPasswordSaga);
}
