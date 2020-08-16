import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCandyCane, faUser, faBrain, faArrowAltCircleUp, faBriefcase, faChartLine, faGraduationCap, faScroll, faSatellite, faCodeBranch, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { handleHideMenu, handleGoToSection } from './handlers';
import { useState, useEffect } from 'react';


import './style/styles.css';
import './style/media.css';



const PageHeader = () => {

    const [isVisible, setIsVisible] = useState(false);
    let resume = 0, landing = 0,skills = 0;

    useEffect(() => {
        resume = document.getElementById("resume-container");
        landing = document.getElementById("landing-container");
        skills = document.getElementById("skills-container");
    }, []);


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
                        >
                            <a>
                                <FontAwesomeIcon icon={faUser} />
                                <br /><span>
                                    Resumo
                            </span>
                            </a>
                        </li>
                        <li
                         onClick={() => {
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