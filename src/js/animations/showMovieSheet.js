function showMovieSheet() {
  let movieSheet = document.querySelectorAll("section.movie-sheet")
  for (var i = 0; i < movieSheet.length; i++){
  	if(movieSheet[i].getAttribute('data-attribute-movie').trim() == this.getAttribute('data-attribute-name').trim()){
  		  movieSheet[i].style.transform = `translateX(0%)`
  	}
  }
}

function hideMovieSheet() {
  let movieSheet = document.querySelectorAll("section.movie-sheet")
  for (var i = 0; i < movieSheet.length; i++){
  	this.parentNode.style.transform = `translateX(100%)`
  }
}
export {showMovieSheet}
export {hideMovieSheet}
