import React from "react";
const LoadingSpinner: React.FC = () => {
    return (
        <div className="h-96 bg-white rounded-lg">
        <div className="flex justify-center items-center h-full">
          <p className="flex items-center text-gray-600">
            <svg
              className="animate-spin h-5 w-5 mr-3 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
            Loading...
          </p>
        </div>
      </div>
    );
  };
  
  export default LoadingSpinner;