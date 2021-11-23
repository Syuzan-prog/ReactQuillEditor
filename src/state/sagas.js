import { all, fork } from 'redux-saga/effects';

import { watchInit } from './modules/init.module';
import { watchAuth } from './modules/auth.module';
import { watchSignIn } from './modules/signin.module';
import { watchSignup } from './modules/signup.module';
import { watchResetPassword } from './modules/resetPassword.module';
import { watchRecoverPassword } from './modules/recoverPassword.module';
import { watchJoinWaitlist } from './modules/joinWaitlist.module';

import { watchAccount } from './modules/account';

import { watchVerification } from './modules/verification';

import { watchFormSubmit } from './modules/formSubmit.module';

export default function* rootSaga() {
    yield all([
        fork(watchInit),
        fork(watchAuth),
        fork(watchSignIn),
        fork(watchSignup),
        fork(watchResetPassword),
        fork(watchRecoverPassword),
        fork(watchJoinWaitlist),
        fork(watchFormSubmit),
        fork(watchAccount),
        fork(watchVerification),
    ]);
}
