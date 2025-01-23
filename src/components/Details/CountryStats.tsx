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
        backgroundColor: ["rgb(164, 179, 252, 0.5)", "rgb(192, 131, 252)"],
        borderColor: ["rgb(164, 179, 252, 0.5)", "rgb(192, 131, 252)"],
        borderWidth: 2,
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
         <svg
        aria-hidden="true"
        className="absolute rounded-lg inset-0 -z-10 h-full w-full stroke-gray-600"
      >
        <defs>
          <pattern
            id="background-pattern"
            width={30}
            height={30}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          fill="url(#background-pattern)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <Pie data={data} options={options} className="w-full h-96" />
    </div>
  );
};

export default CountryStats;
