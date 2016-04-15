<?php

$target_year = $_GET["year"];
$title = 'edition '.$target_year;
$class = 'edition';


$data = $pdo->query("SELECT * from cannes WHERE year =".$target_year);
$festival = $data->fetchAll();
$data = $pdo->query("SELECT * from movies WHERE year =".$target_year);
$movies = $data->fetchAll();

$stats = array();
$stats["duration"] = 0;
$stats["earning"] = 0;
$stats["budget_total"] = 0;
$count_duration= 0;
$count_earning= 0;
$stats["origins"] = array();
$stats["genres_total"] = array();


foreach ($movies as $movie) {
  //average duration
  if(isset($movie->duration)){
    $stats["duration"] += intval($movie->duration);
    $count_duration++;
  }
  //average earnings
  if(isset($movie->budget) && isset($movie->revenue) && $movie->revenue > 0 && $movie->budget > 0){
    $stats["earning"] += intval($movie->revenue) - intval($movie->budget);
    $stats["budget_total"] += intval($movie->budget);
    $count_earning++;
  }
  //total origins
  if(empty($movie->country)){
    $movie->country = "NC";
  }
  $stats["origins"][] =  $movie->country;

  //total genres
  if(isset($movie->genre)){
    $movie->genre = explode(",", $movie->genre );
    foreach ($movie->genre as $_genre) {
      $stats["genres_total"][]= $_genre;
    }
  }

}

if($count_earning > 0){
  $stats["earning_total"] =  round($stats["earning"]);
  $stats["earning"] =  round($stats["earning"]/$count_earning);
}

if($count_duration > 0){
  $stats["duration_total"] =  round($stats["duration"]);
  $stats["duration"] =  round($stats["duration"]/$count_duration);
}
$stats["origins"] = count(array_count_values($stats["origins"]));
$stats["genres_total"] = count(array_count_values($stats["genres_total"]));


//echo "<pre>"; print_r($stats); echo "<pre>";
//echo "<pre>"; print_r($festival); echo "<pre>";
