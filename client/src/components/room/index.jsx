import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';
import UserList from './user-list.jsx';
import VoteSelect from './vote-select.jsx';
import VoteSubmitted from './vote-submitted.jsx';
import * as actionCreators from '../../action_creators';

class Room extends Component{

  constructor(props) {
    super(props);
  }

  componentWillMount(){
    console.log('cwm');
    if(!this.props.room && (this.props.username && this.props.params.roomId)) {
        this.props.joinRoom(this.props.username, this.props.params.roomId);
    }
    console.log(this.props.room);
    console.log(this.props);
  }

  castVote(vote) {
    this.props.castVote(vote, this.props.room.id);
  }

  render(){
    return(
      this.props.room ?
        <div className="row">
          <div className="col-sm-6">
            {this.props.voteCast ?
              <VoteSubmitted
                voteCast={this.props.voteCast}
                onChangeVote={()=>{this.castVote('')}}
                onResetVote={()=>{this.props.resetVote(this.props.room.id)}}
                voteComplete={this.props.voteComplete} />
              :
              <VoteSelect vote={this.castVote.bind(this)} />
            }
          </div>
          <div className="col-sm-6">
            <UserList room={this.props.room} voteComplete={this.props.voteComplete} />
          </div>
        </div>
        :
        <div>Creating room</div>
    )
  }
}

function select(state) {
  if(state){
    return {
      room: state.get('room'),
      voteCast: state.get('voteCast'),
      voteComplete: state.get('voteComplete'),
      username: state.get('username')
    }
  } else {
    return {}
  }
}

export default connect(select, actionCreators)(Room);
