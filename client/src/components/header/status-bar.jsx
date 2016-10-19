import React from 'react';
import statusBarCss from '../../css/status-bar.scss';

class StatusBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="status-bar">{this.props.connectionStatus}</div>
    )
  }

}

export default StatusBar;
