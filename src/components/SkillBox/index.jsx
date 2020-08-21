import React from 'react';
import './styles/styles.css';
import { useState, useEffect } from 'react';
import { handleSkillNivel } from './handlers/';


function SkillBox({ title, nivel, icon, soon, textNivel }) {

    nivel = soon ? 0 : nivel;
    const [skillNivel, setSkillNivel] = useState(0);
    const [increaseNivel, setIncreaseNivel] = useState(0);
    let skillContainer = {};

    useEffect(() => {
        skillContainer = document.getElementById("skill-container");
        if (increaseNivel == 1) {
            handleSkillNivel(nivel, setSkillNivel);
        }


    }, [increaseNivel]);





    if (increaseNivel === 0) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > skillContainer.offsetTop * 1.20) {
                setIncreaseNivel(1);
            }
        });
    }



    return (
        <div
            id="skill-container"
            className={soon ? "soon" : null}
        >
            <div>
                <p>{title}</p>
                <p>
                    {
                        !soon
                            ? (textNivel
                                ? `${textNivel}`
                                : `${skillNivel}%`)
                            : `Em breve`
                    }

                </p>
            </div>

            <div>
                <div style={
                    {
                        width: `${skillNivel}%`
                    }
                }></div>
            </div>
        </div>
    );
}


export { };
export default SkillBox;
