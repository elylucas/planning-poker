import React, { Component } from 'react';

class UserInfo extends Component {

  render(){
    return(
      <h4>Welcome {this.props.name}</h4>
    )
  }

}

UserInfo.propTypes = {
  name: React.PropTypes.string.isRequired
};

export default UserInfo;
