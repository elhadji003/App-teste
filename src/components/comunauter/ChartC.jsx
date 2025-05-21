import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const chartData = [
  { date: "12 mai", candidatures: 5 },
  { date: "13 mai", candidatures: 8 },
  { date: "14 mai", candidatures: 6 },
  { date: "15 mai", candidatures: 7 },
  { date: "16 mai", candidatures: 9 },
  { date: "17 mai", candidatures: 4 },
  { date: "18 mai", candidatures: 3 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded shadow border border-gray-200 text-sm">
        <p className="font-semibold">{label}</p>
        <p>{payload[0].value} candidatures</p>
      </div>
    );
  }
  return null;
};

export default function ChartC() {
  return (
    <div className="w-full lg:w-8/12 bg-white p-6 rounded-2xl shadow-lg">
      <h3 className="text-xl font-bold mb-6 text-gray-800">
        Candidatures reçues cette semaine
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={chartData}
          margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="date" tick={{ fill: "#6b7280", fontSize: 12 }} />
          <YAxis tick={{ fill: "#6b7280", fontSize: 12 }} />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="candidatures"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ r: 4, stroke: "#3b82f6", strokeWidth: 2, fill: "#fff" }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
