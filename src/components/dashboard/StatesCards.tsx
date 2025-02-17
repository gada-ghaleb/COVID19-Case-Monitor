import React, { useContext } from "react";
import { DataContext } from "../../dataContext/DataContext";
import LoadingSpinner from "../common/LoadingSpinner";
import ErrorMessage from "../common/ErrorMessage";
import { FaVirus, FaHeartbeat, FaSkull, FaProcedures } from "react-icons/fa";

const StatesCards: React.FC = () => {
  const context = useContext(DataContext);

  if (!context) {
    return <ErrorMessage message="Error: DataContext is not available." />;
  }

  const { globalData, loading, error } = context;

  if (loading) return <LoadingSpinner />;
  if (error) {
    return (
      <ErrorMessage message="Unable to display COVID-19 statistics. Please try again later." />
    );
  }

  const summaryData = [
    {
      label: "Confirmed Cases",
      value: globalData?.confirmed,
      icon: <FaVirus />,
    },
    {
      label: "Active Cases",
      value: globalData?.active,
      icon: <FaProcedures />,
    },
    { label: "Deaths", value: globalData?.deaths, icon: <FaSkull /> },
    { label: "Recovered", value: globalData?.recovered, icon: <FaHeartbeat /> },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 cursor-pointer">
      {summaryData.map((item, index) => (
        <div
          key={index}
          className="bg-gray-800 p-4 sm:p-6 shadow-lg rounded-lg text-center transition-transform duration-300 transform hover:scale-105"
        >
          <div className="text-3xl sm:text-4xl text-white mb-2">
            {item.icon}
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white">
            {item.value?.toLocaleString() || "N/A"}
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatesCards;
