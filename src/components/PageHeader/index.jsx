import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCandyCane, faUser, faBrain, faBriefcase, faChartLine, faGraduationCap, faScroll, faSatellite, faCodeBranch, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { handleMenuVisibility } from './handlers';
import { useState, useEffect } from 'react';


import './styles.css';
import './media.css';



const PageHeader = () => {

    const [isVisible, setIsVisible] = useState([]);


    useEffect(() => {
        console.clear();
        const nav = document.getElementById("header-list");
     
        if(isVisible){
            nav.classList.add("showMenu");
            nav.classList.remove("hideMenu");
        }else{
            nav.classList.remove("showMenu");
            nav.classList.add("hideMenu");
        }
        console.info(nav);


    }, [isVisible]);


    return (
        <header id="header-container">

            <div
                onClick={() => {
                    handleMenuVisibility(isVisible, setIsVisible);
                }}
            >
                <p>R</p>
                <p>R</p>
                <div>
                    <FontAwesomeIcon icon={faCandyCane} />
                </div>
            </div>
            <nav class="hideMenu" id="header-list">
                <ul>
                    <li>
                        <a href="">
                            <FontAwesomeIcon icon={faUser} />
                            <br /><span>
                                Resumo
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <FontAwesomeIcon icon={faChartLine} />
                            <br /><span>
                                Skills
                           </span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <FontAwesomeIcon icon={faProjectDiagram} />
                            <br /><span>
                                Projetos
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <FontAwesomeIcon icon={faGraduationCap} />
                            <br /><span>
                                Formação
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <FontAwesomeIcon icon={faBriefcase} />
                            <br /><span>
                                Carreira
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <FontAwesomeIcon icon={faSatellite} />
                            <br /><span>
                                Contatos
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <FontAwesomeIcon icon={faCodeBranch} />
                            <br /><span>
                                Commits
                            </span>
                        </a>
                    </li>
                </ul>

            </nav>



        </header>
    );
}


export default PageHeader;