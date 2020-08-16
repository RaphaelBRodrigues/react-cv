import React from 'react';
import ContentBlock from '../../components/ContentBlock';
import TitleSection from '../../components/TitleSection';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';


 import './style/styles.css';
 import './style/media.css';



 const Resume = () => {
     return(
         <div id="resume-container">
             <TitleSection 
                title="Resumo"
             />
             <ContentBlock
                icon={faUser}
                text="
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.
                "
             />
         </div>
     );
 }

export default Resume;