import $ from 'jquery'

//Getting canvas as context
export const getContexts = function(){
  let canvas = 3
  let contexts = new Array()

  for (var i = 0; i < canvas; i++) {
    var ctx = $('.chart')[i];
    contexts[i] = ctx.getContext("2d");
  }

  return contexts
}

//Define 3 charts types
export const getTypes = function(){
  let types = new Array()

  types[0] = 'bar-1';
  types[1] = 'bar-2';
  types[2] = 'bar-3';
  types[3] = 'line';

  return types
}

//Define graphics props for each chart

const contexts = getContexts()


const gradientBackground = contexts[1].createLinearGradient(0, 0, 0, 400)
gradientBackground.addColorStop(0, 'rgba(65,205,110,0.5)')
gradientBackground.addColorStop(1, 'rgba(65,205,110,0)')

const gradientLine = contexts[1].createLinearGradient(0, 0, 0, 500)
gradientLine.addColorStop(0, '#86E897')
gradientLine.addColorStop(1, '#4FCCCA')

//Define charts graphical options
export const options = [
  {
      scales: {
        xAxes: [
          {
            stacked: true,
            gridLines: {
              show: false
            }
          }
        ]
      },

      //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
      scaleBeginAtZero : false,

      //Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines : false,

      //String - Colour of the grid lines
      scaleGridLineColor : "rgba(23,233,122,.05)",

      //Number - Width of the grid lines
      scaleGridLineWidth : 1,

      //Boolean - Whether to show horizontal lines (except X axis)
      scaleShowVerticalLines: true,

      //Boolean - If there is a stroke on each bar
      barShowStroke : true,

      //Number - Pixel width of the bar stroke
      barStrokeWidth : 2,

      //Number - Spacing between each of the X value sets
      barValueSpacing : 5,

      //Number - Spacing between data sets within X values
      barDatasetSpacing : 1,

      scaleFontFamily: "Futura",
      tooltipFontFamily: "Futura",

      responsive: false,

      multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>",

      //String - A legend template
      legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
  },
  {
      //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
      scaleBeginAtZero : true,

      //Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines : false,

      //String - Colour of the grid lines
      scaleGridLineColor : "rgba(0,0,0,.05)",

      //Number - Width of the grid lines
      scaleGridLineWidth : 1,

      //Boolean - Whether to show horizontal lines (except X axis)
      scaleShowVerticalLines: true,

      //Boolean - If there is a stroke on each bar
      barShowStroke : true,

      //Number - Pixel width of the bar stroke
      barStrokeWidth : 2,

      //Number - Spacing between each of the X value sets
      barValueSpacing : 5,

      //Number - Spacing between data sets within X values
      barDatasetSpacing : 1,

      scaleFontFamily: "Futura",
      tooltipFontFamily: "Futura",

      responsive: false,

      //String - A legend template
      legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
  },
  {
      //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
      scaleBeginAtZero : true,

      //Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines : false,

      //String - Colour of the grid lines
      scaleGridLineColor : "rgba(0,0,0,.05)",

      //Number - Width of the grid lines
      scaleGridLineWidth : 1,

      //Boolean - Whether to show horizontal lines (except X axis)
      scaleShowVerticalLines: true,

      //Boolean - If there is a stroke on each bar
      barShowStroke : true,

      //Number - Pixel width of the bar stroke
      barStrokeWidth : 2,

      //Number - Spacing between each of the X value sets
      barValueSpacing : 5,

      //Number - Spacing between data sets within X values
      barDatasetSpacing : 1,

      scaleFontFamily: "Futura",
      tooltipFontFamily: "Futura",

      responsive: false,

      //String - A legend template
      legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
  }
]
