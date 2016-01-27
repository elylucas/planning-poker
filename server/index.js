import startServer from './src/server';
import makeStore from './src/store';

export const store = makeStore();



startServer(store);

store.dispatch({type: 'SET_INITIAL_STATE'});
