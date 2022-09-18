import React from 'react';

import Navbar from './components/shared/Navbar/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UnauthenticatedRoute from 'helpers/routes/UnauthenticatedRoute';
import Login from 'components/auth/Login';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <UnauthenticatedRoute>
              <Login />
            </UnauthenticatedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
