import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Results } from './Results';

export const Routings = () => {
  const routes = [
    { path: '/search', element: <Results /> },
    { path: '/images', element: <Results /> },
    { path: '/news', element: <Results /> },
    { path: '/videos', element: <Results /> },
  ];

  return (
    <div className="p-4">
      {/* Redirect from '/' to '/search' */}
      <Navigate to="/search" />

      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </div>
  );
};
