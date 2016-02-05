'use strict';

var _chai = require('chai');

var _roomIdGen = require('../room-id-gen');

var _roomIdGen2 = _interopRequireDefault(_roomIdGen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('room-id-gen', function () {

  it('should return back a room id with a length of 4 characters', function () {
    var roomId = (0, _roomIdGen2.default)();
    (0, _chai.expect)(roomId).to.have.length(4);
  });
});
//# sourceMappingURL=room-id-gen.test.js.map