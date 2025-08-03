import React from 'react';
import './intro.css';
import bg from '../../Assets/profile.jpg';
import { ReactTyped } from 'react-typed';
import ResumeLogo from '../../Assets/Resume.png'

const Intro = () => {
    return (
        <selection id='intro'>
            <img src={bg} alt="Portfolio" className='bg' />
            <div className='IntroContent'>
                <span className='hello'>Hello,<br /></span>
                <span className='introText'>I'm <span className='introName'>Shashank</span><br />
                <ReactTyped 
                  className='profession' 
                  strings={["Data Analyst","ML-DL Engineer", "Web Developer", "Software Engineer", "Game Developer"]} 
                  typeSpeed={100} 
                  backSpeed={30} 
                  loop={true} 
                  cursorChar='|' 
                  showCursor={true} 
                />
                </span>
                <p className='introPara'></p>
                <a href='/Resume.pdf' target='_blank' rel='noopener noreferrer'>
                  <button className='btn'>
                    <img src={ResumeLogo} alt='Resume' className='ResumeLogo' />
                    Resume
                  </button>
                </a>
            </div>
        </selection>
    )
}

export default Intro;