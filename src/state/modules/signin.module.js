import { createAction } from 'redux-act';
import {
    call,
    put,
    takeEvery,
} from 'redux-saga/effects';

import * as api from 'core/api';
import { setToken } from 'core/utils/token';
import { routes } from 'configs/app.routes';
import history from 'configs/app.history';

import { init } from './init.module';

const namespace = 'signin';

export const signin = createAction(
    `${namespace} | signin`,
    ({ email, password, persistToken = false }) => ({ email, password, persistToken })
);

export const signinSuccess = createAction(`${namespace} | signin - success`);

export const signinFail = createAction(
    `${namespace} | signin - fail`,
    (error) => error
);

export function* signinUser(token, persistToken) {
    yield put(signinSuccess());
    yield call(setToken, token, persistToken);
    yield call(history.push, routes.app);
}

function* signinSaga({ payload: { email, password, persistToken } }) {
    const { success, data, error } = yield call(api.auth.signin, email, password);
    yield call(history.push, routes.app);
    if (success) {
        const { access } = data;

        yield call(signinUser, access, persistToken);
        yield put(init());
    } else {
        yield put(signinFail(error));
    }
}

export function* watchSignIn() {
    yield takeEvery(signin.getType(), signinSaga);
}
