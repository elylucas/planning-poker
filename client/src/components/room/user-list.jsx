import React, { Component } from 'react';
import UserRow from './user-row.jsx';

class UserList extends Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){

  }

  componentWillReceiveProps(){

  }

  render(){
    const drawUserRow = (user) => (
      <li key={user.id} className="list-group-item">
        <UserRow user={user} voteComplete={this.props.voteComplete} />
      </li>
    );

    return(
      <div className="room-lobby">
        <div className="lobby-header">
          <div className="room-info">
            Room {this.props.room.id}
          </div>
          <div className="user-count">
            Users ({this.props.room.users.length} / 10)
          </div>
          <div>
            <div>
              {this.props.voteComplete ? 'Vote is complete' : 'Vote is in progress...'}
            </div>
          </div>
        </div>
        <ul className="list-group">
          {this.props.room.users.map(drawUserRow)}
        </ul>
      </div>
    )
  }

}

UserList.propTypes = {
  room: React.PropTypes.object.isRequired
};

export default UserList;
