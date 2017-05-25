import React from 'react';

let Header = React.createClass({
  render(){
    return(
      <div>
        <nav className="navbar navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#"><span style={{color: '#fff'}}>agile</span><span style={{color: 'rgb(255, 145, 0)'}}>Poker</span></a>
            </div>
          </div>
        </nav>
      </div>  
    )
  }
});

export default Header;
