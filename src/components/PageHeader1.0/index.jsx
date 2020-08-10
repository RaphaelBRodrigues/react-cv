import React from 'react';

import './styles.css';
import './media.css';

import logo from '../../assets/images/logo.svg';
import linkedinIcon from '../../assets/images/linkedin.png';
import gitIcon from '../../assets/images/git.png';


const PageHeader = () => {
    return (
        <header id="header-container">

            <div>
                    <img src="https://assets.ifttt.com/images/channels/891279159/icons/large.png" alt="Logo" />
                    <p> Raphael  {'\u00A0'} </p>
                    <p>Rodrigues</p>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="">
                            Resumo
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Projetos
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Formação
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Carreira
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Contatos
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="">
                            <img src={linkedinIcon} alt="Linkedin" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={gitIcon} alt="Github" />
                        </a>
                    </li>
                </ul>
            </nav>

        </header>
    );
}


export default PageHeader;