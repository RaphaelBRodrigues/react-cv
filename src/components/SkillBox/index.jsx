import React from 'react';
import './styles/styles.css';


const SkillBox = ({ title, nivel, icon }) => {
    // nivel = 0;
    return (
        <div id="skill-container">
            <div>
                <p>{title}</p>
                <p>{nivel}%</p>
            </div>

            <div>
                <div style={
                    {
                        width:`${nivel}%`
                    }
                }></div>
            </div>
        </div>
    );
}


export default SkillBox;