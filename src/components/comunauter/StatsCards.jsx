import React from "react";
import { FaBriefcase, FaUserCheck, FaHourglassHalf } from "react-icons/fa";

export default function StatsCards({ offers, applications }) {
  const pendingResponses = 44; // Simulation

  const stats = [
    {
      title: "Offres publiées",
      count: offers.length,
      icon: <FaBriefcase size={28} className="text-blue-600" />,
      bg: "from-blue-100 to-blue-50",
    },
    {
      title: "Candidatures reçues",
      count: applications.length,
      icon: <FaUserCheck size={28} className="text-green-600" />,
      bg: "from-green-100 to-green-50",
    },
    {
      title: "Réponses en attente",
      count: pendingResponses,
      icon: <FaHourglassHalf size={28} className="text-yellow-600" />,
      bg: "from-yellow-100 to-yellow-50",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`bg-gradient-to-r ${stat.bg} p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300`}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-700">
              {stat.title}
            </h2>
            {stat.icon}
          </div>
          <p className="text-4xl font-extrabold text-gray-900">{stat.count}</p>
        </div>
      ))}
    </div>
  );
}
