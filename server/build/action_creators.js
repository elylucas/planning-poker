'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRoom = createRoom;
exports.joinRoom = joinRoom;
exports.castVote = castVote;
var CREATE_ROOM = exports.CREATE_ROOM = 'CREATE_ROOM';
var JOIN_ROOM = exports.JOIN_ROOM = 'JOIN_ROOM';
var CAST_VOTE = exports.CAST_VOTE = 'CAST_VOTE';

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

function castVote(userId, roomId, vote) {
  return {
    type: CAST_VOTE,
    userId: userId,
    roomId: roomId,
    vote: vote
  };
}
//# sourceMappingURL=action_creators.js.map