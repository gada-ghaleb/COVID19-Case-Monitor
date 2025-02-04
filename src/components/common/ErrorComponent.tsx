import React from "react";
import {FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface ErrorProps {
  message: string; 
}

const ErrorComponent: React.FC<ErrorProps> = ({ message }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center py-64">
    <div className="bg-indigo-200 border border-indigo-300 text-purple-600 px-6 py-4 rounded-lg shadow-md max-w-lg text-center">
      <div className="flex items-center justify-center space-x-3">
        <FaExclamationTriangle className="text-purple-400 text-3xl" />
        <h2 className="text-xl font-semibold">Oops! An Error Occurred</h2>
      </div>
      <p className="mt-2 text-md">{message}</p>
      
    
      <button
        onClick={() => navigate("/")}
        className="mt-4 px-4 py-2 bg-purple-400 text-white rounded-lg hover:bg-purple-600 transition duration-300"
      >
        Go Back to Home
      </button>
    </div>
  </div>
  );
};

export default ErrorComponent;
