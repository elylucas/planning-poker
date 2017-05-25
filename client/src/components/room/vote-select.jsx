import React from 'react';

class VoteSelect extends React.Component {
  render(){
    return(
      <div>
        <div>Vote:</div>
        <div className="vote-select">
          <div className="vote-box" onClick={() => {this.props.vote('0')}}>0</div>
          <div className="vote-box" onClick={() => {this.props.vote('1')}}>1</div>
          <div className="vote-box" onClick={() => {this.props.vote('2')}}>2</div>
          <div className="vote-box" onClick={() => {this.props.vote('3')}}>3</div>
          <div className="vote-box" onClick={() => {this.props.vote('5')}}>5</div>
          <div className="vote-box" onClick={() => {this.props.vote('8')}}>8</div>
          <div className="vote-box" onClick={() => {this.props.vote('13')}}>13</div>
          <div className="vote-box" onClick={() => {this.props.vote('21')}}>21</div>
          <div className="vote-box" onClick={() => {this.props.vote('40')}}>40</div>
          <div className="vote-box" onClick={() => {this.props.vote('∞')}}>∞</div>
          <div className="vote-box" onClick={() => {this.props.vote('N/A')}}>NA</div>
        </div>
      </div>
    )
  }
}

export default VoteSelect;
