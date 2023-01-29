import React from "react";
// import { NavLink } from "react-router-dom";
import "./Pricing.css";
import rupess from "../Images/Pricing/rupess.png";
import wrong from "../Images/Pricing/wrong.png";
import correct from "../Images/Pricing/correct.png";
import Contact from "../Components/Contact/Contact";
const PriceCard = [
  {
    title: "Free Trial",
    price: "0Rs/ 15 Days",
    link: "/buynow",
    textlink: "Try Now",
    list: [
      {
        act: true,
        content: " QR based ordering + Personal Website",
      },
      {
        act: true,
        content: " Staff portal",
      },
      {
        act: true,
        content: "Kitchen Dashboard",
      },
      {
        act: true,
        content: " Admin panel",
      },
      {
        act: true,
        content: "Custom Coupon generator",
      },
      {
        act: true,
        content: " Email marketing",
      },
      {
        act: false,
        content: " WhatsApp SMS marketing.",
      },
      {
        act: true,
        content: "Personalized feedback",
      },
      {
        act: true,
        content: "SMM Suggestions",
      },
      {
        act: true,
        content: " 24 * 7 Support",
      },
    ],
  },
  {
    title: "PRO",
    price: "4499Rs/ Month",
    link: "/buynow",
    textlink: "Buy Now",
    list: [
      {
        act: true,
        content: " QR based ordering + Personal Website",
      },
      {
        act: true,
        content: " Staff portal",
      },
      {
        act: true,
        content: "Kitchen Dashboard",
      },
      {
        act: true,
        content: " Admin panel",
      },
      {
        act: true,
        content: "Custom Coupon generator",
      },
      {
        act: false,
        content: " Email marketing",
      },
      {
        act: false,
        content: " WhatsApp SMS marketing.",
      },
      {
        act: false,
        content: "Personalized feedback",
      },
      {
        act: false,
        content: "SMM Suggestions",
      },
      {
        act: true,
        content: " 24 * 7 Support",
      },
    ],
  },
  {
    title: "PRO PLUS",
    price: "6999Rs/ Month",
    link: "/buynow",
    textlink: "Buy Now",
    list: [
      {
        act: true,
        content: " QR based ordering + Personal Website",
      },
      {
        act: true,
        content: " Staff portal",
      },
      {
        act: true,
        content: "Kitchen Dashboard",
      },
      {
        act: true,
        content: " Admin panel",
      },
      {
        act: true,
        content: "Custom Coupon generator",
      },
      {
        act: true,
        content: " Email marketing",
      },
      {
        act: true,
        content: " WhatsApp SMS marketing.",
      },
      {
        act: true,
        content: "Personalized feedback",
      },
      {
        act: true,
        content: "SMM Suggestions",
      },
      {
        act: true,
        content: " 24 * 7 Support",
      },
    ],
  },
];

const ListItem = ({ uList }) => {
  return (
    <ul className="Pricing__list">
      {uList.map((item, index) => {
        return (
          <li key={index}>
            {item.act ? (
              <span>
                <img src={correct} alt={correct} />
              </span>
            ) : (
              <span>
                <img src={wrong} alt={wrong} />
              </span>
            )}
            {item.content}
          </li>
        );
      })}
    </ul>
  );
};
const Pricing = () => {
  return (
    <div className="Pricing">
      <div className="Services__title">Pricing</div>
      <div className="Pricing__cards">
        {PriceCard.map((item, index) => {
          return (
            <div className="Pricing__card" key={index}>
              <h3>{item.title}</h3>
              <h2>
                <img src={rupess} alt="" />
                {item.price}
              </h2>
              <ListItem uList={item.list} />
              {/* <NavLink className="Pricing__btn" to={item.link}>
                {item.textlink}
              </NavLink> */}
            </div>
          );
        })}
      </div>
      <Contact />
    </div>
  );
};

export default Pricing;
