import { createReducer } from 'redux-act';
import { all, fork } from 'redux-saga/effects';

import { reducer as fetchReducer, watchFetchPost } from './post.fetch.module';
import { reducer as fetchPostIdReducer, watchFetchPosts } from './posts.fetch.module';
import {reducer as editReducer, watchEditDocument } from './editDocument.module';

import { watchSaveDocument } from './saveDocument.module';

export { fetchPost } from './post.fetch.module';
export { fetchPosts } from './posts.fetch.module';
export { saveDocument } from './saveDocument.module';
export { editDocument } from './editDocument.module';

const initialState = {
    idMap: [],
    entities: {},
    hasMore: false,
    isLoading: false,
    isLoaded: false,
    error: null,
};

export const reducer = createReducer({
    ...fetchReducer,
    ...fetchPostIdReducer,
    ...editReducer
}, initialState);

export function* watchEditor() {
    yield all([
        fork(watchFetchPost),
        fork(watchFetchPosts),
        fork(watchSaveDocument),
        fork(watchEditDocument),
    ]);
}
