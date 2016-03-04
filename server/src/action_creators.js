
export const CREATE_ROOM = 'CREATE_ROOM';
export const JOIN_ROOM = 'JOIN_ROOM';
export const LEAVE_ROOM = 'LEAVE_ROOM';
export const CAST_VOTE = 'CAST_VOTE';
export const RESET_VOTE = 'RESET_VOTE';

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

export function leaveRoom(roomId, userId) {
  return {
    type: LEAVE_ROOM,
    roomId,
    userId
  };
}

export function castVote(userId, roomId, vote) {
  return {
    type: CAST_VOTE,
    userId,
    roomId,
    vote
  };
}

export function resetVote(roomId) {
  return {
    type: RESET_VOTE,
    roomId
  };
}
