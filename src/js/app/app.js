import $ from 'jquery'
import '../jquery/appjquery.js'
import { year } from '../actions/currentYear'
import { getDataFromDB } from '../dispatchers/database'
import { drawCharts } from '../actions/chartDrawer'

import { appleTvAgora } from '../views/appleTvAgora'
import { showMovieSheet } from '../animations/showMovieSheet'
import { hideMovieSheet } from '../animations/showMovieSheet'


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

// //agora Apple Tv
// let years = document.querySelectorAll('.years .year')
// document.onmousemove = appleTvAgora

let hostname = window.location.hostname;
console.log('hostname');

let winnersPosters = document.querySelector("section.winners-posters a")
winnersPosters.addEventListener('click', showMovieSheet)

let goBackMovies = document.querySelector("section.movie-sheet a.go-back")
goBackMovies.addEventListener('click', hideMovieSheet)
