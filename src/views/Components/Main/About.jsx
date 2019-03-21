import {SocialIcon} from 'react-social-icons';
import React from 'react';
import PropTypes from 'prop-types';
import {MobileNavBar} from './NavBar';
import _ from '../../../images/whatsapp.svg';

export const SocialLinks = () => {
  return (
    <ul>
      <li className="popup" data-popuptext="whatsapp">
        <a href="https://wa.me/254726226149"><img className="image" src={_} alt="whatsapp" /></a>
      </li>
      <li className="popup" data-popuptext="twitter">
        <SocialIcon url="https://twitter.com/KeviKoech?ref_src=twsrc%5Etfw" />
      </li>
      <li className="popup" data-popuptext="facebook">
        <SocialIcon url="https://www.facebook.com/kevinkibitokkoech" />
      </li>
      <li className="popup" data-popuptext="linkedIn">
        <SocialIcon url="https://www.linkedin.com/in/kevin-koech-47b272116/" />
      </li>
      <li className="popup" data-popuptext="github">
        <SocialIcon url="https://github.com/koechkevin" />
      </li>
    </ul>
  );
};

const About = ({ activeTab, handleTab }) => {
  const className = activeTab  === 'About'?'visible':'not-visible';
  return (
    <span className={`card about ${className}`}>
      <MobileNavBar handleTab={handleTab} activeTab={activeTab} />
      <div className="add-margin">
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
            I am a full stack web developer majoring in Javascript with Postgres, React, Express.js,
            Node.js(PREN) as my primary stack. I also have some experience with Python as I have used Flask micro-framework
            and Django to develop REST APIs.
          </p>
          <p>
            I am a football fan who follows English football and European continental football supporting Arsenal Football Club.
          </p>
          <SocialLinks />
        </span>
        <div className="technologies">
          <h6 className="software-engineer">Skills</h6>
          <ul>
            <ol>
              <span className="small-bold">Programming Languages</span>
              {' - '}
              <span>JavaScript, Python, Java</span>
            </ol>
            <ol>
              <span className="small-bold">Stacks</span>
              {' - '}
              <span>Node js, React js, Redux js, Express js (PREN), Sequelize js, Python/Django, Python/Flask</span>
            </ol>
            <ol>
              <span className="small-bold">Databases</span>
              {' - '}
              <span>PostgresSQL, mySQL, sqlite</span>
            </ol>
            <ol>
              <span className="small-bold">Others</span>
              {' - '}
              <span>HTML, CSS, Version Control(Git)</span>
            </ol>
          </ul>
        </div>
        <div className="technologies">
          <h6 className="software-engineer">Products I have worked on</h6>
          <ul>
            <ol>
              <span className="small-bold"><a href="https://travela-staging.andela.com/">Travela</a></span>
              {' - '}
              <span>
                {`Andela's travel management tool. Manages the life cycle of the travel process from making a
                request, having it approved, booking a guesthouse in the destination, checking out and other processes.
                `}
              </span>
            </ol>
            <ol>
              <span className="small-bold">
                <a href="http://ah-shakas-frontend-staging.herokuapp.com/">Authors Haven</a>
              </span>
              {' - '}
              <span>
                {
                  `
                    A social platform for articulating thoughts in an article format, have users read,
                    comment, like and dislike.
                    `
                }
              </span>
            </ol>
          </ul>
        </div>
      </div>
    </span>
  );
};
About.propTypes = {
  activeTab: PropTypes.string.isRequired,
  handleTab: PropTypes.func.isRequired
};
export default About;
