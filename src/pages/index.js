import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Skills from "../components/skills";
import Resume from "../components/resume";
import Experience from "../components/experience";
import Projects from "../components/projects";
import StaticPart from "../components/staticPart";
import ContactMe from "../components/contactMe";
import WelcomeStrip from "../components/welcomeStrip";
import PortfolioFooter from "../components/portfolioFooter";

const PortfolioWebsite = () => {
  const [company, setCompany] = useState("");
  const [showStrip, setShowStrip] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    let companyValue = params.get("company");
    if (companyValue) {
      companyValue = companyValue.replace(/-/g, " ");
      setCompany(companyValue);

      const timer = setTimeout(() => {
        setShowStrip(false);
        setTimeout(() => {
          setCompany("");
          setShowStrip(true);
        }, 1000);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, []);
  return (
    <div className="website">
      {company && showStrip && (
        <WelcomeStrip company={company} fadeOut={!showStrip} />
      )}
      <Header />
      <Skills />
      <div className="exp-cvr">
        <Experience />
        <Resume />
      </div>
      <Projects />
      <StaticPart />
      <ContactMe />
      <PortfolioFooter/>
    </div>
  );
};
export default PortfolioWebsite;
