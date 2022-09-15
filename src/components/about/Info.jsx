import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      {/* Experience */}
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="bout__title">Experience</h3>
        <span className="about__subtitle">
          3 Years Working
        </span>
      </div>

      {/* Completed Work */}
      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="bout__title">Completed</h3>
        <span className="about__subtitle">+10 Projects</span>
      </div>

      {/* Support */}
      <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="bout__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
