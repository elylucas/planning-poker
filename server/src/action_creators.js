
export const CREATE_ROOM = 'CREATE_ROOM';

export function createRoom(roomId, user){
  return {
    type: CREATE_ROOM,
    roomId,
    user
  }
}
