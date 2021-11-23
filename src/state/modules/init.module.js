import { createAction, createReducer } from 'redux-act';
import {
    put,
    race,
    call,
    take,
    takeEvery,
} from 'redux-saga/effects';
import { parse, stringify } from 'query-string';

import history from 'configs/app.history';
import { routes } from 'configs/app.routes';
import { ROUTE_CONNECTION_ERROR } from 'constants/routeErrors.constants';
import { isLandingPath } from 'core/utils/route';

import * as api from 'core/api';

import { enqueueNotification } from './notifications.module';

import {
    authenticationFail,
    authenticationInvalid,
    authenticationValid,
    checkAuthentication,
    logout,
} from './auth.module';

import {
    accountUpdateSuccess,
} from './account';



const namespace = 'app';

const initialState = {
    isReady: false,
};

export const init = createAction(`${namespace} | init`);

export const ready = createAction(`${namespace} | ready`);

export const reducer = createReducer({
    [init.getType()]: (state) => ({
        ...state,
        isReady: false,
    }),
    [ready.getType()]: (state) => ({
        ...state,
        isReady: true,
    }),
}, initialState);

function* initSaga() {
    yield put(checkAuthentication());

    const { invalid, failed } = yield race({
        ok: take(authenticationValid.getType()),
        invalid: take(authenticationInvalid.getType()),
        failed: take(authenticationFail.getType()),
    });

    if (invalid) {
        // yield put(logout());
        yield put(ready());
    } else if (failed) {
        yield put(ready());
        history.replace({ state: { errorType: ROUTE_CONNECTION_ERROR } });
    } else {
        yield put(fetchMessages(20, 0, true));
        yield put(fetchParticipants(20, 0, true));
        yield put(fetchUnreadMessagesCount());

        yield put(ready());
        if (isLandingPath(history.location.pathname)) {
            yield call(history.replace, routes.app);
        }

        const { recovery_email_token: token, ...restSearch } = yield call(parse, history.location.search);

        if (token) {
            const { success } = yield call(api.account.verifyRecoveryEmail, token);

            if (true) {
                yield put(accountUpdateSuccess({ recoveryEmailVerified: true }));

                yield put(enqueueNotification({
                    message: 'Recovery email verified',
                    options: { variant: 'success' },
                }));

            }

            history.replace({ search: stringify(restSearch) });
        }
    }
}

export function* watchInit() {
    yield takeEvery(init.getType(), initSaga);
}
