import React from "react";
import { useState } from "react";

// styling
import "./qualifications.css";

const Qualifications = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(1);
  return (
    <div className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My Personal Journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          {/* Switches Section */}
          <div
            className={
              selectedTabIndex === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => setSelectedTabIndex(1)}
          >
            {/* Education tab */}
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          {/* Experience tab */}
          <div
            className={
              selectedTabIndex === 0
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => setSelectedTabIndex(0)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
        {/* Data Section */}
        <div className="qualification__sections">
          {selectedTabIndex ? (
            <EducationQualification />
          ) : (
            <ExperienceQualification />
          )}
        </div>
      </div>
    </div>
  );
};

const ExperienceQualification = () => {
  return (
    <div className="qualification__content">
      <div className="qualification__data">
        {/* Qualification Object */}
        <div>
          <h3 className="qualification__title">Backend Developer</h3>
          <span className="qualification__subtitle">Remotely</span>
          <div className="qualification__calendar">
            <i className="uil uil-calendar-alt qualification__calender-icon"></i>
            {" 2022 - Present"}
          </div>
        </div>

        {/* Qualification dot */}
        <div>
          <span className="qualification__rounder"></span>
          <span className="qualification__line"></span>
        </div>
      </div>

      <div className="qualification__data">
        <div></div>
        {/* Qualification dot */}
        <div>
          <span className="qualification__rounder"></span>
          <span className="qualification__line"></span>
        </div>

        {/* Qualification Object */}
        <div>
          <h3 className="qualification__title">Flutter Developer</h3>
          <span className="qualification__subtitle">Remotely</span>
          <div className="qualification__calendar">
            <i className="uil uil-calendar-alt qualification__calender-icon"></i>
            {" 2021 - Present"}
          </div>
        </div>
      </div>

      <div className="qualification__data">
        {/* Qualification Object */}
        <div>
          <h3 className="qualification__title">Android Developer</h3>
          <span className="qualification__subtitle">Damascus - Syria</span>
          <div className="qualification__calendar">
            <i className="uil uil-calendar-alt qualification__calender-icon"></i>
            {" 2019 - 2020"}
          </div>
        </div>

        {/* Qualification dot */}
        <div>
          <span className="qualification__rounder"></span>
          <span className="qualification__line"></span>
        </div>
      </div>
    </div>
  );
};

const EducationQualification = () => {
  return (
    <div className="qualification__content">
      <div className="qualification__data">
        {/* Qualification Object */}
        <div>
          <h3 className="qualification__title">Software Engineering</h3>
          <span className="qualification__subtitle">Damascus University</span>
          <div className="qualification__calendar">
            <i className="uil uil-calendar-alt qualification__calender-icon"></i>
            {" 2022 - Present"}
          </div>
        </div>

        {/* Qualification dot */}
        <div>
          <span className="qualification__rounder"></span>
          <span className="qualification__line"></span>
        </div>
      </div>

      <div className="qualification__data">
        <div></div>
        {/* Qualification dot */}
        <div>
          <span className="qualification__rounder"></span>
          <span className="qualification__line"></span>
        </div>

        {/* Qualification Object */}
        <div>
          <h3 className="qualification__title">
            Information Technology Engineering (ITE)
          </h3>
          <span className="qualification__subtitle">Damascus University</span>
          <div className="qualification__calendar">
            <i className="uil uil-calendar-alt qualification__calender-icon"></i>
            {" 2019 - 2022"}
          </div>
        </div>
      </div>

      {/* <div className="qualification__data">
        <div>
          <h3 className="qualification__title">High School</h3>
          <span className="qualification__subtitle">Nour Fater Traiz</span>
          <div className="qualification__calendar">
            <i className="uil uil-calendar-alt qualification__calender-icon"></i>
            {" 2017 - 2019"}
          </div>
        </div>

        <div>
          <span className="qualification__rounder"></span>
          <span className="qualification__line"></span>
        </div>
      </div> */}
    </div>
  );
};

export default Qualifications;
