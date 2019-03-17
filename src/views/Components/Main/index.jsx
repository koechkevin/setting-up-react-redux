import React, { Component } from 'react';
import { Button } from 'react-materialize';
import './navBar.scss';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab: 'Home'
    };
    this.handleTab = this.handleTab.bind(this);
  }
  NavBar = () => {
    const { activeTab } = this.state;
    return (
      <nav>
        <div className="card nav-wrapper">
          <img src="https://res.cloudinary.com/dbk8ky24f/image/upload/v1552403622/n7rll2yyntjnvhaciyn1.ico" alt="logo" />
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <Button
                className={activeTab === 'Home'?'active':''}
                onClick={this.handleTab}
                name="Home"
              >
                Home
              </Button>
            </li>
            <li>
              <Button
                className={activeTab === 'About'?'active':''}
                onClick={this.handleTab}
                name="About"
              >
                About
              </Button>
            </li>
            <li>
              <Button
                className={activeTab === 'Contacts'?'active':''}
                onClick={this.handleTab}
                name="Contacts"
              >
                Contacts
              </Button>
            </li>
            <li>
              <Button
                className={activeTab === 'Resume'?'active':''}
                onClick={this.handleTab}
                name="Resume"
              >
                Resume
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    );
  };

  Home = () => {
    const { activeTab } = this.state;
    const className = activeTab  === 'Home'?'visible':'not-visible';
    return (
      <div className={className}>
        this is Home
      </div>
    );
  };
  About = () => {
    const { activeTab } = this.state;
    const className = activeTab  === 'About'?'visible':'not-visible';
    return (
      <div className={className}>
        this is About
      </div>
    );
  };

  Contacts = () => {
    const { activeTab } = this.state;
    const className = activeTab  === 'Contacts'?'visible':'not-visible';
    return (
      <div className={className}>
        this is Contacts
      </div>
    );
  };
  Resume = () => {
    const { activeTab } = this.state;
    const className = activeTab  === 'Resume'?'visible':'not-visible';
    return (
      <div className={className}>
        this is Resume
      </div>
    );
  };
  handleTab(e) {
    this.setState({activeTab:e.target.name});
  }
  render() {
    return (
      <div>
        {this.NavBar()}
        {this.Home()}
        {this.Contacts()}
        {this.Resume()}
        {this.About()}
      </div>
    );
  }
}
export default Main;
