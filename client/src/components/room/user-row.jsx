import React from 'react';


class UserInfo extends React.Component {

  render(){

    const getStatusIcon = (vote) => {
      return(
          vote === '' ?
          <span className="glyphicon glyphicon-option-horizontal" /> :
          <span className="glyphicon glyphicon-ok" />
      );
    };

    return(
      <div className="user-row">
        <h4 className="">{this.props.user.name}</h4>
        <span className="vote-box">
          {this.props.voteComplete ?
            this.props.user.vote :
            getStatusIcon(this.props.user.vote)
          }
        </span>
      </div>
    )
  }
}

export default UserInfo;
