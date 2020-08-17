import React, { Fragment } from 'react';
import ContentBlock from '../../components/ContentBlock';
import SectionTitle from '../../components/SectionTitle';
import SectionContainer from '../../components/SectionContainer';

import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

import Skill from '../../components/SkillBox';

import './style/styles.css';
import './style/media.css';



const Skills = () => {
    return (
        <div id="skills-container">
            <SectionContainer dark double>
                <SectionTitle
                    title="Skills"
                />
                <div id="skills-block-container">
                    <div>
                        <ContentBlock icon={faChartLine} title="Back-end">
                            <Skill title="PHP" nivel={70} icon={faChartLine} />
                            <Skill title="MySQL" nivel={60} icon={faChartLine} />
                            <Skill title="HTML" nivel={65} icon={faChartLine} />
                            <Skill title="CSS" nivel={62} icon={faChartLine} />
                        </ContentBlock>
                        <ContentBlock icon={faChartLine} title="Javascript">
                            <Skill title="React" nivel={50} icon={faChartLine} />
                            <Skill title="React Native" nivel={50} icon={faChartLine} />
                            <Skill title="Node.Js" nivel={50} icon={faChartLine} />
                            <Skill title="MongoDB" nivel={50} icon={faChartLine} />
                        </ContentBlock>
                    </div>
                    <div>
                    <ContentBlock icon={faChartLine}>s
                        <Skill title="React" nivel={50} icon={faChartLine} />
                        <Skill title="React Native" nivel={50} icon={faChartLine} />
                        <Skill title="Node.Js" nivel={50} icon={faChartLine} />
                        <Skill title="MongoDB" nivel={50} icon={faChartLine} />
                    </ContentBlock>
                    </div>


                </div>
            </SectionContainer>
        </div>

    );
}

export default Skills;