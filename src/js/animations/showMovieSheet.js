function showMovieSheet() {
  let movieSheet = document.querySelector("section.movie-sheet")
  movieSheet.style.transform = `translateX(0%)`
}
function hideMovieSheet() {
  let movieSheet = document.querySelector("section.movie-sheet")
  movieSheet.style.transform = `translateX(100%)`
}
export {showMovieSheet}
export {hideMovieSheet}
