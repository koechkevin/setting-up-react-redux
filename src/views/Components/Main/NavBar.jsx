import React from 'react';
import PropTypes from 'prop-types';

export const MobileNavBar = ({ activeTab, handleTab }) => {
  return (
    <div className="mobile">
      <div className="mobile-nav">
        <div id="my-links">
          <button type="button" onClick={handleTab}>
            <img
              className="prof"
              src="https://lh6.googleusercontent.com/-gqegbA4lDbw/AAAAAAAAAAI/AAAAAAAAAAc/_ENwek7Tv4U/photo.jpg?sz=25"
              alt="profile"
            />
          </button>
          <button type="button" className={activeTab === 'About'? 'mobile-active':''} name="About" onClick={handleTab}>About</button>
          <button type="button" className={activeTab === 'Resume'? 'mobile-active':''} name="Resume" onClick={handleTab}>Resume</button>
          <button type="button" className={activeTab === 'Contacts'? 'mobile-active':''} name="Contacts" onClick={handleTab}>Contact</button>
        </div>
      </div>
    </div>
  );
};

const NavBar = ({ activeTab, handleTab }) => {
  return (
    <span>
      <div className="card nav">
        <ul>
          <li>
            <img
              className="profile"
              src="https://lh6.googleusercontent.com/-gqegbA4lDbw/AAAAAAAAAAI/AAAAAAAAAAc/_ENwek7Tv4U/photo.jpg?sz=100"
              alt="profile"
            />
          </li>
          <hr />
          <li>
            <i className="menu-icon material-icons">
                account_circle
            </i>
            <button type="button" className={activeTab === 'About'? '':'inactive'} name="About" onClick={handleTab}> About</button>
          </li>
          <hr />
          <li>
            <i className="menu-icon material-icons">
                payment
            </i>
            <button
              type="button"
              className={activeTab === 'Resume'? '':'inactive'}
              name="Resume"
              onClick={handleTab}>
                Resume
            </button>
          </li>
          <hr />
          <li>
            <i className="menu-icon material-icons">
                email
            </i>
            <button type="button" className={activeTab === 'Contacts'? '':'inactive'} name="Contacts" onClick={handleTab}> Contact</button>
          </li>
          <hr />
        </ul>
      </div>
    </span>
  );
};
NavBar.propTypes = {
  activeTab: PropTypes.string.isRequired,
  handleTab: PropTypes.func.isRequired,
};
MobileNavBar.propTypes = {
  activeTab: PropTypes.string.isRequired,
  handleTab: PropTypes.func.isRequired,
};
export default NavBar;
