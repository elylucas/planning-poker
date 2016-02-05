'use strict';

var _chai = require('chai');

var _room = require('../room');

var _immutable = require('immutable');

describe('Room', function () {

  describe('createRoom', function () {

    it('should add a room with roomId and user to state when called', function () {
      var roomId = '1234';
      var user = {
        name: 'Joe',
        sessionId: 'abc1234',
        vote: null,
        isSpectator: false,
        isAfk: false
      };
      var initialState = (0, _immutable.List)();

      var newState = (0, _room.createRoom)(initialState, roomId, user);
      (0, _chai.expect)(newState).to.equal((0, _immutable.fromJS)([{
        roomId: roomId,
        users: [user]
      }]));
    });

    it('should add room to state that already has rooms', function () {
      var state = _immutable.List.of((0, _immutable.Map)({
        roomId: 1234,
        users: []
      }));
      var user = {
        name: 'Joe',
        sessionId: 'abc1234',
        vote: null,
        isSpectator: false,
        isAfk: false
      };
      var newState = (0, _room.createRoom)(state, 'abc123', user);

      (0, _chai.expect)(newState.size).to.equal(2);
    });
  });
});
//# sourceMappingURL=room.test.js.map