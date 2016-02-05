import React from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as actionCreators from '../../action_creators';

var VelocityComponent = require('velocity-react/velocity-component');
require('velocity-animate/velocity.ui');

const Landing = React.createClass({

  getInitialState(){
    return {
      showCreateRoom: false,
      showJoinRoom: false,
    }
  },

  showCreateRoom(){
    this.setState({
      showCreateRoom: !this.state.showCreateRoom,
      showJoinRoom: false
    })
  },

  showJoinRoom(){
    this.setState({
      showJoinRoom: !this.state.showJoinRoom,
      showCreateRoom: false
    })
  },

  handleCreateRoomClick(e) {
    let name = this.refs.name.value;
    this.props.createRoom(name);
  },

  render(){

    let containerStyle = {
      display: 'flex',
      width: '400px',
      justifyContent: 'center',
      margin: '5em auto'
    }

    let buttonStyle = {
      margin: '10px'
    }

    return(
      <div style={containerStyle}>
        <div>
          <h1>Welcome to agilePoker!</h1>
          <div>
            To start, either create a new room, or join an existing room by entering the room number.
          </div>

          <VelocityComponent animation={this.state.showCreateRoom ? 'slideDown' : 'slideUp'} duration={150}>
            <div>
              <h4>Create New Room:</h4>

                <div className="form-group">
                  <label for="exampleInputEmail1">Name</label>
                  <input type="text" className="form-control" ref="name" placeholder="Name" />
                </div>
                <button className="btn btn-primary" onClick={this.handleCreateRoomClick}>Create Room</button>
                <button className="btn btn-primary" onClick={this.showCreateRoom}>Cancel</button>

            </div>
          </VelocityComponent>

          <VelocityComponent animation={this.state.showJoinRoom ? 'slideDown' : 'slideUp'} duration={150}>
            <div>
              <h4>Join Existing Room:</h4>

                <div className="form-group">
                  <label for="exampleInputEmail1">Name</label>
                  <input type="text" className="form-control" ref="name" placeholder="Name" />
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Room Id</label>
                  <input type="text" className="form-control" ref="roomid" placeholder="Name" />
                </div>
                <button className="btn btn-primary" onClick={this.handleJoinRoom}>Join Room</button>
                <button className="btn btn-primary" onClick={this.showJoinRoom}>Cancel</button>

            </div>
          </VelocityComponent>

          <VelocityComponent animation={this.state.showCreateRoom || this.state.showJoinRoom ? 'fadeOut' : 'fadeIn'} duration={300}>
            <div>
              <button style={buttonStyle} className="btn btn-block btn-primary" onClick={this.showCreateRoom}>Create New Room</button>
              <button style={buttonStyle} className="btn btn-block btn-primary" onClick={this.showJoinRoom}>Join Existing Room</button>
            </div>
          </VelocityComponent>
        </div>
      </div>
    )
  }
});

function select(state) {
  return {

  }
}

export default connect(select, actionCreators)(Landing);
