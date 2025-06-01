import React from 'react';
import Navbar from './components/navbar/Navbar';
import OurManagement from './components/OurManagment/OurManagment';
import Footer from './components/footer/Footer';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Principalreview from './components/principalreview/Principalreview';
import { ChairmanMessage } from './components/chairmanMessage/ChairmanMessage';
import DegreeCollege from './degreeCollegePage/DegreeCollege';
import SchoolAdmissions from './components/admissions/SchoolAdmissions';
import JrCollegeAdmissions from './components/admissions/JrCollegeAdmissions';
import CollegeAdmissions from './components/admissions/CollegeAdmissions';

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
        <Route path="/ChairmanMessage" element={<ChairmanMessage />} />
        <Route path="/DegreeCollege" element={<DegreeCollege />} />
        <Route path="/SchoolAdmissions" element={<SchoolAdmissions />} />
        <Route path="/JrCollegeAdmissions" element={<JrCollegeAdmissions />} />
        <Route path="/CollegeAdmissions" element={<CollegeAdmissions />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;