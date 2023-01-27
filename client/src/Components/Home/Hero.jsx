import React from "react";
import "./Hero.css";
import HeroImg from "../../Images/Home/heroimg.gif";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero__content">
        <div className="Hero__Oneline">
          Simplify your restaurant management with our all-in-one platform.
        </div>
        <div className="Hero__tagline">
          Our Services
          <div className="dynamic-text Hero__highlight">
            <span className="item">OR Based Ordering</span>
            <span className="item">Stall Portal</span>
            <span className="item">Admin Panel</span>
            <span className="item">Marketing</span>
          </div>
        </div>
        <div className="Hero__dbtn">
          <NavLink to="/pricing" className="Hero__btn Hero__btn1">
            Pricing
          </NavLink>
          <NavLink to="/services" className="Hero__btn Hero__btn2">
            Know More
          </NavLink>
        </div>
      </div>
      <img src={HeroImg} alt="Home-hero" />
      <div className="Hero__mbtn">
        <NavLink to="/pricing" className="Hero__btn Hero__btn1">
          Pricing
        </NavLink>
        <NavLink to="/services" className="Hero__btn Hero__btn2">
          Know More
        </NavLink>
      </div>
    </div>
  );
};

export default Hero;
