import React from 'react';
import PropTypes from 'prop-types';
import {MobileNavBar} from './NavBar';

const Resume = ({ activeTab, handleTab }) => {
  const className = activeTab  === 'Resume'?'visible':'not-visible';
  return (
    <span className={`card resume ${className}`}>
      <MobileNavBar handleTab={handleTab} activeTab={activeTab} />
      <div className="add-margin">
        <div>
          <h2 className="title">Resume</h2>
        </div>
        <div className="resume-content">
          <span className="education">
            <h6 className="resume-head">Education</h6>
            <span className="education-content">
              <span className="year">
                  2015
              </span>
              <br />
              <div className="subject-school">
                <span className="subject">
                    Mathematics and Computer Science
                </span>
                <br />
                <span className="school">
                    Maseno University
                </span>
              </div>
            </span>
            <br />
            <span className="education-content">
              <span className="year">
                  2010
              </span>
              <br />
              <div className="subject-school">
                <span className="subject">
                    Kenya Certificate of Secondary Education
                </span>
                <br />
                <span className="school">
                    Kapsabet Boys High School
                </span>
              </div>
            </span>
            <br />
            <span className="education-content">
              <span className="year">
                  2006
              </span>
              <br />
              <div className="subject-school">
                <span className="subject">
                    Kenya Certificate of Primary Education
                </span>
                <br />
                <span className="school">
                    Kalyet Septonok Primary
                </span>
              </div>
            </span>
            <br />
            <h6 className="subheader">Certificates</h6>
            <span className="education-content">
              <span className="year">
                  2014-2015
              </span>
              <br />
              <div className="subject-school">
                <span className="subject">
                    CCNA - Cisco
                </span>
                <br />
                <span className="school">
                    Maseno University
                </span>
              </div>
            </span>
          </span>
          <span className="experience">
            <h6 className="resume-head">Experience</h6>
            <span className="experience-content">
              <span className="year">
                  Sept 2018 - Present
              </span>
              <br />
              <div className="subject-school">
                <span className="subject">
                    Software Engineer
                </span>
                <br />
                <span className="school">
                    Andela
                </span>
                <br />
                <span className="job-description">
                    Working in teams to build web applications for Andela partners and in house products.
                </span>
              </div>
              <br />
              <span className="year">
                  Sept 2016 - Dec 2017
              </span>
              <br />
              <div className="subject-school">
                <span className="subject">
                    Presidential Digital Talent Program
                </span>
                <br />
                <span className="school">
                    ICT Authority Kenya
                </span>
                <br />
                <span className="job-description">
                    Digital Literacy program quality support staff,
                    ICT support in the office of the director of public prosecutions Kenya.
                    Private sector placement at Harler Technologies.
                </span>
              </div>
            </span>
          </span>
          <span className="referees">
            <h6 className="resume-head">Referees</h6>
            <span className="referee-content">
              <div className="subject-school">
                <br />
                <div>
                  <i className="material-icons menu-icon">
                  account_circle
                  </i>
                  <span className="referee-name">Mr. Nobert Togom</span>
                </div>
                <div>
                  <i className="material-icons menu-icon">
                  email
                  </i>
                  <span className="referee-name">nobert.togom@gmail.com</span>
                </div>
                <div>
                  <i className="material-icons menu-icon">
                  local_phone
                  </i>
                  <span className="referee-name">+254 727 590 711</span>
                </div>
              </div>
              <br />
              <div className="subject-school">
                <br />
                <div>
                  <i className="material-icons menu-icon">
                  account_circle
                  </i>
                  <span className="referee-name">Ms. Gwen Waswa</span>
                </div>
                <div>
                  <i className="material-icons menu-icon">
                  email
                  </i>
                  <span className="referee-name">gwen.waswa@ict.go.ke</span>
                </div>
                <div>
                  <i className="material-icons menu-icon">
                  local_phone
                  </i>
                  <span className="referee-name">+254 722 485 180</span>
                </div>
              </div>
            </span>
          </span>
        </div>
      </div>
    </span>
  );
};
Resume.propTypes = {
  activeTab: PropTypes.string.isRequired,
  handleTab: PropTypes.func.isRequired
};
export default Resume;
