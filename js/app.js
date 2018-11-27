var lineChart = new Chart($('.line-chart canvas'), {
  type: 'line',
  data: {
    datasets: [
      {
        backgroundColor: 'rgba(226, 227, 244, 0.7)',
        borderColor: 'rgba(116,120,186,1)',
        pointBackgroundColor: 'rgba(255,255,255,1)',
        pointBorderColor: 'rgba(116,120,186,1)',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointStyle: 'circle',
        borderWidth: 1,
        data: [
          210,
          320,
          250,
          200,
          220,
          420,
          280,
          220,
          400,
          300,
          200
        ]
      }
    ],
    labels: [
      'Wed',
      'Thu',
      'Fri',
      'Sat',
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat'
    ]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    elements: {
      line: {
        tension: 0, // disables bezier curves
      }
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            stepSize: 100
          }
        }
      ]
    }
  }
});

//Bar chart
var barChart = new Chart($('.bar-chart canvas'), {
  type: 'bar',
  data: {
    datasets: [
      {
        backgroundColor: 'rgba(116, 120, 186,1.0)',
        data: [
          50,
          100,
          150,
          100,
          250,
          200,
          70
        ]
      }
    ],
    labels: [
      'S',
      'M',
      'T',
      'W',
      'T',
      'F',
      'S'
    ]
  },
  options: {
    legend: {
      display: false
    },
    elements: {
      line: {
        tension: 0, // disables bezier curves
      }
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            stepSize: 50
          }
        }
      ]
    }
  }
});

//Doughnut Chart
var doughnutChart = new Chart($(".doughnut-chart canvas"), {
  type: 'doughnut',
  data: {
    datasets: [
      {
        backgroundColor: [

          'rgba(122, 201, 149,1)',
          'rgba(112, 177, 190,1)',

          'rgba(116, 120, 186,1.0)'

        ],

        data: [15, 15, 70]
      }
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ['Tablets', 'Phones', 'Desktop']
  },
  options: {
    legend: {
      display: true,
      position: 'right',
      labels:{
        boxWidth:20,
        fontSize:15
      }
    }


  }
});
