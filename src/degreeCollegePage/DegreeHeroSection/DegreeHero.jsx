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
                            <div class="admission-form-container">
                                <form class="admission-form">
                                    <h2>Admissions Open for <br /> 2025-26</h2>

                                    <input type="text" placeholder="Student Name*" required />
                                    <input type="text" placeholder="Parent Name" />

                                    <select required>
                                        <option value="" disabled selected>Current Std</option>
                                        <option value="11th">11th</option>
                                        <option value="12th">12th</option>
                                        <option value="12th">12th</option>
                                        <option value="12th">12th</option>
                                        <option value="12th">12th</option>
                                    </select>

                                    <input type="tel" placeholder="Mobile No*" required />
                                    <input type="email" placeholder="Email ID" />
                                    <input type="text" placeholder="City*" required />

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
