import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaEye, FaDownload } from "react-icons/fa";
import "../assets/css/portfolio.css";
import ResumeCV from "../assets/pdf/resume.pdf";

const resumeUrl =
  "https://drive.google.com/file/d/1n4UwsiNBc7_EmATGYTzb8GbeJhpL85J7/view?usp=sharing";

const Resume = () => {
  const downloadPDF = async (pdfUrl) => {
    try {
      const response = await fetch(pdfUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      const timestamp = new Date().getTime();
      link.setAttribute("download", `${"sirjanpreet_kaur_resume"}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error("Error downloading the PDF:", error);
    }
  };

  return (
    <div className="experience-cover">
      <div className="download_resume">
        <span>My Resume</span>
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="view-resume"
        >
          <FaEye />
        </a>
        <a onClick={() => downloadPDF(ResumeCV)} className="download-resume">
          <FaDownload />
        </a>
      </div>
    </div>
  );
};

export default Resume;
