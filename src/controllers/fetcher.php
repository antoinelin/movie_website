<?php
include '../config/database.php';

$dataToSend = Array();

if(isset($_GET['datas'])){
  $prepare = $db->prepare('SELECT * FROM movies WHERE year = :year');
  $prepare->bindValue('year',$_GET['datas'] );
  $execute = $prepare->execute();
  $datas = $prepare->fetchAll();

  $prepare = $db->prepare('SELECT * FROM cannes WHERE year = :year');
  $prepare->bindValue('year', $_GET['datas']);
  $execute = $prepare->execute();
  $dataCannes = $prepare->fetchAll();

  //YEAR
  $year = $dataCannes[0]->year;

  //WINNER
  $winner = (current((array)json_decode($dataCannes[0]->winners)));
  if(isset($winner->WINNERS)){
    for ($i = 0; $i < count($winner->WINNERS); $i++){
      print_r($winner->WINNERS[$i]->movie);
    }
  } else if(isset($winner->WINNER)){
    $winner = $winner->WINNER[0]->movie;
    print_r($winner);
  }
  //JURY
  $jury = [json_decode($dataCannes[0]->jury)->president, json_decode($dataCannes[0]->jury)->jury];

  //POSTER
  $poster = $dataCannes[0]->poster;

  //FACT
  $fact = $dataCannes[0]->facts;

  //EDITION
  $edition = $dataCannes[0]->edition;

  //MOVIES
  $movies = Array();
  foreach ($datas as $data) {
    if(!in_array(trim($data->name),$movies))
      $movies[] = trim($data->name);
  }

  //BUDGET
  $budget = Array();
  foreach ($datas as $data) {
    if(intval($data->budget) !== 0 && !in_array($data->budget,$budget)) {
      $budget[$data->name][] = $data->budget;
    }
  }

  //ORIGIN
  $origin = Array();
  foreach ($datas as $data){
    if (!in_array($data->country,$origin) && !isset($origin[$data->name][0])) {
      if($data->country !== ""){
        $origin[$data->name][] = $data->country;
      }
    }
  }

  //GENRE
  $genre = Array();
  foreach ($datas as $data){
    if (!in_array($data->name, $genre) && !isset($genre[$data->name])){
      $data->genre = str_replace(['[',']','"','"]'], "" , $data->genre);
      $data->genre = explode(',', $data->genre);
      if(!empty($data->genre[0])){
        $genre[$data->name] = $data->genre;
      }
    }
  }

  //DIRECTOR
  $directors = Array();
  foreach ($datas as $data) {
    $data->directors = json_decode($data->directors);
    foreach ($data->directors as $cast){
      if(isset($cast[0]) && count((array)$cast[0]) > 1 && !isset($directors[$data->name])){
        $directors[$data->name] = $cast[0]->name;
      }
    }
  }

  //POSTERS
  $posters = Array();
  foreach ($datas as $data){
    if(!isset($posters[$data->name])){
      $posters[$data->name] = json_decode($data->all_data)->backdrop_path;
    }
  }

  //SYNOPSIS
  $synopsis = Array();
  foreach ($datas as $data) {
    if(!isset($synopsis[$data->name])){
      $synopsis[$data->name] = $data->synopsis;
    }
  }

  //ACTORS
  $actors = Array();
  foreach ($datas as $data) {
    $data->directors->cast = json_decode($data->directors->cast);
    if((!isset($actors[$data->name]))){
      for($i = 0; $i < 3; $i++){
        if(isset($data->directors->cast[$i])){
          $actors[$data->name][] = $data->directors->cast[$i]->name;
        }
      }
    }
  }

  $dataToSend = [$year, $winner, $jury, $poster, $fact, $edition, $movies, $budget, $origin, $genre, $directors, $posters, $synopsis, $actors];
  // print_r(json_encode($dataToSend));

} else {
  echo "Error";
}
