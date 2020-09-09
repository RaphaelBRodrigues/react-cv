import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCandyCane, faUser, faBrain, faBriefcase, faChartLine, faGraduationCap, faScroll, faSatellite, faCodeBranch, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import TitleSection from '../SectionTitle';

import './style/styles.css';
import './style/media.css';



function ContentBlock({ icon, text, children ,title,light}){
    return (
        <div 
        id="contentBlock-container" 
        >
            <fieldset
            className={
                light ? "lightContentBlock" :null
            }
            >
                {
                    icon && <legend>
                        <i>
                            <FontAwesomeIcon icon={icon} />
                        </i>
                    </legend>
                }

                <div className="legend2">{title}</div>

                {
                    text ?
                        <p>
                            {text ? text : null}
                        </p>
                    :null
                }

                {children}

            </fieldset>
        </div>
    );
}

export default ContentBlock;