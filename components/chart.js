import {
    Chart as ChartJS,
    CategoryScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { fetchDataFromApi, generateFakeData } from './core'

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
            position: 'bottom',
            labels: {
                font: {
                    family: 'Raleway',
                    size: -1,
                    color: '_black',
                },
            },
        },
    },
};

export function Chart() {
    const [data, setData] = useState(generateFakeData());

    useEffect(() => {
        fetchDataFromApi()
            .then((apiData) => {
                setData(apiData);
            })
            .catch((error) => {
                console.error('error fetching data:', error);
            });
    }, []);

    return <Line options={options} data={data} />;
}
