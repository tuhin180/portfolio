import React from "react";
import About from "./Aboutme/About";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>TuhinHossain - Home</title>
      </Helmet>
      <Banner />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
