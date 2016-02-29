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

  castVote(vote) {
    this.props.castVote(vote, this.props.room.id);
  }

  render(){
    return(
      <div className="row">
        <div className="col-sm-6">
          {this.props.voteCast ?
          <VoteSubmitted voteCast={this.props.voteCast} onChangeVote={()=>{this.castVote('')}} voteComplete={this.props.voteComplete} />
          :
          <VoteSelect vote={this.castVote.bind(this)} />
          }
        </div>
        <div className="col-sm-6">
          <UserList room={this.props.room} voteComplete={this.props.voteComplete} />
        </div>
      </div>
    )
  }
}

function select(state) {
  return {
    room: state.get('room'),
    voteCast: state.get('voteCast'),
    voteComplete: state.get('voteComplete')
  }
}

export default connect(select, actionCreators)(Room);
