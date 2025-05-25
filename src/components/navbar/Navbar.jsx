import React, { useState } from 'react';
import './navbar.css';
import logo from '../assets/TSSS-Logo.jpg';
import { href } from 'react-router-dom';

const Navbar = () => {
    const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);
    const [isAcademicsDropdownOpen, setAcademicsDropdownOpen] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleAboutDropdown = () => {
        setAboutDropdownOpen(!isAboutDropdownOpen);
    };

    const toggleAcademicsDropdown = () => {
        setAcademicsDropdownOpen(!isAcademicsDropdownOpen);
    };

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className="navbar-main-container">
            <div className="admission-marquee">
                <div className="marquee-wrapper">
                    <div className="marquee">
                        Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div className="marquee">
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
            </div>
            <nav className="navbar">
                <div className="navbar-title">
                    <div className='image-container'>
                        <img className='image' src={logo} alt="Logo" />
                    </div>
                    <div className='text-container'>
                        <h5 href="/" className="navbar-brand">P.E.M High School & Jr College</h5>
                        <p className="navbar-adress">Near Fehnegaon, Kamatghar, Bhiwandi, Thane 421302</p>
                    </div>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    ☰
                </div>
                <div className={`navbar-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
                <div className={`navbar-links ${isMenuOpen ? 'show' : ''}`}>
                    <a href="/" className="nav-link" onClick={closeMenu}>Home</a>
                    <div className="nav-link" onMouseEnter={toggleAboutDropdown} onMouseLeave={toggleAboutDropdown} >
                        About Us
                        {isAboutDropdownOpen && (
                            <div className="dropdown-menu">
                                <a href="#aboutus" className="dropdown-item" onClick={closeMenu}>About School</a>
                                <a href="/management" className="dropdown-item" onClick={closeMenu}>Director's Message</a>
                                <a href="/OurPrincipalsView" className="dropdown-item" onClick={closeMenu}>Principal's Message</a>
                                <a href="#facility" className="dropdown-item" onClick={closeMenu}>Facility</a>
                            </div>
                        )}
                    </div>
                    <div className="nav-link" onMouseEnter={toggleAcademicsDropdown} onMouseLeave={toggleAcademicsDropdown} >
                        Academics
                        {isAcademicsDropdownOpen && (
                            <div className="dropdown-menu">
                                <a href="#curriculum" className="dropdown-item" onClick={closeMenu}>Curriculum</a>
                                <a href="#toppers" className="dropdown-item" onClick={closeMenu}>Toppers</a>
                                <a href="#circulars" className="dropdown-item" onClick={closeMenu}>Circulars</a>
                                <a href="#newsletter" className="dropdown-item" onClick={closeMenu}>Newsletter</a>
                            </div>
                        )}
                    </div>
                    <a href="#admissions" className="nav-link" onClick={closeMenu}>Admissions</a>
                    <a href="#ContactUs" className="nav-link" onClick={closeMenu}>Contact Us</a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;