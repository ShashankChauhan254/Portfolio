import React from 'react'
import './navbar.css'
import logo from '../../Assets/logo.png'
import contect_logo from '../../Assets/contect.svg'

const Navbar = () => {
    return (
        <nav className = 'navbar'>
            <img src={logo} alt='logo' className='logo' />
            <div className='decktopMenu'></div>
            <button className='contectButton'>
                <img src={contect_logo} alt='' className='contectIcon' />
                Contect Me
            </button>
        </nav>
    )
}

export default Navbar