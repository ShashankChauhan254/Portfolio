import React from 'react';
import './intro.css';
import bg from '../../Assets/My.png';
import ReactTyped from 'react-typed';
import { Link } from 'react-scroll';
import ResumeLogo from '../../Assets/Resume.png'
import Resume from '../../Assets/Resume.pdf';
const Intro = () => {
    return (
        <selection id='intro'>
            <div className='IntroContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>Shashank</span><br /><ReactTyped className='profession' string={["Software Developer", "Game Developer", "ML-DL Engineer", "Web Developer"]} typeSpeed={100} backSpeed={30} loop cursorChar='|' showCoursor={true}/></span>
                <p className='introPara'></p>
                <Link><button className='btn'><img src={ResumeLogo} art="Resume" className='ResumeLogo' />Resume</button></Link>
            </div>
            <img src={bg} alt="Portfolio" className='bg' />
        </selection>
    )
}

export default Intro;