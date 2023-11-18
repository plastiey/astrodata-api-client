import { faker } from '@faker-js/faker';

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
const labels = Array.from({ length: daysInMonth }, (_, i) => i + 1);

export async function fetchDataFromApi(url) {
    try {
        const response = await fetch(url, custom_labels);
        if (!response.ok) {
            throw new Error('network response was not ok');
        }

        const data = await response.json();

        return {
            labels: labels,
            datasets: [
                {
                    label: '',
                    data: data,
                    borderColor: 'rgb(255, 93, 23)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
            ],
        };
    } catch (error) {
        console.error('error fetching data:', error);
        throw error;
    }
}

// for testing purposes only
export function generateFakeData() {
    const fakeData = labels.map(() => ({
        label: '',
        value: faker.number.int({ min: -300, max: 0 }),
    }));
    return {
        labels,
        datasets: [
            {
                label: '',
                data: fakeData.map((item) => item.value),
                borderColor: 'rgb(255, 93, 23)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };
}
