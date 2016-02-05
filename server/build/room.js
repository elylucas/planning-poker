'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRoom = createRoom;

var _immutable = require('immutable');

function createRoom(state, roomId, user) {
  return state.get('rooms').push((0, _immutable.fromJS)({
    id: roomId,
    users: [user]
  }));
}
//# sourceMappingURL=room.js.map