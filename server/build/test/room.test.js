'use strict';

var _chai = require('chai');

var _rooms = require('../rooms');

var _immutable = require('immutable');

describe('Room', function () {

  describe('createRoom', function () {

    // it('should add a room with roomId and user to state when called', ()=>{
    //   const roomId = '1234';
    //   const user = {
    //     id: '1234',
    //     name: 'Joe',
    //     vote: null,
    //     isSpectator: false,
    //     isAfk: false
    //   };
    //   const initialState = Map();
    //
    //   let newState = createRoom(initialState, roomId, user);
    //   var expected = {}
    //   expected[roomId] = {
    //     users[
    //
    //     ]
    //   }
    //   expect(newState).to.equal(fromJS({
    //     roomId: roomId,
    //     users: [
    //       user
    //     ]
    //   }));
    // });

    // it('should add room to state that already has rooms', ()=>{
    //   var state = List.of(Map({
    //     roomId: 1234,
    //     users: []
    //   }));
    //   const user = {
    //     name: 'Joe',
    //     sessionId: 'abc1234',
    //     vote: null,
    //     isSpectator: false,
    //     isAfk: false
    //   };
    //   let newState = createRoom(state, '5678', user);
    //
    //   expect(newState.size).to.equal(2);
    // });

    // it('should join user to room when new user joins', ()=>{
    //   const user = {
    //     name: 'Joe',
    //     sessionId: 'abc1234',
    //     vote: null,
    //     isSpectator: false,
    //     isAfk: false
    //   };
    //   var state = List.of(Map({
    //     roomId: 1234,
    //     users: [ user ]
    //   }));
    //
    //   const newUser = {
    //     name: 'Matt',
    //     sessionId: 'abc5678',
    //     vote: null,
    //     isSpectator: false,
    //     isAfk: false
    //   };
    //
    //   let newState = joinRoom(state, '5678', newUser);
    //
    //   expect(newState.)
    // })

  });
});
//# sourceMappingURL=room.test.js.map