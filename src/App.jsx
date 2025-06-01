import React from 'react'
import Navbar from './components/navbar/Navbar';
import OurManagement from './components/OurManagment/OurManagment';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Principalreview from './components/principalreview/Principalreview';
import { ChairmanMessage } from './components/chairmanMessage/ChairmanMessage';



const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/management" element={<OurManagement />} />
        <Route path="/OurPrincipalsView" element={<Principalreview />} />
        <Route path="/ChairmanMessage" element={<ChairmanMessage />} />

      </Routes>

      <Footer />
    </Router>
  );
};
export default App