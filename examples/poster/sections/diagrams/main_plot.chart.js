{
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Unfilled',
      fill: false,
      backgroundColor: '#fff0',
      borderColor: 'blue',
      data: [1, 0.5, 1, 2.5, 1, 0.5, 1],
    }, {
      label: 'Dashed',
      fill: false,
      backgroundColor: '#fff0',
      borderColor: 'green',
      borderDash: [5, 5],
      data: [1, 1.5, 1, 0, 1, 1.5, 1],
    }, {
      label: 'Filled',
      backgroundColor: '#ff000022',
      borderColor: 'red',
      data: [2, 1, 0.5, 1, 2.5, 1, 0.5],
      fill: true,
    }]
  },
  options: {
    width:500,
    height:350,
    devicePixelRatio: 2,
    responsive: false,
    animation: {
      duration: 0
    },
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Month'
        }
      }],
      yAxes: [{
        display: true,
        ticks: {
          suggestedMin: 0,
          suggestedMax: 3
        },
        scaleLabel: {
          display: true,
          labelString: 'Value'
        }
      }]
    }
  }
};
