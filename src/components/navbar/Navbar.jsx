import React, { useState } from 'react';
import './navbar.css';
import logo from '../assets/TSSS-Logo.jpg';

const Navbar = () => {
    const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);
    const [isAcademicsDropdownOpen, setAcademicsDropdownOpen] = useState(false);

    const toggleAboutDropdown = () => {
        setAboutDropdownOpen(!isAboutDropdownOpen);
    };

    const toggleAcademicsDropdown = () => {
        setAcademicsDropdownOpen(!isAcademicsDropdownOpen);
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
                        <h5 href="#home" className="navbar-brand">P.E.M High School & Jr College</h5>
                        <p className="navbar-adress">Near Fehnegaon, Kamatghar, Bhiwandi, Thane 421302</p>
                    </div>
                </div>
                <div className="menu-icon" >
                    ☰
                </div>

                <div className="navbar-links">
                    <a href="#home" className="nav-link">Home</a>
                    <div className="nav-link" onMouseEnter={toggleAboutDropdown} onMouseLeave={toggleAboutDropdown}>
                        About Us
                        {isAboutDropdownOpen && (
                            <div className="dropdown-menu">
                                <a href="#AboutUs" className="dropdown-item">About School</a>
                                <a href="#director-message" className="dropdown-item">Director's Message</a>
                                <a href="#principal-message" className="dropdown-item">Principal's Message</a>
                                <a href="#facility" className="dropdown-item">Facility</a>
                            </div>
                        )}
                    </div>
                    <div className="nav-link" onMouseEnter={toggleAcademicsDropdown} onMouseLeave={toggleAcademicsDropdown}>
                        Academics
                        {isAcademicsDropdownOpen && (
                            <div className="dropdown-menu">
                                <a href="#curriculum" className="dropdown-item">Curriculum</a>
                                <a href="#toppers" className="dropdown-item">Toppers</a>
                                <a href="#circulars" className="dropdown-item">Circulars</a>
                                <a href="#newsletter" className="dropdown-item">Newsletter</a>
                            </div>
                        )}
                    </div>
                    <a href="#admissions" className="nav-link">Admissions</a>
                    <a href="#contact" className="nav-link">Contact Us</a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
