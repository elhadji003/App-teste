import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  // defs,c
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
      <div className="bg-white p-3 rounded-xl shadow-lg border border-gray-200 text-sm">
        <p className="text-gray-800 font-semibold">{label}</p>
        <p className="text-green-600">{payload[0].value} candidatures</p>
      </div>
    );
  }
  return null;
};

export default function ChartC() {
  return (
    <div className="w-full lg:w-8/12 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
      <h3 className="text-2xl font-semibold mb-6 text-gray-900">
        📈 Candidatures reçues cette semaine
      </h3>
      <ResponsiveContainer width="100%" height={320}>
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 10, bottom: 10 }}
        >
          {/* Dégradé SVG */}
          <defs>
            <linearGradient id="colorCandidatures" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="4 4" stroke="#f3f4f6" />
          <XAxis
            dataKey="date"
            tick={{ fill: "#9ca3af", fontSize: 13 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "#9ca3af", fontSize: 13 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />

          {/* Ligne avec fond dégradé */}
          <Line
            type="monotone"
            dataKey="candidatures"
            stroke="#10b981"
            strokeWidth={3}
            fill="url(#colorCandidatures)"
            dot={{ r: 5, stroke: "#10b981", strokeWidth: 2, fill: "#fff" }}
            activeDot={{ r: 8, fill: "#10b981" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
