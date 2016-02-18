import {createRoom, joinRoom} from './rooms';
import {setInitialState} from './state';
import {List, Map} from 'immutable';
import { combineReducers } from 'redux';

export default function rooms(state = List(), action){
  switch(action.type){
    case 'CREATE_ROOM':
      var newRooms = createRoom(state, action.roomId, action.user);
      return newRooms;
    case 'JOIN_ROOM':
      let newRooms = joinRoom(state, action.roomId, action.user);
      return newRooms;
    default:
      return state;
  }
}

const reducer = combineReducers({
  rooms
});

export default reducer;
