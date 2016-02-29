import {createRoom, joinRoom, leaveRoom, castVote} from './rooms';
import {setInitialState} from './state';
import {List, Map} from 'immutable';
import { combineReducers } from 'redux';

export default function rooms(state = List(), action){
  switch(action.type){
    case 'CREATE_ROOM':
      var newRooms = createRoom(state, action.roomId, action.user);
      return newRooms;
    case 'JOIN_ROOM':
      var newRooms = joinRoom(state, action.roomId, action.user);
      return newRooms;
    case 'LEAVE_ROOM':
      var newRooms = leaveRoom(state, action.roomId, action.userId);
      return newRooms;
    case 'CAST_VOTE':
      var newRooms = castVote(state, action.userId, action.roomId, action.vote);
      return newRooms;
    default:
      return state;
  }
}

const reducer = combineReducers({
  rooms
});

export default reducer;
