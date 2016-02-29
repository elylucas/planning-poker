import React from 'react';

class VoteSubmitted extends React.Component {

  render() {
    return(
      <div>
        <p>Your vote of {this.props.voteCast} is submitted</p>
        {!this.props.voteComplete &&
          <button className="btn btn-primary" onClick={()=>{ this.props.onChangeVote()}}>Change Vote</button>
        }
        <button className="btn btn-primary" onClick={()=>{ this.props.onChangeVote()}}>Reset All Votes</button>
      </div>
    )
  }
}

VoteSubmitted.propTypes = {
  voteCast: React.PropTypes.string.isRequired
}

export default VoteSubmitted;
