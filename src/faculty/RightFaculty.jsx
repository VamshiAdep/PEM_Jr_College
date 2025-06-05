import React from 'react';
import './RightFaculty.css';
import facultyGroupImage from '../components/assets/blogImages/Dahihandi.jpeg'; // Update path

const facultyData = [
    {
        subject: 'Mathematics',
        members: [
            { name: 'Mr. A. Patel', experience: '10+ years' },
            { name: 'Ms. B. Desai', experience: '8+ years' }
        ]
    },
    {
        subject: 'Science',
        members: [
            { name: 'Mr. C. Rathi', experience: '12+ years' },
            { name: 'Ms. D. Sharma', experience: '9+ years' }
        ]
    },
    {
        subject: 'English',
        members: [
            { name: 'Ms. E. Mehta', experience: '7+ years' },
            { name: 'Mr. F. Shah', experience: '11+ years' }
        ]
    },
    {
        subject: 'Social Studies',
        members: [
            { name: 'Mr. G. Kulkarni', experience: '13+ years' },
            { name: 'Ms. H. Joshi', experience: '6+ years' }
        ]
    },
    {
        subject: 'Languages',
        members: [
            { name: 'Ms. I. Nair (Hindi)', experience: '8+ years' },
            { name: 'Mr. J. Khan (Marathi)', experience: '9+ years' }
        ]
    },
    {
        subject: 'Commerce',
        members: [
            { name: 'Mr. K. Rao', experience: '15+ years' },
            { name: 'Ms. L. Sinha', experience: '10+ years' }
        ]
    },
    {
        subject: 'Computer Science',
        members: [
            { name: 'Mr. M. Reddy', experience: '7+ years' },
            { name: 'Ms. N. Kapoor', experience: '5+ years' }
        ]
    }
];

const RightFaculty = () => {
    return (
        <section className="faculty-section">
            <h1 className="faculty-title">Our Esteemed Faculty</h1>
            <div className="faculty-content">
                <img src={facultyGroupImage} alt="Faculty Group" className="faculty-group-image" />
                <div className="faculty-description">
                    <p>
                        At P.E.M. High School and Degree College, our dedicated faculty brings together decades of collective experience. They are committed to guiding each student on their educational journey, nurturing their talents, and helping them excel both academically and personally. We believe in shaping confident, capable individuals who are ready to succeed in life.
                    </p>
                </div>
            </div>

            <div className="faculty-list">
                {facultyData.map((item, index) => (
                    <div key={index} className="subject-card">
                        <h3>{item.subject}</h3>
                        <ul>
                            {item.members.map((member, idx) => (
                                <li key={idx}>
                                    <span className="faculty-name">{member.name}</span>
                                    <span className="faculty-experience">({member.experience} experience)</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RightFaculty;
