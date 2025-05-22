import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Candidatures", value: 32 },
  { name: "Offres", value: 62 },
  { name: "Vues", value: 128 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export default function PieStats() {
  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md">
      <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">
        Répartition des activités
      </h3>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={90}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </div>
  );
}
