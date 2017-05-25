import io from 'socket.io-client';
import {createRoom, roomCreated, roomUpdated, voteReset, joinRoom, setConnectionStatus} from './action_creators';

export default function configureSocket(session, history, dispatch){
  var socket = io('http://localhost:8090');

  socket.on('connect', () =>{
    dispatch(setConnectionStatus('connected'));
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

  socket.on('reconnecting', (number)=>{
    dispatch(setConnectionStatus('reconnecting'));
    console.log('reconnecting: ' + number);
  });

  socket.on('reconnect_failed', ()=>{
    dispatch(setConnectionStatus('failed'));
    console.log('could not reconnect');
  });

  socket.on('reconnect', ()=>{
    dispatch(setConnectionStatus('connected'));
    if(session.username && session.userId){
      let roomId = sessionStorage.getItem(`ap-${session.userId}-roomId`);
      dispatch(joinRoom(session.username, roomId));
    }
    console.log('reconnected');
  });

  return socket;
}
