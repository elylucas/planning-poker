
import {Map, List, fromJS} from 'immutable';

export function createRoom(state = Map(), name) {
  return state.set('isRoomCreating', true)
}

export function roomCreated(state = Map(), room) {
  state.set('isRoomCreating', false);
  return state.set('room', room);
}

export function joinRoom(state = Map(), name, roomId) {
  return state.set('isRoomJoining', true);
}

export function roomJoined(state = Map(), room) {
  state.set('isRoomJoining', false);
  return state.set('room', room);
}
