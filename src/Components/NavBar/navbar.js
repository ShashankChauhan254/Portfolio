import React from 'react';
import './navbar.css';
import logo from '../../Assets/Logo1.png';
import contact_logo from '../../Assets/contact.svg';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt='logo' className='logo' />
            <div className='decktopMenu'>
                <Link to='intro' smooth={true} duration={500} className='decktopMenuItems'>Home</Link>
                <Link to='About' smooth={true} duration={500} className='decktopMenuItems'>About Me</Link>
                <Link to='education' smooth={true} duration={500} className='decktopMenuItems'>Education</Link>
                <Link to='skills' smooth={true} duration={500} className='decktopMenuItems'>Skills</Link>
                <Link to='Project' smooth={true} duration={500} className='decktopMenuItems'>Project</Link>
                <Link to='ResearchPaper' smooth={true} duration={500} className='decktopMenuItems'>Research Paper</Link>
                <Link to='Positions' smooth={true} duration={500} className='decktopMenuItems'>Positions</Link>
            </div>
            <Link to='Contact' smooth={true} duration={500} className='contactButton'>
                <img src={contact_logo} alt='Contact Icon' className='contactIcon' />
                Contact Me
            </Link>
        </nav>
    );
};

export default Navbar;
