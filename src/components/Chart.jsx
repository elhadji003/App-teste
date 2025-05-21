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
      backgroundColor: "rgba(0, 123, 255, 0.7)", // bleu pastel
      borderRadius: 6,
      maxBarThickness: 30,
    },
    {
      label: "Candidatures Reçues",
      data: [30, 50, 40, 65, 55, 70, 60],
      backgroundColor: "rgba(40, 167, 69, 0.7)", // vert pastel
      borderRadius: 6,
      maxBarThickness: 30,
    },
    {
      label: "Nombre de recrues",
      data: [20, 25, 30, 40, 35, 50, 45],
      backgroundColor: "rgba(255, 193, 7, 0.7)", // orange pastel
      borderRadius: 6,
      maxBarThickness: 30,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false, // permet à la div parent gérer la taille
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        boxWidth: 15,
        padding: 15,
        font: {
          size: 14,
          weight: "500",
          family: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        },
        color: "#444", // couleur légende plus douce
      },
    },
    title: {
      display: true,
      text: "Statistiques des Emplois",
      font: {
        size: 20,
        weight: "600",
        family: "'Inter', 'Helvetica Neue', Arial, sans-serif",
      },
      color: "#222",
      padding: {
        top: 10,
        bottom: 20,
      },
    },
    tooltip: {
      enabled: true,
      backgroundColor: "rgba(0,0,0,0.7)",
      titleFont: { size: 14, weight: "600" },
      bodyFont: { size: 13 },
      padding: 8,
      cornerRadius: 6,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#666",
        font: {
          size: 14,
          family: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        },
      },
      stacked: false,
    },
    y: {
      beginAtZero: true,
      grid: {
        color: "rgba(200, 200, 200, 0.3)",
        borderDash: [5, 5],
      },
      ticks: {
        color: "#666",
        font: {
          size: 14,
          family: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        },
        stepSize: 10,
      },
    },
  },
  barPercentage: 0.6,
  categoryPercentage: 0.6,
};

const Chart = () => {
  return (
    <div className="w-full h-[400px] max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg">
      <Bar data={data} options={options} />
    </div>
  );
};

export default Chart;
