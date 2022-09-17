import React from "react";
import { useState } from "react";

const ServiceCard = ({ service }) => {
  // add line breaks in long titles
  const brokenTitle = service.title
    .split("\n")
    .map((str) => <p key={str}>{str}</p>);
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="services__content">
      {/* Service Definition */}
      <div>
        <i className={service.logo + " services__icon"}></i>
        <h3 className="services__title">{brokenTitle}</h3>
      </div>
      <span
        className="services__button"
        onClick={() => {
          console.log(showDetails);
          setShowDetails(true);
        }}
      >
        View More
        <i className="uil uil-arrow-right services__button-icon"></i>
      </span>

      {/* Service Details Card */}
      <div
        className={
          showDetails ? "active-modal services__modal " : "services__modal"
        }
      >
        <div className="services__modal-content">
          <i
            className="uil uil-times services__modal-close"
            onClick={() => {
              console.log(showDetails);
              setShowDetails(false);
            }}
          ></i>

          <h3 className="services__modal-title">{service.title}</h3>
          <p className="services__modal-description">{service.description}</p>

          <ul className="services__modal-services grid">
            {service.features.map((feature, i) => {
              return <ServivceFeature key={i * 63} feature={feature} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ServivceFeature = ({ feature }) => {
  return (
    <li className="services__modal-service">
      <i className="uil uil-check-circle service__modal-icon"></i>
      <p className="services__modal-info">{feature}</p>
    </li>
  );
};

export default ServiceCard;
