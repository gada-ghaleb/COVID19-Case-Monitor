import React from "react";
import { Routes, Route } from "react-router-dom";
import CountryDetails from "../Details/CountryDetails";
import Dashboard from "../dashboard/Dashboard";

const AppRoutes: React.FC = () => {
  return (
    
   
    <Routes>
    <Route path="/" element={<Dashboard/>} />
    <Route path="/country/:countryName" element={<CountryDetails />} />
  </Routes>
  

  );
};

export default AppRoutes;
