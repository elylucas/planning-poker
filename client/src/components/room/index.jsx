import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';

class Room extends Component{

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <div>Room {this.props.room.id}</div>
        <ul>
          {_.map(this.props.room.users, (user) => <li>{user.name}</li>)}
        </ul>
      </div>
    )
  }
}

function select(state) {
  return {
    room: state.get('room')
  }
}

export default connect(select)(Room);
