export const CREATE_ROOM_REQUEST = 'CREATE_ROOM_REQUEST';
export const CREATE_ROOM_RESPONSE = 'CREATE_ROOM_RESPONSE';
export const JOIN_ROOM_REQUEST = 'JOIN_ROOM_REQUEST';
export const JOIN_ROOM_RESPONSE = 'JOIN_ROOM_RESPONSE';
export const ROOM_UPDATED_ALERT = 'ROOM_UPDATED_ALERT';

export function createRoom(name){
  return{
    type: CREATE_ROOM_REQUEST,
    name,
    meta: function(socket, action) {
      socket.emit('createRoom', action.name);
    }
  };
}

export function joinRoom(name, roomId){
  return{
    type: JOIN_ROOM_REQUEST,
    name,
    roomId,
    meta: (socket, action) => {
      socket.emit('joinRoom', action.name, action.roomId);
    }
  };
}

export function roomCreated(room){
  return{
    type: CREATE_ROOM_RESPONSE,
    room
  };
}

export function roomJoined(room){
  return{
    type: JOIN_ROOM_RESPONSE,
    room
  };
}

export function roomUpdated(room){
  return {
    type: ROOM_UPDATED_ALERT,
    room
  }
}
