import React, { Suspense } from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('@/views/Home'));
export const routeMap = [
  {
    path: '/virtual-scroll',
    name: 'VirtualScroll',
    element: lazy(() => import('@/views/VirtualScroll')),
  },
  {
    path: '/grid-masonry',
    name: 'GridMasonry',
    element: lazy(() => import('@/views/GridMasonry')),
  },
];

function App() {
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
