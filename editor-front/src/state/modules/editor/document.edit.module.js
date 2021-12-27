import { createAction } from 'redux-act';
import { decamelizeKeys } from 'humps';
import { call, put, select, takeEvery } from 'redux-saga/effects';

import { routes } from 'configs/app.routes';
import history from 'configs/app.history';
import * as api from 'core/api';
import { getPostUpdateInitialState } from '../../selectors/editor.selectors';

const namespace = 'edit document';

export const editDocument = createAction(
    `${namespace} | edit document`,
    (document) => ({ document }));

export const editDocumentSuccess = createAction(
    `${namespace} | edit document success`,
    (id, document) => ({ id, document }));

export const editDocumentFail = createAction(
    `${namespace} | edit document fail`,
    (error, id) => ({ error, id }));

export const reducer = {
    [editDocumentSuccess.getType()]: (state, { id, document }) => ({
        ...state,
        entities: {
            ...state.entities,
            [id]: { ...state.entities[id], document },
        },
    }),
};

function* editDocumentSaga({ payload: update }) {
    const post = yield select(getPostUpdateInitialState);
    const { document } = update;
    const { id } = post;
    const { success, error } = yield call(api.editor.editDocument, id, decamelizeKeys(document));

    if (success) {
        yield put(editDocumentSuccess(id, document));
        yield call(history.push, routes._app.homePage);
    } else {
        yield put(editDocumentFail(error, id));
    }
}

export function* watchEditDocument() {
    yield takeEvery(editDocument.getType(), editDocumentSaga);
}
