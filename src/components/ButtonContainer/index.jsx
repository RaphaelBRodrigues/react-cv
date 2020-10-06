import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus , faExternalLinkAlt , faHdd } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import TitleSection from '../SectionTitle';

import './style/styles.css';
import './style/media.css';



function ButtonContainer({ info , repo , www , urlRepo, urlWWW , showModal }){

    function showModal(){
        showModal = true;
        alert("Mostrar modal");
    }
    
return (
    <div className={"button-container"}>
        {info
            ? <button onClick={showModal} title={"Ver mais"}><FontAwesomeIcon icon={faPlus} /></button>
            : false
        }
        {repo
            ? <button title={"Repositório"} onClick={()=>window.open(urlRepo)}><FontAwesomeIcon icon={faHdd} /></button>
            : false
        }
        {www
            ? <button title={"Link externo"} onClick={()=>window.open(urlWWW)}><FontAwesomeIcon icon={faExternalLinkAlt} /></button>
            : false
        }
    </div>
);
}

export default ButtonContainer;