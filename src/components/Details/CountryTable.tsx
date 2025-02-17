import React from "react";
import { FaHeartbeat, FaProcedures, FaSkull, FaSyringe, FaUsers, FaVirus } from "react-icons/fa";

interface CountryStatsTableProps {
  confirmed: number;
  deaths: number;
  recovered: number;
  active: number;
  population: number;
  date: string;
  vaccinated: number;
}

const CountryTable: React.FC<CountryStatsTableProps> = ({
  confirmed,
  deaths,
  recovered,
  active,
  population,
  vaccinated,
  date,
}) => {
  const covidData = [
    { label: "Confirmed Cases", value: confirmed, icon: <FaVirus /> },
    { label: "Deaths", value: deaths, icon: <FaSkull /> },
    { label: "Recovered Patients", value: recovered, icon: <FaHeartbeat />},
    { label: "Active Cases", value: active, icon: <FaProcedures />},
    { label: "Total Population", value: population, icon: <FaUsers />},
    { label: "Vaccinated People", value: vaccinated, icon: <FaSyringe /> },
  ];

  return (
    <div className="relative isolate p-6 w-full h-96 bg-gray-800 shadow-lg rounded-lg text-white cursor-pointer">
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="text-lg font-semibold text-center text-white mb-4">Global COVID-19 Stats</h1>
      <div className="overflow-auto max-h-64 custom-scrollbar">
      <table className="w-full min-w-[500px] sm:min-w-full divide-y divide-gray-600">
          <thead>
            <tr className="text-left bg-gray-700 text-white">
              <th className="py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm font-semibold">Statistic</th>
              <th className="py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm font-semibold">Value</th>
              <th className="py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm font-semibold">Last Updated</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-600">
            {covidData.map((data, index) => (
              <tr key={index} className="hover:bg-gray-700 transition duration-200">
                <td className="py-3 px-3 sm:py-4 sm:px-4 text-xs sm:text-sm flex items-center space-x-2">
                  <span className="text-md sm:text-lg text-indigo-400">{data.icon}</span>
                  <span>{data.label}</span>
                </td>
                <td className="py-3 px-3 sm:py-4 sm:px-4 text-xs sm:text-sm font-semibold">
                  {data.value.toLocaleString()}
                </td>
                <td className="py-3 px-3 sm:py-4 sm:px-4 text-xs sm:text-sm">{date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
};

export default CountryTable;
