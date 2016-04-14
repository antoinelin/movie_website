import $ from 'jquery'
import Chart from 'chart.js'
import { getContexts, getTypes, graphics, options } from '../store/data'


let contexts = getContexts()
let types = getTypes()



function drawContext(context, type, datas, options){
  /*** Gradient background ***/
  let gradientBackground = context.createLinearGradient(0, 0, 0, 400)
  gradientBackground.addColorStop(0, 'rgba(65,205,110,0.5)')
  gradientBackground.addColorStop(1, 'rgba(65,205,110,0)')

  /*** Gradient line ***/
  let gradientLine = context.createLinearGradient(0, 0, 0, 500)
  gradientLine.addColorStop(0, '#86E897')
  gradientLine.addColorStop(1, '#4FCCCA')
  let param;

  switch (type) {
    case "bar-1":
        param = {
          type: "bar",
          data: {
            labels: datas.labels,
            datasets: [
              {
                  //DATASETS OPTIONS
                  label: "Average incomes",
                  backgroundColor: "#CC4F4F",
                  pointBorderColor: "rgba(74,74,74,0.8)",
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 3,

                  data: datas.datasets
              }
            ]
          },
          options: options
        }
      break;
      case "bar-2":
          param = {
            type: "bar",
            data: {
              labels: datas.labels,
              datasets: [
                {
                    //DATASETS OPTIONS
                    label: "Origins",
                    backgroundColor: "#CC4F4F",
                    pointBorderColor: "rgba(74,74,74,0.8)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,

                    data: datas.datasets
                }
              ]
            },
            options: options
          }
        break;
      case "bar-3":
          param = {
            type: "bar",
            data: {
              labels: datas.labels,
              datasets: [
                {
                    //DATASETS OPTIONS
                    label: "Gender",
                    backgroundColor: "#CC4F4F",
                    pointBorderColor: "rgba(74,74,74,0.8)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,

                    data: datas.datasets
                }
              ]
            },
            options: options
          }
        break;
      case "line":
          param = {
            type: type,
            data: {
              labels: datas.labels,
              datasets: [
                {
                    //DATASETS OPTIONS
                    label: "My First dataset",
                    backgroundColor: gradientBackground,
                    borderColor: gradientLine,
                    pointBorderColor: "rgba(74,74,74,0.8)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    tension: 0,

                    data: datas.datasets
                }
              ]
            },
            options: options
          }
        break;
    default:
      console.log("Yolo");
  }

let newChart = new Chart(context,param)
}



function drawAllContexts(contexts, types, datas, options){
  let datareceived = datas;

  let d = [];
  d[0] = {
    labels : [],
    datasets : [],
  };
  d[1] = {
    labels : [],
    datasets : [],
  };
  d[2] = {
    labels : [],
    datasets : [],
  };
  let budget = 0;


  // BUDGETS AND AVERAGE BUDGET
  for (let data in datareceived.budget){
    d[0].labels[d[0].labels.length] = data;
    d[0].datasets[d[0].datasets.length] = datareceived.budget[data][0];
  }

  for (let i = 0; i < d[0].datasets.length; i++) {
      budget += parseInt(d[0].datasets[i]);
  }

  if (d[0].datasets.length > 1) {
    budget = parseInt(budget/(d[0].datasets.length-1));
    budget = budget.toString().slice(0, -6);
  } else if(d[0].datasets.length == 1){
    budget = (d[0].datasets[0]*2)/1e6;
  } else {
    budget = 0;
  }
  d[0].datasets[d[0].datasets.length] = 0;


// ORIGINS
  for(let data in datareceived.origin){
    if (d[1].labels.indexOf(datareceived.origin[data][0]) == -1) {
      d[1].labels[d[1].labels.length] = datareceived.origin[data][0];
      d[1].datasets[d[1].datasets.length] = 1;
    } else {
      d[1].datasets[d[1].labels.indexOf(datareceived.origin[data][0])] += 1;
    }
  }
  d[1].datasets[d[1].datasets.length] = 0;
  let origin = d[1].datasets.length;



// GENDER
  for(let data in datareceived.genre){
    if(datareceived.genre[data].length > 1) {
      for(let i=0; i < datareceived.genre[data].length; i++){
        if (d[2].labels.indexOf(datareceived.genre[data][i]) == -1 && datareceived.genre[data][i] !== "Drama") {
          d[2].labels[d[2].labels.length] = datareceived.genre[data][i];
          d[2].datasets[d[2].datasets.length] = 1;
        } else {
          d[2].datasets[d[2].labels.indexOf(datareceived.genre[data][i])] += 1;
        }
      }
    } else{
      if (d[2].labels.indexOf(datareceived.genre[data][0]) == -1 && datareceived.genre[data][0] !== "Drama") {
        d[2].labels[d[2].labels.length] = datareceived.genre[data][0];
        d[2].datasets[d[2].datasets.length] = 1;
      } else {
        d[2].datasets[d[2].labels.indexOf(datareceived.genre[data][0])] += 1;
      }
    }
  }
  d[2].datasets[d[2].datasets.length] = 0;

  let gender = d[2].datasets.length;

  for (let i = 0; i < contexts.length; i++) {
    drawContext(contexts[i], types[i], d[i], options[i]);
  }

  console.log(d[1]);
}

export const drawCharts = function(datas){
  drawAllContexts(contexts, types, datas, options);
}
