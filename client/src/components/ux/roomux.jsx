import React, { Component } from 'react';
import UserList from '../room/user-list.jsx';
import UserInfo from '../room/user-info.jsx';
import VoteSelect from '../room/vote-select.jsx';
import _ from 'lodash';

let room = {
  id: '1234',
  users: [
    {
        "id": "",
        "name": "Ely Lucas",
        "vote": "8",
        "isSpectator": false,
        "isAFK": false
      },
      {
        "id": "2",
        "name": "Sir Comfy Pants",
        "vote": null,
        "isSpectator": false,
        "isAFK": false
      },
      {
          "id": "3",
          "name": "The best damn rapper alive",
          "vote": "13",
          "isSpectator": false,
          "isAFK": false
      },
      {
          "id": "4",
          "name": "God",
          "vote": null,
          "isSpectator": false,
          "isAFK": false
        }

  ]
}

class RoomUX extends Component{

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="row">
        <div className="col-sm-6">
          <UserInfo name="Ely Lucas" />
          <VoteSelect />
        </div>
        <div className="col-sm-6">
          <UserList room={room} voteComplete={true} />
        </div>

      </div>
    )
  }
}

export default RoomUX;
