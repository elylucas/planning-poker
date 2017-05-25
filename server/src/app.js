import startServer from './server';
import makeStore from './store';

export const store = makeStore();
store.subscribe(()=>{
  //console.log(store.getState())
})
//store.dispatch({type: 'SET_INITIAL_STATE'});
console.log('server started')

startServer(store);
