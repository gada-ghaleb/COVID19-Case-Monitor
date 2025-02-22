import { useContext } from "react";
import { Line } from "react-chartjs-2";
import { DataContext } from "../../dataContext/DataContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import LoadingSpinner from "../common/LoadingSpinner";
import ErrorMessage from "../common/ErrorMessage";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

interface State {
  province: string;
  confirmed: number;
  deaths: number;
}

const StatesData: React.FC = () => {
  const dataContext = useContext(DataContext);

  if (!dataContext) {
    return <ErrorMessage message="Error: Unable to load data context" />;
  }

  const { statesData, loading, error } = dataContext as {
    statesData: State[];
    lastUpdate: string;
    loading: boolean;
    error: string | null;
  };

  if (loading) return <LoadingSpinner />;
  if (error) {
    return <ErrorMessage message="Unable to load COVID-19 data for U.S. states. Please try again later." />
  }

  const chartData = {
    labels: statesData.map((state) => state.province),
    datasets: [
      {
        label: "Confirmed Cases",
        data: statesData.map((state) => state.confirmed),
        backgroundColor: "rgb(164, 179, 252, 0.5)",
        borderColor: "rgb(164, 179, 252)",
        borderWidth: 1, 
      },
      {
        label: "Deaths",
        data: statesData.map((state) => state.deaths),
        backgroundColor: "rgb(192, 131, 252, 0.5)",
        borderColor: "rgb(192, 131, 252)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: { color: "rgb(220, 220, 220)" },
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
          borderColor: "rgb(255, 255, 255)",
          borderWidth: 2,
        },
      },
      y: {
        ticks: { color: "rgb(220, 220, 220)" },
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
          borderColor: "rgb(255, 255, 255)",
        },
      },
    },
    plugins: {
      legend: {
        labels: { 
          color: "rgb(255, 255, 255)",
          font: { size: 14 },
        },
      },
    },
  };

  return (
    <div className="p-3 cursor-pointer relative w-full h-96 bg-gray-800 gshadow-lg rounded-lg text-white ">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default StatesData;
