import Server from 'socket.io';
import {createRoom, joinRoom, leaveRoom, castVote} from './action_creators';
import roomIdGen from './util/room-id-gen';

export default function startServer(store){
  const io = new Server().attach(8090);

  io.set('origins', 'http://localhost:8080');
  io.on('connection', (socket) => {

    socket.on('createRoom', (name) => {
      let roomId = roomIdGen();
      let userId = socket.id;
      console.log(name + ' - ' + roomId);
      store.dispatch(createRoom(roomId,
          {id: userId, name: name, isSpectator: false, isAFK: false, vote: ''}
      ));
      socket.join('room-' + roomId)
      socket['roomId'] = roomId;

      var room = store.getState().rooms.find(room => {
        return room.get('id') === roomId
      });
      socket.emit('joinedRoom', room);
    });

    socket.on('joinRoom', (name, roomId) =>{
      console.log(name, roomId)
      let userId = socket.id;
      store.dispatch(joinRoom(roomId,
        {id: userId, name: name, isSpectator: false, isAFK: false, vote: ''}
      ));

      var room = store.getState().rooms.find(room => room.get('id') === roomId);
      io.to('room-' + roomId).emit('roomUpdated', room)

      socket['roomId'] = roomId;

      socket.join('room-' + roomId);
      socket.emit('joinedRoom', room);
    });

    socket.on('castVote', (vote, roomId) => {
      console.log('vote ' + vote)
      console.log('roomId ' + roomId)
      store.dispatch(castVote(socket.id, roomId, vote));
      let room = store.getState().rooms.find(room => room.get('id') === roomId);
      io.to('room-' + roomId).emit('roomUpdated', room)
    })

    socket.on('disconnect', ()=>{
      var roomId = socket['roomId'];
      if(!roomId){ return; }
      console.log('user ' + socket.id + ' disconnecting from room ' + roomId);
      store.dispatch(leaveRoom(socket['roomId'], socket.id));
      var room = store.getState().rooms.find(room => room.get('id') === roomId);
      io.to('room-' + roomId).emit('roomUpdated', room)
    });

  });
}
