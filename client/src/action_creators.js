export const CREATE_ROOM_REQUEST = 'CREATE_ROOM_REQUEST';
export const CREATE_ROOM_RESPONSE = 'CREATE_ROOM_RESPONSE';

export function createRoom(name){
  return{
    type: CREATE_ROOM_REQUEST,
    name,
    meta: { remote: true }
  };
}

export function roomCreated(room){
  return{
    type: CREATE_ROOM_RESPONSE,
    room
  };
}

export const ROOM_UPDATE = 'ROOM_UPDATE';

export function roomUpdate(room){
  return {
    type: ROOM_UPDATE,
    room
  }
}
