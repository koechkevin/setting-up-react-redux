import React, { Component } from 'react';

class Test extends Component {
  render(){
    return (
      <div className="body">
        <div className="div-main">
          <div className="card before" />
          <div className="card test">
            <input type="text" placeholder="Search Google or type a URL" />
            <button type="button">
              <i className="material-icons">
                keyboard_voice
              </i>
            </button>
          </div>
          <div className="card after" />
        </div>
      </div>
    );
  }
}
export default Test;
