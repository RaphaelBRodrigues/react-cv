import React from 'react';
import ContentBlock from '../../components/ContentBlock';
import SectionTitle from '../../components/SectionTitle';
import SectionContainer from '../../components/SectionContainer';

import FVets from '../../assets/images/FVets.png';

import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';


import './style/styles.css';
import './style/media.css';



function Graduation() {
    return (
        <div style={{"display":"none"}} id="career-container">

            <SectionContainer
                dark={false}
            >

                <SectionTitle
                    title="Formação"
                />
                <ContentBlock 
                    icon={faBriefcase}
                    text="


                "
                >
                    <div>
                        <img src={FVets} alt="Logo da 4Vets" />
                        <h2>4Vets</h2>
                        <h3>Comércio Eletrônico</h3>
                    </div>
                    <div>
                        <h4>Programador Jr.</h4>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, se
                        </p>
                        <ul>
                            <li>
                                Função 1
                            </li>

                            <li>
                                Função 2
                            </li>

                            <li>
                                Função 3
                            </li>
                        </ul>

                    </div>
                    <p>
                        03/20
                    </p>
                </ContentBlock>
                {/* <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="pt_BR" data-type="horizontal" data-theme="dark" data-vanity="raphael-b-rodrigues-08b02889"><a class="LI-simple-link" href='https://br.linkedin.com/in/raphael-b-rodrigues-08b02889?trk=profile-badge'>Raphael B. Rodrigues</a></div> */}

            </SectionContainer>
        </div>
    );
}

export default Graduation;