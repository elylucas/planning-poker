export const CREATE_ROOM_REQUEST = 'CREATE_ROOM_REQUEST';
export const CREATE_ROOM_RESPONSE = 'CREATE_ROOM_RESPONSE';
export const JOIN_ROOM_REQUEST = 'JOIN_ROOM_REQUEST';
export const JOIN_ROOM_RESPONSE = 'JOIN_ROOM_RESPONSE';
export const ROOM_UPDATED_ALERT = 'ROOM_UPDATED_ALERT';
export const CAST_VOTE_REQUEST = 'CAST_VOTE_REQUEST';
export const RESET_VOTE = 'RESET_VOTE';
export const RESET_VOTE_RESPONSE = 'RESET_VOTE_RESPONSE';

export function createRoom(name){
  return{
    type: CREATE_ROOM_REQUEST,
    name,
    meta: (session, action) => {
      session.socket.emit('createRoom', action.name, action.userId);
    }
  };
}

export function joinRoom(name, roomId){
  return{
    type: JOIN_ROOM_REQUEST,
    name,
    roomId,
    meta: (session, action) => {
      session.socket.emit('joinRoom', action.name, action.roomId);
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
  };
}

export function castVote(vote, roomId){
  return{
    type: CAST_VOTE_REQUEST,
    vote,
    roomId,
    meta: (session, action) => {
      session.socket.emit('castVote', action.vote, action.roomId);
    }
  };
}

export function resetVote(roomId){
  return {
    type: RESET_VOTE,
    roomId,
    meta: (session, action) => {
      session.socket.emit('resetVote', action.roomId);
    }
  }
}

export function voteReset(){
  return {
    type: RESET_VOTE_RESPONSE
  }
}
