import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <section className="contact-section">
            <div className="contact-container">
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps?q=P.E.M.+High+School+and+Jr+College,+Kamatghar,+Bhiwandi,+Maharashtra&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="contact-info">
                    <h2>CONTACT US</h2>
                    <p>We're open for any suggestion or just to have a chat</p>

                    <div className="info-block">
                        <strong>📍 ADDRESS:</strong>
                        <p>
                            <b>P.E.M High School & Jr College</b><br />
                            Fehnegoan, Kamatghar, Bhiwandi,<br />
                            Thane  - 421302
                        </p>
                    </div>

                    <div className="info-block">
                        <strong>📧 EMAIL:</strong>
                        <p>pemschool123@gmail.com</p>
                    </div>

                    <div className="info-block">
                        <strong>📞 PHONE:</strong>
                        <p>+91 8655465553</p>
                    </div>

                    <form className="contact-form">
                        <input type="text" placeholder="Name" required />
                        <input type="email" placeholder="Email" required />
                        <input type="text" placeholder="Subject" required />
                        <textarea placeholder="Create a message here..." required></textarea>
                        <button type="submit">SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
