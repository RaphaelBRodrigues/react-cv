import React from 'react';
import './styles/styles.css';
import { useState, useEffect } from 'react';


const SkillBox = ({ title, nivel, icon, soon, textNivel }) => {

    nivel = soon ? 0 : nivel;
    const [skillNivel, setSkillNivel] = useState(0);

    useEffect(() => {
        let i = 0;
        setInterval(() => {
            if (i <= nivel) {

                setTimeout(()=>{
                    setSkillNivel(i);
                    i++;
                });
                
            }
        }, 40);
    }, []);


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


export default SkillBox;