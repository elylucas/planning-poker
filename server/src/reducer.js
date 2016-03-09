import {createRoom, joinRoom, leaveRoom, castVote, resetVote} from './rooms';
import {setInitialState} from './state';
import {List, Map} from 'immutable';
import { combineReducers } from 'redux';

export default function rooms(state = List(), action){
  switch(action.type){
    //Todo: clean up ugly login in this switch statement
    case 'CREATE_ROOM':
    case 'JOIN_ROOM':
      let room = state.find(room => room.get('id') === action.roomId);
      let newRooms;
      if(!room){
        var newRooms = createRoom(state, action.roomId, action.user);
      } else {
        newRooms = joinRoom(state, action.roomId, action.user);
      }
      return newRooms;
    case 'LEAVE_ROOM':
      var newRooms = leaveRoom(state, action.roomId, action.userId);
      return newRooms;
    case 'CAST_VOTE':
      var newRooms = castVote(state, action.userId, action.roomId, action.vote);
      return newRooms;
    case 'RESET_VOTE':
      var newRooms = resetVote(state, action.roomId);
      return newRooms;
    default:
      return state;
  }
}

const reducer = combineReducers({
  rooms
});

export default reducer;
