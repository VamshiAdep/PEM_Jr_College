import React from 'react'
import './About.css'
import about_img from '../assets/pemSchoolImage.jpg'
// import play_icon from '../../assets/play-icon.png'


const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about_img' />
            </div>
            <div className="about-right">
                <h3>ABOUT P.E.M. COLLEGE</h3>
                <h2>Nurturing Tomorrow’s Leaders Today</h2>
                <p>Embark on a transformative educational journey with P.E.M. College, proudly affiliated with Mumbai University. Our comprehensive programs are crafted to empower students with the knowledge, skills, and experiences needed to excel in today’s dynamic world.</p>
                <p>Guided by innovation, hands-on learning, and personalized mentorship, our curriculum ensures that aspiring professionals are prepared to make a meaningful impact in their chosen fields and communities.</p>
                <p>Whether your ambitions lead you toward teaching, business, science, technology, or the arts, P.E.M. College—backed by the academic excellence of Mumbai University—offers the perfect pathway to achieve your dreams and unlock your full potential.</p>
            </div>


        </div>
    )
}

export default About
