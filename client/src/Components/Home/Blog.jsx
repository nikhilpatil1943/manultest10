import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "./Blog.css";
import BlogImg from "../../Images/Blog/blogimg.png";
import BlogImg1 from "../../Images/Blog/blogimg1.png";
import { NavLink } from "react-router-dom";

const blogIteam = [
  {
    img: BlogImg1,
    title: "CMR's for Cafes",
    content:
      "Do you run a cafe and want to boost your sales? Well, then you should start considering implementing a CRM. A CRM or Customer Relationship Management system can help you manage and scale your cafe business in ways that were previously impossible. This article will explain why CRMs are so important for cafes, the advantages they provide and how to go about choosing one for your business.",
    link: "/blog1",
  },
  {
    img: BlogImg1,
    title: "How technology has changed the hotel industry.",
    content:
      "The HORECA world or the hotels and hospitality world has been changing so dramatically, in this field technology has made its way to the top and now these fields or sectors cannot be imagined without technology, you will be amazed till 1927 the most technologically equipped hotels were those who had a phone on its reception desk, and now these facilities are available in the most basic inn. It is no more a secret that you cannot make it big in this industry unless you make",
    link: "/blog2",
  },
];

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Blog = () => {
  return (
    <div className="Blog">
      <div className="Blog__head">
        <img src={BlogImg} alt="" />
      </div>

      <div className="Blog__cards">
        <Slider {...settings}>
          {blogIteam.map((item, index) => {
            return (
              <div className="Blog__card" key={index}>
                <img src={item.img} alt="" />
                <h3>{item.title}</h3>
                <p>{item.content.substring(0, 300)}...</p>
                <NavLink to={item.link}>Read Full Blog</NavLink>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Blog;
