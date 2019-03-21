import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Main.scss';
import './toast.scss';
import NavBar from './NavBar';
import About from './About';
import Contacts from './Contacts';
import Resume from './Resume';
import action from '../../../redux/actions';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab: 'About'
    };
    this.handleTab = this.handleTab.bind(this);
  }
  handleTab(e) {
    this.setState({activeTab:e.target.name||'About'});
  }
  render() {
    const { activeTab } = this.state;
    const { action } = this.props;
    return (
      <div className="body">
        <NavBar activeTab={activeTab} handleTab={this.handleTab} />
        <About activeTab={activeTab} handleTab={this.handleTab} />
        <Contacts activeTab={activeTab} action={action} handleTab={this.handleTab} />
        <Resume activeTab={activeTab} handleTab={this.handleTab} />
      </div>
    );
  }
}
Main.propTypes = {
  action: PropTypes.func.isRequired
};
export default connect(null, { action })(Main);
