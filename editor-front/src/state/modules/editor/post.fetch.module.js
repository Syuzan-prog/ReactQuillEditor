import { createAction, createReducer } from 'redux-act';
import { takeEvery, call, put } from 'redux-saga/effects';
import { camelizeKeys } from 'humps';

import * as api from 'core/api';

const namespace = 'postId';

export const fetchPost = createAction(
    `${namespace} | fetch`,
    (id) => id
);

const fetchPostSuccess = createAction(
    `${namespace} | fetch - sucess`,
    (post) => (post)
);

const fetchPostFail = createAction(
    `${namespace} | fetch - fail`,
    (error) => error
);

export const reducer = {
    [fetchPost.getType()]: (state) => ({
        ...state,
        isLoading: true,
    }),
    [fetchPostSuccess.getType()]: (state, post) => ({
        ...state,
        post,
        isLoading: false,
        isLoaded: true,
    }),
    [fetchPostFail.getType()]: (state, error) => ({
        ...state,
        error,
        isLoading: false,
        isLoaded: false,
    }),
};

function* fetchPostSaga({ payload: id }) {
    const { success, data, error } = yield call(api.editor.fetchPost, id);
    if (success) {
        yield put(fetchPostSuccess(camelizeKeys(data)));
    } else {
        yield put(fetchPostFail(error));
    }
}

export function* watchFetchPost() {
    yield takeEvery(fetchPost.getType(), fetchPostSaga);
}
