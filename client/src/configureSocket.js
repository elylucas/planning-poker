import io from 'socket.io-client';
import {createRoom, roomCreated, roomUpdated} from './action_creators';

export default function configureSocket(dispatch, history){
  var socket = io.connect('http://localhost:8090');
  socket.on('roomCreated', function (data) {
    console.log('roomCreated: ' + data);
  });

  socket.on('joinedRoom', (room)=>{
    dispatch(roomCreated(room));
    history.pushState(null, 'room/' + room.id);
  });

  socket.on('roomJoined', (room)=>{
    dispatch(roomCreated(room));
    history.pushState(null, 'room/' + room.id);
  });

  socket.on('roomUpdated', (room) => {
    dispatch(roomUpdated(room));
  })

  return socket;
}
