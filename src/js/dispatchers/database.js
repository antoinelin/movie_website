import $ from 'jquery'
import { year } from '../actions/currentYear'
import 'whatwg-fetch'

export const getDataFromDB = (year) => (
  new Promise((resolve, reject) => {
    fetch('http://localhost:81/movie_website/__build__/php/controllers/fetcher.php?datas=' + year)
    .then(response => response.json())
    .then(response => resolve(response))
    .catch(err => reject(err));
  })
);
