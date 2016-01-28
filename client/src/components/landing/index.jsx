import React from 'react';
import { Link } from 'react-router'
var VelocityComponent = require('velocity-react/velocity-component');
require('velocity-animate/velocity.ui');

const Landing = React.createClass({

  getInitialState(){
    return {
      showCreateRoom: false
    }
  },

  showRoom(){
    this.setState({
      showCreateRoom: !this.state.showCreateRoom
    })
  },

  handleCreateRoomClick(e) {
    let name = this.refs.name.value;
    this.props.createRoom(name);
  },

  render(){
    let animation = 'fade' + (this.state.showCreateRoom  ? 'In' : 'Out');
    let buttonAnimation = 'fade' + (this.state.showCreateRoom  ? 'Out' : 'In');

    let animationProps;
    if (this.state.showCreateRoom) {
      animationProps = {
        duration: 200,
        animation: 'slideDown'
      };
    } else {
      animationProps = {
        duration: 200, // longer due to swinging
        animation: 'slideUp'
      };
    }

    let containerStyle = {
      display: 'flex',
      width: '400px',
      justifyContent: 'center',
      margin: '5em auto'
    }

    let buttonStyle = {
      margin: '10px'
    }

    let actionStyle = {
      position: 'relative',
      top: 0,
      left: 0
    };

    var enterAnimation = {
            animation: this.state.showCreateRoom ? 'fadeIn' : 'fadeOut',//{opacity: 1},
            duration: 800,
            //delay: 500
        };

    return(
      <div style={containerStyle}>
        <div>
          <h1>Welcome to agilePoker!</h1>
          <p>
            To start, either create a new room, or join an existing room by entering the room number.
          </p>
          <Link to="/room">Room</Link>
          <VelocityComponent {...animationProps}>
            <div style={actionStyle}>
              <h4>Create New Room:</h4>

                <div className="form-group">
                  <label for="exampleInputEmail1">Name</label>
                  <input type="text" className="form-control" ref="name" placeholder="Name" />
                </div>
                <button className="btn btn-primary" onClick={this.handleCreateRoomClick}>Create New Room</button>
                <button className="btn btn-primary" onClick={this.showRoom}>Cancel</button>

            </div>
          </VelocityComponent>

          <VelocityComponent animation={buttonAnimation} delay={0}>
            <div style={actionStyle}>
              <button style={buttonStyle} className="btn btn-block btn-primary" onClick={this.showRoom}>Create New Room</button>
              <button style={buttonStyle} className="btn btn-block btn-primary">Join Existing Room</button>
            </div>
          </VelocityComponent>
        </div>
      </div>
    )
  }
})

export default Landing;
// <h3>Create New Room:</h3>
// <form>
//   <div className="form-group">
//     <label for="exampleInputEmail1">Name</label>
//     <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
//   </div>
//   <button className="btn btn-primary">Create New Room</button>
// </form>
// <h3>Join Existing Room:</h3>
// <form>
//   <div className="form-group">
//     <label for="exampleInputEmail1">Name</label>
//     <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
//   </div>
//   <div className="form-group">
//     <label for="exampleInputEmail1">Room Number</label>
//     <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
//   </div>
//   <button className="btn btn-primary">Join Room</button>
// </form>
