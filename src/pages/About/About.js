import React from "react";
import SectionNav from "../../Component/SectionNav/SectionNav";
import SectionAbout from "../../Component/Section_Home_1/Section_About";
import CountUp from "../../Component/CountUp/CountUp";
import Customer from "../../Component/Customer/Customer";
import AboutMenu from "../../Component/AboutMenu/Menu";

function About() {
  return (
    <div className="AboutUs">
      <SectionNav page="About Us" />
      <SectionAbout />
      <CountUp />

      <AboutMenu />
      <Customer />
    </div>
  );
}

export default About;
