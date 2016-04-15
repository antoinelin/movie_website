<?php
 


$target_year = $_GET["year"];
$title = 'nominees of '.$target_year;
$class = 'nominees';

$data = $pdo->query("SELECT * from movies WHERE year =".$target_year);
$data = $data->fetchAll();


// MOVIES
$movies = Array();
foreach ($data as $movie) {
	if(!in_array($movie->name, $movies)){
	$movies[] = $movie->name;
	}
}

// POSTERS
$posters = Array();
foreach ($data as $poster) {
  	$posters[$poster->name] = json_decode($poster->all_data)->poster_path;

  	$posters[$poster->name] = "https://image.tmdb.org/t/p/original".$posters[$poster->name];
}

// DURATION
$durations = Array();
foreach ($data as $duration) {
	$durations[$duration->name] = $duration->duration;
}

// SYNOPSIS
$synopsis = Array();
foreach ($data as $synos) {
	$synopsis[$synos->name] = $synos->synopsis;
  	$synopsis[$synos->name] = str_replace(['"','"'], "" , $synopsis[$synos->name]);

}

// ORIGIN
$origins = Array();
foreach ($data as $origin){
	if (!in_array($origin->country,$origins) && !isset($origins[$origin->name][0])) {
	  if($origin->country !== ""){
	    $origins[$origin->name] = $origin->country;
	  }
	}
}

// CATEGORY
$categories = Array();
foreach ($data as $category) {
	if (!in_array($category->name, $categories) && !isset($categories[$category->name])){
	  	$category->genre = str_replace(['[',']','"','"]'], "" , $category->genre);
	  	$category->genre = explode(',', $category->genre);
    	$categories[$category->name] = $category->genre[0];
	}
}

// DIRECTORS
$directors = Array();
foreach ($data as $director) {
	$director->directors = json_decode($director->directors);
	foreach ($director->directors as $cast){
  		if(isset($cast[0]) && count((array)$cast[0]) > 1 && !isset($directors[$director->name])){
  	  		$directors[$director->name] = $cast[0]->name;
  		}
	}
}


