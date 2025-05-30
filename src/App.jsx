import React from 'react'
import Navbar from './components/navbar/Navbar';
import OurManagement from './components/OurManagment/OurManagment';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Principalreview from './components/principalreview/Principalreview';

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/management" element={<OurManagement />} />
        <Route path="/OurPrincipalsView" element={<Principalreview />} />
      </Routes>

      <Footer />
    </Router>
  );
};
export default App