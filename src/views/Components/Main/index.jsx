import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import './Main.scss';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab: 'About'
    };
    this.handleTab = this.handleTab.bind(this);
  }
  NavBar = () => {
    const { activeTab } = this.state;
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
              <button type="button" className={activeTab === 'About'? '':'inactive'} name="About" onClick={this.handleTab}> About</button>
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
                onClick={this.handleTab}>
                Resume
              </button>
            </li>
            <hr />
            <li>
              <i className="menu-icon material-icons">
                email
              </i>
              <button type="button" className={activeTab === 'Contact'? '':'inactive'} name="Contact" onClick={this.handleTab}> Contact</button>
            </li>
            <hr />
          </ul>
        </div>
      </span>
    );
  };

  About = () => {
    const { activeTab } = this.state;
    const className = activeTab  === 'About'?'visible':'not-visible';
    return (
      <span className={`card about ${className}`}>
        <div>
          <h2 className="title"> KEVIN KIBITOK KOECH</h2>
        </div>
        <span className="picture">
          <img
            className="profile"
            src="https://lh6.googleusercontent.com/-gqegbA4lDbw/AAAAAAAAAAI/AAAAAAAAAAc/_ENwek7Tv4U/photo.jpg?sz=400"
            alt="profile"
          />
        </span>
        <span className="content">
          <h6 className="software-engineer">About me</h6>
          <p>I am Kevin Kibitok Koech, a software engineer, Mathematician, problem solver and a team player.</p>
          <p>
            I am a mid level web developer majoring in Javascript with Postgres, React, Express.js,
            Node.js(PREN) as my primary stack. I also have some experience with Python as I have used Flask micro-framework
            and Django to develop REST APIs.
          </p>
          <p>
            I am a football fan who follows English football and European continental football supporting Arsenal Football Club.
          </p>
          <ul>
            <li>
              <SocialIcon url="https://twitter.com/KeviKoech?ref_src=twsrc%5Etfw" />
            </li>
            <li>
              <SocialIcon url="https://www.facebook.com/kevinkibitokkoech" />
            </li>
            <li>
              <SocialIcon url="https://www.linkedin.com/in/kevin-koech-47b272116/" />
            </li>
          </ul>
        </span>
      </span>
    );
  };

  Contacts = () => {
    const { activeTab } = this.state;
    const className = activeTab  === 'Contacts'?'visible':'not-visible';
    return (
      <div className={className}>
        This is Contacts
      </div>
    );
  };
  Resume = () => {
    const { activeTab } = this.state;
    const className = activeTab  === 'Resume'?'visible':'not-visible';
    return (
      <div className={className}>
        This is Resume
      </div>
    );
  };
  handleTab(e) {
    this.setState({activeTab:e.target.name});
  }
  render() {
    return (
      <div className="body">
        {this.NavBar()}
        {/*{this.Home()}*/}
        {/*{this.Contacts()}*/}
        {/*{this.Resume()}*/}
        {this.About()}
      </div>
    );
  }
}
export default Main;
