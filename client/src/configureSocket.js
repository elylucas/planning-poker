import io from 'socket.io-client';
import {createRoom, roomCreated, roomUpdated, voteReset} from './action_creators';

export default function configureSocket(session, history, dispatch){
  var socket = io('http://localhost:8090');

  socket.on('connect', () =>{
    console.log('connected')
    socket.emit('hello', session.userId);
  });

  socket.on('roomCreated', function (data) {
    console.log('roomCreated: ' + data);
  });

  socket.on('joinedRoom', (room)=>{
    dispatch(roomCreated(room));
    history.pushState(null, 'room/' + room.id);
  });

  socket.on('roomUpdated', (room) => {
    dispatch(roomUpdated(room));
  });

  socket.on('voteReset', (room) => {
    dispatch(voteReset());
    dispatch(roomUpdated(room));
  });

  return socket;
}
