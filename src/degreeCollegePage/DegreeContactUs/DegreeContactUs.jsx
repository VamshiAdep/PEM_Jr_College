import React from 'react';
import './DegreeContactUs.css';

const DegreeContactUs = () => {
    return (
        <section className="degree-contact-section">
            <div className="degree-contact-container">
                <div className="degree-map-container">
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
                <div className="degree-contact-info">
                    <h2>CONTACT US</h2>
                    <p>We're open for any suggestion or just to have a chat</p>

                    <div className="degree-info-block">
                        <strong>📍 ADDRESS:</strong>
                        <p>
                            <b>P.E.M High School & Degree College</b><br />
                            Fehnegoan, Kamatghar, Bhiwandi,<br />
                            Thane  - 421302
                        </p>
                    </div>

                    <div className="degree-info-block">
                        <strong>📧 EMAIL:</strong>
                        <p>pemschool123@gmail.com</p>
                    </div>

                    <div className="degree-info-block">
                        <strong>📞 PHONE:</strong>
                        <p>+91 8655465553</p>
                    </div>

                    <form action="https://api.web3forms.com/submit" method="POST" className="degree-contact-form">
                        <input type="hidden" name="access_key" value="ebf082eb-d2ee-4219-8a8d-deb70a2f1639"></input>
                        <input type="text" name="name" placeholder="Name" required />
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="text" name="text" placeholder="Subject" required />
                        <textarea name="text" placeholder="Create a message here..." required></textarea>
                        <button type="submit">SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default DegreeContactUs;
