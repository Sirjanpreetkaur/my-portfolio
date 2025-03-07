import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Skills from '../components/skills';
import Resume from '../components/resume';

const PortfolioWebsite=()=>{
    return(
        <div className='website'>
            <Header/>
            <Skills/>
            <Resume/>
        </div>
    )

}
export default PortfolioWebsite;