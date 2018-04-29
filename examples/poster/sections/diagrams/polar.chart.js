{
    type: 'polarArea',
    data: {
      datasets: [{
          data: [20, 30, 20, 30, 50],
          backgroundColor: [ "#FF6384AA", "#4BC0C0AA", "#FFCE56AA", "#E7E9EDAA", "#36A2EBAA"],
          label: 'My dataset' // for legend
      }],
      labels: ["Bibliography", "Research", "Redaction", "Format title slide",
               "Doesn't compile"]
    },
    options: {
      devicePixelRatio: 1,
      legend: {
        position: 'bottom'
      },
      scale: {
        ticks: {
            suggestedMax: 60,
            stepSize: 20
        }
      }
    }
}
