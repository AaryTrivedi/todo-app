import React from 'react';

import Navbar from './components/shared/Navbar/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
