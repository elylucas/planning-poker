import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import {createRoom, roomCreated} from './action_creators';
import remoteActionMiddleware from './remote_action_middleware';
import createHashHistory from 'history/lib/createHashHistory'

import ga from 'react-ga';


import bootstrap from './theme/bootstrap.theme.css';
import appCss from './css/app.scss';
import io from 'socket.io-client';

import App from   './app';
import Landing from './components/landing/index.jsx';
import Room from './components/room/index.jsx';


const history = createHashHistory();

ga.initialize('UA-72486368-1');

ga.pageview('/');

// ga.event({
//   category: 'Loading',
//   action: 'JoinRoom',
//   value: 1234
// });

var socket = io.connect('http://localhost:8090');
socket.on('roomCreated', function (data) {
  console.log('roomCreated: ' + data);
});

socket.on('joinedRoom', (room)=>{
  store.dispatch(roomCreated(room));
  history.pushState(null, 'room/' + room.id);
})

const createStoreWithMiddleware = applyMiddleware(remoteActionMiddleware(socket))(createStore);
const store = createStoreWithMiddleware(reducer);

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" store={store} component={App}>
        <IndexRoute component={Landing} />
        <Route path="room/:roomId" component={Room} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'))
