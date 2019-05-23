
var ctx = document.getElementById('lineChart1').getContext('2d');

var myPieChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['$420K', '$280K', '$140K'],
        datasets: [{
            label: 'Expenses',
            data: [188, 66, 666,],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',


            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',


            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }
    }
});



