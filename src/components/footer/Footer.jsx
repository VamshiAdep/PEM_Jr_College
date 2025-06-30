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
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@vikasschool/featured"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/SchoolAdmissions">Admissions</a>
              </li>
              <li>
                <a href="/Toppers">Academics</a>
              </li>
              <li>
                <a href="/Blog">Events</a>
              </li>
              <li>
                <a href="#ContactUs">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              <li>
                <a href="/SchoolFacilities">Facilities</a>
              </li>
              <li>
                <a href="/RightCurriculum">Curriculum</a>
              </li>
              <li>
                <a href="/RightFaculty">Faculty</a>
              </li>
              <li>
                <a href="/RightCapability">Capabilitys</a>
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
