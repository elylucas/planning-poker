import React from 'react';
import ReactDOM from 'react-dom';
import ga from 'react-ga';
import Landing from './components/landing/index.jsx';
import bootstrap from './theme/bootstrap.theme.css';
import io from 'socket.io-client';



ga.initialize('UA-72486368-1');

ga.pageview('/');

ga.event({
  category: 'Loading',
  action: 'JoinRoom',
  value: 1234
});

var socket = io.connect('http://localhost:8090');
socket.on('news', function (data) {
  console.log(data);
  socket.emit('my other event', { my: 'data' });
});


ReactDOM.render(<Landing />, document.getElementById('app'));
