import React from "react";

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
    {
      label: "Confirmed Cases",
      value: confirmed,
      lastUpdated: date,
    },
    {
      label: "Deaths",
      value: deaths,
      lastUpdated: date,
    },
    {
      label: "Recovered Patients",
      value: recovered,
      lastUpdated: date,
    },
    {
      label: "Active Cases",
      value: active,
      lastUpdated: date,
    },
    {
      label: "Total Population",
      value: population,
      lastUpdated: date,
    },
    {
      label: "Vaccinated People",
      value: vaccinated,
      lastUpdated: date,
    },
  ];

  return (
    <div className="relative isolate p-6 w-full h-96 bg-gray-800 shadow-lg rounded-lg text-white">
      <div className="mx-auto max-w-6xl p-6">
        <div className="sm:px-6 lg:px-8">
          <div className="sm:flex">
            <div className="sm:flex-auto">
              <h1 className="text-base font-sans font-semibold text-white pb-4">
                Global COVID-19 Stats
              </h1>
            </div>
          </div>
          <div className="overflow-auto max-h-64 custom-scrollbar">
            <table className="min-w-full divide-y divide-white">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 text-left text-sm font-sans font-semibold text-white"
                  >
                    Statistic
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 text-left text-sm font-sans font-semibold text-white"
                  >
                    Value
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 text-left text-sm font-sans font-semibold text-white"
                  >
                    Last Updated
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {covidData.map((data, index) => (
                  <tr
                  key={index}
                  className={index % 2 === 0 ? "text-gray-400" : "text-white"}
                >
                    <td className="py-4 text-sm font-sans font-medium">
                      {data.label}
                    </td>
                    <td className="py-4 text-sm font-sans">
                      {data.value.toLocaleString()}
                    </td>
                    <td className="py-4 text-sm font-sans">
                      {data.lastUpdated}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryTable;
