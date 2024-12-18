import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import VaccineStats from "../vaccine/VaccineStats";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/vaccine" element={<VaccineStats />} />
    </Routes>
  );
};

export default AppRoutes;
