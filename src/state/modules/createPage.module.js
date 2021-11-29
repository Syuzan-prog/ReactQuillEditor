import { createAction } from 'redux-act';
import { call, put, takeEvery } from 'redux-saga/effects';

import * as api from 'core/api';

const namespace = 'create page';

export const createPage = createAction(`${namespace} | create page`, (document) => document);

export const createPageSuccess = createAction(`${namespace} | create page success`, (data) => data);

export const createPageFail = createAction(`${namespace} | create page fail`, (error) => error);

function* createPageSaga({ payload: { document } }) {
    const { success, data, error } = yield call(api.createPage.createPage, document);

    if (success) {
        yield put(createPageSuccess(data));
    } else {
        yield put(createPageFail(error));
    }
}

export function* watchSaveDocument() {
    yield takeEvery(createPage.getType(), createPageSaga);
}
