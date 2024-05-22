import React from 'react';
import { BrowserRouter ar Router, Routes, Route } from "react-router-dom";
import Library from './library';

export default function Home() {
  return (
  <Router>
    <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/feed" element={<Feed />} />
        
    </Routes>
  </Router>
  )
}
