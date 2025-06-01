import React, { useState } from 'react';
import './navbar.css';
import logo from '../assets/TSSS-Logo.jpg';
import { href } from 'react-router-dom';

const Navbar = () => {
    const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);
    const [isAcademicsDropdownOpen, setAcademicsDropdownOpen] = useState(false);
    const [isAddmissionDropdownOpen, setAddmissionDropdownOpen] = useState(false);
    const [isWhyPEM, setWhyPEM] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleAboutDropdown = () => {
        setAboutDropdownOpen(!isAboutDropdownOpen);
    };

    const toggleAddmissionDropdown = () => {
        setAddmissionDropdownOpen(!isAddmissionDropdownOpen);
    };

    const toggleWhyPEM = () => {
        setWhyPEM(!isWhyPEM);
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
            <nav>
                <div className="navbar-header">
                    <div className="navbar-title">
                        <div className='navbar-title-conatainer'>
                            <div className='image-container'>
                                <img className='image' src={logo} alt="Logo" />
                            </div>
                            <div className='text-container'>
                                <h5 href="/" className="navbar-brand">P.E.M. High School & Jr College</h5>
                                <p className="navbar-adress">Near Fehnegaon, Kamatghar, Bhiwandi, Thane 421302</p>
                            </div>
                        </div>
                        <div className='navbar-title-conatainer'>
                            <div className='image-container'>
                                <img className='image' src={logo} alt="Logo" />
                            </div>
                            <div className='text-container'>
                                <h5 href="/" className="navbar-brand">P.E.M. Degree College, Bhiwandi</h5>
                                <p className="navbar-adress">Afflilated To University Of Mumbai College Code: 1242</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-navigation">
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
                                    <a href="/management" className="dropdown-item" onClick={closeMenu}>Our Management</a>
                                    <a href="/ChairmanMessage" className="dropdown-item" onClick={closeMenu}>Chairman's Messsage</a>
                                    <a href="/OurPrincipalsView" className="dropdown-item" onClick={closeMenu}>Principal's Desk</a>
                                    <a href="#facility" className="dropdown-item" onClick={closeMenu}>P.E.M. Intiatives</a>
                                    <a href="#Awards" className="dropdown-item" onClick={closeMenu}>Awards</a>
                                    <a href="#SchoolBroucher" className="dropdown-item" onClick={closeMenu}>School Broucher</a>
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
                        <div className="nav-link" onMouseEnter={toggleWhyPEM} onMouseLeave={toggleWhyPEM} >
                            Why P.E.M.
                            {isWhyPEM && (
                                <div className="dropdown-menu">
                                    <a href="#curriculum" className="dropdown-item" onClick={closeMenu}>The Right Curriculum</a>
                                    <a href="#toppers" className="dropdown-item" onClick={closeMenu}>The Right Faculity </a>
                                    <a href="#circulars" className="dropdown-item" onClick={closeMenu}>The School Facilitys</a>
                                    {/* school infra structure , edutech , our labs, our labrary, transport facilitys */}
                                    <a href="#newsletter" className="dropdown-item" onClick={closeMenu}>The Right Capability</a>
                                </div>
                            )}
                        </div>
                        <div className="nav-link" onMouseEnter={toggleAddmissionDropdown} onMouseLeave={toggleAddmissionDropdown} >
                            Admissions
                            {isAddmissionDropdownOpen && (
                                <div className="dropdown-menu">
                                    <a href="#Addmissions" className="dropdown-item" onClick={closeMenu}>Addmissions Open For Schools 2025-26</a>
                                    <a href="#Addmissions" className="dropdown-item" onClick={closeMenu}>Addmissions Open For Jr College 2025-26</a>
                                    <a href="#Addmissions" className="dropdown-item" onClick={closeMenu}>Addmissions Open For Dgr College 2025-26</a>
                                </div>
                            )}
                        </div>
                        <a href="#DegreeCollege" className="nav-link" onClick={closeMenu}>Degree College</a>
                        <a href="#Blogs" className="nav-link" onClick={closeMenu}>Blogs</a>
                        <a href="#ContactUs" className="nav-link" onClick={closeMenu}>Contact Us</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;