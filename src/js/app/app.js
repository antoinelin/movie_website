import $ from 'jquery'
import '../jquery/appjquery.js'
import { year } from '../actions/currentYear'
import { getDataFromDB } from '../dispatchers/database'
// import { drawCharts } from '../actions/chartDrawer'
import { appleTvAgora } from '../views/appleTvAgora'
import { showMovieSheet } from '../animations/showMovieSheet'


function chartsOf(year){
  //Get datas from API
  getDataFromDB(year)
  .then(response => {
    drawCharts(response[0])
    // console.log(response[0]);
  })
  .catch(err => {
    console.log(err);
  })
}

chartsOf(year);


//agora Apple Tv
let years = document.querySelectorAll('.years .year')
if (years) {
  document.onmousemove = appleTvAgora
}
