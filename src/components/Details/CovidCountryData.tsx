import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Title);

interface CountryDataProps {
  active: number;
  tests: number;
  vaccinated: number;
  recovered: number;
}

const CovidCountryData: React.FC<CountryDataProps> = ({
  active,
  tests,
  vaccinated,
  recovered,
}) => {
  const data = {
    labels: [ "Active","tests", "Vaccinated", "Recovered"], 
    datasets: [
      {
        label: "COVID-19 Statistics", 
        data: [
          active,
          tests,
          vaccinated,
          recovered,
        ], 
        borderColor: "rgb(164, 179, 252, 0.5)", 
        backgroundColor: "rgb(192, 131, 252)",
        tension: 0.4,
        
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
          font: { size: 14 },
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "rgba(255, 255, 255)" }, 
        grid: { color: "rgba(220, 220, 220, 0.2)" },
      },
      y: {
        ticks: { color: "rgba(255, 255, 255)" }, 
        grid: { color: "rgba(220, 220, 220, 0.2)" }, 
      },
    },
  };

  return (
    <div className="p-3 cursor-pointer relative w-full h-96 bg-gray-800 shadow-lg rounded-lg">
      <Line data={data} options={options} />
    </div>
  );
};

export default CovidCountryData;
