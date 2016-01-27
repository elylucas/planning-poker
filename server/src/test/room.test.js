import {expect} from 'chai';
import {createRoom} from '../room';
import {Map, List, fromJS} from 'immutable';

describe('Room', function(){

  describe('createRoom', () =>{

    it('should add a room with roomId and user to state when called', ()=>{
      const roomId = '1234';
      const user = {
        name: 'Joe',
        sessionId: 'abc1234',
        vote: null,
        isSpectator: false,
        isAfk: false
      };
      const initialState = List();

      let newState = createRoom(initialState, roomId, user);
      expect(newState).to.equal(fromJS([{
        roomId: roomId,
        users: [
          user
        ]
      }]));
    });

    it('should add room to state that already has rooms', ()=>{
      var state = List.of(Map({
        roomId: 1234,
        users: []
      }));
      const user = {
        name: 'Joe',
        sessionId: 'abc1234',
        vote: null,
        isSpectator: false,
        isAfk: false
      };
      let newState = createRoom(state, 'abc123', user);

      expect(newState.size).to.equal(2);
    });

  });

});
