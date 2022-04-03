import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware),
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
      ? a => a
      : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(rootSaga);

export default store;