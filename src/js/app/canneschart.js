import $ from 'jquery'
import {options} from '../store/data'

export default function CannesChart(id, dates, datas){
  let ctx = new Object;
  var number = 6;
  for(var i = 0; i<number; i++){
    ctx["n"+i] = $(".chart").get(i).getContext("2d");
  }
  // ctx.n1 = $(".chart").get(0).getContext("2d"),
  // ctx.n2 = $(".chart").get(1).getContext("2d"),
  // ctx.n3 = $(".chart").get(2).getContext("2d"),
  // ctx.n4 = $(".chart").get(3).getContext("2d"),
  // ctx.n5 = $(".chart").get(4).getContext("2d")


  let charts = new Object;

  chart.n1 = new Chart(ctx.n1,{
      type: 'line',
      data: datas[0],
      options: options[0]
  })

  chart.n2 = new Chart(ctx.n2,{
      type: 'line',
      data: datas[1],
      options: options[1]
  })

  chart.n1 = new Chart(ctx.n3,{
      type: 'line',
      data: datas[2],
      options: options[2]
  })

  chart.n2 = new Chart(ctx.n4,{
      type: 'line',
      data: datas[3],
      options: options[3]
  })

  chart.n1 = new Chart(ctx.n5,{
      type: 'line',
      data: datas[4],
      options: options[4]
  })

console.log(id);
}
