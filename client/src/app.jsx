import React from 'react';
import Header from './components/header/header.jsx';
import {createRoom, roomCreated} from './action_creators';
import bootstrap from './theme/bootstrap.theme.css';
import appCss from './css/app.scss';

var App = React.createClass({

  createRoom(name) {
    this.props.route.store.dispatch(createRoom(name));
  },

  render(){
    return(
      <div>
        <Header />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
});

export default App;
