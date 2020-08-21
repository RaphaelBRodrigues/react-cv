import React from 'react';
import ContentBlock from '../../components/ContentBlock';
import SectionTitle from '../../components/SectionTitle';
import SectionContainer from '../../components/SectionContainer';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';


import './style/styles.css';
import './style/media.css';



function Resume(){
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
                    {/* <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="pt_BR" data-type="horizontal" data-theme="dark" data-vanity="raphael-b-rodrigues-08b02889"><a class="LI-simple-link" href='https://br.linkedin.com/in/raphael-b-rodrigues-08b02889?trk=profile-badge'>Raphael B. Rodrigues</a></div> */}

            </SectionContainer>
        </div>
    );
}

export default Resume;