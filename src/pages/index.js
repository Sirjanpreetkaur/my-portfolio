import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Skills from "../components/skills";
import Resume from "../components/resume";
import Experience from "../components/experience";
import Projects from "../components/projects";

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
    </div>
  );
};
export default PortfolioWebsite;
