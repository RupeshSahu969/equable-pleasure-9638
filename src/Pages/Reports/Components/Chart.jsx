import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,

  scales: {
    y: {
      ticks: {
        stepSize: 0.02
      },
      display: true,
      grid: {
        display: true,
      }
    },
    x: {
      grid: {
        display: false,
      }
    }
  }
};

const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const data = {
  labels,
  datasets: [
    {
      data: [0.01, 0.06, 0.03, 0.04, 0.07, 0.03, 0.06],
      backgroundColor: '#c6d2d9',
      yAxisID: "y",
      xAxisID: "x",
    }
  ],
};

export function Chart() {
  return <Bar options={options} data={data} />;
}
