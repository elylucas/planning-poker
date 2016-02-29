import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers.js';
import remoteActionMiddleware from './remote_action_middleware';

export default function configureStore(socket) {
  const createStoreWithMiddleware = applyMiddleware(remoteActionMiddleware(socket))(createStore);
  const store = createStoreWithMiddleware(reducer);
  return store;
}
