import { createReducer } from 'redux-act';
import { all, fork } from 'redux-saga/effects';

import { reducer as fetchReducer, watchFetchPosts } from './posts.fetch.module';
import { watchEditDocument } from './edit.module';
import { watchSaveDocument } from './saveDocument.module';

export { fetchPosts } from './posts.fetch.module';
export { saveDocument } from './saveDocument.module';


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
}, initialState);

export function* watchEditor() {
    yield all([
        fork(watchFetchPosts),
        fork(watchEditDocument),
        fork(watchSaveDocument),
    ]);
}
