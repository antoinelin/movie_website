<?php
 
$title = 'nominees';

// $target_year = $_GET["year"];

$data = $pdo->query("SELECT * from movies WHERE year = 1987");
$data = $data->fetchAll();


// MOVIES
$movies = Array();
foreach ($data as $movie) {
	$movies[] = $movie->name;
}

// POSTERS
$posters = Array();
foreach ($data as $poster) {
  	$posters[$poster->name] = json_decode($poster->all_data)->backdrop_path;
  	echo '<pre>';
  	print_r($posters);
  	echo '</pre>';
  	// $poster = curl_call("http://api.themoviedb.org/3/movie/818/backdrop_path?api_key=862563071a7a140aeeb60ccd168442a2");
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
	  if(!empty($category->genre[0])){
	    $categories[$category->name] = $category->genre[0];
	  }
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

// ACTORS
$actors = Array();
foreach ($data as $actor) {
	// echo '<pre>';
	// print_r(json_decode(json_encode($actor->directors)));
	// echo '</pre>';
	// $actors->directors->cast = json_encode($actors->directors->cast);
 //    if((!isset($actors[$data->name]))){
 //      for($i = 0; $i < 3; $i++){
 //        if(isset($data->directors->cast[$i])){
 //          $actors[$data->name][] = $data->directors->cast[$i]->name;
 //        }
 //      }
 //    }
}



// echo "<pre>"; print_r($categories); echo "</pre>";
