import { createReducer } from 'redux-act';
import { all, fork } from 'redux-saga/effects';

import { reducer as fetchReducer, watchFetchPost } from './post.fetch.module';
import { reducer as fetchPostIdReducer, watchFetchPosts } from './posts.fetch.module';
import {reducer as editReducer, watchEditDocument } from './document.edit.module';
import {reducer as deliteReducer, watchDeleteDocument } from './document.delete.module';


import { watchSaveDocument } from './document.create.module';

export { fetchPost } from './post.fetch.module';
export { fetchPosts } from './posts.fetch.module';
export { saveDocument } from './document.create.module';
export { editDocument } from './document.edit.module';
export { deleteDocument } from './document.delete.module';

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
    ...editReducer,
    ...deliteReducer
}, initialState);

export function* watchEditor() {
    yield all([
        fork(watchFetchPost),
        fork(watchFetchPosts),
        fork(watchSaveDocument),
        fork(watchEditDocument),
        fork(watchDeleteDocument)
    ]);
}
