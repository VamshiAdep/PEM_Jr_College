import React, { useState } from 'react';
import './navbar.css';
import logo from '../assets/TSSS-Logo.jpg';
import { FaChevronDown, FaDownload } from 'react-icons/fa';

const Navbar = () => {
    const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);
    const [isAcademicsDropdownOpen, setAcademicsDropdownOpen] = useState(false);
    const [isAddmissionDropdownOpen, setAddmissionDropdownOpen] = useState(false);
    const [isWhyPEM, setWhyPEM] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const isMobile = window.innerWidth <= 768;  // You can adjust 768px to match your mobile breakpoint


    const toggleAboutDropdown = () => setAboutDropdownOpen(!isAboutDropdownOpen);
    const toggleAddmissionDropdown = () => setAddmissionDropdownOpen(!isAddmissionDropdownOpen);
    const toggleWhyPEM = () => setWhyPEM(!isWhyPEM);
    const toggleAcademicsDropdown = () => setAcademicsDropdownOpen(!isAcademicsDropdownOpen);
    const toggleMenu = () => setMenuOpen(!isMenuOpen);
    const closeMenu = () => setMenuOpen(false);

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

            <nav className='navbar-header-container'>
                <div className="navbar-header">
                    <div className="navbar-title">
                        <div className="navbar-title-conatainer">
                            <div className="image-container">
                                <img className="image" src={logo} alt="Logo" />
                            </div>
                            <div className="text-container">
                                <h5 className="navbar-brand">P.E.M. High School & Jr College</h5>
                                <p className="navbar-adress">Near Fehnegaon, Kamatghar, Bhiwandi, Thane 421302</p>
                            </div>
                        </div>
                        <div className="college-navbar-title-conatainer">
                            <div className="image-container">
                                <img className="image" src={logo} alt="Logo" />
                            </div>
                            <div className="text-container">
                                <h5 className="navbar-brand">P.E.M. Degree College, Bhiwandi</h5>
                                <p className="navbar-adress">Affiliated To University Of Mumbai College Code: 1242</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="navbar-navigation">
                    <div className="menu-icon" onClick={toggleMenu}>
                        ☰
                        <p style={{ fontSize: '0.7rem' }}>Menu</p>
                    </div>
                    <div className={`navbar-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>

                    <div className={`navbar-links ${isMenuOpen ? 'show' : ''}`}>
                        <a href="/" className="nav-link" onClick={closeMenu}>Home</a>

                        <div className="nav-link"
                            onMouseEnter={toggleAboutDropdown} onMouseLeave={toggleAboutDropdown}
                            onClick={isMobile ? toggleAboutDropdown : undefined}
                        >
                            About Us <FaChevronDown size={14} color="#000" />
                            {isAboutDropdownOpen && (
                                <div className="dropdown-menu">
                                    <a href="#aboutus" className="dropdown-item" onClick={closeMenu}>About School</a>
                                    <a href="/management" className="dropdown-item" onClick={closeMenu}>Our Management</a>
                                    <a href="/ChairmanMessage" className="dropdown-item" onClick={closeMenu}>Chairman's Message</a>
                                    <a href="/OurPrincipalsView" className="dropdown-item" onClick={closeMenu}>Principal's Desk</a>
                                    <a href="/Facility" className="dropdown-item" onClick={closeMenu}>P.E.M. Intiatives</a>
                                    {/* <a href="/awards" className="dropdown-item" onClick={closeMenu}>Awards</a> */}
                                    {/* <a href="/Broucher" className="dropdown-item" onClick={closeMenu}>School Broucher</a> */}
                                </div>
                            )}
                        </div>

                        <div className="nav-link"
                            onMouseEnter={toggleAcademicsDropdown} onMouseLeave={toggleAcademicsDropdown}
                            onClick={isMobile ? toggleAcademicsDropdown : undefined}
                        >
                            Academics <FaChevronDown size={14} color="#000" />
                            {isAcademicsDropdownOpen && (
                                <div className="dropdown-menu">
                                    <a href="/RightCurriculum" className="dropdown-item" onClick={closeMenu}>Curriculum</a>
                                    <a href="/Toppers" className="dropdown-item" onClick={closeMenu}>Toppers</a>
                                    {/* <a href="#Calender" className="dropdown-item" onClick={closeMenu}>Calender</a> */}
                                </div>
                            )}
                        </div>

                        <div className="nav-link"
                            onMouseEnter={toggleWhyPEM} onMouseLeave={toggleWhyPEM}
                            onClick={isMobile ? toggleWhyPEM : undefined}
                        >
                            Why P.E.M. <FaChevronDown size={14} color="#000" />
                            {isWhyPEM && (
                                <div className="dropdown-menu">
                                    <a href="/RightCurriculum" className="dropdown-item" onClick={closeMenu}>The Right Curriculum</a>
                                    <a href="/RightFaculty" className="dropdown-item" onClick={closeMenu}>The Right Faculty</a>
                                    <a href="/SchoolFacilities" className="dropdown-item" onClick={closeMenu}>The School Facilities</a>
                                    <a href="/RightCapability" className="dropdown-item" onClick={closeMenu}>The Right Capability</a>
                                </div>
                            )}
                        </div>

                        <div className="nav-link"
                            onMouseEnter={toggleAddmissionDropdown} onMouseLeave={toggleAddmissionDropdown}
                            onClick={isMobile ? toggleAddmissionDropdown : undefined}
                        >
                            Admissions <FaChevronDown size={14} color="#000" />
                            {isAddmissionDropdownOpen && (
                                <div className="dropdown-menu">
                                    <a href="/SchoolAdmissions" className="dropdown-item" onClick={closeMenu}>Addmissions For Schools 2025-26</a>
                                    <a href="/JrCollegeAdmissions" className="dropdown-item" onClick={closeMenu}>Addmissions For Jr College 2025-26</a>
                                    <a href="/CollegeAdmissions" className="dropdown-item" onClick={closeMenu}>Addmissions For Dgr College 2025-26</a>
                                </div>
                            )}
                        </div>

                        <a href="/degreecollege" className="nav-link" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Degree College</a>
                        <a href="/CertificateApply" className="nav-link" onClick={closeMenu}>Certificate Apply</a>
                        <a href="/Blog" className="nav-link" onClick={closeMenu}>Blogs</a>
                        <a href="#ContactUs" className="nav-link" onClick={closeMenu}>Contact Us</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
