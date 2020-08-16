import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCandyCane, faUser, faBrain, faBriefcase, faChartLine, faGraduationCap, faScroll, faSatellite, faCodeBranch, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import TitleSection from '../SectionTitle';

import './style/styles.css';
import './style/media.css';



const SectionContainer = ({ children, dark, double }) => {

        
    
return (
    <div
        id="section-container"
        style={
            dark
                ? { backgroundColor: "var(--color-background3)" }
                : null


        }


    >
        {children}
    </div>
);
}

export default SectionContainer;