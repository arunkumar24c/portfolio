import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import SocialLink from "./component/SocialLink";
import About from "./component/About";
import Portfolio from "./component/Portfolio";
import Experience from "./component/Experience";
import Contact from "./component/Contact";


const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLink />
    </div>
  );
};

export default App;
