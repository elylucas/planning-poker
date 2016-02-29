import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router'
import {Provider} from 'react-redux';
//import reducer from './reducers';


import createHashHistory from 'history/lib/createHashHistory'
import configureSocket from './configureSocket';
import configureStore from './configureStore';

import ga from 'react-ga';


import bootstrap from './theme/bootstrap.theme.css';
import appCss from './css/app.scss';

import App from   './app';
import Landing from './components/landing/index.jsx';
import Room from './components/room/index.jsx';
import RoomUX from './components/ux/roomux.jsx';


const history = createHashHistory();

ga.initialize('UA-72486368-1');

ga.pageview('/');

// ga.event({
//   category: 'Loading',
//   action: 'JoinRoom',
//   value: 1234
// });

const socket = configureSocket((cb)=> {
  store.dispatch(cb);
}, history);
const store = configureStore(socket);

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" store={store} component={App}>
        <IndexRoute component={Landing} />
        <Route path="room/:roomId" component={Room} />
        <Route path="ux/room" component={RoomUX} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'))
