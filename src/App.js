import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from 'react';
import Header from './Header.js';
import Profile from './Profile';
import Fasilitas from './Fasilitas';
import Poliklinik from "./Poliklinik";
import Kontak from "./Kontak";
import Lokasi from "./Lokasi";


function App() {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/poliklinik" element={<Poliklinik />} />
        <Route path="/fasilitas" element={<Fasilitas />} />
        <Route path="/lokasi" element={<Lokasi />} />
        <Route path="/kontak" element={<Kontak />} />
      </Routes>
    </Router>
  );
}

export default App;