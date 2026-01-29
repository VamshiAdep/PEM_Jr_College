import AboutUs from './aaboutUs/AboutUs'
import ContactUs from './contactUs/ContactUs'
import Hero from './heroSection/Hero'
import SchoolGallery from './schoolGallery/SchoolGallery'

const Home = () => {
    return (
        <div>
            <Hero />
            <div id="aboutus">
                <AboutUs />
            </div>
            <div id="SchoolGallery">
                <SchoolGallery />
            </div>
            <div id="ContactUs">
                <ContactUs />
            </div>
        </div>
    )
}

export default Home
