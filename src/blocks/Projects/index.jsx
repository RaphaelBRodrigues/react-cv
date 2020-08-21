import React, { useState } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import foto from '../../assets/images/foto.jpeg';

import './styles/styles.css';
import './styles/media.css';
import SectionContainer from '../../components/SectionContainer';
import ContentBlock from '../../components/ContentBlock';
import SectionTitle from '../../components/SectionTitle';

function Projects() {
    return (
        <div id="projects-container">

            <SectionContainer
                dark={false}
            >

                <SectionTitle
                    title="Projetos"
                />
                <div>

                <ContentBlock icon={faProjectDiagram}>
                    <h1>Teste</h1>
                    <h3>15/03/19-25/08/2019</h3>
                    <h4>Desenvolvido com Lucas M. G. de Almeida</h4>
                    <img src="https://raphaelbrodrigues.github.io/images/pay.png" alt="" />

                </ContentBlock>
                <ContentBlock icon={faProjectDiagram}>
                    <h1>Teste</h1>
                    <h3>15/03/19-25/08/2019</h3>
                    <h4>Desenvolvido com Lucas M. G. de Almeida</h4>
                    <img src="https://raphaelbrodrigues.github.io/images/pay.png" alt="" />

                </ContentBlock>
                </div>
            </SectionContainer>
        </div>
    );
}

export default Projects;

