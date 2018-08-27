var ctx = document.getElementById('patrimonioChart').getContext('2d');
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Renda Fixa", "Renda Variável"],
        datasets: [{
            label: "My First dataset",
            backgroundColor:[ 
                'rgb(255, 99, 132)',
                'rgb(55, 99, 232)'
            ],
            borderColor:[ 
                'rgb(255, 99, 132)',
                'rgb(55, 99, 232)'
            ],
            data: [3, 10],
        }]
    }
});