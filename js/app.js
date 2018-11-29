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

//click listener for line chart buttons
$('.line-chart-buttons').on('click',(e)=>{
  console.log(e.target);
  let $btn_clicked = $(e.target);
  if($btn_clicked.attr('class').includes('line-chart-btn')){
    $('.line-chart-buttons div').removeClass('line-chart-btn-highlighted');
    $btn_clicked.addClass('line-chart-btn-highlighted');
  }
});

//close notification bar
$('.notification-bar .close').on('click',(e)=>{
  $('.notification-bar').remove();
});

//send button
$('.send-button').on('click',(e)=>{
  let userName = $("input[class='message-user-item']");
  let message = $("textarea[class='message-user-item']");
  if(userName.val().length===0){
    console.log("username empty");
    $("<span class='error-msg'>Username can not be empty!</span>").insertAfter(userName);
  }
  if(message.val().length===0){
    console.log("msg empty");
    $("<span class='error-msg'>Message can not be empty!</span>").insertAfter(message);
  }
  if(userName.val().length > 0 && message.val().length > 0){
    console.log('msg sent');
    $("<span class='info-msg'>Message sent!</span>").insertBefore('.message-user-container .section-title');
    setTimeout(function(){
      $('.info-msg').remove();
      userName.val("");
      message.val("");
    },2000);

  }
});
// clear error messages
$('.message-user-item').on('focus',(e)=>{
  $('.error-msg').remove();
});
