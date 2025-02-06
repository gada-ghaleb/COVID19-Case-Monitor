import React from "react";
import { FaExclamationCircle } from "react-icons/fa";

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void; 
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center h-80">
    <div className="bg-purple-100 border border-purple-400 text-purple-700 px-6 py-4 rounded-lg shadow-md text-center max-w-lg">
      <div className="flex items-center justify-center space-x-3">
        <FaExclamationCircle className="text-purple-600 text-3xl" />
        <h2 className="text-xl font-semibold">Error</h2>
      </div>
      <p className="mt-2">{message}</p>
    </div>
  </div>
  );
};

export default ErrorMessage;
