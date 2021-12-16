import { createAction } from 'redux-act';
import { takeEvery, call, put } from 'redux-saga/effects';

import * as api from 'core/api';

import { fetchAccount } from './account.fetch.module';

const namespace = 'publications';

export const modifyAssociations = createAction(
    `${namespace} | modify associations`,
    (formValues) => (formValues)
);

export const modifyAssociationsSuccess = createAction(`${namespace} | modify associations - success`);

export const modifyAssociationsFail = createAction(`${namespace} | modify associations - fail`);

function* modifyAssociationsSaga({ payload: body }) {
    const { success, error } = yield call(api.account.modifyAssociations, body);

    if (success) {
        yield put(fetchAccount());
        yield put(modifyAssociationsSuccess());
    } else {
        yield put(modifyAssociationsFail(error));
    }
}

export function* watchModifyAssociations() {
    yield takeEvery(modifyAssociations.getType(), modifyAssociationsSaga);
}
