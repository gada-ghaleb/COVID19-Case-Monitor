import React, { useContext } from "react";
import { DataContext } from "../../dataContext/DataContext";
import LoadingSpinner from "../common/LoadingSpinner";
import { motion } from "framer-motion";
import AnimatedDiv from "../common/AnimatedDiv";

const StatesCards: React.FC = () => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("DataContext must be used within a DataProvider");
  }

  const { globalData, loading, error } = context;

  if (loading) return <LoadingSpinner />;
  if (error) return <p>Error loading data. Try again later.</p>;

  const summaryData = [
    { label: "Confirmed Cases", value: globalData?.confirmed, color: "text-gray-800" },
    { label: "Active Cases", value: globalData?.active, color: "text-gray-800" },
    { label: "Deaths", value: globalData?.deaths, color: "text-gray-700" },
    { label: "Recovered", value: globalData?.recovered, color: "text-gray-800" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {summaryData.map((item) => (
      <div
        className="bg-white p-6 shadow-md rounded-lg text-center"
      >
        <h2 className={`text-l font-semibold ${item.color}`}>
          {item.value?.toLocaleString() || "N/A"}
        </h2>
        <p className="text-gray-500">{item.label}</p>
      </div>
    ))}
  </div>
  );
};

export default StatesCards;


