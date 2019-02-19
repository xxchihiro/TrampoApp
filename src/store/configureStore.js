import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'remote-redux-devtools';

import placesReducer from './reducers/places';
import authReducer from './reducers/auth';

const rootReducer = combineReducers({
    // places: placesReducer,
    auth: authReducer
});

const composeEnhancers = composeWithDevTools({ realtime: true, port: 8003 });

const configureStore = (initialState) => {
    const store =  createStore(rootReducer, initialState, composeEnhancers(
        applyMiddleware(thunk),
      ));

  if (module.hot) {
    // Enable hot module replacement for reducers
    module.hot.accept(() => {
      const nextRootReducer = rootReducer
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;