
import {Map, List, fromJS} from 'immutable';

export function createRoom(state = Map(), name) {
  return state.set('isRoomCreating', true)
}

export function roomCreated(state = Map(), room) {
  state.set('isRoomCreating', false);
  return state.set('room', room);
}

export function joinRoom(state = Map(), name, roomId) {
  state = state.set('name', name);
  return state.set('isRoomJoining', true);  
}

export function roomJoined(state = Map(), room) {
  state.set('isRoomJoining', false);
  return state.set('room', room);
}

export function roomUpdated(state = Map(), room){
  let newState = state.set('voteComplete', isVoteComplete(room));
  return newState.set('room', room);
}

export function castVote(state = Map(), vote) {
  return state.set('voteCast', vote);
}

export function resetVote(state = Map(), roomId) {
  return state;
}

export function voteReset(state = Map()) {
  return state.set('voteCast', '');
}

function isVoteComplete(room) {
  return room.users.every(room => room.vote !== null && room.vote !== '');
}
