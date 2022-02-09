import React from 'react';
import './App.css';

import Test from './test/Test';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//<FooterCIM />

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Test/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
