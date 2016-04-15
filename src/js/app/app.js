import $ from 'jquery'
import '../jquery/appjquery.js'
import { year } from '../actions/currentYear'
import { getDataFromDB } from '../dispatchers/database'
import { drawNewChart } from '../actions/chartDrawer'
import { appleTvAgora } from '../views/appleTvAgora'
import { showMovieSheet } from '../animations/showMovieSheet'
import { hideMovieSheet } from '../animations/showMovieSheet'


function checkPatternPath(pattern, path){
	let regexpCheck = new RegExp(pattern)
	return regexpCheck.test(path)
}

//Check pathname to trigger callback
let hostname = window.location.pathname;
window.onload= ()=>{

  //Trigger animations on movies page
	if(checkPatternPath('winners', hostname)){
    
    let winnersPosters = document.querySelectorAll("section.winners-posters a")
    for(var i = 0; i < winnersPosters.length; i++){
      winnersPosters[i].addEventListener('click', showMovieSheet)
    }

    let goBackMovies = document.querySelectorAll("section.movie-sheet a.go-back")
    for(var i = 0; i < goBackMovies.length; i++){
      goBackMovies[i].addEventListener('click', hideMovieSheet)
    }
	}

  //Get year datas from database
  else if (checkPatternPath('[0-9]',hostname)) {
    function chartsOf(year){
      //Get datas from API
      getDataFromDB(year)
      .then(response => {
        drawNewChart(response)
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
    }
    chartsOf(year)
	}

  //Trigger tiles animations on years page
  else if (checkPatternPath('editions',hostname)) {
    //agora Apple Tv
    let years = document.querySelectorAll('.years .year')
    document.onmousemove = appleTvAgora
	}else {
		console.log('fail');
	}
};
