import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCandyCane, faUser, faBrain, faBriefcase, faChartLine, faGraduationCap, faScroll, faSatellite, faCodeBranch, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import TitleSection from '../SectionTitle';

import './style/styles.css';
import './style/media.css';



function SectionContainer({ children, dark, double }){

    const style = {
        backgroundColor:0,
        height:"100vh"
    };

    if(dark){
        style.backgroundColor = "var(--color-background3)";
    }
    if(double){
        style.height = "200vh";
    }

        
    
return (
    <div
        id="section-container"
        style={style}


    >
        {children}
    </div>
);
}

export default SectionContainer;