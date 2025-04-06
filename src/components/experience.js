import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../assets/css/portfolio.css"



const Experience = () => {
    return (
        <div className='experience-cover'>
            <div className='experience-years'>
                3 Years of Experience
            </div>
            <div class="experience-list">
                <div class="experience-roles">
                    <div class="experience-role">
                        <strong>SDE 2 (Frontend)</strong>
                        <div>Dec/2022 - present</div>
                    </div>
                    <div>
                        <h5>CAREERS360</h5>
                    </div>
                </div>
                <div class="experience-roles">
                    <div class="experience-role">
                        <strong>Frontend Developer</strong>
                        <div>June/2022 - August/2024</div>
                    </div>
                    <div>
                        <h5>EClerx</h5>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Experience