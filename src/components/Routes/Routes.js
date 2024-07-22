import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import routes from './index';
import LoadingSpinner from '../common/Spinner/LoadingSpinner';

function Browser() {
  const location = useLocation();

  return (
    <Suspense fallback={<LoadingSpinner/>}>
      <Routes location={location} key={location.pathname}>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
}

export default Browser;
