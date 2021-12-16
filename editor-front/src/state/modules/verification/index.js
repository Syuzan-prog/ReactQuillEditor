import { createReducer } from 'redux-act';
import { all, fork } from 'redux-saga/effects';

import { reducer as metaReducer, watchFetchMeta } from './verification.meta.module';
import { reducer as codeReducer, watchCode } from './verification.code.module';
import { watchCreatePassword } from './verification.password.module';

export {
    fetchMeta,
} from './verification.meta.module';

export {
    requestCode,
    submitCode,
    submitCodeSuccess,
    submitCodeFail,
} from './verification.code.module';

export {
    createPassword,
    createPasswordSuccess,
    createPasswordFail,
} from './verification.password.module';

const initialState = {
    token: null,
    step: -1,
    isLoading: false,
    isLoaded: false,
    email: null,
};

export const reducer = createReducer({
    ...metaReducer,
    ...codeReducer,
}, initialState);

export function* watchVerification() {
    yield all([
        fork(watchFetchMeta),
        fork(watchCode),
        fork(watchCreatePassword),
    ]);
}
