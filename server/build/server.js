'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startServer;

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

var _action_creators = require('./action_creators');

var _roomIdGen = require('./util/room-id-gen');

var _roomIdGen2 = _interopRequireDefault(_roomIdGen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function startServer(store) {
  var io = new _socket2.default().attach(8090);

  io.set('origins', 'http://localhost:8080');
  io.on('connection', function (socket) {

    socket.on('hello', function (userId) {
      socket['userId'] = userId;
      console.log('UserId ' + userId + ' connected');
    });

    socket.on('createRoom', function (name) {
      var roomId = (0, _roomIdGen2.default)();
      var userId = socket['userId'];
      console.log(name + ' - ' + roomId);
      store.dispatch((0, _action_creators.createRoom)(roomId, { id: userId, name: name, isSpectator: false, isAFK: false, vote: '' }));
      socket.join('room-' + roomId);
      socket['roomId'] = roomId;

      var room = store.getState().rooms.find(function (room) {
        return room.get('id') === roomId;
      });
      socket.emit('joinedRoom', room);
    });

    socket.on('joinRoom', function (name, roomId) {
      console.log(name, roomId);
      var userId = socket['userId'];
      store.dispatch((0, _action_creators.joinRoom)(roomId, { id: userId, name: name, isSpectator: false, isAFK: false, vote: '' }));

      var room = store.getState().rooms.find(function (room) {
        return room.get('id') === roomId;
      });
      io.to('room-' + roomId).emit('roomUpdated', room);

      socket['roomId'] = roomId;

      socket.join('room-' + roomId);
      socket.emit('joinedRoom', room);
    });

    socket.on('castVote', function (vote, roomId) {
      console.log('vote ' + vote);
      console.log('roomId ' + roomId);
      store.dispatch((0, _action_creators.castVote)(socket['userId'], roomId, vote));
      var room = store.getState().rooms.find(function (room) {
        return room.get('id') === roomId;
      });
      io.to('room-' + roomId).emit('roomUpdated', room);
    });

    socket.on('resetVote', function () {
      var roomId = socket['roomId'];
      console.log('reseting votes for roomid ' + roomId);
      store.dispatch((0, _action_creators.resetVote)(roomId));
      var room = store.getState().rooms.find(function (room) {
        return room.get('id') === roomId;
      });
      io.to('room-' + roomId).emit('voteReset', room);
    });

    socket.on('disconnect', function () {
      var roomId = socket['roomId'];
      if (!roomId) {
        return;
      }
      console.log('user ' + socket['userId'] + ' disconnecting from room ' + roomId);
      store.dispatch((0, _action_creators.leaveRoom)(socket['roomId'], socket['userId']));
      var room = store.getState().rooms.find(function (room) {
        return room.get('id') === roomId;
      });
      io.to('room-' + roomId).emit('roomUpdated', room);
    });
  });
}
//# sourceMappingURL=server.js.map