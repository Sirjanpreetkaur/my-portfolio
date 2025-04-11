import React from "react";
import "../assets/css/portfolio.css";
import profileImage from "../assets/images/profileImage.png";

const Header = () => {
  return (
    <>
      <div className="portfolio-image-cover">
        <div className="portfolio-intro">
          <div class="content">
            <div class="content-tertiary">
              <p>
                <span>✌🏻</span> Hi there! I'm Sirjanpreet Kaur
              </p>
            </div>
            <div class="content-primary">
              <h1>
                <span>Frontend Developer</span>
              </h1>
            </div>
            <div class="content-secondary">
              <p>
                <p>
                I design and build fast, scalable, and user-friendly web apps
                that don’t just look good, they work flawlessly. I specialize in
                frontend development, crafting clean, modular React and Next.js
                interfaces with smooth UX and performance in mind.</p>
               
                <p>
                  From pixel-perfect UI to debugging tough issues, I turn
                  complex requirements into reliable, maintainable code.
                </p>
              </p>
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
