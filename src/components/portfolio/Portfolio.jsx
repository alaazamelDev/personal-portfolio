import React, { useState } from "react";
import PortfolioCard from "./PortfolioCard";

// styling
import "./portfolio.css";

// data
import { WEB_PROJECTS, MOBILE_PROJECTS } from "../../models/project";

const Portfolio = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="section portfolio_section section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My recent work</span>

      <div className="portfolio__container container">
        <ul className="portfolio__options">
          <li
            className={
              tabIndex === 0
                ? "portfolio__options-item active-option"
                : "portfolio__options-item"
            }
            onClick={() => setTabIndex(0)}
          >
            All
          </li>
          <li
            className={
              tabIndex === 1
                ? "portfolio__options-item active-option"
                : "portfolio__options-item"
            }
            onClick={() => setTabIndex(1)}
          >
            Apps
          </li>
          <li
            className={
              tabIndex === 2
                ? "portfolio__options-item active-option"
                : "portfolio__options-item"
            }
            onClick={() => setTabIndex(2)}
          >
            Web
          </li>
        </ul>

        <div className="portfolio__content">
          {(tabIndex === 0
            ? [...MOBILE_PROJECTS, ...WEB_PROJECTS]
            : tabIndex === 1
            ? MOBILE_PROJECTS
            : WEB_PROJECTS
          ).map((project) => {
            return (
              <PortfolioCard
                key={project.id}
                image={project.image}
                title={project.title}
                description={project.description}
                url={project.url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
