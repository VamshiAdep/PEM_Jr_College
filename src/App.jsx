import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Home from './components/Home';
import Navbar from './components/navbar/Navbar';
import OurManagement from './components/OurManagment/OurManagment';
import Principalreview from './components/principalreview/Principalreview';
 
import { ChairmanMessage } from './components/chairmanMessage/ChairmanMessage';



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
feature/Charman'sMessage
        <Route path="/ChairmanMessage" element={<ChairmanMessage />} />

        <Route path="/DegreeCollege" element={<DegreeCollege />} />
main
      </Routes>
      <Footer />
    </>
  );
};

export default App;