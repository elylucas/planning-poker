import React from 'react';

const Landing = React.createClass({
  render(){

    let containerStyle = {
      display: 'flex',
      width: '400px',
      justifyContent: 'center',
      margin: '5em auto'
    }

    return(
      <div style={containerStyle}>
        <div>
          <h1>Welcome to agilePoker!</h1>
          <p>
            To start, either create a new room, or join an existing room by entering the room number.
          </p>
          <h3>Create New Room:</h3>
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
            </div>
            <button className="btn btn-primary">Create New Room</button>
          </form>
          <h3>Join Existing Room:</h3>
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Room Number</label>
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
            </div>
            <button className="btn btn-primary">Join Room</button>
          </form>
        </div>
      </div>
    )
  }
})

export default Landing;
