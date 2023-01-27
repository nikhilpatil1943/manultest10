import React, { useState } from "react";
import "./Nav.css";
import Logo from "../../Images/Home/logo.png";
import Menu from "../../Images/Home/menu.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [navActive, setNavActive] = useState(false);

  const menu = () => {
    const Hamburger = document.getElementById("Hamburger");
    const state = Hamburger.getAttribute("data-is-visible");
    const navbar = document.getElementById("NavigationBar");
    if (state === "false") {
      navbar.style.transform = "translate(0)";
      Hamburger.setAttribute("data-is-visible", "true");
      setNavActive(false);
    } else {
      Hamburger.setAttribute("data-is-visible", "false");
      navbar.style.transform = "translate(-100%)";
      setNavActive(true);
    }
  };

  const handleClick = () => {
    if (window.innerWidth < 700) {
      const navbar = document.getElementById("NavigationBar");
      navbar.style.transform = "translate(-100%)";
    }
  };
  return (
    <>
      <div className="Navbar">
        <div className="Navbar__logo">
          <img src={Logo} alt="company-logo" />
          <NavLink to="/">
            <h1 className="Navbar__title">THE FOODIE BEE</h1>
          </NavLink>
          <button
            className="Navbar__menu"
            id="Hamburger"
            data-is-visible="true"
            onClick={menu}
          >
            {navActive ? (
              <img src={Menu} alt="non-active-menu" />
            ) : (
              <img src={Menu} alt="active-menu" />
            )}
          </button>
        </div>
        <div className="Navbar__link" id="NavigationBar">
          <NavLink to="/" onClick={handleClick} className="Navbar__btn">
            Home
          </NavLink>
          <NavLink to="/services" onClick={handleClick} className="Navbar__btn">
            Services
          </NavLink>
          <NavLink to="/blog1" onClick={handleClick} className="Navbar__btn">
            Blogs
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default NavBar;
