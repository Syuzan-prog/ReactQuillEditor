import { createAction } from 'redux-act';
import { takeEvery, call, put, select } from 'redux-saga/effects';

import * as api from 'core/api';
import history from 'configs/app.history';
import { routes } from 'configs/app.routes';

import { getVerificationToken } from 'state/selectors/verification.selectors';

const namespace = 'verification';

export const createPassword = createAction(
    `${namespace} | create password`,
    ({ password }) => password
);

export const createPasswordSuccess = createAction(`${namespace} | create password success`);

export const createPasswordFail = createAction(`${namespace} | create password fail`);

function* createPasswordSaga({ payload: password }) {
    const token = yield select(getVerificationToken);
    const { success, error } = yield call(api.auth.createPassword, token, password);

    if (success) {
        yield put(createPasswordSuccess());
        history.push(routes.signin, { showVerificationNotification: true });
    } else {
        yield put(createPasswordFail(error));
    }
}

export function* watchCreatePassword() {
    yield takeEvery(createPassword.getType(), createPasswordSaga);
}
