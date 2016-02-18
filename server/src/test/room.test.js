import {expect} from 'chai';
import {createRoom, joinRoom} from '../rooms';
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

});
