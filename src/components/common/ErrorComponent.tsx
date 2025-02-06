import React from "react";
import {FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface ErrorProps {
  message: string; 
}

const ErrorComponent: React.FC<ErrorProps> = ({ message }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-[80vh]">  
    <div className="bg-purple-200 border border-purple-400 text-purple-900 px-6 py-4 rounded-lg shadow-xl max-w-lg text-center">
      <div className="flex items-center justify-center space-x-3">
        <FaExclamationTriangle className="text-purple-600 text-3xl" />
        <h2 className="text-xl font-semibold">Oops! An Error Occurred</h2>
      </div>
      <p className="mt-2 text-md">{message}</p>
      
      <button
        onClick={() => navigate("/")}
        className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300"
      >
        Go Back to Home
      </button>
    </div>
  </div>
  );
};

export default ErrorComponent;
