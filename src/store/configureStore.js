import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import uiReducer from './reducers/ui';
import authReducer from './reducers/auth';
import rootSaga from './sagas';


const rootReducer = combineReducers({
   ui: uiReducer,
   auth: authReducer
});

let composeEnchancers = compose;
if (__DEV__) {
   composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      || compose;
}

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
   return createStore(rootReducer, 
      composeEnchancers(applyMiddleware(sagaMiddleware)))
};

const store = configureStore();

sagaMiddleware.run(rootSaga);


export default store;
