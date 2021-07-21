import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';


import rootSaga from './sagas';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

// store.subscribe(()=> console.log(store.getState()))

sagaMiddleware.run(rootSaga);
// store.dispatch(init());

export default store;
