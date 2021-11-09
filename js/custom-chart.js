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

  // Radial Chart

  var radialOptions = {
    colors : ['#ED4C5C', '#FFC700','#286CD1'],
    series:[90, 50, 30],
    chart: {
      type: 'radialBar',
      toolbar: {
        show: false
      },
      height:500,

    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px"
          },
          value: {
            fontSize: "16px"
          },
          total: {
            show: true,
            label: "Comments",
            formatter: function(w) {
              return "80%";
            }
          }
        }
      }
    },
    labels: ["Apples", "Oranges", "Bananas", "Berries"],
  }
  
  var radialChart = new ApexCharts(document.querySelector("#radial-chart"), radialOptions);
  radialChart.render();

  // donut Chart

  var donutOptions = {
    colors : ['#FFC700', '#243E8B', '#D3E5FF','#ED4C5C',],
    series:[43, 8 , 24 , 24 ],
    chart: {
      type: 'donut',
      height:500,

    },
    labels: ["Comments", "Replies", "Shares"],
  }
  
  var donutChart = new ApexCharts(document.querySelector("#donut-chart"), donutOptions);
  donutChart.render();

  // Horizontal Bar Chart

  var horizonOptions = {
    series: [
      {
        name: "basic",
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }
    ],
    chart: {
      type: "bar",
      height: 500,
      toolbar: {
        show: false
      },
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany"
      ]
    }
  }
  
  var horizonBarChart = new ApexCharts(document.querySelector("#horizonbar-chart"), horizonOptions);
  horizonBarChart.render();

  // Donut Chart 2

  var donut2Options = {
    colors : ['#F48020', '#20A0FF', '#FFC700',],
    series:[70, 13, 17 ],
    chart: {
      type: 'donut',
      height:500,

    },
    labels: ["Food 70%", "Rent 13", "Others 17%"],
  }
  
  var donutChart2 = new ApexCharts(document.querySelector("#donut-chart-2"), donut2Options);
  donutChart2.render();

  // Radar Chart

  var radarOptions = {
    series: [
      {
        name: "Series Blue",
        data: [80, 50, 30, 40, 100, 20]
      },
      {
        name: "Series Green",
        data: [20, 30, 40, 80, 20, 80]
      },
      {
        name: "Series Orange",
        data: [44, 76, 78, 13, 43, 10]
      }
    ],
    chart: {
      height: 500,
      type: "radar",
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1
      },
      toolbar: {
        show: false
      }
    },
    title: {
      text: "Radar Chart - Multi Series"
    },
    stroke: {
      width: 0
    },
    fill: {
      opacity: .8
    },
    markers: {
      size: 0
    },
    xaxis: {
      categories: ["2011", "2012", "2013", "2014", "2015", "2016"]
    }
  }
  
  var radarChart = new ApexCharts(document.querySelector("#radar-chart"), radarOptions);
  radarChart.render();

  // Bar Chart

  var horizonOptions = {
    series: [
      {
        name: "basic",
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }
    ],
    chart: {
      type: "bar",
      height: 500,
      toolbar: {
        show: false
      },
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany"
      ]
    }
  }
  
  var barChart = new ApexCharts(document.querySelector("#bar-chart"), horizonOptions);
  barChart.render();



