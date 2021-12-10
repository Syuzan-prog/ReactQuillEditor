import { createAction } from 'redux-act';
import { call, put, takeEvery } from 'redux-saga/effects';
import { routes } from 'configs/app.routes';
import history from 'configs/app.history';

import * as api from 'core/api';

const namespace = 'save document';

export const saveDocument = createAction(`${namespace} | save document`, (document) => document);

export const saveDocumentSuccess = createAction(`${namespace} | save document success`, (data) => data);

export const saveDocumentFail = createAction(`${namespace} | save document fail`, (error) => error);

function* saveDocumentSaga({ payload: document }) {
    const { success, data, error } = yield call(api.editor.saveDocument, document );
    if (success) {
        yield put(saveDocumentSuccess(data));
        yield call(history.push, routes._app.homePage);
    } else {
        yield put(saveDocumentFail(error));
    }
}

export function* watchSaveDocument() {
    yield takeEvery(saveDocument.getType(), saveDocumentSaga);
}