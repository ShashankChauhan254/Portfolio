import React from 'react';
import './intro.css';
import bg from '../../Assets/My.png';
import { ReactTyped } from 'react-typed';
import { Link } from 'react-scroll';
import ResumeLogo from '../../Assets/Resume.png'

const Intro = () => {
    return (
        <selection id='intro'>
            <div className='IntroContent'>
                <span className='hello'>Hello,<br /></span>
                <span className='introText'>I'm <span className='introName'>Shashank</span><br />
                <ReactTyped 
                  className='profession' 
                  strings={["Software Developer", "Game Developer", "ML-DL Engineer", "Web Developer"]} 
                  typeSpeed={100} 
                  backSpeed={30} 
                  loop={true} 
                  cursorChar='|' 
                  showCursor={true} 
                />
                </span>
                <p className='introPara'></p>
                <Link>
                <button className='btn'>
                    <img src={ResumeLogo} alt='Resume' className='ResumeLogo' />Resume
                </button>
                </Link>
            </div>
            <img src={bg} alt="Portfolio" className='bg' />
        </selection>
    )
}

export default Intro;