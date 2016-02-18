'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRoom = createRoom;
exports.joinRoom = joinRoom;

var _immutable = require('immutable');

function createRoom(rooms, roomId, user) {
  var newRooms = rooms.push((0, _immutable.fromJS)({
    id: roomId,
    users: [user]
  }));
  return newRooms;
}

var initialRoomState = (0, _immutable.Map)((0, _immutable.fromJS)({
  users: (0, _immutable.Map)()
}));

function joinRoom(rooms, roomId, user) {
  //var newRooms = rooms.setIn([roomId, 'users', user.id], Map(user));
  var room = rooms.find(function (room) {
    return room.get('id') === roomId;
  });
  var roomIndex = rooms.indexOf(room);
  var newUsers = room.get('users').push((0, _immutable.Map)(user));
  var newRoom = room.set('users', newUsers);
  var newRooms = rooms.set(roomIndex, newRoom);
  return newRooms;
}
//# sourceMappingURL=rooms.js.map