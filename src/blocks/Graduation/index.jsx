import React from 'react';
import ContentBlock from '../../components/ContentBlock';
import SectionTitle from '../../components/SectionTitle';
import SectionContainer from '../../components/SectionContainer';

import logoUnasp from '../../assets/images/logoUnasp.jpeg';

import { faGraduationCap , faCircle } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';


import './style/styles.css';
import './style/media.css';



function Graduation() {
    return (
        <div id="graduation-container">

            <SectionContainer dark={true}>
                <SectionTitle title="Formação"/>
                <ContentBlock light icon={faGraduationCap}>
                    <div id="graduation-row">
                        <div>
                            <a href="https://www.unasp.br/">
                                <img src={logoUnasp} alt="Logo da UNASP" />
                            </a>
                        </div>
                        <div>
                            <h2>Ensino Médio Técnico</h2>
                            <h3> <cite> UNASP </cite> <small>2017-2019</small></h3>
                            <div>
                                <p>
                                    Ensino médio integrado ao técnico de informática realizado entre os anos
                                    de 2017 a 2019,o principal projeto desenvolvido neste período foi o PayPizza.
                                </p>
                            </div>
                        </div>
                    </div>
                </ContentBlock>
                <ContentBlock light icon={faGraduationCap}>
                    <div id="graduation-row">
                        <div>
                            <a href="https://www.unasp.br/">
                                <img src={logoUnasp} alt="Logo da UNASP" />
                            </a>
                        </div>
                        <div>
                            <h2>Bacharelado em Ciência da Computação</h2>
                            <h3> <cite> UNASP </cite> <small>2020-2023</small></h3>
                            <div>
                                <p>
                                    Ensino médio integrado ao técnico de informática realizado entre os anos
                                    de 2017 a 2019,o principal projeto desenvolvido neste período foi o PayPizza.
                                </p>
                            </div>
                        </div>
                    </div>
                </ContentBlock>
            </SectionContainer>
        </div>
    );
}

export default Graduation;