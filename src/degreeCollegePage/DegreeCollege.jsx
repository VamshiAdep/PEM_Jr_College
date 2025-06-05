import React from 'react'
import DegreeNavbar from './DegreeNavbar/DegreeNavbar'
import About from './About/About'
import DegreeHero from './DegreeHeroSection/DegreeHero'
import Programs from './Program/Programs'
import Campus from './Campus/Campus'
import DegreeFooter from './DegreeFooter/DegreeFooter'
import DegreeContactUs from './DegreeContactUs/DegreeContactUs'

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
                <DegreeContactUs />
            </div>
            <DegreeFooter />
        </div>
    )
}

export default DegreeCollege