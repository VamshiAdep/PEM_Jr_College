import React, { useEffect, useState } from 'react';
import './DegreeHero.css';

const images = [
    require('../../components/assets/carouselImages/image1.jpg'),
    require('../../components/assets/carouselImages/image2.jpg'),
    require('../../components/assets/carouselImages/image3.jpg'),
    require('../../components/assets/carouselImages/image4.jpg'),
    require('../../components/assets/carouselImages/image1.jpg'),
    require('../../components/assets/carouselImages/image3.jpg'),
];

const DegreeHero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section id="home">
            <div className="hero-section">
                <div className="carousel-single-wrapper">
                    <img
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex}`}
                        className="carousel-single-image"
                    />
                    <div className='carousel-overlay-container'>
                        <div className="carousel-left-overlay">
                            <h1 className="hero-title">Welcome to P.E.M Degree College, Bhiwandi</h1>
                        </div>
                        <div className="carousel-right-overlay">
                            <div class="degree-admission-form-container">
                                <form action="https://api.web3forms.com/submit" method="POST" class="degree-admission-form">
                                    <input type="hidden" name="access_key" value="99a36398-df7f-44fe-a4cd-eeccba85ab44"></input>
                                    <h2>Admissions Open for <br /> 2025-26</h2>

                                    <input name="Student Name" type="text" placeholder="Student Name*" required />
                                    <select name="Course Name" required>
                                        <option value="" disabled selected>Choose Any Course</option>
                                        <option value="Science">Science</option>
                                        <option value="Science">Commerce</option>
                                        <option value="Arts">Arts</option>
                                        <option value="B.sc.">B.sc.</option>
                                        <option value="B.Com">B.Com</option>
                                        <option value="B.A.">B.A.</option>
                                    </select>

                                    <select name="Current Std" required>
                                        <option value="" disabled selected>Current Std</option>
                                        <option value="11th">11th</option>
                                        <option value="12th">12th</option>
                                        <option value="1st Year">1st Year</option>
                                        <option value="2st Year">2st Year</option>
                                        <option value="3st Year">3st Year</option>
                                    </select>

                                    <input name="Mobile No" type="tel" placeholder="Mobile No*" required />
                                    <input name='Email' type="email" placeholder="Email ID" />
                                    <input name='City' type="text" placeholder="City*" required />

                                    <button type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-dots">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => handleDotClick(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DegreeHero;
