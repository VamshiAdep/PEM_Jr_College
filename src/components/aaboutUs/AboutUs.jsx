import React from 'react';
import './aboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-page">
            <div className="about-header">
                <h1>About Us</h1>
                <p>Empowering students with knowledge, values, and vision for the future.</p>
            </div>

            <div className="about-card-container">
                <div className="about-card">
                    <h2>Our Mission</h2>
                    <p>
                        To foster academic excellence, moral values, and holistic growth in every student. We are dedicated to providing a nurturing learning environment that builds character and skills for life.
                    </p>
                    {/* <button className="about-card-readMore">Read More...</button> */}
                </div>

                <div className="about-card">
                    <h2>Our Vision</h2>
                    <p>
                        To become a center of excellence that shapes confident, curious, and compassionate individuals, well-equipped to face the challenges of the modern world.
                    </p>
                    {/* <button className="about-card-readMore">Read More...</button> */}
                </div>

                <div className="about-card">
                    <h2>Why Choose Us?</h2>
                    <ul>
                        <li>Experienced and dedicated faculty</li>
                        <li>Modern infrastructure and resources</li>
                        <li>Focus on academic & life skills</li>
                        <li>Inclusive, safe learning environment</li>
                        <li>Strong ethical and cultural foundation</li>
                    </ul>
                    {/* <button className="about-card-readMore">Read More...</button> */}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
