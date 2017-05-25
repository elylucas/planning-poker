'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRoom = createRoom;
exports.joinRoom = joinRoom;
exports.leaveRoom = leaveRoom;
exports.castVote = castVote;
exports.resetVote = resetVote;
var CREATE_ROOM = exports.CREATE_ROOM = 'CREATE_ROOM';
var JOIN_ROOM = exports.JOIN_ROOM = 'JOIN_ROOM';
var LEAVE_ROOM = exports.LEAVE_ROOM = 'LEAVE_ROOM';
var CAST_VOTE = exports.CAST_VOTE = 'CAST_VOTE';
var RESET_VOTE = exports.RESET_VOTE = 'RESET_VOTE';

function createRoom(roomId, user) {
  return {
    type: CREATE_ROOM,
    roomId: roomId,
    user: user
  };
}

function joinRoom(roomId, user) {
  return {
    type: JOIN_ROOM,
    roomId: roomId,
    user: user
  };
}

function leaveRoom(roomId, userId) {
  return {
    type: LEAVE_ROOM,
    roomId: roomId,
    userId: userId
  };
}

function castVote(userId, roomId, vote) {
  return {
    type: CAST_VOTE,
    userId: userId,
    roomId: roomId,
    vote: vote
  };
}

function resetVote(roomId) {
  return {
    type: RESET_VOTE,
    roomId: roomId
  };
}
//# sourceMappingURL=action_creators.js.map