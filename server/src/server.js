import Server from 'socket.io';
import {createRoom, joinRoom} from './action_creators';
import roomIdGen from './util/room-id-gen';

export default function startServer(store){
  const io = new Server().attach(8090);

  io.set('origins', 'http://localhost:8080');
  io.on('connection', (socket) => {

    socket.on('createRoom', (name) => {
      let roomId = roomIdGen();
      let userId = roomIdGen();
      console.log(name + ' - ' + roomId);
      store.dispatch(createRoom(roomId,
          {id: userId, name: name, isSpectator: false, isAFK: false, vote: ''}
      ));
      socket.join('room-' + roomId)

      var room = store.getState().rooms.find(room => {
        return room.get('id') === roomId
      });
      socket.emit('joinedRoom', room);
    });

    socket.on('joinRoom', (name, roomId) =>{
      console.log(name, roomId)
      let userId = roomIdGen();
      store.dispatch(joinRoom(roomId,
        {id: userId, name: name, isSpectator: false, isAFK: false, vote: ''}
      ));
      
      var room = store.getState().rooms.find(room => room.get('id') === roomId);
      io.to('room-' + roomId).emit('roomUpdated', room)

      socket.join('room-' + roomId);
      socket.emit('joinedRoom', room);
    });

  });
}
