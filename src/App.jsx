import React from 'react';
import Navbar from './components/navbar/Navbar';
import OurManagement from './components/OurManagment/OurManagment';
import Footer from './components/footer/Footer';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Principalreview from './components/principalreview/Principalreview';
import DegreeCollege from './degreeCollegePage/DegreeCollege';

const App = () => {
  const location = useLocation();

  // Paths where navbar should be hidden
  const hideNavbarPaths = ['/degreecollege', '/DegreeCollege']; // Include both cases for safety
  const shouldHideNavbar = hideNavbarPaths.some(path => 
    location.pathname.toLowerCase() === path.toLowerCase()
  );

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/management" element={<OurManagement />} />
        <Route path="/OurPrincipalsView" element={<Principalreview />} />
        <Route path="/DegreeCollege" element={<DegreeCollege />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;