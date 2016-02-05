import React, { Component } from 'react';
import { connect } from 'react-redux'

class Room extends Component{

  constructor(props) {
    super(props);
  }



  render(){



    return(
      <div>
        <div>Room {this.props.room.id}</div>
        <ul>{this.props.room.users.map(user =>
                                    <li>{user.name}</li>)}</ul>
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
