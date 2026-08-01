import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../../Assets/Logo1.png';
import contact_logo from '../../Assets/contact.svg';
import { Link } from 'react-scroll';

const NAV_ITEMS = [
    { to: 'intro', label: 'Home' },
    { to: 'About', label: 'About Me' },
    { to: 'Education', label: 'Education' },
    { to: 'Experience', label: 'Experience' },
    { to: 'Skills', label: 'Skills' },
    { to: 'Project', label: 'Projects' },
    { to: 'ResearchPaper', label: 'Research Paper' },
    { to: 'Positions', label: 'PORs' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // lock body scroll while the mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <img src={logo} alt='logo' className='logo' />

            <div className={`decktopMenu ${menuOpen ? 'open' : ''}`}>
                {NAV_ITEMS.map((item, i) => (
                    <Link
                        key={item.to}
                        to={item.to}
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-70}
                        activeClass='activeLink'
                        className='decktopMenuItems'
                        style={{ '--i': i }}
                        onClick={closeMenu}
                    >
                        {item.label}
                    </Link>
                ))}
                <Link
                    to='Contact'
                    smooth={true}
                    duration={500}
                    className='contactButton mobileOnly'
                    onClick={closeMenu}
                    style={{ '--i': NAV_ITEMS.length }}
                >
                    <img src={contact_logo} alt='Contact Icon' className='contactIcon' />
                    Contact Me
                </Link>
            </div>

            <Link to='Contact' smooth={true} duration={500} className='contactButton decktopOnly'>
                <img src={contact_logo} alt='Contact Icon' className='contactIcon' />
                Contact Me
            </Link>

            <button
                className={`menuToggle ${menuOpen ? 'open' : ''}`}
                onClick={() => setMenuOpen(prev => !prev)}
                aria-label='Toggle menu'
                aria-expanded={menuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {menuOpen && <div className='menuBackdrop' onClick={closeMenu}></div>}
        </nav>
    );
};

export default Navbar;