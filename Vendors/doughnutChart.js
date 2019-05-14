
var ctx = document.getElementById('doughnut').getContext('2d');
var a = 50
var myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Commision Fees', 'Legal...', 'Gifts', 'Evrething Else'],
        datasets: [{
            data: [a, 6, 4, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',

            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
