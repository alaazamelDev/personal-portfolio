import React from "react";

const ContactInfoCard = ({ icon, url, fieldName, fieldValue }) => {
  return (
    <div className="contact__card">
      <i className={icon + " contact__card-icon"}></i>
      <h3 className="contact__card-title">{fieldName}</h3>
      <span className="contact__card-data">{fieldValue}</span>
      <a href={url} className="contact__button">
        Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
      </a>
    </div>
  );
};

export default ContactInfoCard;
