import React from 'react';
import PropTypes from 'prop-types';
import {SocialLinks} from './About';

const Contacts = ({ activeTab }) => {
  const className = activeTab  === 'Contacts'?'visible':'not-visible';
  return (
    <div className={`card contacts ${className}`}>
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
            <form>
              <input className="field" type="text" placeholder="Name" />
              <input className="field" type="email" placeholder="Email" />
              <input className="field" type="number" placeholder="Phone number" />
              <textarea placeholder="Message" />
              <input type="submit" className="btn right" />
            </form>
            <br />
            <SocialLinks />
          </span>
        </div>
      </div>
    </div>
  );
};
Contacts.propTypes = {
  activeTab: PropTypes.string.isRequired
};
export default Contacts;
