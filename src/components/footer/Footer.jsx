import React from "react";

// styling
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h1 className="footer__title">Alaa Zamel</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          {/* Twitter profile */}
          <a
            href="https://twitter.com/AlaaZamel87"
            className="footer__social-link"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="bx bxl-twitter"></i>
          </a>

          {/* Facebook profile */}
          <a
            href="https://facebook.com/alaazamel21"
            className="footer__social-link"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          {/* Instagram profile */}
          <a
            href="https://www.instagram.com/alaa.zamel"
            className="footer__social-link"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; AlaaZamel. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
