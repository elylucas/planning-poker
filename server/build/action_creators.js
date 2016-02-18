'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRoom = createRoom;
exports.joinRoom = joinRoom;
var CREATE_ROOM = exports.CREATE_ROOM = 'CREATE_ROOM';
var JOIN_ROOM = exports.JOIN_ROOM = 'JOIN_ROOM';

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
//# sourceMappingURL=action_creators.js.map