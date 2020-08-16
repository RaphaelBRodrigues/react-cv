import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCandyCane, faUser, faBrain, faBriefcase, faChartLine, faGraduationCap, faScroll, faSatellite, faCodeBranch, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import TitleSection from '../TitleSection';

import './style/styles.css';
import './style/media.css';



const ContentBlock = ({ icon, text }) => {
    return (
        <div id="contentBlock-container">
            <fieldset>
                <legend>
                    <i>
                        <FontAwesomeIcon icon={icon} />
                    </i>
                </legend>
                <p>
                    {text}
                </p>
                
            </fieldset>
        </div>
    );
}

export default ContentBlock;