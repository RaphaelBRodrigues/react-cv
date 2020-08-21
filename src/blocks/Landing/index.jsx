import React, { useState } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser , faScroll , faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import foto from '../../assets/images/foto.jpeg';

import './styles.css';
import './media.css';

function Landing(){
    return (
        <div id="landing-container">
               <div id="landing-fita">
               {'<'} DESENVOLVEDOR {'/>'}
            </div>
            <div id="photo-container">
                <img src={foto} alt="" />
                <button> <p>Currículo<i><FontAwesomeIcon icon={faScroll} /></i> </p></button>
                <button><p>Telefone<i><FontAwesomeIcon icon={faPhoneAlt} /> </i> </p></button>
                <p>{'{ '}Raphael B. Rodrigues {' }'}</p>
            </div>
            
        </div>
    );
}

export default Landing;

