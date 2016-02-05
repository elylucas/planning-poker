import Server from 'socket.io';
import {createRoom} from './action_creators';
import roomIdGen from './util/room-id-gen';

export default function startServer(store){
  const io = new Server().attach(8090);

  io.set('origins', 'http://localhost:8080');
  io.on('connection', (socket) => {
    socket.on('createRoom', (name) => {
      let roomId = roomIdGen();
      console.log(name + ' - ' + roomId);
      store.dispatch(createRoom(roomId,
          {'name': name, isSpectator: false, isAFK: false, vote: ''}
      ));
      socket.join('room-' + roomId)
      var room = store.getState().get('rooms').find((room)=>{
        return room.get('id') === roomId;
      })
      socket.emit('joinedRoom', room);
    });
  });
}
