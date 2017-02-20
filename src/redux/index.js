import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

import plaintext from './plaintext';
import cipher from './cipher';

let store = null;
export default function getStore() {
  if (!store) {
    let logger = createLogger({
      collapsed: true
    });

    const reducers = combineReducers({
      plaintext,      
      cipher
    });

    store = createStore(reducers, applyMiddleware(logger));
  }

  return store;
}
