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
    socket.on('createRoom', function (name) {
      var roomId = (0, _roomIdGen2.default)();
      console.log(name + ' - ' + roomId);
      store.dispatch((0, _action_creators.createRoom)(roomId, { 'name': name, isSpectator: false, isAFK: false, vote: '' }));
      socket.join('room-' + roomId);
      console.log(store.getState());
      var room = store.getState().get('rooms').find(function (room) {
        return room.id === roomId;
      });
      console.log(store.getState());
      socket.emit('joinedRoom', room);
    });
  });
}
//# sourceMappingURL=server.js.map