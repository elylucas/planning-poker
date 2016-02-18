
export const CREATE_ROOM = 'CREATE_ROOM';
export const JOIN_ROOM = 'JOIN_ROOM';

export function createRoom(roomId, user){
  return {
    type: CREATE_ROOM,
    roomId,
    user
  };
}

export function joinRoom(roomId, user) {
  return {
    type: JOIN_ROOM,
    roomId,
    user
  };
}
