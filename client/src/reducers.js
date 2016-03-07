import { INIT_STATE, SET_USERNAME, CREATE_ROOM_REQUEST, CREATE_ROOM_RESPONSE, JOIN_ROOM_REQUEST, JOIN_ROOM_RESPONSE, ROOM_UPDATED_ALERT, CAST_VOTE_REQUEST, RESET_VOTE, RESET_VOTE_RESPONSE } from './action_creators';
import { createRoom, roomCreated, joinRoom, roomJoined , roomUpdated, castVote, resetVote, voteReset} from './room';
import { Map } from 'immutable';

function room(state, action) {
  switch (action.type) {
    case INIT_STATE:
      return new Map();
      break;
    case SET_USERNAME:
      return state.set('username', action.username);
      break;
    case CREATE_ROOM_REQUEST:
      return createRoom(state, action.name);
      break;
    case CREATE_ROOM_RESPONSE:
      return roomCreated(state, action.room);
      break;
    case JOIN_ROOM_REQUEST:
      return joinRoom(state, action.name, action.roomId);
      brake;
    case JOIN_ROOM_RESPONSE:
      return roomJoined(state, room);
      break;
    case ROOM_UPDATED_ALERT:
      return roomUpdated(state, action.room);
      break;
    case CAST_VOTE_REQUEST:
      return castVote(state, action.vote, action.roomId);
      break;
    case RESET_VOTE:
      return resetVote(state, action.roomId);
      break;
    case RESET_VOTE_RESPONSE:
      return voteReset(state);
      break;
    default:
      return state;
      break;
  }
}

export default room;
