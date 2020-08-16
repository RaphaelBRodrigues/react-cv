import React from 'react';



import './style/styles.css';
import './style/media.css';



const TitleSection = ({ title }) => {
    return (
        <div id="titleSection-container">
            <h1>
                {title}
                <div></div>
            </h1>
        </div>
    );
}

export default TitleSection;