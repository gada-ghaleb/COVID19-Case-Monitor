import React, { useContext } from "react";
import { DataContext } from "../../dataContext/DataContext";

const VaccineStats: React.FC = () => {
  const context = useContext(DataContext);

  if (!context) {
    return <p>Error: DataContext not found</p>;
  }

  const { globalVaccineData, countryVaccineData } = context;

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-bold mb-4 text-gray-800">Vaccine Stats</h2>
      <p>
      Global Vaccinations:{" "}
      {globalVaccineData?.total?.toLocaleString() || "N/A"}
    </p>
    <p>
      USA Vaccinations:{" "}
      {countryVaccineData?.total?.toLocaleString() || "N/A"}
    </p>
    </div>
  );
};

export default VaccineStats;
