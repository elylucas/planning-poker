import React from 'react';
import Header from './components/header/header.jsx';
import StatusBar from './components/header/status-bar.jsx';
import { connect } from 'react-redux'
import bootstrap from './theme/bootstrap.theme.css';
import appCss from './css/app.scss';

var App = React.createClass({

  render(){
    return(
      <div>
        <Header />
        <StatusBar connectionStatus={this.props.connectionStatus}/>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
});

function select(state) {
  return {
    connectionStatus: state.get('connectionStatus')
  }
}

export default connect(select)(App);
