import * as ActionCreators from './action_creators';
import * as Room from './room';
import { Map } from 'immutable';

function room(state, action) {
  switch (action.type) {
    case ActionCreators.INIT_STATE:
      return new Map();
      break;
    case ActionCreators.SET_USERNAME:
      return state.set('username', action.username);
      break;
    case ActionCreators.CREATE_ROOM_REQUEST:
      return Room.createRoom(state, action.name);
      break;
    case ActionCreators.CREATE_ROOM_RESPONSE:
      return Room.roomCreated(state, action.room);
      break;
    case ActionCreators.JOIN_ROOM_REQUEST:
      return Room.joinRoom(state, action.name, action.roomId);
      brake;
    case ActionCreators.JOIN_ROOM_RESPONSE:
      return Room.roomJoined(state, room);
      break;
    case ActionCreators.ROOM_UPDATED_ALERT:
      return Room.roomUpdated(state, action.room);
      break;
    case ActionCreators.CAST_VOTE_REQUEST:
      return Room.castVote(state, action.vote, action.roomId);
      break;
    case ActionCreators.RESET_VOTE:
      return Room.resetVote(state, action.roomId);
      break;
    case ActionCreators.RESET_VOTE_RESPONSE:
      return Room.voteReset(state);
      break;
    case ActionCreators.SET_CONNECTION_STATE:
      return state.set('connectionStatus', action.status);
      break;
    default:
      return state;
      break;
  }
}

export default room;
