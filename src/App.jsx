import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Profile from './Profile';
import Home from './Home';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
