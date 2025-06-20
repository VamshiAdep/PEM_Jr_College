import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import './DegreeFooter.css';

const DegreeFooter = () => {
    return (
        <footer className="digree-footer">
            <div className="footer-wave"></div>
            <div className="footer-content">
                <div className="footer-section-container">
                    <div className="footer-section-about">
                        <h1>P.E.M Degree College, Bhiwandi</h1>
                        <p>Shaping the future through education and excellence. Join us in building a better tomorrow.</p>
                        <div className="social-icons">
                            <a href="#"><FaFacebook /></a>
                            <a href="#"><FaInstagram /></a>
                            <a
                                href="https://www.youtube.com/@vikasschool/featured"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaYoutube />
                            </a>
                            <a href="#"><FaTwitter /></a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#Hero">Admissions</a></li>
                            <li><a href="#">Academics</a></li>
                            <li><a href="#">Events</a></li>
                            <li><a href="#contactUs">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Resources</h3>
                        <ul>
                            <li><a href="#">Library</a></li>
                            <li><a href="#">Parent Portal</a></li>
                            {/* <li><a href="#">Student Login</a></li> */}
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Newsletter</h3>
                        <p>Stay updated with school news and events.</p>
                        <form className="newsletter-form">
                            <input type="email" placeholder="Your Email" />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="footer-bottom">
                    &copy; {new Date().getFullYear()} P.E.M High School & Jr College. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default DegreeFooter;
