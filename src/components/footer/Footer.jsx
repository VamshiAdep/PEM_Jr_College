import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wave"></div>
      <div className="footer-content">
        <div className="footer-section-container">
          <div className="footer-section-about">
            <h1>P.E.M High School & Jr College</h1>
            <p>
              Shaping the future through education and excellence. Join us in
              building a better tomorrow.
            </p>
            <div className="social-icons">
              <button>
                <FaFacebook />
              </button>
              <button>
                <FaInstagram />
              </button>
              <button
                onClick={() => window.open("https://www.youtube.com/@vikasschool/featured", "_blank")}
              >
                <FaYoutube />
              </button>
              <button>
                <FaTwitter />
              </button>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <button onClick={() => alert("Admissions section coming soon!")}>Admissions</button>
              </li>
              <li>
                <button onClick={() => alert("Academics section coming soon!")}>Academics</button>
              </li>
              <li>
                <button onClick={() => alert("Events section coming soon!")}>Events</button>
              </li>
              <li>
                <button onClick={() => alert("Contact section coming soon!")}>Contact</button>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              <li>
                <button onClick={() => alert("Facilities section coming soon!")}>Facilities</button>
              </li>
              <li>
                <button onClick={() => alert("Curriculum section coming soon!")}>Curriculum</button>
              </li>
              <li>
                <button onClick={() => alert("Faculty section coming soon!")}>Faculty</button>
              </li>
              <li>
                <button onClick={() => alert("Capabilities section coming soon!")}>Capabilities</button>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Stay updated with school news and events.</p>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="newsletter-form"
            >
              <input
                type="hidden"
                name="access_key"
                value="99a36398-df7f-44fe-a4cd-eeccba85ab44"
              ></input>
              <input name="Email" type="email" placeholder="Your Email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} P.E.M High School & Jr College. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
