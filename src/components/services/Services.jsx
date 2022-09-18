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

