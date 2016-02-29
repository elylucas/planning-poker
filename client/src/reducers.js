import { CREATE_ROOM_REQUEST, CREATE_ROOM_RESPONSE, JOIN_ROOM_REQUEST, JOIN_ROOM_RESPONSE, ROOM_UPDATED_ALERT, CAST_VOTE_REQUEST } from './action_creators';
import { createRoom, roomCreated, joinRoom, roomJoined , roomUpdated, castVote} from './room';

function room(state, action) {
  switch (action.type) {
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
    default:
      return state;
      break;
  }
}

export default room;
