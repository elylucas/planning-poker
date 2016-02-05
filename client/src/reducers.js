import { CREATE_ROOM_REQUEST, CREATE_ROOM_RESPONSE } from './action_creators';
import { createRoom, roomCreated } from './room';

function room(state, action) {
  switch (action.type) {
    case CREATE_ROOM_REQUEST:
      return createRoom(state, action.name);
      break;
    case CREATE_ROOM_RESPONSE:
      return roomCreated(state, action.room);
      break;
    default:
      return state;
      break;
  }
}

export default room;
