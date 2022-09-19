import React from "react";

const PortfolioCard = ({ title, image, description, url }) => {
  return (
    <div className="portfolio__content-card">
      <img src={image} alt={title} className="portfolio__card-img" />
      <h3 className="portfolio__card-title">{title}</h3>
      <p className="portfolio__card-description">{description}</p>
      <a
        className="portfolio__content-card_button"
        href={url}
        target={"_blank"}
        rel={"noreferrer"}
      >
        Show Details{" "}
        <i className="uil uil-arrow-right portfolio__button-icon"></i>
      </a>
    </div>
  );
};

export default PortfolioCard;
