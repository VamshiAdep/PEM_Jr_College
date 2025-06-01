import React from 'react'
import DegreeNavbar from './DegreeNavbar/DegreeNavbar'
import About from './About/About'
import DegreeHero from './DegreeHeroSection/DegreeHero'
import Programs from './Program/Programs'
import Campus from './Campus/Campus'
import ContactUs from '../components/contactUs/ContactUs'

const DegreeCollege = () => {
    return (
        <div>
            <DegreeNavbar />
            <DegreeHero />
            <div id="Program">
                <Programs />
            </div>
            <div id="AboutUs">
                <About />
            </div>
            <div id="Campus">
                <Campus />
            </div>
            <div id="contactUs">
                <ContactUs />
            </div>
        </div>
    )
}

export default DegreeCollege