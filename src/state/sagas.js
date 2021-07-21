import { all, fork } from 'redux-saga/effects';

import { watchSaveDocument } from './modules/quillEditor.module';

export default function* rootSaga() {
    yield all([
        fork(watchSaveDocument),
    ]);
}
