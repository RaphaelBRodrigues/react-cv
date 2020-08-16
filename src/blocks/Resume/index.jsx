import React from 'react';
import ContentBlock from '../../components/ContentBlock';
import SectionTitle from '../../components/SectionTitle';
import SectionContainer from '../../components/SectionContainer';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';


import './style/styles.css';
import './style/media.css';



const Resume = () => {
    return (
        <div id="resume-container">

            <SectionContainer
                dark={false}
            >

                <SectionTitle
                    title="Resumo"
                />
                <ContentBlock
                    icon={faUser}
                    text="
                    Olá meu nome é Raphael e busco um lugar onde possa me desenvolver como programador e eventualmente possa ajudar meus colegas com seus problemas.Gosto muito da área de desenvolvimento de software,onde tive contato pela primeira vez no ensino médio, e tenho uma incessante vontade de expandir minhas habilidades na mesma.


                "
                />
            </SectionContainer>
        </div>
    );
}

export default Resume;