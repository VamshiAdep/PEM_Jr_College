import React from 'react'
import Hero from './heroSection/Hero'
import OurManagement from './OurManagment/OurManagment'
import AboutUs from './aaboutUs/AboutUs'

const Home = () => {
    return (
        <div>
            <Hero />
                <OurManagement />
            <div id="aboutus">
                <AboutUs />
            </div>
        </div>
    )
}

export default Home
