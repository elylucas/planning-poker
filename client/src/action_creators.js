export const CREATE_ROOM = 'CREATE_ROOM';

export function createRoom(name){
  return{
    type: CREATE_ROOM,
    name
  };
}

export const ROOM_UPDATE = 'ROOM_UPDATE';

export function roomUpdate(room){
  return {
    type: ROOM_UPDATE,
    room 
  }
}
