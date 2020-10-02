import React from 'react';
import ContentBlock from '../../components/ContentBlock';
import SectionTitle from '../../components/SectionTitle';
import SectionContainer from '../../components/SectionContainer';

import logoUnasp from '../../assets/images/logoUnasp.jpeg';

import { faGraduationCap , faCheck , faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';


import './style/styles.css';
import './style/media.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import GradutionBox from "../../components/GraduationBox";



function Graduation() {
    return (
        <div id="graduation-container">

            <SectionContainer dark={true}>
                <SectionTitle title="Formação"/>
                <GradutionBox
                    isFinished
                    logo={logoUnasp}
                    site={"https://www.unasp.br/"}
                    title={"Ensino Médio Técnico"}
                    place={"UNASP"}
                    date={"2017-2019"}
                    description={" Ensino médio integrado ao técnico de informática realizado entre os anos\n" +
                    "de 2017 a 2019,o principal projeto desenvolvido neste período foi o PayPizza."}

                />
                <GradutionBox
                    logo={logoUnasp}
                    site={"https://www.unasp.br/"}
                    title={"Bacharelado em Ciência da Computação"}
                    place={"UNASP"}
                    date={"2020-2023"}
                    description={" Ensino médio integrado ao técnico de informática realizado entre os anos\n" +
                    "de 2017 a 2019,o principal projeto desenvolvido neste período foi o PayPizza."}

                />
            </SectionContainer>
        </div>
    );
}

export default Graduation;