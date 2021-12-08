import { createAction } from 'redux-act';
import { debounce, select, call, put } from 'redux-saga/effects';
import { camelizeKeys } from 'humps';

import * as api from 'core/api';

import { getPostsOffset } from '../../selectors/editor.selectors';

const namespace = 'posts';

export const fetchPosts = createAction(
    `${namespace} | fetch`,
    (limit = 20, offset = null, resetState = false) => ({ limit, offset, resetState })
);

const fetchPostsSuccess = createAction(
    `${namespace} | fetch - sucess`,
    (entities, idMap, hasMore, resetState) => ({ entities, idMap, hasMore, resetState })
);

const fetchPostsFail = createAction(
    `${namespace} | fetch - fail`,
    (error) => error
);

export const reducer = {
    [fetchPosts.getType()]: (state, { resetState }) => ({
        ...state,
        entities: resetState ? {} : { ...state.entities },
        idMap: resetState ? [] : [...state.idMap],
        isLoading: true,
    }),
    [fetchPostsSuccess.getType()]: (state, { entities, idMap, hasMore, resetState }) => ({
        ...state,
        entities: resetState ? entities : { ...state.entities, ...entities },
        idMap: resetState ? idMap : [...state.idMap, ...idMap],
        hasMore,
        isLoading: false,
        isLoaded: true,
    }),
    [fetchPostsFail.getType()]: (state, error) => ({
        ...state,
        error,
        isLoading: false,
        isLoaded: false,
    }),
};

function* fetchPostsSaga({ payload: { limit, offset, resetState } }) {
    const defaultOffset = yield select(getPostsOffset);

    const { success, data, error } = yield call(
        api.editor.fetchPosts,
        limit, offset === null && defaultOffset
    );

    if (success) {

        const processedResults = camelizeKeys(data);
        const entities = {};
        const idMap = [];

        processedResults.forEach((post) => {
            entities[post.id] = post;
            idMap.push(post.id);
        });

        yield put(fetchPostsSuccess(
            entities,
            idMap,
            (limit + (offset || defaultOffset)) < 10,
            resetState
        ));

    } else {
        yield put(fetchPostsFail(error));
    }
}

export function* watchFetchPosts() {
    yield debounce(300, fetchPosts.getType(), fetchPostsSaga);
}
