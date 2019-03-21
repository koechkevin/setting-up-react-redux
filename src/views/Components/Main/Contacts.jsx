import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {SocialLinks} from './About';
import './loader.scss';
import {MobileNavBar} from './NavBar';

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      name:'', phone:'', email:'', message:'', isLoading: false
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ isLoading:true });
    const { action } = this.props;
    const { name, phone, email, message } = this.state;
    action({ name, phone, email, message }, () => this.setState({ isLoading:false }));
    this.setState({
      name:'', phone:'', email:'', message:''
    });
  };
  onChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { activeTab, handleTab } = this.props;
    const { name, phone, email, message, isLoading } = this.state;
    const isDisabled = (!name.trim() || !((phone).toString().trim().length>9) || !email.trim() || !message.trim())
      ?'disabled':'';
    const className = activeTab === 'Contacts' ? 'visible' : 'not-visible';
    return (
      <div className={`card contacts ${className}`}>
        <MobileNavBar handleTab={handleTab} activeTab={activeTab} />
        <span className={`trip-${isLoading?'loading':'not-loading'}`}><div id="trip-loader" /></span>
        <div className="add-margin">
          <div>
            <h2 className="title">Get in Touch</h2>
          </div>
          <div className="contacts-content">
            <span className="contact">
              <h6 className="contact-head">Contacts</h6>
              <div>
                <i className="material-icons menu-icon">
                  location_on
                </i>
                <span className="phone-number">Nairobi, Kenya</span>
                <br />
                <i className="material-icons menu-icon">
                  email
                </i>
                <span className="referee-name">kevin.koech@andela.com</span>
                <br />
                <i className="material-icons menu-icon">
                  local_phone
                </i>
                <span className="phone-number">+254 726 226 149</span>
              </div>
              <h6 className="subheader">Private Contacts</h6>
              <div>
                <i className="material-icons menu-icon">
                  location_on
                </i>
                <span className="phone-number">Nandi, Kenya</span>
                <br />
                <i className="material-icons menu-icon">
                  email
                </i>
                <span className="referee-name">koechkevin92@gmail.com</span>
                <br />
                <i className="material-icons menu-icon">
                  local_phone
                </i>
                <span className="private-number">
                  {'+'}
                3 × 7 × 1.1 × 7.9 × 3.613 × 3.863 × 10^8 × X
                  <br />
                  where X = cot θ and  θ = (3^2 × 5)°
                </span>
              </div>
            </span>
            <span className="google-form">
              <h6 className="contact-head">Drop a message</h6>
              <form onSubmit={this.handleSubmit}>
                <input
                  className="field"
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={this.onChange}
                  value={name}
                />
                <input
                  className="field"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={this.onChange}
                  value={email}
                />
                <input
                  className="field"
                  type="number"
                  name="phone"
                  placeholder="Phone number"
                  onChange={this.onChange}
                  value={phone}
                />
                <textarea placeholder="Message" name="message" onChange={this.onChange} value={message} />
                {isDisabled?'':<input type="submit" className={`btn right ${isDisabled}`} />}
              </form>
              <br />
              <SocialLinks />
            </span>
          </div>
        </div>
      </div>
    );
  }
}
Contacts.propTypes = {
  activeTab: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  handleTab: PropTypes.func.isRequired,
};
export default Contacts;
