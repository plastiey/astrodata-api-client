import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
  },
};

const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

export const data = {
  labels,
  datasets: [
    {
      label: 'data',
      data: labels.map(() => faker.number.int({ min: -200, max: 0 })),
      borderColor: 'rgb(255, 93, 23)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

export function Chart() {
  return <Line options={options} data={data} />;
}
