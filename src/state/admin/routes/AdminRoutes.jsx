import { Routes, Route } from "react-router-dom";

import Navbar from "../components/navbar/Navbar";
import AdminDisplay from "../pages/AdminDisplay";

const AdminRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminDisplay />} />
      </Routes>
    </>
  );
};

export default AdminRoutes;
