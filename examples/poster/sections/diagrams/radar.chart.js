{
  type: 'radar',
  data: {
    labels: ['Popular', 'Collaborative', 'Easy', 'Custom styles',
             'Components', 'Technical writing'],
    datasets: [
      {
        label: "Google Docs",
        data: [60, 90, 80, 20, 30, 30],
        backgroundColor: 'rgba(187, 101, 101, 0.5)',
        borderColor: 'rgba(187, 101, 101, 0.9)'
      },
      {
        label: "MS Office",
        data: [90, 70, 70, 40, 10, 40],
        backgroundColor: 'rgba(101, 187, 180, 0.5)',
        borderColor: 'rgba(101, 187, 180, 0.9)'
      },
      {
        label: "ReLaXed",
        data: [10, 70, 50, 80, 80, 70],
        backgroundColor: 'rgba(111, 101, 187, 0.5)',
        borderColor: 'rgba(111, 101, 187, 0.9)'
      }
    ]
  },
  options: {
    width:350,
    height:350,
    devicePixelRatio: 3,
    legend: {
      position: 'bottom'
    }
  }
}
