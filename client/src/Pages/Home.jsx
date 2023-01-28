import React from "react";

import "./Home.css";
import Hero from "../Components/Home/Hero";
import Ourservices from "../Components/Home/Ourservices";
import Outlet from "../Components/Home/Outlet";
import Blog from "../Components/Home/Blog";
import Question from "../Components/Home/Question";
import Contact from "../Components/Contact/Contact";
const Home = () => {
  return (
    <>
      <Hero />
      <Ourservices />
      <Outlet />
      <Blog />
      <Contact />
      <Question />
    </>
  );
};

export default Home;
