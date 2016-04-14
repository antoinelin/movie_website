import { Chart } from 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.0.0/Chart.min.js'
import { getContexts, getTypes, options } from '../store/data'


let contexts = getContexts()
let types = getTypes()

function drawContext(context, type, datas, options){
  let newChart = new Chart(context,{
    type: type,
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: datas.id,
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,0.8)",
                highlightFill: "rgba(151,187,205,0.75)",
                highlightStroke: "rgba(151,187,205,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    },
    options: options
  })
}

function drawAllContexts(contexts, types, datas, options){
  for (let i = 0; i < contexts.length; i++) {
    drawContext(contexts[i], types[i], datas, options[i]);
  }
}

export const drawCharts = function(datas){
  drawAllContexts(contexts, types, datas, options);
}
