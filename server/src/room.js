import roomIdGen from './util/room-id-gen';
import {Map, List, fromJS} from 'immutable';

export function createRoom(state = List(), roomId, user) {
  return state.push(fromJS(
    {
      roomId: roomId,
      users: [user]
    }));
}
