import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Home from './components/Home';
import Navbar from './components/navbar/Navbar';
import OurManagement from './components/OurManagment/OurManagment';
import Principalreview from './components/principalreview/Principalreview';

import { ChairmanMessage } from './components/chairmanMessage/ChairmanMessage';
import DegreeCollege from './degreeCollegePage/DegreeCollege';


import CollegeAdmissions from './components/admissions/CollegeAdmissions';
import JrCollegeAdmissions from './components/admissions/JrCollegeAdmissions';
import SchoolAdmissions from './components/admissions/SchoolAdmissions';

import Facility from './components/facility/Facility';
 


import DegreeCollege from './degreeCollegePage/DegreeCollege';
import SchoolBroucher from './components/schoolbroucher/SchoolBroucher';
import Award from './components/award/Award';



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


        <Route path="/ChairmanMessage" element={<ChairmanMessage />} />
 <Route path="/Facility" element={<Facility />} />
        <Route path="/DegreeCollege" element={<DegreeCollege />} />

        <Route path="/Broucher" element={<SchoolBroucher />} />
        <Route path="/Awards" element={<Award />} />



      </Routes>
      <Footer />
    </>
  );
};

export default App;