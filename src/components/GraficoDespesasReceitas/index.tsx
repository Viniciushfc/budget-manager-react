// GraficoDespesasReceitas.tsx
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GraficoDespesasReceitas: React.FC<{ receitas: any[]; despesas: any[] }> = ({ receitas, despesas }) => {
  const totalReceitas = receitas.reduce((acc, receita) => acc + receita.valor, 0);
  const totalDespesas = despesas.reduce((acc, despesa) => acc + despesa.valor, 0);

  const data = {
    labels: ["Receitas", "Despesas"],
    datasets: [
      {
        label: "Valores (R$)",
        data: [totalReceitas, totalDespesas],
        backgroundColor: ["#4CAF50", "#F44336"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Comparativo de Receitas e Despesas",
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default GraficoDespesasReceitas;
