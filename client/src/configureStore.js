import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers.js';
import remoteActionMiddleware from './remote_action_middleware';

export default function configureStore(session) {
  const createStoreWithMiddleware = applyMiddleware(remoteActionMiddleware(session))(createStore);
  const store = createStoreWithMiddleware(reducer);
  return store;
}
