import {expect} from 'chai';
import {createRoom, joinRoom, leaveRoom, castVote, resetVote} from '../rooms';
import {Map, List, fromJS} from 'immutable';

describe('Room', function(){

  describe('createRoom', () =>{

    it('should add a room with roomId and user to state when called', ()=>{
      const roomId = '1234';
      const user = {
        id: '4567',
        name: 'Joe',
        vote: null,
        isSpectator: false,
        isAfk: false
      };
      const initialState = List();

      let newState = createRoom(initialState, roomId, user);

      expect(newState).to.equal(fromJS(
        [
          {
            id: '1234',
            users: [
              user
            ]
          }
        ]
      ));

    });

    it('should add room to state that already has rooms', ()=>{
      var state = List.of(Map({
        roomId: 1234,
        users: []
      }));
      const user = {
        id: '4567',
        name: 'Joe',
        vote: null,
        isSpectator: false,
        isAfk: false
      };
      let newState = createRoom(state, '5678', user);

      expect(newState.size).to.equal(2);
    });

  });

  describe('joinRoom', () => {
    it('should join user to room when new user joins', ()=>{
      var user = {
        id: '4567',
        name: 'Joe',
        vote: null,
        isSpectator: false,
        isAfk: false
      };

      var state = fromJS(
        [
          {
            id: '1234',
            users: [user]
          }
        ]
      );

      const newUser = {
        id: '6789',
        name: 'Matt',
        vote: null,
        isSpectator: false,
        isAfk: false
      };

      let newState = joinRoom(state, '1234', newUser);

      expect(newState).to.equal(fromJS(
        [
          {
            id: '1234',
            users: [
              user, newUser
            ]
          }
        ]
      ));
    });

  });

  describe('castVote', () => {
    it('should update user with vote when vote cast', () => {
      var user = {
        id: '4567',
        name: 'Joe',
        vote: null,
        isSpectator: false,
        isAfk: false
      };

      var state = fromJS(
        [
          {
            id: '1234',
            users: [user]
          }
        ]
      );

      let newState = castVote(state, '4567', '1234', '8');
      expect(newState).to.equal(fromJS(
        [
          {
            id: '1234',
            users: [
              Object.assign(user, {vote: '8'})
            ]
          }
        ]
      ));
    })
  });

  describe('leaveRoom', ()=>{

    it('should remove the user from the room when a user leaves', ()=>{

      var user1 = {
        id: 'user123',
        name: 'Joe',
        vote: null,
        isSpectator: false,
        isAfk: false
      };

      var user2 = Object.assign(user1, {id: 'user456'});

      var state = fromJS(
        [
          {
            id: 'room123',
            users: [user1, user2]
          }
        ]
      );

      let newState = leaveRoom(state, 'room123', 'user123');

      expect(newState).to.equal(fromJS(
        [
          {
            id: 'room123',
            users: [
              user2
            ]
          }
        ]
      ));

    })

  });

  describe('resetVote', ()=>{

    it('should reset all the votes back to an empty string', ()=>{
      var user1 = {
        id: 'user123',
        name: 'Joe',
        vote: '8',
        isSpectator: false,
        isAfk: false
      };

      var user2 = Object.assign(user1, {id: 'user456', vote: '4'});
      var state = fromJS(
        [
          {
            id: 'room123',
            users: [user1, user2]
          }
        ]
      );

      let newState = resetVote(state, 'room123');

      expect(newState).to.equal(fromJS(
        [
          {
            id: 'room123',
            users: [
              Object.assign(user1, {vote: ''}),
              Object.assign(user2, {vote: ''})              
            ]
          }
        ]
      ));

    });

  })

});
