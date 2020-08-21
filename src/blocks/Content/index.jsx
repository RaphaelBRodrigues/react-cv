
import Landing from '../Landing/';
import Resume from '../Resume/';
import Skills from '../Skills/';
import Projects from '../Projects/';

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
            </main>
        </>
    );
}


export default Content;