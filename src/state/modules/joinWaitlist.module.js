import { createAction } from 'redux-act';
import { call, put, takeEvery } from 'redux-saga/effects';

import * as api from 'core/api';
import { routes } from 'configs/app.routes';
import history from 'configs/app.history';

const namespace = 'join waitlist';

export const joinWaitlist = createAction(
    `${namespace} | join waitlist`,
    (email) => email
);

export const joinWaitlistSuccess = createAction(`${namespace} | join waitlist - success`);

export const joinWaitlistFail = createAction(`${namespace} | join waitlist - fail`);

function* joinWaitlistSaga({ payload: { email } }) {
    const { success, error } = yield call(api.auth.joinWaitlist, email);

    if (success) {
        yield put(joinWaitlistSuccess());
        history.push(routes.joinSuccess);
    } else {
        yield put(joinWaitlistFail(error));
    }
}

export function* watchJoinWaitlist() {
    yield takeEvery(joinWaitlist.getType(), joinWaitlistSaga);
}
