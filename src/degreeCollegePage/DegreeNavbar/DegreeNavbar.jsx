import React, { useState } from 'react';
import './DegreeNavbar.css';
import logo from '../../components/assets/TSSS-Logo.jpg';
import { Link } from 'react-router-dom';

const DegreeNavbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className="degree-navbar-container">
            <div className="degree-marquee">
                <div className="degree-marquee-content">
                    Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div className="degree-marquee-content">
                    Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
            </div>

            <nav className="degree-navbar">
                <div className="degree-navbar-header-container">
                    <div className="degree-navbar-header">
                        <div className='degree-logo-container'>
                            <img className='degree-logo' src={logo} alt="Logo" />
                        </div>
                        <div className='degree-title-container'>
                            <h5 className="degree-school-name">P.E.M Degree College, Bhiwandi</h5>
                            <p className="degree-school-address">Afflilated To University Of Mumbai College Code: 1242</p>
                        </div>
                    </div>
                    <div className="degree-menu-icon" onClick={toggleMenu}>
                        <p> ☰</p>
                        <p style={{ fontSize: '0.7rem' }}>Menu</p>
                    </div>
                    <div className={`degree-navbar-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
                    <div className={`degree-nav-links ${isMenuOpen ? 'show' : ''}`}>
                        <a href="#" className="degree-nav-link" onClick={closeMenu}>Home</a>
                        <a href="#AboutUs" className="degree-nav-link" onClick={closeMenu}>About Us</a>
                        <a href="#Program" className="degree-nav-link" onClick={closeMenu}>Program</a>
                        <a href="#Campus" className="degree-nav-link" onClick={closeMenu}>Campus</a>
                        <a href="#contactUs" className="degree-nav-link" onClick={closeMenu}>Contact Us</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default DegreeNavbar;