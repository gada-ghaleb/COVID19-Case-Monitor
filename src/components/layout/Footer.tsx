import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto px-4 text-center">
        {/* Nome del progetto */}
        <h2 className="text-lg font-semibold text-purple-300 mb-2">
          COVID-19 Case Monitor
        </h2>

        {/* Link a GitHub */}
        <div className="flex justify-center my-4">
          <a
            href="https://github.com/gada-ghaleb/COVID19-Case-Monitor"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-purple-300"
          >
            <FaGithub size={24} />
            <span>View on GitHub</span>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © 2025 COVID-19 Case Monitor. Built by Gada.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
