import React from 'react'
import "../assets/css/portfolio.css"
import profileImage from "../assets/images/profileImage.png"

const Header = () => {
  return (
    <>
      <div className='portfolio-image-cover'>
        <div className='portfolio-intro'>
          <div class="content">
            <div class="content-tertiary">
              <p><span>✌🏻</span> Hi there! I'm Sirjanpreet Kaur</p>
            </div>
            <div class="content-primary">
              <h1>A passionate <span>Frontend Developer</span>
               </h1>
            </div>
            <div class="content-secondary">
              <p>I'm a Frontend Developer with real-world experience in building fast, responsive, and accessible UIs. At Careers360, I contributed to high-impact projects using React.js and SSR techniques, ensuring smooth experiences across platforms.
              </p>
            </div>
          </div>
          <div className='portfolio-profile-img'>
            <img src={profileImage} alt="portfolio-image" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header