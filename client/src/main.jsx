import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router'
import {Provider} from 'react-redux';
import createHashHistory from 'history/lib/createHashHistory'
import configureSession from './configureSession';
import configureSocket from './configureSocket';
import configureStore from './configureStore';

import ga from 'react-ga';

import App from   './app';
import Landing from './components/landing/index.jsx';
import Room from './components/room/index.jsx';
import RoomUX from './components/ux/roomux.jsx';

import { initState, setUsername } from './action_creators';


const history = createHashHistory();
//
// ga.initialize('UA-72486368-1');
//
// ga.pageview('/');

// ga.event({
//   category: 'Loading',
//   action: 'JoinRoom',
//   value: 1234
// });


//Todo: figure out a way to get around this circular dependency between socket and store
var session = configureSession();

const socket = configureSocket(session, history, (cb)=> {
  store.dispatch(cb);
});

session.socket = socket;

const store = configureStore(session);

store.dispatch(initState());

session.username && store.dispatch(setUsername(session.username));

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" store={store} component={App}>
        <IndexRoute component={Landing} />
        <Route path="room/:roomId" component={Room} />
        <Route path="roomux" component={RoomUX} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'))
