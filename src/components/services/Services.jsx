import React from "react";
import ServiceCard from "./ServiceCard";

// styling
import "./services.css";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Building\nMobile Apps",
      logo: "bx bxl-flutter",
      description:
        "Have more than 3 years in building a fully functional, user-friendly mobile apps which works on Android & iOS devices",
      features: [
        "Analyzing app requirements.",
        "Build Responsive & Adaptive user interface.",
        "Supports Platform Compatibility Android and iOS devices",
        "Following a clean code architecture.",
        "Use a sutable state management library.",
      ],
    },
    {
      id: 2,
      title: "Building\nWebservices",
      logo: "bx bx-server",
      description:
        "Have a great experience in anayzing system requirements, building a clean database schema and building a RESTful APIs",
      features: [
        "Design Entity Relationship Diagrams (ERDs).",
        "Working with SQL & NoSQL databases.",
        "Ability to add real-time features to the service.",
        "Presenting a documentation for the service.",
      ],
    },
    {
      id: 3,
      title: "Improvements\n& Bug Fixing",
      logo: "bx bx-bug",
      description:
        "Competent in debugging technichal problems in software systems and fixing them, Also have experience making improvments to existing systems .",
      features: [
        "Fix technichal bugs.",
        "Make customizations on an existing project.",
        "Add new features to an existing project.",
      ],
    },
  ];
  return (
    <section className="services section" id="services">
      {/* Section Title */}
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What do I offer you?</span>

      <div className="services__container container grid">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;

// service 4 to be added later
{
  /*         
        <div className="services__content">
          
          <div>
            <i className="bx bxl-visual-studio services__icon"></i>
            <h3 className="services__title">
              Software
              <br />
              Maintinance
              <br />& Development
            </h3>
          </div>
          <span className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          
          <div className="services__modal">
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">
                Software Maintinance
                <br />& Development
              </h3>
              <p className="services__modal-description"></p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">
                    Analyzing app requirements.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">
                    Build Responsive & Adaptive user interface.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">
                    Supports Android and iOS devices
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">
                    Test the app to ensure that it works smoothly
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>*/
}
