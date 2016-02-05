import {Map, List, fromJS} from 'immutable';

export function createRoom(state, roomId, user) {
  var newState = state.get('rooms').push(fromJS(
    {
      id: roomId,
      users: [user]
    }));
  return state.set('rooms', newState);
}
