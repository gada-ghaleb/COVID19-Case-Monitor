import React from "react";
import { Routes, Route } from "react-router-dom";
import CountryDetails from "../components/Details/CountryDetails";
import Dashboard from "../components/dashboard/Dashboard";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/country/:countryName" element={<CountryDetails />} />
    </Routes>
  );
};

export default AppRoutes;
