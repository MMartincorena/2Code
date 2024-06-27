import React from "react";
import { Routes, Route } from "react-router-dom";
import { InitialPage, LoginPage, PruebaPage } from "../pages";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="prueba" element={<PruebaPage />} />


        {/*  <Route path="user/*" element={<UserRoutes />} /> 
        <Route path="client/*" element={<ClientRoutes />} /> 
 */}
      </Routes>
    </>
  );
};

export default AppRouter;
