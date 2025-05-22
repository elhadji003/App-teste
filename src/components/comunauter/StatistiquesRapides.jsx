import React from "react";
import { FaUsers, FaFileAlt, FaEye } from "react-icons/fa";

export default function StatistiquesRapides() {
  const stats = [
    {
      icon: <FaUsers className="text-white text-xl" />,
      label: "Candidatures",
      value: 42,
      bg: "bg-blue-600",
    },
    {
      icon: <FaFileAlt className="text-white text-xl" />,
      label: "Offres publiées",
      value: 6,
      bg: "bg-green-600",
    },
    {
      icon: <FaEye className="text-white text-xl" />,
      label: "Vues profils",
      value: 128,
      bg: "bg-purple-600",
    },
  ];

  return (
    <div className="w-full lg:w-4/12 bg-white rounded-2xl shadow-md border border-gray-100 p-6">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">
        📊 Statistiques rapides
      </h3>
      <div className="space-y-5">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-4 hover:bg-gray-50 p-3 rounded-lg transition"
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full ${stat.bg}`}
            >
              {stat.icon}
            </div>
            <div>
              <p className="text-gray-500 text-sm">{stat.label}</p>
              <p className="text-xl font-semibold text-gray-900">
                {stat.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
