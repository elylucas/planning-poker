import {createRoom} from './room';
import {setInitialState} from './state';
import {List} from 'immutable';

export default function reducer(state = List(), action){
  switch(action.type){
    case 'SET_INITIAL_STATE':
      return setInitialState();
    case 'CREATE_ROOM':
      return createRoom(state, action.roomId, action.user)
      break;
  }
}
