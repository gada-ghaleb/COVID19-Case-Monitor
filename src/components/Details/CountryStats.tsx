import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface GlobalCountryProps {
  confirmed: number;
  deaths: number;
}

const CountryStats: React.FC<GlobalCountryProps> = ({
  confirmed,
  deaths,
}) => {
  const data = {
    labels: ["Confirmed Cases", "Deaths"],
    datasets: [
      {
        label: "COVID-19 Statistics",
       data: [confirmed,  deaths],
        backgroundColor: [ "rgb(192, 196, 204, 0.5)", "rgb(157, 164, 176, 0.5)"],
        borderColor: ["rgb(192, 196, 204)", "rgb(157, 164, 176)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "rgba(255, 255, 255)",
        },
      },
    },
  };
  return (
    <div className="relative isolate p-6 w-full h-96 bg-gray-800 shadow-lg  rounded-lg">
      <Pie data={data} options={options} className="w-full h-96" />
    </div>
  );
};

export default CountryStats;
