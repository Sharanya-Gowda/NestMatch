import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Login from '../pages/Login';
import ForSearcher from '../pages/PGSearcherLogin';
import ForPGOwner from '../pages/PGOwnerLogin';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/login" element={<Login />} />
    <Route path="/for-searcher" element={<ForSearcher />} />
    <Route path="/for-pg-owner" element={<ForPGOwner />} />
  </Routes>
);

export default AppRouter;
