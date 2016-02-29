'use strict';

var _chai = require('chai');

var _rooms = require('../rooms');

var _immutable = require('immutable');

describe('Room', function () {

  describe('createRoom', function () {

    it('should add a room with roomId and user to state when called', function () {
      var roomId = '1234';
      var user = {
        id: '4567',
        name: 'Joe',
        vote: null,
        isSpectator: false,
        isAfk: false
      };
      var initialState = (0, _immutable.List)();

      var newState = (0, _rooms.createRoom)(initialState, roomId, user);

      (0, _chai.expect)(newState).to.equal((0, _immutable.fromJS)([{
        id: '1234',
        users: [user]
      }]));
    });

    it('should add room to state that already has rooms', function () {
      var state = _immutable.List.of((0, _immutable.Map)({
        roomId: 1234,
        users: []
      }));
      var user = {
        id: '4567',
        name: 'Joe',
        vote: null,
        isSpectator: false,
        isAfk: false
      };
      var newState = (0, _rooms.createRoom)(state, '5678', user);

      (0, _chai.expect)(newState.size).to.equal(2);
    });
  });

  describe('joinRoom', function () {
    it('should join user to room when new user joins', function () {
      var user = {
        id: '4567',
        name: 'Joe',
        vote: null,
        isSpectator: false,
        isAfk: false
      };

      var state = (0, _immutable.fromJS)([{
        id: '1234',
        users: [user]
      }]);

      var newUser = {
        id: '6789',
        name: 'Matt',
        vote: null,
        isSpectator: false,
        isAfk: false
      };

      var newState = (0, _rooms.joinRoom)(state, '1234', newUser);

      (0, _chai.expect)(newState).to.equal((0, _immutable.fromJS)([{
        id: '1234',
        users: [user, newUser]
      }]));
    });
  });

  describe('castVote', function () {
    it('should update user with vote when vote cast', function () {
      var user = {
        id: '4567',
        name: 'Joe',
        vote: null,
        isSpectator: false,
        isAfk: false
      };

      var state = (0, _immutable.fromJS)([{
        id: '1234',
        users: [user]
      }]);

      var newState = (0, _rooms.castVote)(state, '4567', '1234', '8');
      (0, _chai.expect)(newState).to.equal((0, _immutable.fromJS)([{
        id: '1234',
        users: [Object.assign(user, { vote: '8' })]
      }]));
    });
  });
});
//# sourceMappingURL=room.test.js.map