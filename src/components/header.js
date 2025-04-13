// Header.js
import React from "react";
import "../assets/css/portfolio.css";
import profileImage from "../assets/images/profileImage.png";
import TextToSpeech from "./textToSpeech.js"; // adjust the path if necessary

const Header = ({ theme }) => {
  const introText = "Hi! I'm Sirjanpreet Kaur, a Frontend Developer who designs and builds fast, scalable web apps.  I design and build fast, scalable, and user-friendly web apps that don’t just look good, they work flawlessly. I specialize in frontend development, crafting clean, modular React and Next.js interfaces with smooth UX and performance in mind.";
  
  return (
    <>
      <div className="portfolio-image-cover">
        <div className="portfolio-intro">
          <div className="content">
            <div className="content-tertiary">
              <p>
                <span>✌🏻</span> Hi there! I'm Sirjanpreet Kaur
              </p>
            </div>
            <div className="content-primary">
              <h1>
                <span>Frontend Developer</span>
              </h1>
            </div>
            <div className="content-secondary">
              <p>
                I design and build fast, scalable, and user-friendly web apps
                that don’t just look good, they work flawlessly. I specialize in
                frontend development, crafting clean, modular React and Next.js
                interfaces with smooth UX and performance in mind.
              </p>
              <p>
                From pixel-perfect UI to debugging tough issues, I turn
                complex requirements into reliable, maintainable code.
              </p>
            </div>
            {/* Text-to-Speech button with listen icon */}
            <div style={{ marginTop: "10px" }}>
              <TextToSpeech text={introText} />
            </div>
          </div>
          <div className="portfolio-profile-img">
            <img src={profileImage} alt="portfolio-image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
