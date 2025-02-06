import React, { useContext } from "react";
import { DataContext } from "../../dataContext/DataContext";
import { Doughnut } from "react-chartjs-2";
import LoadingSpinner from "../common/LoadingSpinner";
import ErrorMessage from "../common/ErrorMessage";

const GlobalStats: React.FC = () => {
  const context = useContext(DataContext);
  
  if (!context) {
    throw new Error("DataContext must be used within a DataProvider");
  }

  const { globalData, loading, error } = context;

  if (loading) return <LoadingSpinner />;
  if (error) {
    return <ErrorMessage message="Unable to load global COVID-19 data. Please try again later." />
  }
  const confirmedCases = globalData?.confirmed || 0;
  const deaths = globalData?.deaths || 0;

  const chartData = {
    labels: ["Confirmed Cases", "Deaths"],
    datasets: [
      {
        label: "Global Totals",
        data: [confirmedCases, deaths],
        backgroundColor: ["rgb(164, 179, 252, 0.5)", "rgb(192, 131, 252)"],
        borderColor: ["rgb(164, 179, 252)", "rgb(192, 131, 252)"],
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
          font: {
            size: 14, 
          },
        },
      },
    },
  };

  return (
    <div className=" relative isolate p-6 w-full h-96 bg-gray-800 gshadow-lg rounded-lg text-white">
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

      <Doughnut data={chartData} options={options} className="w-full h-96 cursor-pointer" />
    </div>
  );
};

export default GlobalStats;
