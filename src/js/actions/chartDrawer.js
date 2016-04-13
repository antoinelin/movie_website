import { getContexts } from '../store/data'

let contexts = getContexts()

export const drawCharts = function(datas){
  console.log(contexts);
  console.log(datas);
}
