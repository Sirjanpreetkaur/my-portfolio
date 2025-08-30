import React from "react";
import { FaEye, FaDownload } from "react-icons/fa";
import "../assets/css/portfolio.css";

// Use your file ID only once
const fileId = "1XR1uiIgC9vRssU07PASa6-z9ikGJyJXH";

// Generate view & download links dynamically
const resumeViewUrl = `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;
const resumeDownloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

const Resume = () => {
  return (
    <div className="experience-cover">
      <div className="download_resume">
        <span>My Resume</span>

        {/* View Resume (opens in new tab) */}
        <a
          href={resumeViewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="view-resume"
        >
          <FaEye />
        </a>

        {/* Download Resume (always latest version) */}
        <a
          href={resumeDownloadUrl}
          download="sirjanpreet_kaur_resume.pdf"
          className="download-resume"
        >
          <FaDownload />
        </a>
      </div>
    </div>
  );
};

export default Resume;
