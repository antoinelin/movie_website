import $ from 'jquery'
import { year } from '../actions/currentYear'
import { getDataFromDB } from '../dispatchers/database'
import { drawCharts } from '../actions/chartDrawer'


function chartsOf(year){
  //Get datas from API
  getDataFromDB(year)
  .then(response => {
    drawCharts(response)
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  })
}

chartsOf(year);
