import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGraduationCap , faSpinner , faCheck} from '@fortawesome/free-solid-svg-icons';
import {useState, useEffect} from 'react';
import TitleSection from '../SectionTitle';

import './style/styles.css';
import './style/media.css';
import logoUnasp from "../../assets/images/logoUnasp.jpeg";
import SectionContainer from "../SectionContainer";
import ContentBlock from "../ContentBlock";


function GradutionBox({logo,site, place,title,date, description,isFinished}) {
    return (
        <ContentBlock light icon={faGraduationCap}>
            <div id="graduation-row">
                <div>
                    <a target={"_blank"} href={site}>
                        <img src={logo} alt="Logo da UNASP"/>
                    </a>
                </div>
                <div>
                    <h2>{title}</h2>
                    <h3><cite> {place} </cite> <small>{date}</small></h3>
                    {false && (
                        <div>
                            <p>
                                {description}
                            </p>
                        </div>
                    )}
                </div>
                {isFinished
                    ? (
                        <div className={"graduation-status"}>
                            <FontAwesomeIcon icon={faCheck}/>
                        </div>
                    )
                    : (
                        <div className={"graduation-status inProgress"}>
                            <FontAwesomeIcon icon={faSpinner}/>
                        </div>
                    )
                }


            </div>
        </ContentBlock>
    );
}

export default GradutionBox;