import React, { Component } from 'react';
import './Main.scss';
import NavBar from './NavBar';
import About from './About';
import Contacts from './Contacts';
import Resume from './Resume';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab: 'About'
    };
    this.handleTab = this.handleTab.bind(this);
  }
  handleTab(e) {
    this.setState({activeTab:e.target.name});
  }
  render() {
    const { activeTab } = this.state;
    return (
      <div className="body">
        <NavBar activeTab={activeTab} handleTab={this.handleTab} />
        <About activeTab={activeTab} />
        <Contacts activeTab={activeTab} />
        <Resume activeTab={activeTab} />
      </div>
    );
  }
}
export default Main;
