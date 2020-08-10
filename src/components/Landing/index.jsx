import React, { useState } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser , faScroll , faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import foto from '../../assets/images/foto.jpeg';

import './styles.css';
import './media.css';

const Landing = () => {
    return (
        <div id="landing-container">
               <div id="landing-fita">
                DESENVOLVEDOR
            </div>
            <div id="photo-container">
                <img src={foto} alt="" />
                <button><i><FontAwesomeIcon icon={faScroll} /></i> CV</button>
                <button><i><FontAwesomeIcon icon={faPhoneAlt} /> </i> Telefone</button>
                <p>Raphael B. Rodrigues</p>
            </div>
        </div>
    );
}

export default Landing;

//tomada ligando os blocos