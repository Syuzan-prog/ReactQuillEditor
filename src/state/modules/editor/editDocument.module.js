import { createAction } from 'redux-act';
import { decamelizeKeys } from 'humps';
import { call, put, takeEvery } from 'redux-saga/effects';

import { routes } from 'configs/app.routes';
import history from 'configs/app.history';

import * as api from 'core/api';

const namespace = 'edit document';

export const editDocument = createAction(
    `${namespace} | edit document`, 
    (id, document) => ({id, document}));

export const editDocumentSuccess = createAction(
    `${namespace} | edit document success`,
     (id, document) => ({id, document}));

export const editDocumentFail = createAction(
    `${namespace} | edit document fail`, 
    (error, id) => ({error, id}));

export const reducer = {
    [editDocument.getType()]: (state, { id }) => ({
        ...state,
        entities: {
            ...state.entities,
           [id]: { ...state.entities[id] },
        },
    }),
    [editDocumentSuccess.getType()]: (state, { id, document }) => ({
        ...state,
            entities: {
            ...state.entities,
            [id]: { ...state.entities[id], currentBucket: document },
        },
    }),
    [editDocumentFail.getType()]: (state, { id }) => ({
        ...state,
        entities: {
            ...state.entities,
            [id]: { ...state.entities[id] },
        },
    }),
};    

function* editDocumentSaga({ payload: body }) {
    const {id, document } = body
    // const { success, error } = yield call(api.editor.editDocument, decamelizeKeys(body));
    console.log(body,'body')
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
