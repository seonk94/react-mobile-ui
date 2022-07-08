import React from 'react';
import { lazy, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('@/views/Home'));

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
