import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaEye } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import "../assets/css/portfolio.css"
import ResumeCV from "../assets/pdf/resume.pdf"



const Resume = () => {
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
        <div className='experience-cover'>
            <div className="download_resume">
                <span>My Resume </span>
                <a href="https://drive.google.com/file/d/1YzsmnF5f1UHLCzywZAs9xoFHxKsL6mFj/view?usp=sharing" className="view-resume" target="_blank">
                    <FaEye />
                </a>
                <a onClick={() => downloadPDF(ResumeCV)} className="download-resume">
                    <FaDownload />
                </a>
            </div>
        </div>
    )
}

export default Resume