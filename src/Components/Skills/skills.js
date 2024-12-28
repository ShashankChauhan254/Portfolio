import React from 'react';
import './skills.css';
import GameLogo from '../../Assets/Game.png';
import MLDLLogo from '../../Assets/MLDL.png';
import WebLogo from '../../Assets/Web.png'

const Skills = () => {
    return (
        <section id = 'skills'>
            <span className='Title'>Skills</span>
            <div className='SkillBars'>
                <div className='SkillBar'>
                    <img src={GameLogo} alt='' className='skillBarImg' />
                    <div className='SkillName'><h2>Game Development</h2></div>
                </div>
                <div className='SkillBar'>
                    <img src={MLDLLogo} alt='' className='skillBarImg' />
                    <div className='SkillName'><h2>ML/DL</h2></div>
                </div>
                <div className='SkillBar'>
                    <img src={WebLogo} alt='' className='skillBarImg' />
                    <div className='SkillName'><h2>Web Development</h2></div>
                </div>
            </div>
        </section>
    );
}

export default Skills
