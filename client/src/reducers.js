import { CREATE_ROOM } from './action_creators';
import { createRoom } from './room';

function room(state = [], action) {
  switch (action.type) {
    case CREATE_ROOM:
      return createRoom(state, action.name);
      break;
    default:
      return state;
      break;
  }
}

export default room;
