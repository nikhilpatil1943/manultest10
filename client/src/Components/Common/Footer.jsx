import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="Footer__social">
        <span className="Footer__text">Connect with us</span>
        <a
          href="https://www.instagram.com/the.foodiebee/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>

        {/* <a href="/facebook.com">
          <i className="fa-brands fa-facebook"></i>
        </a> */}

        <a
          href="https://twitter.com/thefoodiebee"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa-brands fa-twitter"></i>
        </a>
        {/* 
        <a href="/linkedin">
          <i className="fa-brands fa-linkedin"></i>
        </a> */}

        {/* <a href="/whatsapp">
          <i className="fa-brands fa-square-whatsapp"></i>
        </a> */}

        {/* <button className="Footer__btn">Mail us</button> */}
        <a className="Footer__mailto" href="mailto:manul@thefoodiebee.com">
          Mail us
        </a>
      </div>
      <div className="Footer__text">
        <i className="fa-solid fa-copyright"></i>
        KOVONIC Pvt. Ltd., All rights Reservered
      </div>
    </footer>
  );
};

export default Footer;
