
import {Map, List, fromJS} from 'immutable';

export function createRoom(state = Map(), name) {
  return state.set('isRoomCreating', true)
}

export function roomCreated(state = Map(), room) {
  state.set('isRoomCreating', false);
  return state.set('room', room);
}
