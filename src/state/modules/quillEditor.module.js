import { createAction } from 'redux-act';
import { call, put, takeEvery } from 'redux-saga/effects';

import * as api from 'core/api';

const namespace = 'save document';

export const saveDocument = createAction(`${namespace} | save document`, (document) => document);

export const saveDocumentSuccess = createAction(`${namespace} | save document success`, (data) => data);

export const saveDocumentFail = createAction(`${namespace} | save document fail`, (error) => error);

function* saveDocumentSaga({ payload: { document } }) {
    // const { success, data, error } = yield call(api.quillEditor.saveDocument, document);

    if (success) {
        yield put(saveDocumentSuccess(data));
    } else {
        yield put(saveDocumentFail(error));
    }
}

export function* watchSaveDocument() {
    yield takeEvery(saveDocument.getType(), saveDocumentSaga);
}
