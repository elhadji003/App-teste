import React from "react";
import { FaUsers, FaFileAlt, FaEye } from "react-icons/fa";

export default function StatistiquesRapides() {
  const stats = [
    {
      icon: <FaUsers className="text-blue-600 text-2xl" />,
      label: "Candidatures",
      value: 42,
    },
    {
      icon: <FaFileAlt className="text-green-600 text-2xl" />,
      label: "Offres publiées",
      value: 6,
    },
    {
      icon: <FaEye className="text-purple-600 text-2xl" />,
      label: "Vues profils",
      value: 128,
    },
  ];

  return (
    <div className="w-full lg:w-4/12 bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">
        📊 Statistiques
      </h3>
      <div className="space-y-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-gray-100">{stat.icon}</div>
            <div>
              <p className="text-gray-600 text-sm">{stat.label}</p>
              <p className="text-xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
