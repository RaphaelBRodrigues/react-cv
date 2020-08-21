import React from 'react';



import './style/styles.css';
import './style/media.css';



function SectionTitle({ title }){
    return (
        <div id="titleSection-container">
            <div></div>
            <h1>
                {title}
            </h1>
            <div></div>
        </div>
    );
}

export default SectionTitle;