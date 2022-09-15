import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      {/* LinkedIn profile */}
      <a
        href="https://www.linkedin.com/in/alaa-aldeen-zamel-0936b2191"
        className="home__social-icon"
        target={"_blank"}
        rel="noreferrer"
      >
        <i className="uil uil-linkedin"></i>
      </a>

      {/* Github profile */}
      <a
        href="https://github.com/alaazamelDev"
        className="home__social-icon"
        target={"_blank"}
        rel="noreferrer"
      >
        <i className="uil uil-github"></i>
      </a>

      {/* Twitter profile */}
      <a
        href="https://twitter.com/AlaaZamel87"
        className="home__social-icon"
        target={"_blank"}
        rel="noreferrer"
      >
        <i className="uil uil-twitter"></i>
      </a>

      {/* Instagram profile */}
      <a
        href="https://www.instagram.com/alaa.zamel"
        className="home__social-icon"
        target={"_blank"}
        rel="noreferrer"
      >
        <i className="uil uil-instagram"></i>
      </a>
    </div>
  );
};

export default Social;
