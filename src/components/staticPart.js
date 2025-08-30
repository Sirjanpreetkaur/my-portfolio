import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { PiReadCvLogoBold } from "react-icons/pi";

// Same Google Drive file ID used in Resume component
const fileId = "1XR1uiIgC9vRssU07PASa6-z9ikGJyJXH";

// Google Drive links
const resumeDownloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

const StaticPart = () => {
  const handleDownload = (e) => {
    e.preventDefault(); // stop page refresh
    const link = document.createElement("a");
    link.href = resumeDownloadUrl;
    link.setAttribute("download", "sirjanpreet_kaur_resume.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="static_part">
      <div className="contact_details">
        <div className="address-container">
          <address>
            <a href="mailto:sirjanpreetkaur43@gmail.com">
              <MdEmail />
            </a>
            <a href="tel:+919876491014">
              <FaPhoneSquareAlt />
            </a>
            <a
              href="https://www.linkedin.com/in/sirjan-preet-kaur/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=9876491014&amp;text=Hi&amp;type=phone_number&amp;app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareWhatsapp />
            </a>

            {/* Resume Download (always latest version from Google Drive) */}
            <a href={resumeDownloadUrl} onClick={handleDownload}>
              <PiReadCvLogoBold />
            </a>
          </address>
        </div>
      </div>
    </div>
  );
};

export default StaticPart;
