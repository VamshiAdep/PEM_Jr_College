import React from 'react'
import Navbar from './components/navbar/Navbar';
import AboutUs from './components/aaboutUs/AboutUs';
import OurManagement from './components/OurManagment/OurManagment';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/management" element={<OurManagement />} />
        {/* Add more routes here */}
      </Routes>

      <Footer />
    </Router>
  );
};

export default App