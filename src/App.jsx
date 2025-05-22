import React from 'react'
import Navbar from './components/navbar/Navbar';
import Hero from './components/heroSection/Hero';
import AboutUs from './components/aaboutUs/AboutUs';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
    </div>
  )
}

export default App