import React, { Suspense, useEffect } from 'react';
import { lazy, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

const Home = lazy(() => import('@/views/Home'));
export const routeMap = [
  {
    path: '/bottomDialog',
    name: 'BottomDialog',
    element: lazy(() => import('@/views/BottomDialog')),
  },
  {
    path: '/routeDialog',
    name: 'RouteDialog',
    element: lazy(() => import('@/views/RouteDialog')),
  },
  {
    path: '/virtualScroll',
    name: 'VirtualScroll',
    element: lazy(() => import('@/views/VirtualScroll')),
  },
];

function App() {
  const location = useLocation();

  let state = location.state;

  useEffect(() => {
    console.log('state', state);
  }, [state]);
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          {routeMap.map((route) => (
            <Route
              path={route.path}
              key={route.name}
              element={<route.element />}
            />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
