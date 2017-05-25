import {expect} from 'chai';
import roomIdGen from '../room-id-gen';

describe('room-id-gen', function(){

  it('should return back a room id with a length of 4 characters', ()=>{
    var roomId = roomIdGen();
    expect(roomId).to.have.length(4);
  });

});
