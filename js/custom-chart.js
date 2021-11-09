// Stacked Chart

var stackedOptions = {
    colors : ['#ED4C5C', '#ed4c5c80','#ed4c5c4d'],
    chart: {
      type: 'bar',
      stacked:true,
      toolbar: {
        show: false
      },
      height:500,

    },
    series: [
        {
          name: "PRODUCT A",
          data: [44, 55, 41, 67, 22, 43]
        },
        {
          name: "PRODUCT B",
          data: [13, 23, 20, 8, 13, 27]
        },
        {
          name: "PRODUCT C",
          data: [11, 17, 15, 15, 21, 14]
        }
      ],
    xaxis: {
      categories: ["5/12","7/12","9/12","11/12","13/12","15/12","17/12","19/12","21/12","23/12"]
    },
    legend: {
        position: "top",
        offsetX: 50
      }
  }
  
  var stackedChart = new ApexCharts(document.querySelector("#stackedcol-chart"), stackedOptions);
  stackedChart.render();