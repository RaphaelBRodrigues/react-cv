
import Landing from '../blocks/Landing/';
import Resume from '../blocks/Resume/';
import Skills from '../blocks/Skills/';
import Projects from '../blocks/Projects/';
import Career from '../blocks/Career/';
import Graduation from '../blocks/Graduation/';

import React from 'react';
import './style/styles.css';

function Content(){
    return (
        <>
            <main id="content">
                <Landing />
                <Resume />
                <Skills />
                <Projects />
                <Graduation />
                <Career />
            </main>
        </>
    );
}


export default Content;