import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Skills from "../components/skills";
import Resume from "../components/resume";
import Experience from "../components/experience";
import Projects from "../components/projects";
import StaticPart from "../components/staticPart";
import ContactMe from "../components/contactMe";

const PortfolioWebsite = () => {
  return (
    <div className="website">
      <Header />
      <Skills />
      <div className="exp-cvr">
        <Experience />
        <Resume />
      </div>
      <Projects/>
      <StaticPart/>
      <ContactMe/>
    </div>
  );
};
export default PortfolioWebsite;
