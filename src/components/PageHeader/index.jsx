import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCandyCane, faUser, faBrain, faBriefcase, faChartLine, faGraduationCap, faScroll, faSatellite, faCodeBranch, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';



import './styles.css';
import './media.css';



const PageHeader = () => {
    return (
        <header id="header-container">

            <div>
                <p>R</p>
                <p>R</p>
                <div>
                    <FontAwesomeIcon icon={faCandyCane} />
                </div>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="">
                            <img src="" alt="" />
                            <FontAwesomeIcon icon={faUser} />
                            {/* Resumo */}
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <FontAwesomeIcon icon={faChartLine} />

                            {/* Skills */}
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <FontAwesomeIcon icon={faProjectDiagram} />

                            {/* Projetos */}
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <FontAwesomeIcon icon={faGraduationCap} />

                            {/* Formação */}
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <FontAwesomeIcon icon={faBriefcase} />

                            {/* Carreira */}
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <FontAwesomeIcon icon={faSatellite} />

                            {/* Contatos */}
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <FontAwesomeIcon icon={faCodeBranch} />

                            {/* git */}
                        </a>
                    </li>
                </ul>

            </nav>

         

        </header>
    );
}


export default PageHeader;