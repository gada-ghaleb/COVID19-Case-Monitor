import React, { useContext } from 'react';
import { DataContext } from '../../dataContext/DataContext';
import { Doughnut } from 'react-chartjs-2';
import LoadingSpinner from '../common/LoadingSpinner';

const GlobalStats: React.FC = () => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error('DataContext must be used within a DataProvider');
  }

  const { globalData, loading, error } = context;

  if (loading) return <LoadingSpinner />;
  if (error)
    return <p>There was an error loading the data. Please try again later.</p>;

  const chartData = {
    labels: ['Confirmed Cases', 'Deaths'],
    datasets: [
      {
        label: 'Global Totals',
        data: [globalData?.confirmed, globalData?.deaths],
        backgroundColor: ['rgb(164, 179, 252)', 'rgb(192, 131, 252)'],
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
          color: 'rgba(255, 255, 255)',
        },
      },
    },
  };

  return (
    <div  className="p-3 relative isolate rounded-lg bg-gray-800">
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
      <div className="p-3 relative w-full text-white">
        <Doughnut data={chartData} options={options} className="w-full h-96" />
      </div>
    </div>
  );
};

export default GlobalStats;
