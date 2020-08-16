
import Landing from '../Landing/';
import Resume from '../Resume/';
import Skills from '../Skills/';

import React from 'react';
import './style/styles.css';

const Content = () => {
    return (
        <>
            <main id="content">
                <Landing />
                <Resume />
                <Skills />
            </main>
        </>
    );
}


export default Content;