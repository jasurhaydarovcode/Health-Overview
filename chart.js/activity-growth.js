import Chart from 'chart.js/auto';

const ctx = document.querySelector('#activityGrowthChart').getContext('2d');
const activityGrowthChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan 1', 'Jan 2', 'Jan 3', 'Jan 4', 'Jan 5', 'Jan 6', 'Jan 7', 'Jan 8', 'Jan 9', 'Jan 10', 'Jan 11', 'Jan 12', 'Jan 13', 'Jan 14', 'Jan 15', 'Jan 16', 'Jan 17', 'Jan 18'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [50, 60, 70, 40, 50, 80, 60, 70, 40, 50, 80, 60, 70, 40, 50, 80, 60, 70],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Dataset 2',
                data: [30, 40, 50, 30, 40, 60, 40, 50, 30, 40, 60, 40, 50, 30, 40, 60, 40, 50],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'Dataset 3',
                data: [20, 30, 40, 20, 30, 50, 30, 40, 20, 30, 50, 30, 40, 20, 30, 50, 30, 40],
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Activity Growth'
            }
        }
    }
});
