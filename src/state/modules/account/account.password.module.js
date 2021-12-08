import { createAction } from 'redux-act';
import { call, put, takeEvery } from 'redux-saga/effects';
import { decamelizeKeys } from 'humps';

import * as api from 'core/api';

import { enqueueNotification } from '../notifications.module';

const namespace = 'password';

export const changePassword = createAction(
    `${namespace} | change`,
    ({ oldPassword, newPassword }) => ({ oldPassword, newPassword })
);

export const changePasswordSuccess = createAction(`${namespace} | change - success`);

export const changePasswordFail = createAction(`${namespace} | change - fail`);

function* changePasswordSaga({ payload: body }) {
    const { success, error } = yield call(api.account.changePassword, decamelizeKeys(body));

    if (success) {
        yield put(changePasswordSuccess());
        yield put(enqueueNotification({
            message: 'Password reset successfully',
            options: { variant: 'success' },
        }));
    } else {
        yield put(changePasswordFail(error));
    }
}

export function* watchChangePassword() {
    yield takeEvery(changePassword.getType(), changePasswordSaga);
}
