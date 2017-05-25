import React from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as actionCreators from '../../action_creators';
import jIf from '../../util/jsx-if';

var VelocityComponent = require('velocity-react/velocity-component');
require('velocity-animate/velocity.ui');

class Landing extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      showCreateRoom: false,
      showJoinRoom: false,
      username: props.username
    }
    this.showCreateRoom = this.showCreateRoom.bind(this);
    this.showJoinRoom = this.showJoinRoom.bind(this);
    this.handleCreateRoomClick = this.handleCreateRoomClick.bind(this);
    this.handleJoinRoomClick = this.handleJoinRoomClick.bind(this);
  }

  // componentWillMount(){
  //   if(this.props.username){
  //     this.refs.createRoomName.value = this.props.username;
  //     this.refs.joinRoomName.value = this.props.username;
  //   }
  // }

  showCreateRoom(){
    this.setState({
      showCreateRoom: !this.state.showCreateRoom,
      showJoinRoom: false
    })
  }

  showJoinRoom(){
    this.setState({
      showJoinRoom: !this.state.showJoinRoom,
      showCreateRoom: false
    })
  }

  handleCreateRoomClick(e) {
    let name = this.refs.createRoomName.value;
    this.props.createRoom(name);
  }

  handleJoinRoomClick(e) {
    let name = this.refs.joinRoomName.value;
    let roomId = this.refs.roomId.value;
    this.props.joinRoom(name, roomId);
  }

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

    function getValue(val){
      console.log('in getValue ' + val);
      return val;
    }
    //
    // let component;
    // if(false){
    //   component = <div>{getValue('true')}</div>
    // } else {
    //   component = <div>{getValue('false')}</div>
    // }

    function test(val){
      console.log(val)
    }

    let user = {
      isAuthed: true
    };

    return(
      <div style={containerStyle}>
        <div>
          <h1>Welcome to agilePoker!</h1>
          <div>
            To start, either create a new room, or join an existing room by entering the room number.
          </div>

          <div>
          {
            (()=>{
              if(false) {
                <div>{test('truthy')}truthy</div>
              } else{
                <div>{test('falsey')}falsey</div>
              }
            })()
          }
          </div>

          {
            jIf(true, <div>{getValue('if')}</div>)
              .elsif(false, <div>{getValue('else if')}</div>)
              .els(<div>{getValue('else')}</div>)()
          }

          { user.isAuthed && <div>Welcome User!</div> }

          <VelocityComponent animation={this.state.showCreateRoom ? 'slideDown' : 'slideUp'} duration={150}>
            <div>
              <h4>Create New Room:</h4>

                <div className="form-group">
                  <label for="exampleInputEmail1">Name</label>
                  <input type="text" className="form-control" ref="createRoomName" defaultValue={this.state.username} placeholder="Name" />
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
                  <input type="text" className="form-control" ref="joinRoomName" defaultValue={this.state.username} placeholder="Name" />
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Room Id</label>
                  <input type="text" className="form-control" ref="roomId" placeholder="Room Id" />
                </div>
                <button className="btn btn-primary" onClick={this.handleJoinRoomClick}>Join Room</button>
                <button className="btn btn-primary" onClick={this.showJoinRoom}>Cancel</button>

            </div>
          </VelocityComponent>

          <VelocityComponent animation={this.state.showCreateRoom || this.state.showJoinRoom ? 'fadeOut' : 'fadeIn'} duration={400}>
            <div>
              <button style={buttonStyle} className="btn btn-block btn-primary" onClick={this.showCreateRoom}>Create New Room</button>
              <button style={buttonStyle} className="btn btn-block btn-primary" onClick={this.showJoinRoom}>Join Existing Room</button>
            </div>
          </VelocityComponent>
        </div>
      </div>
    )
  }
}

function select(state) {
  return {
    username: state.get('username')
  }
}

export default connect(select, actionCreators)(Landing);
