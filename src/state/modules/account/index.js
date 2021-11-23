import { createReducer } from 'redux-act';
import { all, fork } from 'redux-saga/effects';

import { reducer as accountFetchReducer, watchFetchAccount } from './account.fetch.module';
import { reducer as accountUpdateReducer, watchUpdateAccount } from './account.update.module';
import { reducer as accountChangeRecoveryEmailReducer, watchChangeRecoveryEmail } from './account.recoveryEmail.module';
import { watchModifyAssociations } from './account.publications.module';
import { watchChangePassword } from './account.password.module';

export {
    fetchAccount,
    fetchAccountSuccess,
    fetchAccountFail,
} from './account.fetch.module';

export {
    accountUpdate,
    accountUpdateSuccess,
    accountUpdateFail,
} from './account.update.module';

export {
    changePassword,
    changePasswordSuccess,
    changePasswordFail,
} from './account.password.module';

export {
    changeRecoveryEmail,
    changeRecoveryEmailSuccess,
    changeRecoveryEmailFail,
} from './account.recoveryEmail.module';

export {
    modifyAssociations,
    modifyAssociationsSuccess,
    modifyAssociationsFail,
} from './account.publications.module';

const initialState = {
    account: null,
    isLoading: false,
    isLoaded: false,
    error: '',
};

export const reducer = createReducer({
    ...accountFetchReducer,
    ...accountUpdateReducer,
    ...accountChangeRecoveryEmailReducer,
}, initialState);

export function* watchAccount() {
    yield all([
        fork(watchFetchAccount),
        fork(watchUpdateAccount),
        fork(watchChangeRecoveryEmail),
        fork(watchChangePassword),
        fork(watchModifyAssociations),
    ]);
}
