'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRoom = createRoom;
exports.joinRoom = joinRoom;
exports.castVote = castVote;

var _immutable = require('immutable');

function createRoom(rooms, roomId, user) {
  var newRooms = rooms.push((0, _immutable.fromJS)({
    id: roomId,
    users: [user]
  }));
  return newRooms;
}

function joinRoom(rooms, roomId, user) {
  var room = rooms.find(function (room) {
    return room.get('id') === roomId;
  });
  var roomIndex = rooms.indexOf(room);
  var newUsers = room.get('users').push((0, _immutable.Map)(user));
  var newRoom = room.set('users', newUsers);
  var newRooms = rooms.set(roomIndex, newRoom);
  return newRooms;
}

function castVote(rooms, userId, roomId, vote) {
  var room = rooms.find(function (room) {
    return room.get('id') === roomId;
  });
  var roomIndex = rooms.indexOf(room);
  var users = room.get('users');
  var user = users.find(function (u) {
    return u.get('id') === userId;
  });
  var userIndex = users.indexOf(user);
  var newUser = user.set('vote', vote);
  var newUsers = users.set(userIndex, newUser);
  var newRoom = room.set('users', newUsers);
  var newRooms = rooms.set(roomIndex, newRoom);
  return newRooms;
}
//# sourceMappingURL=rooms.js.map