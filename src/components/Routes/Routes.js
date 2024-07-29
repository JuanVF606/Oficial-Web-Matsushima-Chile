import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import routesAndLinks from "./index";
import Loader from "../../components/common/Spinner/LoadingSpinner"; // Asumiendo que tienes un componente Loader

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {routesAndLinks.map((route, index) => {
          return (
            <Route key={index} path={route.path} element={route.element} />
          );
        })}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
