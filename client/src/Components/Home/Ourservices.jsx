import React from "react";
// import { NavLink } from "react-router-dom";

import "./Ourservices.css";

import Img1 from "../../Images/OurServices/orbasedording.gif";
import Img2 from "../../Images/OurServices/staffportal.gif";
import Img3 from "../../Images/OurServices/adminportal.gif";
import Img4 from "../../Images/OurServices/marketing.gif";

import BgImg from "../../Images/OurServices/bgservices.png";

const content = [
  {
    title: "Marketing",
    img: Img4,
    content: "SMM, email & SMS",
    link: "/services",
  },

  {
    title: "QR Based Ordering",
    img: Img1,
    content: "Ordering Portal and Website Managnment",
    link: "/services",
  },
  {
    title: "Stall Portal",
    img: Img2,
    content: "Kitchen Dashboard and staff ordering portal",
    link: "/services",
  },

  {
    title: "Admin Panel",
    img: Img3,
    content: "Sales record & Inventory Management",
    link: "/services",
  },
];

const Ourservices = () => {
  return (
    <div className="Ourservices" id="ourservices">
      <div className="Ourservices__title">Our Services</div>
      <div>
        {content.map((card, index) => {
          return (
            <div key={index} className="Ourservices__card">
              <img src={card.img} alt={card.img} />
              <div className="Ourservices__content">
                <h3>{card.title}</h3>
                <p>{card.content}</p>
                <a href={card.link}>Know More</a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="Ourservices__Readmore">
        <a href="/services">Read More</a>
      </div>
      <img className="Ourservices__bgimg" src={BgImg} alt="bgimg" />;
    </div>
  );
};

export default Ourservices;
