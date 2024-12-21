import React from 'react';
import { Routes, Route  } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import PGOwnerLogin from './pages/PGOwnerLogin';  // Ensure your page component is correctly named
import PGSearcherLogin from './pages/PGSearcherLogin'; // Same for PG Searcher login page

import ReviewerPage from './pages/ReviewerPage/ReviewerPage';
const App = () => {
  return (
    <div>
      <Header /> {/* Render Header at the top */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login/PGOwnerLogin" element={<PGOwnerLogin />} />
        <Route path="/login/PGSearcherLogin" element={<PGSearcherLogin />} />
        <Route path="/reviewer" element={<ReviewerPage />} />
      </Routes>
    </div>
  );
};

export default App;
