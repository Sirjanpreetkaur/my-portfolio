import React from 'react'
import ResumeCV from "../assets/pdf/resume.pdf"
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { PiReadCvLogoBold } from "react-icons/pi";

const StaticPart = () => {
  const downloadPDF = async (pdfUrl) => {
    try {
      const response = await fetch(pdfUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      const timestamp = new Date().getTime();
      link.setAttribute('download', `${"resume"}_${timestamp}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error('Error downloading the PDF:', error);
    }
  };
  return (
    <div className="static_part">
      <div className="contact_details">
        <div className="address-container">
          <address>
            <a href="mailto:sirjanpreetkaur43@gmail.com"><MdEmail /></a>
            <a href="tel:+919876491014"><FaPhoneSquareAlt/></a>
            <a href="https://www.linkedin.com/in/sirjan-preet-kaur/"><FaLinkedin/></a>
            <a href="https://api.whatsapp.com/send/?phone=9876491014&amp;text=Hi&amp;type=phone_number&amp;app_absent=0"><FaSquareWhatsapp/></a>
            <a href='javascript:void(0)' onClick={(e) => {
              e.preventDefault();
              downloadPDF(ResumeCV)
              }}>
               <PiReadCvLogoBold/>
            </a>
          </address>
        </div>
      </div>
    </div>

  )
}

export default StaticPart