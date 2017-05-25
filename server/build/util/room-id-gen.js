'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function roomIdGen() {
  var roomId = '';
  roomId += Math.floor(Math.random() * 10);
  roomId += Math.floor(Math.random() * 10);
  roomId += Math.floor(Math.random() * 10);
  roomId += Math.floor(Math.random() * 10);
  return roomId;
}

exports.default = roomIdGen;
//# sourceMappingURL=room-id-gen.js.map