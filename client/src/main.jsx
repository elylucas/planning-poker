import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import {createRoom} from './action_creators';
import remoteActionMiddleware from './remote_action_middleware';

import ga from 'react-ga';
import Landing from './components/landing/index.jsx';
import Room from './components/room/index.jsx';
import bootstrap from './theme/bootstrap.theme.css';
//import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import appCss from './css/app.scss';
import io from 'socket.io-client';

import Header from './components/header/header.jsx';



ga.initialize('UA-72486368-1');

ga.pageview('/');

// ga.event({
//   category: 'Loading',
//   action: 'JoinRoom',
//   value: 1234
// });

var socket = io.connect('http://localhost:8090');
socket.on('state', function (data) {
  console.log(data);
  //socket.emit('my other event', { my: 'data' });
});

const createStoreWithMiddleware = applyMiddleware(remoteActionMiddleware)(createStore);
const store = createStoreWithMiddleware(reducer);

var App = React.createClass({
  render(){
    return(
      <div>
        <Header />
        <div className="container">
          <Landing createRoom={(name)=> { console.log('create room: ' + name)}} />
        </div>
      </div>
    )
  }
});

const routes = <Route><Route path="/" component={App} />
               <Route path="/room" component={Room} /></Route>

ReactDOM.render((
  <Provider store={store}>
    <Router>
    {routes}
    </Router>
  </Provider>
), document.getElementById('app'))
