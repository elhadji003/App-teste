import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil"],
  datasets: [
    {
      label: "Employois Disponibles",
      data: [45, 60, 55, 70, 65, 80, 75],
      backgroundColor: "#007bff",
    },
    {
      label: "Candidatures Reçues",
      data: [30, 50, 40, 65, 55, 70, 60],
      backgroundColor: "#28a745",
    },
    {
      label: "Nombre de recrues",
      data: [20, 25, 30, 40, 35, 50, 45],
      backgroundColor: "#ffc107",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Statistiques des Emplois",
    },
  },
};

const Chart = () => {
  return (
    <div className="bg-white p-4 rounded-lg mt-5">
      <Bar data={data} options={options} />
    </div>
  );
};

export default Chart;
