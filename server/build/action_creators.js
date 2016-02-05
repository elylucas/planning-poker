'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRoom = createRoom;
var CREATE_ROOM = exports.CREATE_ROOM = 'CREATE_ROOM';

function createRoom(roomId, user) {
  return {
    type: CREATE_ROOM,
    roomId: roomId,
    user: user
  };
}
//# sourceMappingURL=action_creators.js.map