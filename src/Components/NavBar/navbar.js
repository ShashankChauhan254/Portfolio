import React from 'react'
import './navbar.css'
import logo from '../../Assets/Logo1.png'
import contect_logo from '../../Assets/contect.svg'
import {Link} from 'react-scroll'

const Navbar = () => {
    return (
        <nav className = 'navbar'>
            <img src={logo} alt='logo' className='logo' />
            <div className='decktopMenu'>
                <Link className='decktopMenuItems'>Home</Link>
                <Link className='decktopMenuItems'>About Me</Link>
                <Link className='decktopMenuItems'>Education</Link>
                <Link className='decktopMenuItems'>Skills</Link>
                <Link className='decktopMenuItems'>Project</Link>
                <Link className='decktopMenuItems'>Research Paper</Link>
                <Link className='decktopMenuItems'>Positons</Link>
            </div>
            <button className='contectButton'>
                <img src={contect_logo} alt='' className='contectIcon' />
                Contect Me
            </button>
        </nav>
    )
}

export default Navbar