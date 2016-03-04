'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rooms;

var _rooms = require('./rooms');

var _state = require('./state');

var _immutable = require('immutable');

var _redux = require('redux');

function rooms() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? (0, _immutable.List)() : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'CREATE_ROOM':
      var newRooms = (0, _rooms.createRoom)(state, action.roomId, action.user);
      return newRooms;
    case 'JOIN_ROOM':
      var newRooms = (0, _rooms.joinRoom)(state, action.roomId, action.user);
      return newRooms;
    case 'LEAVE_ROOM':
      var newRooms = (0, _rooms.leaveRoom)(state, action.roomId, action.userId);
      return newRooms;
    case 'CAST_VOTE':
      var newRooms = (0, _rooms.castVote)(state, action.userId, action.roomId, action.vote);
      return newRooms;
    case 'RESET_VOTE':
      var newRooms = (0, _rooms.resetVote)(state, action.roomId);
      return newRooms;
    default:
      return state;
  }
}

var reducer = (0, _redux.combineReducers)({
  rooms: rooms
});

exports.default = reducer;
//# sourceMappingURL=reducer.js.map