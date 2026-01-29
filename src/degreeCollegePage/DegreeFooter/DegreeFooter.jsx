import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import './DegreeFooter.css';

const DegreeFooter = () => {
    return (
        <footer className="degree-footer">
            <div className="footer-wave"></div>
            <div className="footer-content">
                <div className="footer-section-container">
                    <div className="footer-section-about">
                        <h1>P.E.M Degree College, Bhiwandi</h1>
                        <p>Shaping the future through education and excellence. Join us in building a better tomorrow.</p>
                        <div className="social-icons">
                            {/* Valid YouTube URL */}
                            <a href="https://www.youtube.com/@vikasschool/featured" target="_blank" rel="noopener noreferrer">
                                <FaYoutube />
                            </a>
                            {/* Placeholder buttons for other social media */}
                            <button onClick={() => alert('Facebook link coming soon!')}>
                                <FaFacebook />
                            </button>
                            <button onClick={() => alert('Instagram link coming soon!')}>
                                <FaInstagram />
                            </button>
                            <button onClick={() => alert('Twitter link coming soon!')}>
                                <FaTwitter />
                            </button>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><button onClick={() => alert('Admissions page coming soon!')}>Admissions</button></li>
                            <li><button onClick={() => alert('Academics page coming soon!')}>Academics</button></li>
                            <li><button onClick={() => alert('Events page coming soon!')}>Events</button></li>
                            <li><button onClick={() => alert('Contact page coming soon!')}>Contact</button></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Resources</h3>
                        <ul>
                            <li><button onClick={() => alert('Library page coming soon!')}>Library</button></li>
                            <li><button onClick={() => alert('Parent Portal page coming soon!')}>Parent Portal</button></li>
                            <li><button onClick={() => alert('Careers page coming soon!')}>Careers</button></li>
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
