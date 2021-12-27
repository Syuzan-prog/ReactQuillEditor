import { createAction } from 'redux-act';
import { takeEvery, put, call } from 'redux-saga/effects';

import * as api from 'core/api';

const namespace = 'datasources';

export const deleteDocument = createAction(
    `${namespace} | delete`,
    (id, deleteConnectedEntities = false, onSuccess) => ({ id, deleteConnectedEntities, onSuccess })
);

export const deleteDocumentSuccess = createAction(
    `${namespace} | delete success`,
    (id, deleteConnectedEntities) => ({ id, deleteConnectedEntities })
);

const deleteDocumentFail = createAction(
    `${namespace} | delete fail`,
    (error) => error
);

export const reducer = {
    [deleteDocumentSuccess.getType()]: (state, { id }) => {
        const entities = { ...state.entities };

        delete entities[id];

        return ({
            ...state,
            entities,
            idMap: state.idMap.filter((id) => id !== id),
        });
    },
};

function* deleteDocumentSaga({ payload: { id, deleteConnectedEntities, onSuccess } }) {
    const { success, error } = yield call(api.editor.deleteDocument, id, deleteConnectedEntities);

    if (success) {
        yield put(deleteDocumentSuccess(id, deleteConnectedEntities));
        onSuccess();
    } else {
        yield put(deleteDocumentFail(error));
    }
}

export function* watchDeleteDocument() {
    yield takeEvery(deleteDocument.getType(), deleteDocumentSaga);
}
