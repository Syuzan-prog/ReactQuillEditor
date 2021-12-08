import { createAction } from 'redux-act';
import { call, put, takeEvery } from 'redux-saga/effects';
import { routes } from 'configs/app.routes';
import history from 'configs/app.history';

import * as api from 'core/api';

const namespace = 'edit';

export const edit = createAction(`${namespace} | edit`, (document) => document);

export const editSuccess = createAction(`${namespace} | edit success`, (data) => data);

export const editFail = createAction(`${namespace} | edit fail`, (error) => error);

function* editSaga({ payload: { document } }) {
    const { success, data, error } = yield call(api.editor.edit, document);

    if (success) {
        yield put(editSuccess(data));
        yield call(history.push, routes.app.homePage);
    } else {
        yield put(editFail(error));
    }
}

export function* watchEditDocument() {
    yield takeEvery(edit.getType(), editSaga);
}
