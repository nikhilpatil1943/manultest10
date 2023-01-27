import React from "react";
import "./Services.css";

import {
  Service1,
  Service2,
  Service3,
  Service4,
} from "../Components/Services/data";

const Services = () => {
  return (
    <div className="Services">
      <div className="Services__title">Our Servcies</div>
      <div className="Services__cards">
        <Service1 />
        <Service2 />
        <Service3 />
        <Service4 />
      </div>
    </div>
  );
};

export default Services;
