import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCandyCane, faUser, faBrain, faArrowAltCircleUp, faBriefcase, faChartLine, faGraduationCap, faScroll, faSatellite, faCodeBranch, faProjectDiagram, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import { handleHideMenu, handleGoToSection , handleSpotMenuItem } from './handlers';
import { useState, useEffect } from 'react';


import './style/styles.css';
import './style/media.css';



const PageHeader = () => {

    const [isVisible, setIsVisible] = useState(false);
    let resume = 0, landing = 0, skills = 0,scrollPosition = 0;

    useEffect(() => {
        landing = document.getElementById("landing-container");
        resume = document.getElementById("resume-container");
        skills = document.getElementById("skills-container");

    }, []);
    
     window.addEventListener("scroll",()=>{
        handleSpotMenuItem([
            {height:resume.offsetTop,navItem:"resume"},
            {height:skills.offsetTop,navItem:"skills"}
        ]);

     });


    useEffect(() => {
        const nav = document.getElementById("header-list");
        handleHideMenu(nav, isVisible);
    }, [isVisible]);


    return (
        <>
            <header id="header-container">

                <div onClick={() => setIsVisible(!isVisible)}>
                    <p>R</p>
                    <p>R</p>
                    <div>
                        <FontAwesomeIcon icon={faCandyCane} />
                    </div>
                </div>
                <nav id="header-list">
                    <ul>
                        <li
                            onClick={() => {
                                handleGoToSection(resume);
                            }}
                            id="navItem-resume"
                        >
                            <a>
                                <FontAwesomeIcon icon={faUser} />
                                <br /><span>
                                    Resumo
                            </span>
                            </a>
                        </li>
                        <li
                            id="navItem-skills"
                            onClick={(event) => {
                                handleGoToSection(skills);
                            }}
                        >
                            <a>
                                <FontAwesomeIcon icon={faChartLine} />
                                <br /><span>
                                    Skills
                           </span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <FontAwesomeIcon icon={faProjectDiagram} />
                                <br /><span>
                                    Projetos
                            </span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <FontAwesomeIcon icon={faGraduationCap} />
                                <br /><span>
                                    Formação
                            </span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <FontAwesomeIcon icon={faBriefcase} />
                                <br /><span>
                                    Carreira
                            </span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <FontAwesomeIcon icon={faSatellite} />
                                <br /><span>
                                    Contatos
                            </span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <FontAwesomeIcon icon={faCodeBranch} />
                                <br /><span>
                                    Commits
                            </span>
                            </a>
                        </li>

                    </ul>

                </nav>

            </header>
            <div id="scrollUp"
                onClick={() => {
                    handleGoToSection(landing);
                }}>
                <FontAwesomeIcon icon={faArrowAltCircleUp} />
            </div>
        </>
    );
}


export default PageHeader;