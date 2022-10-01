import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Box } from '@chakra-ui/react';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      // label: '# of Votes',
      data: [95, 5],
      backgroundColor: [
        "#c6d2d9"
      ],
    },
  ],
};

export function DoughnutChart() {
  return<Box>
    <Doughnut data={data} />
  </Box>
}
