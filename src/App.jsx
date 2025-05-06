import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Mysticism from './pages/Mysticism';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function App() {
 

  return (
    
      <Router>
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="mysticism" element={<Mysticism />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  </Routes>
</Router>

    
  );
}

export default App;
