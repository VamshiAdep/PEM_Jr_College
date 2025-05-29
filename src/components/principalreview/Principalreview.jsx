import React from 'react';
import './pincipalreview.css';
import SecondaryHM from '../assets/SecondaryHM.png'


const Principalreview = () => {
    const Principals = [
        {
            name: "Mr. Anil Kapoor",
            positon: "Principal-primary Section",
            message: "My mission is to inspire and guide young minds to achieve their fullest potential.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKuoW405uqrTQc4t9qDYQiFEnXrWrYEpa7Zw&s",
        },
        {
            name: "MRS. Vidya Ghorpade",
            positon: "Principal-Secondary Section",
            message: "I strive to create a supportive and engaging learning environment for our students.",
            image: SecondaryHM,
        },
        {
            name: "Mr. Rajesh Verma",
            positon: "junior principal",
            message: "Committed to academic excellence and holistic development of every student.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHJyxAtXMe70pehbt9QaBU6bgV8vif4tYY0InQDbtMZrEmK5Y6BWuPLQm8IQSarHJX8w&usqp=CAU"
        },

    ];





    return (
        <div className='main-container'>
            <section className='principals-section'>
                <h1 className='section-titile'>Meet Our Principals</h1>
                <div className="card-container">
                    {Principals.map((principal, index) => (
                        <div key={index} className="principal-card">
                            <div className='profile-pic'>
                                <img src={principal.image} alt={principal.name} />
                            </div>
                            <h2 className='name'>{principal.name}</h2>
                            <p className='position'>{principal.positon}</p>
                            <p className='message'>{principal.message}</p>
                        </div>
                    ))}
                </div>
            </section>

        </div>

    )
}

export default Principalreview;
